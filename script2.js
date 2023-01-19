// c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new 
//   array of only those movies in the input array with a rating of "PG". You may assume the input
//   array is full of Movie instances. The returned array need not be full.

                   class movie{
            constructor(title,studio,rating){
                this.title=title
                this.studio=studio
                this.rating=rating
              

            }
            getPG(arr){
                let result=[]
                for(var i=0;i<arr.length;i++){
                if(arr[i].rating=="PG"){
                    result.push(arr[i])
                    
                }
            }
            return result
            }
        }
        var movie1=new movie("Endgame","Marvel","PG")
        var movie2=new movie("infinity war","Marvel","PG13")
        var movie3=new movie("batman","Warner bros","PG")
        var movie4=new movie("Venom","sony","PG56")
        var movie5=new movie("Deadpool","Fox star","PG")
        let arr=[movie1,movie2,movie3,movie4,movie5]
        console.log(movie1.getPG(arr))

        // OUTPUT
         
        // movie {title: 'Endgame', studio: 'Marvel', rating: 'PG'}
        // movie {title: 'batman', studio: 'Warner bros', rating: 'PG'}
        // movie {title: 'Deadpool', studio: 'Fox star', rating: 'PG'" }