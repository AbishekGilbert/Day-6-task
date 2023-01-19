// b) The constructor for the class Movie will set the class property rating to "PG" as default 
//    when no rating is provided.
 
class movie{
    constructor(title,studio,rating){
this.title=title
this.studio=studio
this.rating=rating

if(rating== undefined){
this.rating="PG"
}
else{
this.rating=rating
}
}
}
var abi=new movie("Endgame","Marvel")
console.log(abi)

// OUTPUT
// rating: "PG"
// studio: "Marvel"
// title: "Endgame"