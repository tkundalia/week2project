

  
    function giveItBackLater (value, callback) {
      
        setTimeout (() => {
            callback (value)
        }, 80)
       
         
    }
    
   
   
    promiseToGiveItBackLater = (value) => {

        return new Promise (resolve =>{
            resolve (value)

        })
            
    }

     addSomePromises=(somePromise) => {
        promisToGiveItBackLater("foo")
        
        .then(console.log("fooofoofoo"))
        .catch(console.log("bar"))
    }


    

    module.exports = {
        giveItBackLater,
        addSomePromises,
        promiseToGiveItBackLater
        }
   