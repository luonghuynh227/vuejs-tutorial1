<template>
  <div class="about">
    <h2>Contact US</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Your name"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="form.email"
        />
      </div>
      <div class="form-group">
        <label for="formControlRange">Gender</label><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender-male"
            value="male"
            v-model="form.gender"
          />
          <label class="form-check-label" for="gender">Male</label>
        </div>
        <div class="form-check form-check-inline" style="display: none">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender-female"
            value="female"
            v-model="form.gender"
          />
          <label class="form-check-label" for="gender">Female</label>
        </div>
      </div>
      <div class="form-group" style="display: none">
        <label for="refer">From where did you hear about us?</label>
        <select
          name="refer"
          class="form-control"
          id="refre"
          v-model="form.refer"
        >
          <option value="website">Website</option>
          <option value="newspaper">Newspaper</option>
          <option value="friend">Friend</option>
          <option value="online-ad">Online Ad</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group" style="display: none">
        <label for="exampleFormControlSelect2">You are a : </label>
        <select
          multiple
          class="form-control"
          id="exampleFormControlSelect2"
          v-model="form.profession"
        >
          <option value="developer">Developer</option>
          <option value="designer">Graphic Designer</option>
          <option value="manager">Manager</option>
          <option value="ceo">Company Head / CEO</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group" style="display: none">
        <label for="formControlRange"
          >Which of our service are you interested in?</label
        ><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="online"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox1"
            >Online Tests</label
          >
        </div>
        <div class="form-check form-check-inline" style="display: none">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="paper"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox2"
            >Paper Based Tests</label
          >
        </div>
        <div class="form-check form-check-inline" style="display: none">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="customized"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox3"
            >Customized Tests</label
          >
        </div>
      </div>
      <div class="form-group" style="display: none">
        <label for="message">Your message</label>
        <textarea
          name="message"
          class="form-control"
          id="message"
          rows="3"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="form-group" style="display: none">
        <label for="satisfaction"
          >How satisfied are you with our service?</label
        >
        <input
          type="range"
          name="satisfaction"
          class="form-control-range"
          id="formControlRange"
          min="0"
          max="10"
          v-model="form.satisfaction"
        />
      </div>
      <div class="form-group" style="display: none">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="terms"
            value="yes"
            v-model="form.terms"
          />
          <label class="form-check-label" for="inlineCheckbox3"
            >Agree to Terms & Conditions</label
          >
        </div>
      </div>
      <div v-if="this.form.fileAvatar">
        <img :src="this.form.fileAvatar" crossorigin style="width: 300px" />
        <button @click="removeImage">Remove image</button>
      </div>
      <div v-else>
        <!-- <input type="file" @change="onFileChange" /> -->
        <button @click="$refs.fileInput.click()" class="trigger">
          Choose image
        </button>
        <input
          style="display: none"
          type="file"
          ref="fileInput"
          @change="onFileChange"
        />
      </div>

      <div class="content">
        <section class="cropper-area">
          <div class="img-cropper">
            <vue-cropper
              ref="cropper"
              :aspect-ratio="16 / 9"
              :src="imgSrc"
              preview=".preview"
            />
          </div>
          <div class="actions">
            <a href="#" role="button" @click.prevent="zoom(0.2)"> Zoom In </a>
            <a href="#" role="button" @click.prevent="zoom(-0.2)"> Zoom Out </a>
            <a href="#" role="button" @click.prevent="move(-10, 0)">
              Move Left
            </a>
            <a href="#" role="button" @click.prevent="move(10, 0)">
              Move Right
            </a>
            <a href="#" role="button" @click.prevent="move(0, -10)">
              Move Up
            </a>
            <a href="#" role="button" @click.prevent="move(0, 10)">
              Move Down
            </a>
            <a href="#" role="button" @click.prevent="rotate(90)">
              Rotate +90deg
            </a>
            <a href="#" role="button" @click.prevent="rotate(-90)">
              Rotate -90deg
            </a>
            <a ref="flipX" href="#" role="button" @click.prevent="flipX">
              Flip X
            </a>
            <a ref="flipY" href="#" role="button" @click.prevent="flipY">
              Flip Y
            </a>
            <a href="#" role="button" @click.prevent="cropImage"> Crop </a>
            <a href="#" role="button" @click.prevent="reset"> Reset </a>
            <a href="#" role="button" @click.prevent="getData"> Get Data </a>
            <a href="#" role="button" @click.prevent="setData"> Set Data </a>
            <a href="#" role="button" @click.prevent="getCropBoxData">
              Get CropBox Data
            </a>
            <a href="#" role="button" @click.prevent="setCropBoxData">
              Set CropBox Data
            </a>
            <a href="#" role="button" @click.prevent="showFileChooser">
              Upload Image
            </a>
          </div>

          <textarea v-model="data" />
        </section>
        <section class="preview-area">
          <p>Preview</p>
          <div class="preview" />
          <p>Cropped Image</p>
          <div class="cropped-image">
            <img v-if="cropImg" :src="cropImg" alt="Cropped Image" />
            <div v-else class="crop-placeholder" />
          </div>
        </section>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>

    <button @click="toast">Toast it!</button>

    <!-- <vue-single-select
        v-model="fruit"
        :options="options"
        option-label="name"
        option-key="id"
        :required="true"
