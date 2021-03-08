//var quotes = 
//['"We don\'t make mistakes, just happy little accidents" - Bob Ross', 
//'"Creativity takes courage" - Henry Matisse'
//]

function Image(title, url, author, tags) {
    this.title = title;
    this.url = "images/" + url;
    this.author = author;
    this.tags = tags;
//    this.color = color;
    this.display = function(){
        
        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag);
        })
        
        container.css("background", this.color)
        container.addClass("images")
        
        var imageString = "";
        imageString += "<img src='" + "images/car.jpg" + "</img>";
        imageString += "<cite>" + this.author + "</cite>";
        
        container.html(imageString)
        $(".images").prepend(container)
    }
}

//var quotes = [
//    new Quote('"We don\'t make mistakes, just happy little accidents"', "Bob Ross", ["painting", "mistakes"], "#0A3410"),
//
//    new Quote('"Creativity takes courage"', "Henry Matisse", ["creativity", "painting"], "#ff9966")
//    ]


var Images = 
    new Image("cliffs", "cliffs.jpg", ["cliffs", "water", "blue", "orange"]),
    new Image("leaves", "greenery.jpg", ["leaves", "forest", "green"]),
    new Image("fall", "fall.jpg", ["yellow", "orange", "water", "blue", "trees"]),
    new Image("rocks", "rocks.jpg", ["inukshuk", "rocks", "earth", "yellow"]),
    new Image("snowy mountain", "snowymountain.jpg", ["mountain", "snow", "white"]),
    new Image("mountain in sun", "sunnymountain.jpg", ["sunny", "mountain", "summer", "lake", "blue", "white"]),
    new Image("tractor", "tractor.jpg", ["tractor", "field", "red", "yellow"]),
    new Image("waterfall", "waterfall.jpg", ["waterfall", "blue", "cliff"]),
    new Image("lake view", "waterview.jpg", ["lake", "water", "wood", "fall"]),
    new Image("wood and mountains", "wood.jpg", ["wood", "mountain", "water", "blue"])
    
   
// global taglist
var tagList = []
Images.forEach(function(image){
    image.display();
    image.tags.forEach(function(tag){
        // check to see if tag has been added to taglist
        if(!tagList.includes(tag)) {
            // if it isn't added, add it
           tagList.push(tag); 
            // and also make a button for it
            $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
        }
    })
}) 

 console.log(tagList)

$(".filter").on("click", function(){
    var tag = $(this).attr("id");
    console.log(tag)
    
    $("." + tag).fadeIn();
    $(".image").not("." + tag).hide();
    
    $(".filter").removeClass("active")
    $(this).addClass("active")
})







