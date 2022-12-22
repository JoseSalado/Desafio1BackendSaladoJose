class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts = () =>{
        return this.products
    }
    addProducts = (title , description, price, thumbnail, code, stock=20)=>{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if(this.products.length === 0){
            product.id = 0
        }else{
            product.id = this.products.length
        }
        let codes = this.products.map(product => product.code)
        if (codes.includes(code)) {
            console.log('El código ya ha sido utilizado')
        }else{ 
            this.products.push(product)
        } 

    }
    getProductsById = (id) =>{
        if(this.products[id]){
        return this.products[id]
        }else{
            console.log('no encontrado')
        }
    }
}
let instancia = new ProductManager()
console.log(instancia.addProducts('Ravioles', 'Ravioles de ricota y queso', 500, 'not image', '123abc', 25))

console.log(instancia.getProductsById(0))