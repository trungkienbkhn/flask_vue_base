<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Default from '@/layouts/default.vue'
import Blank from '@/layouts/blank.vue'

@Component({ components: { Default, Blank } })
export default class App extends Vue {
  get layout() {
    return this.$route.meta?.layout || 'Default'
  }
}
</script>
