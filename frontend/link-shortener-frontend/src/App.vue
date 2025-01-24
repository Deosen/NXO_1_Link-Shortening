<template>
  <div id="app">
    <Header title="LINK Shortener" />
    <InputLink />
    <ShortLinkButton />
    <div class="div-output-container">
      <OutputLink />
      <CopyButton />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InputLink from './components/InputLink.vue'
import ShortLinkButton from './components/ShortLinkButton.vue'
import OutputLink from './components/OutputLink.vue'
import CopyButton from './components/CopyButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    InputLink,
    ShortLinkButton,
    OutputLink,
    CopyButton
  }
}
</script>

<style>
    .div-output-container {
        margin-top: 100px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
