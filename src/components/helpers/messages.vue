<template>
    <div>
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