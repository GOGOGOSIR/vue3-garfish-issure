<template>
  <div class="home">
    <div id="nav">
      <!-- <router-link to="/app2/home">Home</router-link> |
      <router-link to="/app2/about">About</router-link> -->
      <button @click="handleNavigate('/app2/home')">Home</button>
      <button @click="handleNavigate('/app2/about')">About</button>
    </div>
    app2 home
    <button @click="goPortal">App1 home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const goPortal = () => {
      const w = window as any
      w.Garfish.router.push({ path: '/app1/home' })
    }
    const handleNavigate = (path: string) => {
      const w = window as any
      w.Garfish.router.push({ path })
    }
    return {
      goPortal,
      handleNavigate,
    }
  },
})
</script>
