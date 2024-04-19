document.addEventListener('DOMContentLoaded', function () {

    // Sélectionner tous les boutons d'ajout et de soustraction
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
  
    // Ajouter des gestionnaires d'événements pour l'ajout et la soustraction de quantité
    plusButtons.forEach(button => {
      button.addEventListener('click', function () {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    minusButtons.forEach(button => {
      button.addEventListener('click', function () {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Sélectionner tous les boutons de suppression
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
  
    // Ajouter des gestionnaires d'événements pour la suppression d'article
    deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productCard = button.closest('.card-body');
        productCard.remove();
        updateTotalPrice();
      });
    });
  
    // Sélectionner tous les boutons de like
    const likeButtons = document.querySelectorAll('.fa-heart');
  
    // Ajouter des gestionnaires d'événements pour l'ajout aux favoris
    likeButtons.forEach(button => {
      button.addEventListener('click', function () {
        button.classList.toggle('text-danger');
      });
    });
  
    // Mettre à jour le prix total en fonction de la quantité et des suppressions
    function updateTotalPrice() {
      let totalPrice = 0;
      const unitPrices = document.querySelectorAll('.unit-price');
      const quantities = document.querySelectorAll('.quantity');
      unitPrices.forEach((unitPrice, index) => {
        const price = parseInt(unitPrice.textContent.replace('$', '').trim());
        const quantity = parseInt(quantities[index].textContent);
        totalPrice += price * quantity;
      });
      document.querySelector('.total').textContent = totalPrice + ' $';
    }
  });
  