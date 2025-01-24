<template>
  <div id="app">
    <Header title="LINK Shortener" />
    <InputLink />
    <ShortLinkButton />
    <OutputLink />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InputLink from './components/InputLink.vue'
import ShortLinkButton from './components/ShortLinkButton.vue'
import OutputLink from './components/OutputLink.vue'

export default {
  name: 'App',
  components: {
    Header,
    InputLink,
    ShortLinkButton,
    OutputLink
  }
}
</script>

<style>
</style>
