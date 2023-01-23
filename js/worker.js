onmessage = function(message){
    var now = new Date()
    const a = now.getTime()
    while(a+5000>now.getTime()){
        now = new Date()
    }
    postMessage(true)
}