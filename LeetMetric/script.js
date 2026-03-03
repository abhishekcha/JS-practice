document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy_progress");
  const mediumProgressCircle = document.querySelector(".medium_progress");
  const hardProgressCircle = document.querySelector(".hard_progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.querySelector(".stats-card");

  //return true or false if the username is valid
  function validateUsername(username) {
    if(username.trim()===""){
        alert("Username cannot be empty");
        return false;
    }
    if (username.length < 2 || username.length > 20) {
      return false;
    }
    const validChars = /^[a-zA-Z0-9_]+$/;
    return validChars.test(username);
  }

  async function fetchUserDetails(username) {
    try {
        
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
      const targetUrl = 'https://leetcode.com/graphql/';
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const graphql = JSON.stringify({
        query: "\n query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    username\n    submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n ",
        variables: { username: `${username}` }
      })
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };
      const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), requestOptions);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("logging data", data);
      
      if (data.data && data.data.matchedUser) {
        const user = data.data.matchedUser;
        const stats = user.submitStatsGlobal.acSubmissionNum;
        easyLabel.textContent = stats.find(s => s.difficulty === "Easy")?.count || 0;
        mediumLabel.textContent = stats.find(s => s.difficulty === "Medium")?.count || 0;
        hardLabel.textContent = stats.find(s => s.difficulty === "Hard")?.count || 0;
      } else if (data.errors) {
        throw new Error(data.errors[0]?.message || "User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      statsContainer.innerHTML = `<p>No Data Found - ${error.message}</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  searchButton.addEventListener('click', function () {
    const username = usernameInput.value;
    console.log("logging username", username);
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
});
