<template>
    <div class="output-link">
        <label class="form-label mt-4" for="readOnlyInput">Shorten Link :</label>
        <input class="form-control" id="readOnlyInput" type="text" placeholder="Shorten Link:" readonly="" v-model="short_url" @click="copyToClipboard">
    </div>
</template>
      
<script>
  export default {
        name: 'OutputAddress',
        props: {
        address: String
        }
    }
</script>

<style>
    .output-link {
        min-width: 20%;
        max-width: 40%;
    }
</style>