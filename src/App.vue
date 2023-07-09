<template>
  <div class="nav">
    <a href="" v-for="(Nav_menu, i) in Nav_menus" :key="i">{{ Nav_menu }}</a>
  </div>
  <div>
    <h4 :style="h4Color">{{ name }}</h4>
    <p>{{ price }}</p>
  </div>
  <ul>
    <li class="list_item" v-for="(product, i) in products" :key="product">
      <div @click="toggle_modal(product)" class="wrap">
        <img :src="product.image" alt="" />
        <h3>{{ i }}. {{ product.content }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button @click="add_count(product)" class="report_btn">
        허위매물신고
      </button>
      <span>신고수 : {{ product.report_count }}</span>
    </li>
  </ul>

  <div v-if="modal_state" class="modal_wrap">
    <div class="modal_inner">
      <button @click="toggle_modal">close</button>
      <img :src="modal_content.image" alt="" />
      <h4>{{ modal_content.title }}</h4>
      <p>{{ modal_content.description }}</p>
    </div>
  </div>
  <GamesWrap />
</template>

<script>
import products from "./assets/data";
import GamesWrap from "./components/game/GamesWrap.vue";

export default {
  name: "App",
  data() {
    return {
      modal_state: false,
      modal_content: { title: "", description: "", image: "" },
      Nav_menus: ["Home", "Products", "About"],
      products,
    };
  },
  methods: {
    add_count(product) {
      product.report_count += 1;
    },
    toggle_modal(product) {
      if (product) {
        this.modal_content.title = product.content;
        this.modal_content.description = product.price;
        this.modal_content.image = product.image;
      }
      this.modal_state = !this.modal_state;
    },
  },
  components: {
    GamesWrap: GamesWrap,
  },
};
</script>

<style>
.modal_wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.modal_inner {
  width: 500px;
  height: 500px;
  background-color: white;
}
.modal_wrap img {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nav {
  display: flex;
  gap: 30px;
  justify-content: center;
  background-color: black;
  padding: 20px 0;
  border-radius: 20px;
}
.nav a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.report_btn {
  background-color: red;
  color: white;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 5px 10px;
}
.list_item {
  margin-bottom: 50px;
}
.list_item img {
  widows: 100%;
}
</style>
