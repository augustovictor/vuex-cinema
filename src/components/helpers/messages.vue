<template>
    <div class="notification">
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
            console.log('set messages in helper')
            return this.$store.getters.getMessages;
        }
    }
}
</script>