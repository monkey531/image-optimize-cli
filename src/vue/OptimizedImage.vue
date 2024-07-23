<template>
  <img :src="optimizedSrc" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { optimizeImage } from '@/optimizer'

interface OptimizeOptions {
  quality?: number
  width?: number
  height?: number
  format?: string
}

const props = defineProps<{
  src: string
  alt?: string
  quality?: number
  width?: number
  height?: number
  format?: string
}>()

const options: OptimizeOptions = {
  quality: props.quality,
  width: props.width,
  height: props.height,
  format: props.format
}

const optimizedSrc = computed(() => optimizeImage(props.src, options))
</script>
