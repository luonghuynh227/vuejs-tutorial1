<template>
  <div class="col-xl-8 col-sm-12 form-group">
    <div class="bg-logo d-flex">
      <div>
        <p class="product-screen-shot">Show Image</p>
        <div class="box-add-image">
          <label for="uploadScreens">
            <i class="icon ion-md-add-circle"> </i>
          </label>
          <input
            class="d-none"
            ref="uploadScreens"
            type="file"
            id="uploadScreens"
            accept="image/*"
            @change="uploadScreen"
          />
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex" v-for="(image, index) in images" :key="index">
          <div v-if="hasImage(image)" class="image">
            <img :src="image.url" alt="image-url" class="img-logo" />
          </div>
        </div>
      </div>
    </div>

    <demo-login-modal />
    <v-dialog
      @before-opened="dialogEvent('before-open')"
      @before-closed="dialogEvent('before-close')"
      @opened="dialogEvent('opened')"
      @closed="dialogEvent('closed')"
    />
    <button class="btn green" @click="$modal.show('demo-login')">
      Demo: Login
    </button>
  </div>
</template>
<script>
import CropImage from "../components/CropImage.vue";
import DemoLoginModal from "../components/Modal_Login.vue";
// import 'vue-js-modal/dist/styles.css'

export default {
  components: {
    CropImage,
    DemoLoginModal,
  },

  data() {
    return {
      images: [],
    };
  },

  methods: {
    uploadScreen(e) {
      let file = e.target.files[0];

      const data = URL.createObjectURL(file);
      this.$modal.show(
        CropImage,
        {
          imageUrl: data,
        },
        {
          width: 710,
          height: 560,
        },
        {
          "get-data": this.getData,
        }
      );
      this.$refs.uploadScreens.value = null;
    },
    getData(data) {
      this.listOfScreens.push({
        id: "",
        url: data,
      });
    },

    hasImage(screenShot) {
      return image.url;
    },
    show() {
      this.$modal.show("CropImage");
    },
    hide() {
      this.$modal.hide("CropImage");
    },
    conditionalShow() {
      this.$modal.show("conditional-modal", {
        show: this.canBeShown,
      });
    },
    showBasicDialog() {
      this.$modal.show("dialog", {
        text: "I am a tiny dialog box.<br/>And I render <b>HTML!</b>",
      });
    },
  },
  mounted() {
    // this.$modal.show('CropImage');
  },
};
</script>

