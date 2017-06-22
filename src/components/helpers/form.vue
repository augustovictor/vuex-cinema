<template>
    <div>
        <messages />
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            
            <hr>

            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>

            <hr>

            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
        </form>
    </div>
</template>

<script>
import MessagesHelper from './messages.vue'

export default {
    props: [
        'messages'
    ],
    components: {
        messages: MessagesHelper
    }
}
</script>

<style>
#form-controls {
    text-align: right;
}
</style>