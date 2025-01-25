<template>
    <div class="output-link">
        <label class="form-label mt-4" for="readOnlyInput">Shorten Link :</label>
        <input class="form-control" id="readOnlyInput" type="text" :value="short_url" readonly @click="copyToClipboard">
    </div>
</template>
      
<script>
  export default {
       name: 'OutputLink',
        props: {
            short_url: {
                type: String,
                default: 'https:\\www.example.com'
            }
        }
    }
</script>

<style>
    .output-link {
        min-width: 20%;
        max-width: 40%;
    }
</style>