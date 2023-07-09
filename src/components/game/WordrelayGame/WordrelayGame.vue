<template>
  <div>
    <h1>끝말 잇기</h1>
    <formComponent startWord="아메리카노" />
    <formComponent startWord="딸기주스" />
    <formComponent startWord="돼지바" />
  </div>
</template>
<script>
import formComponent from "./formComponent.vue";

export default {
  components: {
    formComponent: formComponent,
  },
};
</script>
<style></style>
