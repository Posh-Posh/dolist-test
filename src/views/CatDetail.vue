<template>
    <c-box 
        maxW="3xl" 
        border="1px" 
        borderColor="gray.300" 
        rounded="lg" 
        overflow="hidden" 
        margin="3rem auto" 
        padding="1rem" 
        class="details"
    >

        <!-- If data could be retrieved -->
        <c-box v-if="cat">
            <c-heading as="h2" size="xl" class="centered">{{ cat.name }}</c-heading>
            <c-box
                mt="1"
                font-weight="semibold"
                as="div"
                line-height="tight"
                is-truncated
            >
                <c-heading as="h3" size="l">Description :</c-heading>
                <p>{{ cat.description }}</p>
                <c-heading as="h3" size="l">Temperament :</c-heading>
                <p>{{ cat.temperament }}</p>
                <c-heading as="h3" size="l">Origin :</c-heading>
                <p>{{ cat.origin }}</p>
                <c-heading as="h3" size="l">Life span :</c-heading>
                <p>{{ cat.life_span }} years</p>
                <c-heading as="h3" size="l">Links :</c-heading>
                <ul>
                    <li v-if="cat.cfa_url" >{{ cat.cfa_url }}</li>
                    <li v-if="cat.vetstreet_url" >{{ cat.vetstreet_url }}</li>
                    <li v-if="cat.vcahospitals_url" >{{ cat.vcahospitals_url }}</li>
                    <li v-if="cat.wikipedia_url" >{{ cat.wikipedia_url }}</li>
                </ul>
            </c-box>
        </c-box>

        <!-- If data couldn't be retrieved -->
        <p v-else class='centered'>This cat is paying hide and seek. Please come back later.</p>
    </c-box>
</template>

<script>
import HTTP from "../axios/http-common";
import { CBox, CHeading } from '@chakra-ui/vue';

export default {
    name: 'CatDetail',
    components: {
        CBox,
        CHeading,
    },
    data(){
        return {
            cat: {}
        }
    },
    methods: {
        async getCatById() {
            try {
                const result = await HTTP.get("/breeds/search?q=" + this.$route.params.id);
                this.cat = result.data[0];
            } catch (err) {
                this.apiError = err.message
            }
        }
    },
    created() {
        this.getCatById();
    },
}
</script>

<style scoped>
    p {
        margin: 0 2rem 1rem 2rem;
        font-weight: normal;
    }
</style>