<template>
    <form-helper>
        <div slot="form-header">
            <h1>New movie</h1>
        </div>

        <div slot="form-fields">
        </div>

        <div slot="form-controls">
        </div>
    </form-helper>
</template>

<script>
import FormHelper from '../helpers/form.vue'
export default {
    components: {
        'form-helper': FormHelper
    }
}
</script>