<template>
    <div class="product-card">
      <img :src="product.image" alt="" class="product-image">
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-footer">
            <button class="add-to-cart-button" @click="addToCart(product)">Ajouter au panier</button>
          <span class="product-price">{{ product.price }} €</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        const { id, title, price } = this.product;
        this.$emit("add-to-cart", { id, title, price });
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin: 0.5rem;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
  }
  
  .product-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .product-description {
    margin-bottom: 0.5rem;
  }
  
  .product-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .add-to-cart-button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .product-price {
    font-weight: bold;
  }
  </style>
  