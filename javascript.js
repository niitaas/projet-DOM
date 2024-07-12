document.addEventListener('DOMContentLoaded', function() {
    const plusButtons = document.querySelectorAll('.card-body .item .fa-plus-circle');
    const minusButtons = document.querySelectorAll('.card-body .item .fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.card-body .fa-trash-alt');
    const likeButtons = document.querySelectorAll('.card-body .fa-heart');
    const totalPriceElement = document.querySelector('.total');

    let total = 0;

    function updateTotalPrice() {
        let totalPrice = 0;
        const unitPrices = document.querySelectorAll('.unit-price');
        const quantities = document.querySelectorAll('.quantity');
        
        unitPrices.forEach((unitPrice, index) => {
            const price = parseFloat(unitPrice.textContent.replace('$', '').trim());
            const quantity = parseInt(quantities[index].textContent.trim());
            totalPrice += price * quantity;
        });

        total = totalPrice;
        totalPriceElement.textContent = `${totalPrice} $`;
    }

    updateTotalPrice();

    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = button.closest('.card-body');
            cardBody.parentNode.removeChild(cardBody); 
            updateTotalPrice();
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('text-danger'); 
        });
    });
});