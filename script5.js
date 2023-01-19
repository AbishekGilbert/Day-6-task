// 4)write a class to calculate the uber price.
    
          class uber{
          constructor(kilometer){
          this.kilometer=kilometer,
          this.price=kilometer*20
          }
         getPrice(){
        console.log(`Price is ${this.price}`)
        var discount=25*this.price/100
        console.log(`discount is ${discount}`)
        var discountprice=this.price-discount
        return `discount price is ${discountprice}`
        }
       }
        var abi= new uber(3)
        console.log(abi.getPrice());

        //OUTPUT
        // Price is 60
        // discount is 15
        // discount price is 45