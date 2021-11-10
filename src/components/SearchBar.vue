<template>
    <section>
        <c-heading as="h2" size="xl" class="sr-only" >Search bar</c-heading>
        <c-form-control size="md">

            <c-form-label for="searchbar">Search by breed name</c-form-label>

            <!-- Allow visually impaired users to know how the search input works -->
            <c-form-helper-text id="helper-text" class="sr-only">
                The list of cats in the page will update automatically as you type.
            </c-form-helper-text>
            
            <c-box id="input-button">
                <c-input 
                    type="text" 
                    id="searchbar" 
                    placeholder="breed name" 
                    aria-describedby="helper-text" 
                    v-model="search"
                    @input="filterCatList($event)"
                />
                <c-icon-button 
                    icon="close" 
                    ariaLabel="reset" 
                    variant="outline"
                    variant-color="vue.900"
                    marginLeft="1rem"
                    @click="resetSearch"
                />
            </c-box>
        </c-form-control>
    </section>
</template>

<script>
import {  CFormHelperText, CFormControl, CFormLabel, CInput, CHeading, CIconButton, CBox } from '@chakra-ui/vue';

export default {
    name: 'SearchBar',
    components: {
        CFormControl,
        CFormLabel,
        CFormHelperText,
        CInput,
        CHeading,
        CIconButton,
        CBox
    },
    data() {
        return {
            search: "",
        }
    },
    props: ['resultsNumber'],
    methods: {
        filterCatList($event) {
            this.$emit('filterCatList', $event)
        },

        resetSearch() {
            this.search = ''
            this.$emit('filterCatList', '')
        }
    }
}
</script>

<style scoped>
section {
    width: 60%;
    margin: auto;
}

#input-button {
    display: flex;
}
</style>