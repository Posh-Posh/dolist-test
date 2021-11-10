<template>
  <div id="app">
    <Header />
    <c-divider w="5xl" marginBottom="2rem"/>
    <router-view></router-view>
    <c-divider w="5xl" marginTop="3rem"/>
    <Footer />
  </div>
</template>

<script>
import { CDivider } from '@chakra-ui/vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    CDivider,
    Header,
    Footer
  }
}
</script>

<style>
@import "./styles/styles.css";
</style>
