<template>
  <div id="app">
    <Header title="LINK Shortener" />
    <InputLink />
    <ShortLinkButton />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InputLink from './components/InputLink.vue'
import ShortLinkButton from './components/ShortLinkButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    InputLink,
    ShortLinkButton
  }
}
</script>

<style>
</style>
