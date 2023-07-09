<template lang="">
  <div>{{ first }}곱하기 {{ second }}는?</div>
  <form @submit="onSubmitForm">
    <input v-model="value" ref="answer" type="text" />
    <button>입력</button>
    <h1>결과 : {{ result }}</h1>
  </form>
</template>
<script>
export default {
  data() {
    return {
      /*구구단*/
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      let compareResult =
        this.first * this.second === Number(this.value) ? true : false;
      if (compareResult) {
        this.result = "정답!";
        setTimeout(() => {
          (this.first = Math.ceil(Math.random() * 9)),
            (this.second = Math.ceil(Math.random() * 9));
          this.value = "";
          this.result = "";
        }, 1500);
        this.$refs.answer.focus();
      } else {
        this.result = "오답 땡 ~~";
        this.$refs.answer.focus();
      }
    },
  },
};
</script>
<style lang=""></style>
