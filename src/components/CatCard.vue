<template>
    <c-box maxW="md" border="1px" borderColor="gray.300" rounded="lg" overflow="hidden" class="card">

        <!-- If there's an image -->
        <c-image v-if="cat.image" :src="cat.image.url" alt="" roundedTop="lg" h="400px" w="100%" object-fit="cover" opacity=".9"/>
        <!-- If there isn't -->
        <c-image v-else src="https://image.shutterstock.com/image-vector/vector-isolated-cat-silhouette-logo-600w-1537761179.jpg" alt="" rounded="lg" h="400px" w="100%" object-fit="cover"/>
        <c-box
            mt="1"
            font-weight="semibold"
            as="div"
            line-height="tight"
            is-truncated
            class="card-link"
            :href="/cat/ + cat.id"
            display="flex"
            justify-content="space-between"
            align-items="center"
        >
            <router-link :to="'/cat/' + cat.id" class="card-link">
                <c-heading as="h3" size="lg">{{ cat.name }}</c-heading>
            </router-link>
            <c-icon name="arrow-forward" size="32px" />
        </c-box>
    </c-box>
</template>

<script>
import { CBox, CImage, CHeading, CIcon } from '@chakra-ui/vue';

export default {
    name: 'CatCard',
    components: {
        CBox,
        CImage,
        CHeading,
        CIcon
    },
    props: [ 'cat' ]
}
</script>

<style scoped>
    .card {
        position: relative;
    }

    .card-link::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
    }
    
    p {
        margin: 0 2rem 1rem 2rem;
        font-weight: normal;
    }

</style>