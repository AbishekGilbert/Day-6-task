// a)Write a constructor for the class Movie, which takes a String representing the title of the movie,
//   a String representing the studio, and a String representing the rating as its arguments,
//   and sets the respective class properties to these values.

           class movie{
            constructor(title,studio,rating){
            this.title=title
            this.studio=studio
            this.rating=rating
              

            }
        }
        var abi=new movie("Endgame","Marvel","PG")
        console.log(abi)

        // output 
        // rating: "PG"
        // studio: "Marvel"
        // title: "Endgame"

