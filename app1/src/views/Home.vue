<template>
  <div class="home">
    <div id="nav">
      <!-- <router-link to="/app1/home">Home</router-link> |
      <router-link to="/app1/about">About</router-link> -->
      <button @click="handleNavigate('/app1/home')">Home</button>
      <button @click="handleNavigate('/app1/about')">About</button>
    </div>
    app1 home
    <button @click="goPortal">主应用的about</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const goPortal = () => {
      const w = window as any
      w.Garfish.router.push({ path: '/about' })
    }

    const handleNavigate = (path: string) => {
      const w = window as any
      w.Garfish.router.push({ path })
    }

    onMounted(() => {
      console.log('>>>>> app1 home mounted <<<<<<<<<<')
    })

    return {
      goPortal,
      handleNavigate,
    }
  },
})
</script>
