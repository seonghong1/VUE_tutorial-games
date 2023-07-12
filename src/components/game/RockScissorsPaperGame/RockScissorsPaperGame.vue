<!--라이프사이클 -->
<template>
  <div>
    <h1>가위바위보 게임</h1>
    <div id="computer" :style="computerImageObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <p>{{ result }}</p>
    <p>현재 : {{ score }}점</p>
  </div>
</template>
<script>
let interval;

export default {
  data() {
    return {
      imageCode: "0",
      result: "",
      score: 0,
    };
  },
  computed: {
    computerImageObject() {
      console.log("imagecode area : ", this.imageCode);
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCode} 0`,
      };
    },
  },
  methods: {
    winOrLose(myChoice) {
      let myChoiceValue;
      if (myChoice == "바위") {
        myChoiceValue = "0";
      } else if (myChoice == "가위") {
        myChoiceValue = "-140";
      } else {
        myChoiceValue = "-280";
      }

      if (myChoice == myChoiceValue) {
        return 0;
      } else if (myChoice) {
        myChoice;
      }
    },
    changeHand() {
      interval = setInterval(() => {
        if (this.imageCode == "0") {
          this.imageCode = "-140";
        } else if (this.imageCode == "-140") {
          this.imageCode = "-280";
        } else if (this.imageCode == "-280") {
          this.imageCode = "0";
        }
      }, 1000);
    },
    onClickButton(choice) {
      choice;
      clearInterval(interval);
    },
    changeImageCode() {},
  },
  // 컴포넌트가 내부적으로 생성이되고 뷰에 보여지기 이전(데이터들이 다 준비될때, script내부 로직을 계산하고 html에 사용되는 값을 넣음),
  created() {},
  // 컴포넌트가 생성되고 뷰에 보일때
  mounted() {
    this.changeHand();
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    clearInterval(interval);
  },
  unmounted() {
    console.log("unmounted  ");
  },
};
</script>
<style>
#computer {
  width: 140px;
  height: 200px;
}
</style>
