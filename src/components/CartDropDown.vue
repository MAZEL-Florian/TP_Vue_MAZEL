<template>
    <div class="cart-dropdown" :class="{ 'open': isOpen }">
      <button class="cart-button" @click="$emit('toggle-dropdown')">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"></path>
        </svg>
      </button>
      <div class="cart-content">
        <p v-if="cartItems.length === 0">Le panier est vide.</p>
        <ul v-else>
          <li v-for="item in cartItems" :key="item.id">
            <span class="cart-item-title">{{ item.title }}</span>
          </li>
        </ul>
        <div v-if="cartItems.length > 0" class="cart-total">
          Total: {{ calculateTotal() }} €
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cartItems: {
        type: Array,
        default: () => []
      },
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    methods: {
    calculateTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  }
  };
  </script>
  
  <style scoped>
  .cart-dropdown {
    position: relative;
    display: inline-block;
  }
  
  .cart-dropdown.open .cart-content {
    display: block;
    animation: dropdown-fade 0.2s ease-out;
  }
  
  .cart-content {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes dropdown-fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  