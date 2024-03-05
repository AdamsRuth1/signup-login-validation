const quotes = [
        { 
            text: "Though defeat may sting, it's merely a moment, not your destiny.Keep your heads up, South Africa, i hope you learn not to underestimate Nigerians.🙂", 
            author: "", 
        },
        { 
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts. It's just a game don't take it too personal", 
            author: "Winston Churchill", 
        },
        { 
            text: "Learn to appreciate winners so you guys can be winners sooner than expected. Celebrate Nigeria grace 😂.", 
            author: "", 
        },
        { 
            text: "So sad how you guys used your 24hrs electricity to watch super eagles enter the FINALS 😭", 
            author: "", 
        },
        { 
            text: "Eating jollof made with Cameroon pepper  and Antelope meat while listening to Amapiano", 
            author: "", 
        },
       
        { 
            text: "Ghanaians didn't cedis coming honestly 😂.", 
            author: "", 
        },
        { 
            text: "Nigerian's please do the cooking small small😭.", 
            author: "", 
        },
        { 
            text: "But why will you people call Nigeria generator republic 😭?.", 
            author: "", 
        },
        { 
            text: "When you reach the end of your rope, tie a knot in it and hang on.", 
            author: "", 
        },
        // Add more quotes here
    ]
    


let quoteView = document.getElementById("quote")
let authorView = document.getElementById("author")

document.getElementById("generator").onclick =  function(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    quoteView.innerHTML = '"' + randomQuote.text + '"';
    authorView.innerHTML = '' + randomQuote.author + '';
   
};
    