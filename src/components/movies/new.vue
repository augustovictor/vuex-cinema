<template>
    <form-helper>
        <div slot="form-header">
            <h1>New movie</h1>
        </div>

        <div slot="form-fields">
        </div>

        <div slot="form-controls">
            <button @click.prevent.once="submitMovie">Create</button>
        </div>
    </form-helper>
</template>

<script>
import FormHelper from '../helpers/form.vue'
export default {
    data() {
        return {
            movie: {}
        }
    },
    components: {
        'form-helper': FormHelper
    },
    methods: {
        submitMovie() {
            this.$store.commit('setMessages', [{type: 'error', content: 'All good'}])
        }
    }
}
</script>