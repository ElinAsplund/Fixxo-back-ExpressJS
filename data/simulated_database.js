const products = [
{
    "id": 1,
    "tag": "featured",
    "name": "Mordern Black Blouse",
    "category": "Fashion",
    "price": "35",
    "imageName": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 2,
    "tag": "special",
    "name": "Happy Sweatshirt",
    "category": "Basic",
    "price": 25,
    "imageName": "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 3,
    "tag": "featured",
    "name": "Colorful Dress",
    "category": "Fashion",
    "price": "38",
    "imageName": "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 4,
    "tag": "special-two",
    "name": "Jeans Jacket",
    "category": "Jackets",
    "price": 45,
    "imageName": "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 5,
    "tag": "the-remains",
    "name": "Pattern Dress",
    "category": "Fashion",
    "price": 40,
    "imageName": "https://images.unsplash.com/photo-1602414336756-1d5b26bbbdf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 6,
    "tag": "featured",
    "name": "Knitted Jumper",
    "category": "Fashion",
    "price": 35,
    "imageName": "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 7,
    "tag": "special-two",
    "name": "Tank Top",
    "category": "Basic",
    "price": 20,
    "imageName": "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 8,
    "tag": "featured",
    "name": "Fine Hoodie",
    "category": "Casual",
    "price": 25,
    "imageName": "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 9,
    "tag": "the-remains",
    "name": "Nice Hat",
    "category": "Accessories",
    "price": 15,
    "imageName": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 10,
    "tag": "the-remains",
    "name": "Extreme Pattern Shirt",
    "category": "Fashion",
    "price": 35,
    "imageName": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoaXJ0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 11,
    "tag": "featured",
    "name": "Yellow Two Piece Set",
    "category": "Casual",
    "price": 40,
    "imageName": "https://img.ltwebstatic.com/images3_pi/2021/04/28/1619582567d38c8f7365fcdaf04f591c7e6f3858e0.webp"
},
{
    "id": 12,
    "tag": "the-remains",
    "name": "Silky Jacket",
    "category": "Jackets",
    "price": 28,
    "imageName": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
},
{
    "id": 13,
    "tag": "the-remains",
    "name": "T-shirt with Print",
    "category": "T-Shirts",
    "price": 18,
    "imageName": "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
    "id": 14,
    "tag": "featured",
    "name": "Pink Pants",
    "category": "Pants",
    "price": 18,
    "imageName": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
    "id": 15,
    "tag": "special",
    "name": "Jeans Dress",
    "category": "Dresses",
    "price": 20,
    "imageName": "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
    "id": 16,
    "tag": "featured",
    "name": "Leather Bag",
    "category": "Bags",
    "price": 27,
    "imageName": "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
    "id": 17,
    "tag": "special-two",
    "name": "White Set",
    "category": "Sets",
    "price": 23,
    "imageName": "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
    "id": 18,
    "tag": "the-remains",
    "name": "Striped Trousers",
    "category": "Pants",
    "price": 24,
    "imageName": "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
},
{
    "id": 19,
    "tag": "the-remains",
    "name": "Men's Down Jacket",
    "category": "Jackets",
    "price": 45,
    "imageName": "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
},
{
    "id": 20,
    "tag": "the-remains",
    "name": "Women's Down Jacket",
    "category": "Jackets",
    "price": 48,
    "imageName": "https://images.unsplash.com/photo-1616088728028-a37e34f504c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 21,
    "tag": "special",
    "name": "Casual Dress",
    "category": "Dresses",
    "price": 28,
    "imageName": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
},
{
    "id": 22,
    "tag": "special-two",
    "name": "Blue Basic T-shirt",
    "category": "Basic",
    "price": 15,
    "imageName": "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 23,
    "tag": "the-remains",
    "name": "Sun Hat",
    "category": "Hats",
    "price": 18,
    "imageName": "https://images.unsplash.com/photo-1601980265524-04468b355ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"
},
{
    "id": 24,
    "tag": "special",
    "name": "T-Shirt Skeletal",
    "category": "T-Shirts",
    "price": 22,
    "imageName": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGFwcGFyZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "id": 25,
    "tag": "featured",
    "name": "Nike Shoes",
    "category": "Shoes",
    "price": 36,
    "imageName": "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}
];

module.exports = products