//var quotes = 
//['"We don\'t make mistakes, just happy little accidents" - Bob Ross', 
//'"Creativity takes courage" - Henry Matisse'
//]

function Image(title, url, tags, author) {
    this.title = title;
    this.url = "images/" + url;
    this.author = author;
    this.tags = tags;
    
    console.log(this.tags)
    
//    this.color = color;
    this.display = function(){
        
        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag);
        })
        
//        container.css("background", this.color)
        container.addClass("image")
        
        var imageString = "";
        imageString += "<img src='" + this.url + "'>";
        imageString += "<cite>" + this.author + "</cite>";
        
        console.log(imageString)
        
        container.html(imageString)
        $(".images").prepend(container)
    }
}

//var quotes = [
//    new Quote('"We don\'t make mistakes, just happy little accidents"', "Bob Ross", ["painting", "mistakes"], "#0A3410"),
//
//    new Quote('"Creativity takes courage"', "Henry Matisse", ["creativity", "painting"], "#ff9966")
//    ]


var Images = [
    new Image("cliffs", "cliffs.jpg", ["cliffs", "water", "blue", "orange", "outdoors"], "Katie Ogden"),
    new Image("leaves", "greenery.jpg", ["leaves", "forest", "green", "outdoors"], "Katie Ogden"),
    new Image("fall", "fall.jpg", ["yellow", "orange", "water", "blue", "trees", "cliffs", "outdoors"], "Katie Ogden"),
    new Image("rocks", "rocks.jpg", ["inukshuk", "rocks", "earth", "yellow", "outdoors"], "Katie Ogden"),
    new Image("snowy mountain", "snowymountain.jpg", ["mountain", "snow", "white", "outdoors"], "Katie Ogden"),
    new Image("mountain in sun", "sunnymountain.jpg", ["sunny", "mountain", "summer", "lake", "blue", "white", "outdoors"], "Katie Ogden"),
    new Image("tractor", "tractor.jpg", ["tractor", "field", "red", "yellow", "outdoors"], "Katie Ogden"),
    new Image("waterfall", "waterfall.jpg", ["waterfall", "blue", "cliffs", "outdoors"], "Katie Ogden"),
    new Image("lake view", "waterview.jpg", ["lake", "water", "wood", "fall", "outdoors"], "Katie Ogden"),
    new Image("wood and mountains", "wood.jpg", ["wood", "mountain", "water", "blue", "outdoors"], "Katie Ogden")
    ]
   
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







