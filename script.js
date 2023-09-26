//your JS code here. If required.

		const quantityInputs = document.querySelectorAll('.form-control');
        const subtotal = document.getElementById('subtotal');
        const total = document.getElementById('total');

        quantityInputs.forEach(input => {
            input.addEventListener('input', updateSummary);
        });

        function updateSummary() {
            let totalPrice = 0;
            quantityInputs.forEach((input, index) => {
                const price = (index === 0) ? 120 : 120; // Adjust the prices for each product
                const quantity = parseInt(input.value);
                totalPrice += price * quantity;
            });

            subtotal.textContent = `Subtotal: $${totalPrice.toFixed(2)}`;
            total.textContent = `Total: $${(totalPrice + 5.00).toFixed(2)}`;
        }

        // Initial update
        updateSummary();