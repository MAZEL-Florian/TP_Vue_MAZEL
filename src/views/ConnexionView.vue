<template>
  <div class="bg-green-200 grid min-h-screen place-content-center">
    <div class="text-center text-gray-400">
      <icon name="material-symbols:lock" size="60"/>
      <input appearance="white" size="xl" placeholder="Adresse mail" type="email" v-model="email" name="email" @keyup.enter="navigateToProduct" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    navigateToProduct() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.email && emailRegex.test(this.email)) {
        localStorage.setItem('email', this.email);
        this.$router.push({ name: 'products' });
      }
    }
  }
};
</script>
