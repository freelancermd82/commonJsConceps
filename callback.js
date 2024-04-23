function greeting(greetingHandler){
    greetingHandler()
}
function greetingHandler(){
    console.log('Good morning');
}
greeting(greetingHandler);
