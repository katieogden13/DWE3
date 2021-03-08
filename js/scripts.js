//var quotes = 
//['"We don\'t make mistakes, just happy little accidents" - Bob Ross', 
//'"Creativity takes courage" - Henry Matisse'
//]

var quote1 = {
    quote:'"We don\'t make mistakes, just happy little accidents"',
    author: "Bob Ross",
    tags: ["painting", "mistakes"],
    color: "#0A3410",
    display: function(){
        var quoteString = "";
        quoteString += "<div style='background:" + this.color + "'>";
        quoteString += "<p>" + this.quote + "</p>";
        quoteString += "<cite>" + this.author + "</cite>";
        quoteString += "</div>";
        $("body").prepend(quoteString)
    }
}

var quote2 = {
    quote:'"Creativity takes courage"',
    author: "Henry Matisse",
    tags: ["creativity", "courage"],
    color: "#ff9966",
    display: function(){
        var quoteString = "";
        quoteString += "<div style='background:" + this.color + "'>";
        quoteString += "<p>" + this.quote + "</p>";
        quoteString += "<cite>" + this.author + "</cite>";
        quoteString += "</div>";
        $("body").prepend(quoteString)
    }
}

quote1.display();

quote2.display();

console.log(quote1.quote) 

//var quoteString = "";
//quotes.forEach(function(quote){ 
//    
//    quoteString += "<p>" + quote + "</p>"
//    
//    console.log(quoteString);
//    
//})
//
//$("body").html(quoteString)







