<template>
    <navbar class="navbar">
      <div class="navbar-email">{{ email }}</div>
      <div class="navbar-cart">
        <cart-dropdown :isOpen="showCartDropdown" :cartItems="cartItems" @toggle-dropdown="toggleCartDropdown" />
      </div>
    </navbar>
  </template>
  
  <script>
  import CartDropdown from "./CartDropdown.vue";
  
  export default {
    components: {
      CartDropdown
    },
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
    data() {
      return {
        email: "",
        showCartDropdown: false
      };
    },
    mounted() {
      this.email = localStorage.getItem("email");
    },
    methods: {
      toggleCartDropdown() {
        this.showCartDropdown = !this.showCartDropdown;
      }
    }
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f0f0f0;
  }
  
  .navbar-email {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .cart-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  </style>
  