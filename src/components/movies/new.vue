<template>
    <form-helper>
        <div slot="form-header">
            <h1 class="title">New movie</h1>
        </div>

        <div slot="form-fields">
            <div class="field">
                <label for="title" class="label">Title</label>
                <input id="title" class="input" type="text" v-model="movie.title" />
            </div>

            <div class="field">
                <label class="label" for="description">Description</label>
                <p class="control">
                    <textarea id="description" class="textarea" v-model="movie.description"></textarea>
                </p>
            </div>
        </div>

        <div slot="form-controls">
            <button class="button is-primary" @click.prevent.once="submitMovie">Create</button>
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
            // this.$store.commit('setMessages', [{type: 'error', content: 'All good'}]);
            this.$store.dispatch('newMovie', this.movie);
        }
    }
}
</script>