


class ShoppingCart {
    constructor (itemNames, quantitys, prices) {
        this.items = []
        
    }
    
    getItems(){
        
        return this.items
    }

    addItem(itemName, quantity, price){
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }

    clear(){
        this.items = []
    }

    total(){
        return this.items.reduce((totalperunit, item) => totalperunit + (item.pricePerUnit*item.quantity), 0)
    }

}


module.exports = ShoppingCart