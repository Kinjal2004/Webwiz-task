
const worker = new Worker('js/worker.js')
//applied worker to run the clock and other buttons while changeheading was running


//arr contains heading elements
const arr = ["Enchanting", "Smothered", "Joviant", "Enigmatic", "Enlightening","Hindsighted"];
k=0;



function changebg() {
    a = Math.floor((Math.random()) * 256);
    b = Math.floor((Math.random()) * 256);
    c = Math.floor((Math.random()) * 256);
    d = Math.random();

    rgba = "rgba" + "(" + a + "," + b + "," + c + ")";
    //rgba1 created to maintain visibility of body
    rgba1=  "rgba" + "(" + (255-a) + "," + (255-b) + "," + (255-c)+ ")";
    document.body.style.backgroundColor = rgba;
    document.body.style.color=rgba1;
   
}
function Greet() {
   document.getElementById("p1").innerHTML="<br>Welcome!";
    
}
function Changeheading() {
   
    if(k==arr.length-1){
        k=0;
    }
    worker.postMessage('hello')
    worker.onmessage = function(){
        document.getElementById("h2").innerHTML = arr[k];
    }
    k++;
}
//time
let time = document.getElementById("time1");
setInterval(() => {
    let d = new Date();
    date1.innerHTML= d.toDateString();
    time1.innerHTML = d.toLocaleTimeString();
}, 1000);
