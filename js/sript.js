// Список товаров без внешних картинок
const products = [
    {
        id: 1,
        name: "Оверсайз Футболка",
        price: 2500,
        icon: "👕",
        color: "#e8f4f8"
    },
    {
        id: 2,
        name: "Джинсы Wide Leg",
        price: 4500,
        icon: "👖",
        color: "#eef2f5"
    },
    {
        id: 3,
        name: "Худи с капюшоном",
        price: 5200,
        icon: "🧥",
        color: "#f4effa"
    },
    {
        id: 4,
        name: "Куртка Джинсовая",
        price: 6800,
        icon: "🧥",
        color: "#faf3e0"
    }
];

let cart = [];

// Отображение товаров (картинки заменены на иконки и цветные карточки)
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-img" style="background-color: ${product.color}; display: flex; align-items: center; justify-content: center; font-size: 80px; height: 200px;">
                ${product.icon}
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price} ₽</div>
                <button class="btn" onclick="addToCart(${product.id})">Добавить в корзину</button>
            </div>
        </div>
    `).join('');
}

// Добавление в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Обновление счетчика и содержимого корзины
function updateCart() {
    document.getElementById('cartCount').innerText = cart.length;
    
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price} ₽</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').innerText = total;
}

// Управление модальным окном
const modal = document.getElementById('cartModal');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');

cartBtn.onclick = () => modal.style.display = 'flex';
closeCart.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};

// Запуск
renderProducts();