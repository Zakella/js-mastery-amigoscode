const brandProp = "BRAND"

const calculator = (brand, price) => ({

    [brandProp.toUpperCase()] : brand,
    price,
    getDiscount () {return this.price - 10}

})

const result = calculator("nike", 100)
console.log(result);
console.log(`discount is  ${result.getDiscount()}`);