></vue-single-select> -->
    <VueSuggestion
      :items="items"
      v-model="item"
      :setLabel="setLabel"
      :itemTemplate="itemTemplate"
      @onInputChange="inputChange"
      @onItemSelected="itemSelected"
    >
    </VueSuggestion>
    <p>Choose: {{ this.fruit }}</p>
    <p>day now: {{ getCurrentdate }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

// toast
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

// dropdown search auto complete
// import VueSingleSelect from "vue-single-select";
import VueSuggestion from "vue-suggestion";
// import 'vue-suggestion/dist/vue-suggestion.css';

export default {
  components: {
    VueCropper,
    VueSuggestion,
    // VueSingleSelect
  },
  computed: {
    getCurrentdate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      today = dd + '/' + mm + '/' + yyyy;
      return today;
    }
  },
  setup() {
    const toast = () => {
      createToast(
        {
          title: "Thoong bao",
          description: "Vui long nhap username",
        },
        {
          position: "top-center",
          type: "warning",
        }
      );
    };
    return { toast };
  },
  data: () => {
    return {
      // dropdown complete
      item: {},
      items: [
        { id: 1, name: 'Golden Retriever'},
        { id: 2, name: 'Cat'},
        { id: 3, name: 'Squirrel'},
      ],
      itemTemplate: '',

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
      fruit: "",
      // fileAvatar: "",
      imgSrc: "./globe.png",
      cropImg: "",
      data: null,
      form: {
        name: "",
        email: "",
        gender: "",
        refer: "",
        profession: [],
        message: "",
        satisfaction: "5",
        interested: [],
        terms: false,
        fileAvatar: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/abc", this.form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          //Perform Success Action
          console.log(this.form);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(this.form);
        })
        .finally(() => {
          //Perform action in always
          console.log(this.form);
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.form.fileAvatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.form.fileAvatar = "";
    },

    // |||| dropdown auto complete
    // validateSelection(selection) {
    //   this.selected = selection;
    //   console.log(selection.name + " has been selected");
    // },
    // getDropdownValues(keyword) {
    //   console.log(
    //     "You could refresh options by querying the API with " + keyword
    //   );
    // },
    itemSelected (item) {
      this.item = item;
    },
    setLabel (item) {
      return item.name;
    },
    inputChange (text) {
      // your search method
      this.items = items.filter(item => item.name.contains(text));
      // now `items` will be showed in the suggestion list
    },

    // crop image ||||||||
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute("data-scale", scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute("data-scale", scale);
    },
    getCropBoxData() {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
    },
    getData() {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setCropBoxData() {
      if (!this.data) return;
      this.$refs.cropper.setCropBoxData(JSON.parse(this.data));
    },
    setData() {
      if (!this.data) return;
      this.$refs.cropper.setData(JSON.parse(this.data));
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
  },
};
</script>

