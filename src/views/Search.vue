<template>
  <div>
    <div class="filter">
      <label
        ><input type="radio" v-model="selectedCategory" value="All" />
        All</label
      >
      <label
        ><input type="radio" v-model="selectedCategory" value="Tech" />
        Tech</label
      >
      <label
        ><input type="radio" v-model="selectedCategory" value="Entertainment" />
        Entertainment</label
      >
      <label
        ><input type="radio" v-model="selectedCategory" value="Fictional" />
        Fictional</label
      >
    </div>
    <input type="text" v-model="search" placeholder="Search title..." />
    <ul class="people-list">
      <li v-for="person in filteredList" :key="person">{{ person.name }}</li>
    </ul>
  </div>
</template>
<script>
// import 'vue-js-modal/dist/styles.css'

export default {
  components: {},

  data() {
    return {
      search: "",
      people: [
        { name: "Bill Gates", category: "Tech" },
        { name: "Steve Jobs", category: "Tech" },
        { name: "Jeff Bezos", category: "Tech" },
        { name: "George Clooney", category: "Entertainment" },
        { name: "Meryl Streep", category: "Entertainment" },
        { name: "Amy Poehler", category: "Entertainment" },
        { name: "Lady of Lórien", category: "Fictional" },
        { name: "BB8", category: "Fictional" },
        { name: "Michael Scott", category: "Fictional" },
      ],
      selectedCategory: "All",
    };
  },

  methods: {},
  computed: {

    filteredList() {
      var vm = this;
      var category = this.selectedCategory;

      if (category === "All") {
        return this.people.filter((person) => {
        return (
          person.name.toLowerCase().includes(this.search.toLowerCase()) &&
            this.people
          );
        });
      } else {
        return this.people.filter((person) => {
          return (
            person.name.toLowerCase().includes(this.search.toLowerCase()) &&
            person.category === category
          );
        });
      }
    },
    
  },
  mounted() {
    // this.$modal.show('CropImage');
  },
};
</script>

