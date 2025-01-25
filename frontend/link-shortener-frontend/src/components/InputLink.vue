<template>
    <div class="input-link">
      <label for="exampleTextarea" class="form-label mt-4">Input long URL hire:</label>
      <textarea class="form-control" id="exampleTextarea" rows="3" style="height: 137px;" v-model="long_url" @keyup.enter="shortenUrl"></textarea>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    const long_url = ref('')
    const shortenUrl = async () => {

        try {
            const response = await fetch('http://localhost:3000/api/shorten', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ url: long_url.value })
                });
            const data = await response.json();
            console.log('Shortened URL:', data);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
        }

    const validateUrl = (url) => {
        if (!url) return;
        
        const invalidChars = url.match(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;\\]/g);
        if (invalidChars) {
        // Create safe text content
        const invalidCharsList = invalidChars
            .map(char => `Invalid character: ${char}`)
            .join(', ');
        console.warn('Invalid URL characters detected:', invalidCharsList);
        
        // Use v-model instead of direct DOM manipulation
        long_url.value = url.replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;\\]/g, '');
        }
    }

    watch(long_url, (newValue) => {
        validateUrl(newValue);
    });
</script>

<style>
    .input-link {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        max-width: 30%;
    }
</style>