<template>
  <div id="app">
    <Header title="LINK Shortener" />
    <InputLink />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InputLink from './components/InputLink.vue'

export default {
  name: 'App',
  components: {
    Header,
    InputLink
  }
}
</script>

<style>
</style>
