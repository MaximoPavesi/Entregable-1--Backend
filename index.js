class ProductManager {

constructor (){
    this.prod = []    
}
getProduct = () => {
    return this.prod
}
addProduct= (title,description,price,image,code,stock) => {
    let codeFind = this.prod.find(producto => producto.code == code) 

    if (codeFind) {
        let  x = Math.floor(Math.random()*100);
        let id = code + x
            
       return this.prod.push(
        {
            title:title,
            description:description,
            price:price,
            image:image,
            code:id,
            stock:stock
        }
        )
    }
    else {
      return this.prod.push(
        {
            title:title,
            description:description,
            price:price,
            image:image,
            code:code,
            stock:stock
        }
        )
    
    }
       
}
getProducById = (code) => {
    let codeFind = this.prod.find(prod => prod.code == code)
    if (this.prod.length == 0){
        return console.log('El carrito no tiene nada, crea un producto usando el metodo addProduct')
    }
    else if (codeFind){
        return codeFind
    }
    else{
        return console.log(`${code} : este codigo no exciste`)
    }
}

}
let producto = new ProductManager()
producto.addProduct('Nike Phantom GT','Botin',10000,'Sin imagen','b1',20)
producto.addProduct('Adidas Predator','Botin',15000,'Sin imagen','b2',20) 
console.log(producto.getProduct())
