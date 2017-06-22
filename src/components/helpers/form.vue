<template>
    <form>
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id="form-fields">
            <slot name="form-fields"></slot>
        </div>
        <div id="form-controls">
            <slot name="form-controls"></slot>
        </div>
    </form>
</template>

<script>
    export default {}
</script>

<style>
</style>