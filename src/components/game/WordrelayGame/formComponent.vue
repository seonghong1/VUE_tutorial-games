<template lang="">
  <p>현재 스코어 : {{ score }} / 남은 목숨 : {{ life }}</p>
  <h3>{{ word }}</h3>
  <form @submit="formSubmit">
    <input type="text" v-model="value" ref="wordInput" />
    <button>입력</button>
    <p>{{ result }}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      word: this.startWord,
      value: "",
      result: "",
      score: 0,
      life: 3,
    };
  },
  props: {
    startWord: {
      type: String,
      required: true,
    },
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      const currrentLastWord = this.word.charAt(this.word.length - 1);
      const futurefirstWord = this.value.charAt(0);

      const compareResult = currrentLastWord === futurefirstWord ? true : false;

      if (compareResult) {
        this.word = this.value;
        this.value = "";
        this.result = "정답이에요 ~ 계속 진행해주세요 ~~!";
        this.score++;
      } else {
        this.value = "";
        this.result = "땡 !! 다시한번 생각해보세요 ~";
        this.life--;
      }
    },
  },
  components: {},
};
</script>
<style lang=""></style>
