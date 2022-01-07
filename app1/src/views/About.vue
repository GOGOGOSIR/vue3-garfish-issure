<template>
  <div class="about">
    <h1>app1 about page</h1>
    <button @click="handleNavigate('/app1/home')">Home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'About',
  components: {},
  setup() {
    const handleNavigate = (path: string) => {
      const w = window as any
      w.Garfish.router.push({ path })
    }

    onMounted(() => {
      console.log('>>>>> app1 about mounted <<<<<<<<<<')
    })

    return {
      handleNavigate,
    }
  },
})
</script>
