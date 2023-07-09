<template>
  <div id="screen" @click="onClickScreen" :class="state">{{ message }}</div>
  <div>
    <div>
      <h3>평균시간 {{}}</h3>
      <button @click="onReset">리셋 버튼</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작하세요",
    };
  },
  methods: {
    onReset() {},
    onClickScreen() {},
  },
};
</script>
<style scoped>
#screen {
  cursor: pointer;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  text-align: center;
  color: white;
  background-color: black;
}
#screen.waiting {
  background-color: rgb(48, 153, 153);
}
#screen.ready {
  background-color: red;
}
#screen.now {
  background-color: rgb(149, 206, 64);
}
</style>
