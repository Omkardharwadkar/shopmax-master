// Product Data and Management
(function() {
    'use strict';

    const Products = {
        // Product database - Prices in Indian Rupees (₹)
        items: [
            {
                id: 'prod_001',
                name: 'Gray Shoe',
                price: 1499,
                originalPrice: null,
                image: 'images/prod_2.png',
                images: ['images/prod_2.png', 'images/prod_3.png', 'images/model_1.png', 'images/model_2.png', 'images/shoe_1.jpg'],
                category: 'Shoes',
                subcategory: 'Casual',
                description: 'Comfortable and stylish gray shoes perfect for everyday wear. Made with high-quality materials for durability and comfort. Features breathable fabric and cushioned insoles.',
                sizes: ['S', 'M', 'L'],
                colors: ['Gray'],
                inStock: true,
                rating: 4.5
            },
            {
                id: 'prod_002',
                name: 'Blue Shoe High Heels',
                price: 2099,
                originalPrice: 3499,
                image: 'images/prod_3.png',
                images: ['images/prod_3.png', 'images/model_1.png', 'images/model_2.png', 'images/shoe_1.jpg', 'images/shoe.png'],
                category: 'Shoes',
                subcategory: 'Heels',
                description: 'Elegant blue high heel shoes for special occasions. Features a comfortable heel height and stylish design. Perfect for parties and formal events.',
                sizes: ['S', 'M'],
                colors: ['Blue'],
                inStock: true,
                rating: 5.0
            },
            {
                id: 'prod_003',
                name: 'Denim Jacket',
                price: 2099,
                originalPrice: 3499,
                image: 'images/model_5.png',
                images: ['images/model_5.png', 'images/model_1.png', 'images/model_2.png', 'images/cloth_1.jpg', 'images/cloth_2.jpg'],
                category: 'Men',
                subcategory: 'Jackets',
                description: 'Classic denim jacket with a modern fit. Perfect for casual outings and layering. Made with premium denim fabric that gets better with age.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Blue'],
                inStock: true,
                rating: 5.0
            },
            {
                id: 'prod_004',
                name: 'Leather Green Bag',
                price: 2099,
                originalPrice: 3499,
                image: 'images/prod_1.png',
                images: ['images/prod_1.png', 'images/model_1.png', 'images/model_2.png', 'images/cloth_1.jpg', 'images/cloth_2.jpg'],
                category: 'Accessories',
                subcategory: 'Bags',
                description: 'Premium leather green bag with spacious interior. Perfect for daily use and travel. Features multiple compartments and adjustable straps.',
                sizes: [],
                colors: ['Green'],
                inStock: true,
                rating: 5.0
            },
            {
                id: 'prod_005',
                name: 'Smooth Cloth Top',
                price: 2099,
                originalPrice: 3499,
                image: 'images/model_1.png',
                images: ['images/model_1.png', 'images/model_2.png', 'images/model_3.png', 'images/cloth_1.jpg', 'images/cloth_2.jpg'],
                category: 'Women',
                subcategory: 'Tops',
                description: 'Soft and smooth fabric top with comfortable fit. Ideal for everyday casual wear. Made with premium cotton blend for softness and durability.',
                sizes: ['S', 'M', 'L'],
                colors: ['White', 'Black'],
                inStock: true,
                rating: 5.0
            },
            {
                id: 'prod_006',
                name: 'Yellow Jacket',
                price: 4299,
                originalPrice: null,
                image: 'images/model_7.png',
                images: ['images/model_7.png', 'images/model_1.png', 'images/model_2.png', 'images/model_3.png', 'images/model_4.png'],
                category: 'Women',
                subcategory: 'Jackets',
                description: 'Vibrant yellow jacket with modern design. Stand out with this eye-catching piece. Features water-resistant material and multiple pockets.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Yellow'],
                inStock: true,
                rating: 4.8
            },
            {
                id: 'prod_007',
                name: 'Top Up T-Shirt',
                price: 3699,
                originalPrice: null,
                image: 'images/cloth_1.jpg',
                images: ['images/cloth_1.jpg', 'images/cloth_2.jpg', 'images/cloth_3.jpg', 'images/model_1.png', 'images/model_2.png'],
                category: 'Men',
                subcategory: 'T-Shirts',
                description: 'Premium cotton t-shirt with modern design. Comfortable and stylish for everyday wear. Features graphic print and soft fabric.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['White', 'Black', 'Gray'],
                inStock: true,
                rating: 4.5
            },
            {
                id: 'prod_008',
                name: 'Polo Shirt',
                price: 3699,
                originalPrice: null,
                image: 'images/cloth_2.jpg',
                images: ['images/cloth_2.jpg', 'images/cloth_1.jpg', 'images/cloth_3.jpg', 'images/model_1.png', 'images/model_5.png'],
                category: 'Men',
                subcategory: 'Shirts',
                description: 'Classic polo shirt perfect for both casual and semi-formal occasions. Made with premium pique cotton for comfort and style.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Blue', 'White', 'Navy'],
                inStock: true,
                rating: 4.7
            },
            {
                id: 'prod_009',
                name: 'Elegant Dress',
                price: 2799,
                originalPrice: 3999,
                image: 'images/model_2.png',
                images: ['images/model_2.png', 'images/model_3.png', 'images/model_4.png', 'images/model_1.png', 'images/model_7.png'],
                category: 'Women',
                subcategory: 'Dresses',
                description: 'Elegant and comfortable dress perfect for office and casual wear. Features flattering silhouette and premium fabric blend.',
                sizes: ['S', 'M', 'L'],
                colors: ['Black', 'Navy', 'Gray'],
                inStock: true,
                rating: 4.6
            },
            {
                id: 'prod_010',
                name: 'Casual Jeans',
                price: 1899,
                originalPrice: 2499,
                image: 'images/model_3.png',
                images: ['images/model_3.png', 'images/model_4.png', 'images/model_5.png', 'images/cloth_1.jpg', 'images/cloth_2.jpg'],
                category: 'Men',
                subcategory: 'Jeans',
                description: 'Classic fit jeans with modern stretch technology. Comfortable for all-day wear. Available in multiple washes and sizes.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Blue', 'Black'],
                inStock: true,
                rating: 4.8
            },
            {
                id: 'prod_011',
                name: 'Formal Shirt',
                price: 1499,
                originalPrice: 1999,
                image: 'images/model_4.png',
                images: ['images/model_4.png', 'images/model_5.png', 'images/model_6.png', 'images/cloth_1.jpg', 'images/cloth_3.jpg'],
                category: 'Men',
                subcategory: 'Shirts',
                description: 'Professional formal shirt with crisp finish. Perfect for office and formal events. Easy-care fabric that stays wrinkle-free.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['White', 'Light Blue', 'Pink'],
                inStock: true,
                rating: 4.9
            },
            {
                id: 'prod_012',
                name: 'Summer Dress',
                price: 2199,
                originalPrice: null,
                image: 'images/model_6.png',
                images: ['images/model_6.png', 'images/model_7.png', 'images/model_1.png', 'images/model_2.png', 'images/model_3.png'],
                category: 'Women',
                subcategory: 'Dresses',
                description: 'Beautiful summer dress with floral pattern. Lightweight and breathable fabric perfect for warm weather. Flowy design for comfort.',
                sizes: ['S', 'M', 'L'],
                colors: ['Floral', 'Solid Blue', 'Solid Pink'],
                inStock: true,
                rating: 4.7
            },
            {
                id: 'prod_013',
                name: 'Sneakers',
                price: 3499,
                originalPrice: 4999,
                image: 'images/shoe_1.jpg',
                images: ['images/shoe_1.jpg', 'images/shoe.png', 'images/prod_2.png', 'images/prod_3.png', 'images/model_6.png'],
                category: 'Shoes',
                subcategory: 'Sneakers',
                description: 'Premium athletic sneakers with superior cushioning. Perfect for running, walking, and everyday use. Breathable mesh upper.',
                sizes: ['M', 'L'],
                colors: ['White', 'Black', 'Gray'],
                inStock: true,
                rating: 4.9
            },
            {
                id: 'prod_014',
                name: 'Designer Handbag',
                price: 5499,
                originalPrice: 7999,
                image: 'images/prod_1.png',
                images: ['images/prod_1.png', 'images/model_1.png', 'images/model_2.png', 'images/cloth_1.jpg', 'images/model_7.png'],
                category: 'Accessories',
                subcategory: 'Bags',
                description: 'Luxury designer handbag with premium leather finish. Spacious interior with organized compartments. Perfect for work and travel.',
                sizes: [],
                colors: ['Black', 'Brown', 'Tan'],
                inStock: true,
                rating: 5.0
            },
            {
                id: 'prod_015',
                name: 'Winter Sweater',
                price: 2499,
                originalPrice: 3499,
                image: 'images/model_5.png',
                images: ['images/model_5.png', 'images/model_6.png', 'images/model_7.png', 'images/cloth_2.jpg', 'images/cloth_3.jpg'],
                category: 'Men',
                subcategory: 'Sweaters',
                description: 'Warm and cozy winter sweater with classic design. Made with premium wool blend for comfort and warmth during cold months.',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Navy', 'Gray', 'Black'],
                inStock: true,
                rating: 4.8
            },
            {
                id: 'prod_016',
                name: 'Kurta Set',
                price: 2799,
                originalPrice: null,
                image: 'images/model_1.png',
                images: ['images/model_1.png', 'images/model_2.png', 'images/model_3.png', 'images/model_4.png', 'images/cloth_1.jpg'],
                category: 'Women',
                subcategory: 'Traditional',
                description: 'Elegant ethnic kurta set with matching dupatta. Perfect for festivals and special occasions. Made with premium cotton fabric.',
                sizes: ['S', 'M', 'L'],
                colors: ['Maroon', 'Blue', 'Green'],
                inStock: true,
                rating: 4.9
            }
        ],

        // Get product by ID
        getById: function(id) {
            return this.items.find(item => item.id === id);
        },

        // Get products by category
        getByCategory: function(category) {
            return this.items.filter(item => 
                item.category.toLowerCase() === category.toLowerCase()
            );
        },

        // Search products
        search: function(query) {
            const searchTerm = query.toLowerCase();
            return this.items.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm) ||
                item.subcategory.toLowerCase().includes(searchTerm)
            );
        },

        // Filter products
        filter: function(filters) {
            let results = [...this.items];

            if (filters.category) {
                results = results.filter(item => 
                    item.category.toLowerCase() === filters.category.toLowerCase()
                );
            }

            if (filters.minPrice !== undefined) {
                results = results.filter(item => item.price >= filters.minPrice);
            }

            if (filters.maxPrice !== undefined) {
                results = results.filter(item => item.price <= filters.maxPrice);
            }

            if (filters.size) {
                results = results.filter(item => item.sizes.includes(filters.size));
            }

            if (filters.color) {
                results = results.filter(item => item.colors.includes(filters.color));
            }

            // Sort
            if (filters.sort) {
                switch(filters.sort) {
                    case 'price-low':
                        results.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-high':
                        results.sort((a, b) => b.price - a.price);
                        break;
                    case 'name-asc':
                        results.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'name-desc':
                        results.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case 'rating':
                        results.sort((a, b) => b.rating - a.rating);
                        break;
                    default:
                        break;
                }
            }

            return results;
        },

        // Render product card
        renderCard: function(product) {
            if (!product) return '';
            
            const discountBadge = product.originalPrice ? 
                `<span class="badge badge-danger position-absolute" style="top: 10px; right: 10px; z-index: 10;">
                    ${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>` : '';

            const ratingStars = product.rating ? this.renderStars(product.rating) : '';
            const productData = JSON.stringify({
                id: product.id, 
                name: product.name, 
                price: product.price, 
                image: product.image
            }).replace(/"/g, '&quot;');
            
            return `
                <div class="col-lg-4 col-md-6 item-entry mb-4" data-product-id="${product.id}">
                    <a href="shop-single.html?id=${product.id}" class="product-item md-height bg-gray d-block position-relative">
                        ${discountBadge}
                        <img src="${product.image || 'images/prod_1.png'}" alt="${product.name || 'Product'}" class="img-fluid">
                    </a>
                    <h2 class="item-title"><a href="shop-single.html?id=${product.id}">${product.name || 'Product'}</a></h2>
                    <strong class="item-price">
                        ${product.originalPrice ? `<del>₹${product.originalPrice.toLocaleString('en-IN')}</del> ` : ''}
                        ₹${(product.price || 0).toLocaleString('en-IN')}
                    </strong>
                    ${ratingStars}
                    <div class="product-actions mt-2">
                        <button class="btn btn-sm btn-outline-primary add-to-cart-btn" 
                                data-product="${productData}">
                            Add to Cart
                        </button>
                        <button class="btn btn-sm btn-outline-secondary wishlist-btn ml-2" 
                                data-product-id="${product.id}"
                                title="Add to Wishlist">
                            <span class="icon-heart-o"></span>
                        </button>
                    </div>
                </div>
            `;
        },

        // Render stars
        renderStars: function(rating) {
            if (!rating || rating === 0) return '';
            
            const fullStars = Math.floor(rating);
            const hasHalfStar = (rating % 1) >= 0.5;
            let stars = '';
            
            // Full stars
            for (let i = 0; i < fullStars; i++) {
                stars += '<span class="icon-star2 text-warning"></span>';
            }
            
            // Half star
            if (hasHalfStar) {
                stars += '<span class="icon-star-half text-warning"></span>';
            }
            
            // Empty stars
            const totalFilled = hasHalfStar ? fullStars + 1 : fullStars;
            const emptyStars = 5 - totalFilled;
            for (let i = 0; i < emptyStars; i++) {
                stars += '<span class="icon-star-o text-warning"></span>';
            }
            
            return `<div class="star-rating">${stars}</div>`;
        }
    };

    // Make Products available globally
    window.ShopMaxProducts = Products;
})();
