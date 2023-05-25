<template>
    <div>
        <NavbarItem :cart-items="cartItems" />
        <SearchBar :search="searchQuery" @update:search="searchQuery = $event" />
        <div class="grid grid-cols-4 gap-4 m-2">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
        </div>
    </div>
</template>
  
<script>
  import NavbarItem from "../components/NavbarItem.vue";
  import SearchBar from "../components/SearchBar.vue";
  import ProductCard from "../components/ProductCard.vue";
  
  export default {
    components: {
      NavbarItem,
      SearchBar,
      ProductCard,
    },
    data() {
      return {
        email: "",
        products: [],
        searchQuery: "",
        cartItems: []
      };
    },
    methods: {
      async fetchProducts() {
        const res = await fetch("https://fakestoreapi.com/products");
        this.products = await res.json();
      },
      handleAddToCart(product) {
        this.cartItems.push(product);
      }
    },
    mounted() {
      this.email = localStorage.getItem("email");
      this.fetchProducts();
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) => {
          return product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    text-align: center;
  }
  
  .text-xl {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  </style>
  