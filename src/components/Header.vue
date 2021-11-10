<template>
    <header>
        <c-box id="header">
            <router-link to="/">
                <img src="../../public/images/400px-Cat_silhouette.svg.png" alt="home"/>
                <span>Home</span>
            </router-link>
            <c-heading as="h1" size="2xl" >Welcome to Wi-Cat-Pedia</c-heading>
        </c-box>
    </header>
</template>

<script>
import { CHeading, CBox } from '@chakra-ui/vue';

export default {
    name: 'Header',
    components: {
        CHeading,
        CBox
    }
}
</script>

<style scoped>
    #header {
        display: flex;
        align-items: center;
    }
    
    h1 {
        margin-left: 30%;
    }

    img {
       max-height: 5em; 
    }
</style>