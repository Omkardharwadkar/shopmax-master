// Shopping Cart Management System
(function() {
    'use strict';

    // Cart class to manage shopping cart
    const Cart = {
        // Get cart from localStorage
        getCart: function() {
            const cart = localStorage.getItem('shopmax_cart');
            return cart ? JSON.parse(cart) : [];
        },

        // Save cart to localStorage
        saveCart: function(cart) {
            localStorage.setItem('shopmax_cart', JSON.stringify(cart));
            this.updateCartUI();
        },

        // Add item to cart
        addItem: function(product) {
            let cart = this.getCart();
            const existingItem = cart.find(item => 
                item.id === product.id && item.size === product.size && item.color === product.color
            );

            if (existingItem) {
                existingItem.quantity += product.quantity || 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: product.size || '',
                    color: product.color || '',
                    quantity: product.quantity || 1
                });
            }

            this.saveCart(cart);
            this.showNotification('Item added to cart!');
            return cart;
        },

        // Remove item from cart
        removeItem: function(itemId, size, color) {
            let cart = this.getCart();
            cart = cart.filter(item => 
                !(item.id === itemId && item.size === size && item.color === color)
            );
            this.saveCart(cart);
            this.showNotification('Item removed from cart!');
            return cart;
        },

        // Update item quantity
        updateQuantity: function(itemId, size, color, quantity) {
            let cart = this.getCart();
            const item = cart.find(item => 
                item.id === itemId && item.size === size && item.color === color
            );
            
            if (item) {
                if (quantity <= 0) {
                    return this.removeItem(itemId, size, color);
                }
                item.quantity = quantity;
                this.saveCart(cart);
            }
            return cart;
        },

        // Get total items in cart
        getTotalItems: function() {
            const cart = this.getCart();
            return cart.reduce((total, item) => total + item.quantity, 0);
        },

        // Get cart total
        getTotal: function() {
            const cart = this.getCart();
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        // Clear cart
        clearCart: function() {
            localStorage.removeItem('shopmax_cart');
            this.updateCartUI();
        },

        // Update cart UI elements
        updateCartUI: function() {
            const totalItems = this.getTotalItems();
            const cartBadge = document.querySelector('.bag .number');
            if (cartBadge) {
                cartBadge.textContent = totalItems;
                cartBadge.style.display = totalItems > 0 ? 'inline-block' : 'none';
            }

            // Update cart page if we're on it
            if (window.location.pathname.includes('cart.html')) {
                this.renderCartPage();
            }
        },

        // Format price in Indian Rupees
        formatPrice: function(price) {
            if (!price) return '₹0';
            return '₹' + price.toLocaleString('en-IN');
        },

        // Render cart page
        renderCartPage: function() {
            const cart = this.getCart();
            const tbody = document.querySelector('.site-blocks-table tbody');
            const cartTotalEl = document.querySelector('.cart-total-amount');
            const subtotalEl = document.querySelector('.cart-subtotal-amount');
            const checkoutBtn = document.querySelector('[onclick*="checkout.html"]');

            if (!tbody) return;

            if (cart.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="6" class="text-center py-5">
                            <p>Your cart is empty.</p>
                            <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
                        </td>
                    </tr>
                `;
                if (cartTotalEl) cartTotalEl.textContent = '₹0';
                if (subtotalEl) subtotalEl.textContent = '₹0';
                return;
            }

            tbody.innerHTML = cart.map(item => {
                const itemTotal = item.price * item.quantity;
                return `
                    <tr data-item-id="${item.id}" data-size="${item.size || ''}" data-color="${item.color || ''}">
                        <td class="product-thumbnail">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid">
                        </td>
                        <td class="product-name">
                            <h2 class="h5 text-black">${item.name}</h2>
                            ${item.size ? `<small class="text-muted">Size: ${item.size}</small><br>` : ''}
                            ${item.color ? `<small class="text-muted">Color: ${item.color}</small>` : ''}
                        </td>
                        <td>${this.formatPrice(item.price)}</td>
                        <td>
                            <div class="input-group mb-3" style="max-width: 120px;">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-primary js-btn-minus-cart" type="button">&minus;</button>
                                </div>
                                <input type="text" class="form-control text-center cart-quantity-input" 
                                       value="${item.quantity}" data-item-id="${item.id}" 
                                       data-size="${item.size || ''}" data-color="${item.color || ''}">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-primary js-btn-plus-cart" type="button">&plus;</button>
                                </div>
                            </div>
                        </td>
                        <td class="item-total">${this.formatPrice(itemTotal)}</td>
                        <td>
                            <button class="btn btn-primary height-auto btn-sm js-remove-item" 
                                    data-item-id="${item.id}" 
                                    data-size="${item.size || ''}" 
                                    data-color="${item.color || ''}">X</button>
                        </td>
                    </tr>
                `;
            }).join('');

            // Update totals
            const total = this.getTotal();
            if (cartTotalEl) cartTotalEl.textContent = this.formatPrice(total);
            if (subtotalEl) subtotalEl.textContent = this.formatPrice(total);

            // Attach event listeners
            this.attachCartEventListeners();
        },

        // Attach event listeners for cart page
        attachCartEventListeners: function() {
            // Remove items
            document.querySelectorAll('.js-remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const itemId = btn.dataset.itemId;
                    const size = btn.dataset.size || '';
                    const color = btn.dataset.color || '';
                    this.removeItem(itemId, size, color);
                });
            });

            // Quantity updates
            document.querySelectorAll('.js-btn-plus-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const input = btn.closest('.input-group').querySelector('.cart-quantity-input');
                    const itemId = input.dataset.itemId;
                    const size = input.dataset.size || '';
                    const color = input.dataset.color || '';
                    const newQty = parseInt(input.value) + 1;
                    this.updateQuantity(itemId, size, color, newQty);
                });
            });

            document.querySelectorAll('.js-btn-minus-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const input = btn.closest('.input-group').querySelector('.cart-quantity-input');
                    const itemId = input.dataset.itemId;
                    const size = input.dataset.size || '';
                    const color = input.dataset.color || '';
                    const newQty = Math.max(0, parseInt(input.value) - 1);
                    this.updateQuantity(itemId, size, color, newQty);
                });
            });

            // Direct input changes
            document.querySelectorAll('.cart-quantity-input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const itemId = input.dataset.itemId;
                    const size = input.dataset.size || '';
                    const color = input.dataset.color || '';
                    const newQty = parseInt(input.value) || 1;
                    this.updateQuantity(itemId, size, color, newQty);
                });
            });

            // Update cart button
            const updateCartBtn = document.querySelector('.btn-primary.btn-sm.btn-block');
            if (updateCartBtn && updateCartBtn.textContent.includes('Update')) {
                updateCartBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showNotification('Cart updated!');
                });
            }

            // Continue shopping button
            const continueShoppingBtn = document.querySelector('.btn-outline-primary.btn-sm.btn-block');
            if (continueShoppingBtn && continueShoppingBtn.textContent.includes('Continue')) {
                continueShoppingBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = 'shop.html';
                });
            }
        },

        // Show notification
        showNotification: function(message) {
            // Remove existing notifications
            const existing = document.querySelector('.cart-notification');
            if (existing) existing.remove();

            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: #28a745;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
            `;
            notification.textContent = message;

            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(notification);

            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    };

    // Wishlist management
    const Wishlist = {
        getWishlist: function() {
            const wishlist = localStorage.getItem('shopmax_wishlist');
            return wishlist ? JSON.parse(wishlist) : [];
        },

        saveWishlist: function(wishlist) {
            localStorage.setItem('shopmax_wishlist', JSON.stringify(wishlist));
            this.updateWishlistUI();
        },

        toggleItem: function(productId) {
            let wishlist = this.getWishlist();
            const index = wishlist.indexOf(productId);
            
            if (index > -1) {
                wishlist.splice(index, 1);
                Cart.showNotification('Removed from wishlist!');
            } else {
                wishlist.push(productId);
                Cart.showNotification('Added to wishlist!');
            }
            
            this.saveWishlist(wishlist);
            return wishlist;
        },

        isInWishlist: function(productId) {
            return this.getWishlist().includes(productId);
        },

        updateWishlistUI: function() {
            const wishlist = this.getWishlist();
            document.querySelectorAll('.wishlist-btn').forEach(btn => {
                const productId = btn.dataset.productId;
                if (this.isInWishlist(productId)) {
                    btn.classList.add('active');
                    btn.querySelector('.icon-heart-o')?.classList.replace('icon-heart-o', 'icon-heart');
                } else {
                    btn.classList.remove('active');
                    btn.querySelector('.icon-heart')?.classList.replace('icon-heart', 'icon-heart-o');
                }
            });
        }
    };

    // Update cart badge on all pages
    function updateCartBadge() {
        const totalItems = Cart.getTotalItems();
        document.querySelectorAll('.bag .number').forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        Cart.updateCartUI();
        Wishlist.updateWishlistUI();
        updateCartBadge();

        // Handle add to cart buttons
        document.querySelectorAll('.add-to-cart-btn, .buy-now').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const productData = this.dataset.product || this.closest('[data-product]')?.dataset.product;
                
                if (productData) {
                    try {
                        const product = JSON.parse(productData);
                        Cart.addItem(product);
                    } catch (error) {
                        console.error('Error parsing product data:', error);
                    }
                } else {
                    // Fallback: get product info from page
                    const productId = this.dataset.productId || Math.random().toString(36).substr(2, 9);
                    const productName = document.querySelector('h2.text-black')?.textContent || 'Product';
                    const priceText = document.querySelector('.text-primary.h4, .item-price')?.textContent || '$0';
                    const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
                    const image = document.querySelector('#primaryImage')?.src || 
                                  document.querySelector('.product-item img')?.src || 
                                  'images/prod_1.png';
                    
                    // Get selected size
                    const selectedSize = document.querySelector('input[name="shop-sizes"]:checked')?.nextElementSibling?.textContent.trim() || '';
                    
                    Cart.addItem({
                        id: productId,
                        name: productName,
                        price: price,
                        image: image,
                        size: selectedSize,
                        quantity: parseInt(document.querySelector('.form-control.text-center')?.value || '1')
                    });
                }
            });
        });

        // Handle wishlist buttons
        document.querySelectorAll('.icons-btn, .wishlist-btn').forEach(btn => {
            if (btn.href && btn.href.includes('cart.html')) return;
            
            btn.addEventListener('click', function(e) {
                if (this.querySelector('.icon-heart-o, .icon-heart')) {
                    e.preventDefault();
                    const productId = this.dataset.productId || 
                                    this.closest('.item-entry, .product-item')?.dataset.productId ||
                                    Math.random().toString(36).substr(2, 9);
                    Wishlist.toggleItem(productId);
                }
            });
        });
    });

    // Make Cart and Wishlist available globally
    window.ShopMaxCart = Cart;
    window.ShopMaxWishlist = Wishlist;
})();
