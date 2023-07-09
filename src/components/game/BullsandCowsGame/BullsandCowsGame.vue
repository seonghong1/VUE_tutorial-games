<template>
  <div>숫자야구</div>
  <form @submit.prevent="onSubmit">
    <input ref="input" type="text" maxlength="4" v-model="value" />
    <button>입력</button>
  </form>
  <div>시도한 횟수 : {{ tries.length }}</div>
  <ul>
    <li v-for="(t, i) in tries" :key="i">
      <div>{{ t.try }}</div>
      <div>{{ t.result }}</div>
    </li>
  </ul>
</template>
<script>
function getNumbers() {
  const ary = [];
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 4; i++) {
    ary.push(candidate[Math.ceil(Math.random() * 10) - 1]);
  }
  return ary;
}
export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런입니다 ~~",
        });
        alert("게임을 다시 시작합니다.");
        this.answer = getNumbers();
        this.tries = [];
        this.value = "";
      } else {
        if (this.tries.length >= 10) {
          alert(`게임에 패배하셨습니다 ㅜ 정답은 ${this.answer.join(",")}`);
          (this.answer = getNumbers()), (this.tries = []), (this.value = "");
          return;
        }
        let striek = 0;
        let ball = 0;

        const valueArray = this.value.split("").map((i) => parseInt(i));
        for (let i = 0; i < this.answer.length; i++) {
          if (valueArray[i] === this.answer[i]) {
            striek++;
          } else if (this.answer.includes(valueArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${striek} 스트라이크 / ${ball}볼 입니다.`,
        });
      }
      this.value = "";
      this.$refs.input.focus();
    },
  },
};
</script>
<style></style>
