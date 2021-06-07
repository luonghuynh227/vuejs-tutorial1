<template>
  <div>
    <p>Choose: {{ state }}</p>
    <div class="autocomplete">
      <input
        type="text"
        autocomplete="off"
        v-model="state"
        
        @focus="modal = true"
      />
      <div class="list-result" v-if="filteredStates && modal">
        <ul class="" v-if="filteredStates.length">
          <li 
          v-for="filteredState in filteredStates" 
          :key="filteredState"
          @click="setState(filteredState)"
          >
            {{ filteredState }}
          </li>
        </ul>
        <ul v-else >No data</ul>
      </div>
    </div>
  </div>
</template>
<script>
// import 'vue-js-modal/dist/styles.css'
import VueSingleSelect from "vue-single-select";

export default {
  components: { VueSingleSelect },

  data() {
    return {
      state: "",
      modal: false,
      states: ["Hoa Huong Dong", "Hoa Van Thanh", "Hoa Muoi Gio", "Hoa Dam But", "VietNam", "Lao", "Campuchia", "Myanmar", "ThaiLan"],
      filteredStates: [],
    };
  },

  methods: {
    filterStates() {
      if(this.state.length == 0) {
        this.filteredStates = this.states;
      }
      // this.filteredStates = this.states.filter((state) => {
      //   return state.toLowerCase().startsWith(this.state.toLowerCase());
      // });
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().includes(this.state.toLowerCase())
      })
    },
    setState(state) {
      this.state = state
      this.modal = false
    }
  },
  computed: {},
  mounted() {
    this.filterStates();
  },
  watch: {
    state() {
      this.filterStates();
    }
  }
};
</script>

