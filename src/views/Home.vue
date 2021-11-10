<template>
    <main>
      <search-bar @filterCatList="filterCatList" />
      <cat-list :filteredCatList="filteredCatList" />
    </main>
</template>

<script>
import HTTP from "../axios/http-common";
import SearchBar from '../components/SearchBar.vue'
import CatList from '../components/CatList.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    CatList
  },
  data(){
    return {
      allCats: null,
      userInput: null
    }
  },
  methods: {
    filterCatList(e){
      this.userInput = e
    },
  
    async getAllCats() {
      try {
        const results = await HTTP.get("/breeds");
        this.allCats = results.data;

      } catch (err) {
        this.apiError = err.message
      }
    }
  },
  created() {
    this.getAllCats();
  },
  computed: {
    filteredCatList() {
      if(this.userInput) {
        return this.allCats.filter(cat => {
          return cat.name.toLowerCase().includes(this.userInput.toLowerCase())
        })
      }
      else {
        return this.allCats
      }
    }
  }
}
</script>