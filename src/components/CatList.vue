<template>
    <section>
        <c-heading as="h2" class="sr-only">Cat List</c-heading>

        <!-- Displaying cat list -->
        <c-box id="catlist" v-if='filteredCatList'>
        
            <!-- Lets visually impaired users know what's going on -->
            <p aria-live="polite" class="sr-only" v-if="filteredCatList.length < 2">{{ filteredCatList.length }} breed found</p>
            <p aria-live="polite" class="sr-only" v-else>{{ filteredCatList.length }} breeds found</p>
            
            <!-- In case there's no match -->
            <c-box v-if="filteredCatList.length == 0" margin="auto">
                <p class="information">We couldn't find a cat breed named like this</p>
            </c-box>

            <!-- In case there are results -->
            <c-grid  v-else w="90%" template-columns="repeat(4, 1fr)" gap="5" margin="auto">
                <CatCard v-for="cat in filteredCatList" :cat="cat" :key="cat.id" />
            </c-grid>

        </c-box>
        
        <!-- In case of API error -->
        <c-box v-else>
            <p class="centered">The cats are playing with the servers' cables. Please try again later.</p>
            <p v-if="apiError" class="information">({{ apiError }})</p>
        </c-box>
    </section>
</template>

<script>
import { CGrid, CBox, CHeading } from '@chakra-ui/vue';
import CatCard from './CatCard.vue';

export default {
    name: 'CatList',
    components: {
        CGrid,
        CBox,
        CHeading,
        CatCard
    },
    data() {
        return {
            allCats: null,
            apiError: null,
        }
    },
    props: ['filteredCatList'],
    
}
</script>

<style scoped>
#catlist {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}
</style>