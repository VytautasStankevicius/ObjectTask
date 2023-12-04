class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

    getProductProfile(){
        return[
            this.name,
            this.price,
            this.year, 
        ]
    }

    addProductInfo(productData){
        const infoDisplay = document.querySelector('.infoHolder')
        const listHolder = document.createElement('ul')

        for(const data of productData){
            const dataHolder = document.createElement('li')
            dataHolder.textContent = data
            listHolder.appendChild(dataHolder)
        }
        infoDisplay.appendChild(listHolder)
    }
}

module.exports ={
    Product
}

