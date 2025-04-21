const Quotes = [
    "I have not failed. I've just found 10,000 ways that won't work",
    "Believe you can and you're halfway there",
    "It always seems impossible until it's done",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "You miss 100% of the shots you don't take",
    "I have not failed. I've just found 10,000 ways that won't work",
    "You don't have to be great to start, but you have to start to be great"
];
let startTime,endTime;


function startTest(){
    startTime = new Date().getTime();
    index = Math.floor(Math.random() * Quotes.length);
    document.getElementById("quotes").innerText=Quotes[index];
    document.getElementById("input").value="";
    document.getElementById("result").innerText="";
};

document.getElementById("input").addEventListener('input',function(){
    let input = this.value.toLowerCase();
    let Currentquote = document.getElementById("quotes").innerText.toLowerCase();

    if(input === Currentquote){
        endTime = new Date().getTime();
        let Totaltime = (endTime - startTime)/1000;
        wordCount = Currentquote.split(' ').length;
        speed = Math.round((wordCount/Totaltime) * 60);
        document.getElementById("result").innerText = `Speed is ${speed} words per minute.`
        }
});

startTest()