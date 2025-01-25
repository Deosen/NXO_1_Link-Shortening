<template>
    <div class="options-panel">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-lg btn-primary">Add New Link</button>
            <button type="button" class="btn btn-lg btn-primary">Update Selected</button>
            <button type="button" class="btn btn-lg btn-primary">Remove Selected</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OptionPanelButtons'
    }   
</script>

<style>
    .options-panel {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>