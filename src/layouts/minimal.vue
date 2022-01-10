<template>
  <div class="layout layout-minimal">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class MinimalLayout extends Vue {}
</script>
