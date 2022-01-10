<template>
  <minimal-layout>
    <div class="page page-main">
      <h1>Main page</h1>
    </div>
  </minimal-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import MinimalLayout from '@/layouts/minimal.vue'

@Options({
  component: {
    MinimalLayout
  }
})

export default class MainPage extends Vue {}
</script>
