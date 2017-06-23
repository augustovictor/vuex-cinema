<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <input v-model="search" @keyup="filterChanged" class="input" type="text" placeholder="Filter movies...">
            </div>
        </div>
        <div v-if="!filteredData.length && search.length" class="columns">
            <div class="column is-12">
                <i>No movies match '{{this.search}}'</i>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../../main'

export default {
    props: [
        'data',
        'attrToFilter'
    ],
    data() {
        return {
            search: '',
            filteredData: []
        }
    },
    methods: {
        filterChanged() {
            const filtered = this.data.filter(dat => {
                return dat[this.attrToFilter].match(this.search);
            });
            this.filteredData = filtered;
            this.$emit('resultFromSearch', filtered);
        }
    },
    created() {
        this.$emit('resultFromSearch', this.data);
    }
}
</script>