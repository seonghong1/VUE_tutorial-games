<template>
  <div id="screen" @click="onClickScreen" :class="state">{{ message }}</div>
  <div>
    <template v-if="result.lengt != 0">
      <h3>평균시간 {{ average }}ms</h3>
      <button @click="onReset">리셋 버튼</button>
    </template>
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
  // data의 요소를 가공할때 사용, 값이 캐싱이 되어서 리랜더링시에 불필요한 개산을 x, 성능적 개선
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    },
  },
  methods: {
    getAverage() {
      let total = 0;
      if (this.result.length > 0) {
        this.result.map((i) => {
          total += i;
        });
        total = total / this.result.length;
      }
      return total;
    },
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      const timeout = setTimeout(() => {
        this.state = "now";
        this.message = "지금 클릭하세요 !";
        startTime = new Date();
      }, Math.random() * 1000 + 2000);

      let startTime = 0;
      let endTime = 0;

      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "파란색이 되면 클릭하세요";
        timeout;
      } else if (this.state === "ready") {
        clearTimeout(timeout);
        this.state = "waiting";
        this.message = "너무 성급하시네요 ! 파란색이 되면 클릭하세요 !";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭해서 시작하세요";
        this.result.push(endTime - startTime);
        console.log(this.result);
      }
    },
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
  background-color: red;
}
#screen.ready {
  background-color: green;
}
#screen.now {
  background-color: blue;
}
</style>
