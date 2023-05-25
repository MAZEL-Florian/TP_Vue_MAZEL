<template>
    <input type="text" placeholder="recherche" class="w-1/2 px-2 py-1 mx-4 my-6 border rounded-md border-neutral-200 outline-purple-500" :value="search"
    @input="$emit('update:search', $event.target.value)"
    >

</template>

<script>
export default {
  props: ['search'],
  emits: ['update:search']
}

</script>


