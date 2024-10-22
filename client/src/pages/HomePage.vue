<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { quoteService } from '@/services/QuoteService.js';
import QuoteAndPeople from '@/components/QuoteAndPeople.vue';
import { AppState } from '@/AppState.js';

const quotes = computed(() => AppState.quote)
onMounted(() => {
  quoteOfTheDay()
})
function quoteOfTheDay() {
  try {
    quoteService.quoteOfTheDay()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="d-flex justify-content-center pt-5 mt-5">
    <div v-for="quote in quotes" :key="quote.image">
      <QuoteAndPeople :quote-props="quote" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
