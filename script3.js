// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//    the studio “Eon Productions”, and the rating “PG­13” 
 
            class movie{
            constructor(title,studio,rating){
            this.title=title
            this.studio=studio
            this.rating=rating
              

            }
        }
        var sha=new movie("casino royale","EON Production","PG13")
        console.log(sha)

        // OUTPUT
        // movie
        // rating: "PG13"
        // studio: "EON Production"
        // title: "casino royale"