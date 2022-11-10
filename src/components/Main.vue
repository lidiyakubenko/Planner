<script setup lang="ts">
import { ref } from 'vue'

const count = ref(3)
</script>

<template>
  <div class="card">
    Today
  </div>

  <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
  </ul>
  <div>{{ count }} tasks</div>
</template>

<style scoped>
.card {
  color: #5a5a5a;
}
</style>
