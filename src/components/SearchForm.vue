<template>
    <div class="search-wrapper w-1/2 pr-4">
      <form v-on:submit="getfilteredData">
        <input type="text" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none leading-normal" placeholder="Type in the name of a South African town or city" v-model="search" v-on:keyup="getfilteredData">
      </form>
    </div>
</template>

<script>
import QPlaces from '@/queries/QPlaces';

export default {
  name: 'SearchForm',
  components: {
    QPlaces
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      return filters;
    }
  },
  data() {
    return {
      filteredData: [],
      search: '',
      places: QPlaces,
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = this.places;
      let filteredDataBySearch = [];
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>
