document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the add-to-cart button
    var addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', addToCart);

    // Function to handle add-to-cart button click
    function addToCart() {
        var color = getSelectedColor(); // Get selected color
        var size = getSelectedSize(); // Get selected size
        var quantity = parseInt(document.getElementById('quantity-select-input').value); // Get selected quantity
        var product = {
            color: getColorName(color), // Get color name instead of hash code
            size: size,
            quantity: quantity
        };

        // Here you can update the cart with the product details
        updateCart(product);

        // Display cart message
        var cartMessage = document.querySelector('.cart-message');
        cartMessage.innerText = 'Embrace Sideboard with color '+ product.color +' and size '+ size + ' added to cart.' ;
        cartMessage.style.display = 'block';
    }

    // Function to get selected color
    function getSelectedColor() {
        var colorInputs = document.querySelectorAll('.color-select input[type="radio"]');
        for (var i = 0; i < colorInputs.length; i++) {
            if (colorInputs[i].checked) {
                return colorInputs[i].value;
            }
        }
        return null; // If no color is selected
    }

    // Function to get color name instead of hash code
    function getColorName(colorCode) {
        switch (colorCode) {
            case '#ffd700':
                return 'Yellow';
            case '#ff0000':
                return 'Red';
            case '#008000':
                return 'Green';
            case '#800080':
                return 'Purple';
            default:
                return 'Unknown Color';
        }
    }

    // Function to get selected size
    function getSelectedSize() {
        var sizeInputs = document.querySelectorAll('.size-select input[type="radio"]');
        for (var i = 0; i < sizeInputs.length; i++) {
            if (sizeInputs[i].checked) {
                return sizeInputs[i].value;
            }
        }
        return null; // If no size is selected
    }

    // Function to update cart with product details
    function updateCart(product) {
        // Implement your cart update logic here
        console.log('Product added to cart:', product);
        // Example: You can store the product details in localStorage or send them to the server
    }
});
