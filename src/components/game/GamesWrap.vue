<template>
  <div>
    <RockScissorsPaper />
    <ReactionRate />
    <Gugudan />
    <Wordrelay />
    <Bullsandcows />
  </div>
</template>
<script>
import Wordrelay from "./WordrelayGame/WordrelayGame.vue";
import Gugudan from "./GugudanGame/GugudanGame.vue";
import Bullsandcows from "./BullsandCowsGame/BullsandCowsGame.vue";
import ReactionRate from "./ReactionRateGame/ReactionRateGame.vue";
import RockScissorsPaper from "./RockScissorsPaperGame/RockScissorsPaperGame.vue";
export default {
  components: {
    Wordrelay: Wordrelay,
    Gugudan: Gugudan,
    Bullsandcows: Bullsandcows,
    ReactionRate: ReactionRate,
    RockScissorsPaper: RockScissorsPaper,
  },
};
</script>
<style></style>
