<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="handleClick">app1 home</button>
    <button @click="handleClick2">app2 home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Garfish from 'garfish' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const handleClick = () => {
      Garfish.router.push({ path: '/app1/home' })
    }

    const handleClick2 = () => {
      Garfish.router.push({ path: '/app2/home' })
    }

    return {
      handleClick,
      handleClick2,
    }
  },
})
</script>
