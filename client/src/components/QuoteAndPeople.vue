<script setup>
import { Quote } from '@/models/Quote.js';


defineProps({
  quoteProps: { type: Quote, required: true }
})

</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-5">
        <img :src="quoteProps.image" :alt="quoteProps.character" class="img-fluid rounded-start">
      </div>
      <div class="col-md-7">
        <div class="card-body d-flex align-items-center">
          <p class="card-title fw-bold fs-4 justify-content-center d-flex">{{ quoteProps.character }}</p>
          <p class="card-text justify-content-center d-flex">{{ quoteProps.quote }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
