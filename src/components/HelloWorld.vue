<template>
  <div class="hello">
    
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input
          type="text"
          class="link-input"
          placeholder="Add a link"
          v-model="newLink"
        />
      </form>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link">{{ link }}</a>
          <button @click="removeLinks(index)" class="rm">Remove Link</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import Stats from "@/components/Stats.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      
      newLink: "",
      options: [
        { name: "Cat", id: "cat" },
        { name: "Dog", id: "dog" },
        { name: "Elephant", id: "elephant" },
        { name: "Girafe", id: "girafe" },
        { name: "Snake", id: "snake" },
        { name: "Spider", id: "spider" },
        { name: "Unicorn", id: "unicorn" },
      ],
      selected: { name: null, id: null },
    };
  },
  components: {
    Stats,
  },
  computed: {
    ...mapState(["title", "links"]),
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink: function () {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLinks(link) {
      this.removeLink(link);
    },
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + " has been selected");
    },
    getDropdownValues(keyword) {
      console.log(
        "You could refresh options by querying the API with " + keyword
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.left,
.right {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}

input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}
.rm {
  float: right;
  font-size: 0.8rem;
  background: #8ac007;
  border: 0;
  padding: 5px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
