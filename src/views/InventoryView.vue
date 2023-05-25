<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td>
              <input
                placeholder="Quantité"
                type="number"
                v-model="product.quantity"
                name="quantity"
              />
            </td>
            <td>
              <button @click="setCookie(product)">Enregistrer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
      };
    },
    methods: {
      setCookie(product) {
        document.cookie = `quantity_${product.id}=${product.quantity}`;
      },
      async fetchProducts() {
        const res = await fetch("https://fakestoreapi.com/products");
        this.products = await res.json();
        this.products.forEach((product) => {
          product.quantity = "";
        });
      },
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  </style>
  