<template>
    <div v-if="messages.length" class="is-12 notification">
        <button class="delete"></button>
        <div v-for="msg in messages">
            Type: {{msg.type}}. Message: {{msg.content}}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        messages() {
            return this.$store.getters.getMessages;
        }
    }
}
</script>