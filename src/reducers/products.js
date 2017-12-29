
var initialState = [
    {
        id: 1,
        name: "IPhone 6 Plus",
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "Samsung galaxy s7",
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/8/29/636396217066191623_1.jpg',
        description: 'Sản phẩm của Samsung',
        price: 800,
        inventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: "Oppo F5",
        image: 'https://assets.gadgets360cdn.com/shop/assets/products/oppo-f5-4-gb-ram-32-gb_1510640297.jpeg?downsize=390:*&output-quality=80&output-format=jpg',
        description: 'Sản phẩm của Oppo',
        price: 300,
        inventory: 10,
        rating: 3
    }
]
let products = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
export default products;