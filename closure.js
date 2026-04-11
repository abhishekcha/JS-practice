function parent(){
    let a=12;
    function child(){
        let b=45;
        console.log(a);
        console.log(b);        
    }
    child();
}
let call=parent();
