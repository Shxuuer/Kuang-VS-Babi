<script>
import TopBar from "@/components/TopBar.vue";
import GrassGrid from "@/components/GrassGrid.vue";
import { Plants } from "@/rules/Plants/index.js";
import { startGame } from "@/rules/rule";

export default {
  name: "ZombiePage",
  components: {
    TopBar,
    GrassGrid,
  },
  data() {
    return {
      selectedCardIndex: -1,
      titleOpen: false,
      gameStarted: false,
      cards: [],
    };
  },
  methods: {
    handlePlant() {
      this.cards.splice(this.selectedCardIndex, 1);
      this.selectedCardIndex = -1;
      document.onmousemove = null;
    },
    handleStartGame() {
      const audio = document.createElement("audio");
      audio.src = "/zombie/sound/awooga.ogg";
      audio.autoplay = true;

      this.gameStarted = true;
      this.titleOpen = true;

      setTimeout(() => {
        const audio = document.createElement("audio");
        audio.src = "/zombie/sound/GrasswalkPvZ1.ogg";
        audio.autoplay = true;
        audio.loop = true;
        startGame();
        this.titleOpen = false;
      }, 4000);

      setInterval(() => {
        if (this.cards.length >= 10) return;
        const cards = Object.values(Plants);
        const card = cards[Math.floor(Math.random() * cards.length)];
        this.cards.push(card);
      }, 8000);
    },
  },
};
</script>
<template>
  <div id="window">
    <div
      v-if="!gameStarted"
      @click="handleStartGame"
      class="start"
      style="background-color: pink"
    >
      守护矿建
    </div>
    <div
      v-if="titleOpen"
      class="start"
      style="color: brown; font-weight: bolder; font-size: 3em"
    >
      一大波芭比正在接近
    </div>
    <TopBar
      v-if="gameStarted"
      id="bar"
      :cards="cards"
      v-model:selectCardIndex="selectedCardIndex"
    ></TopBar>
    <GrassGrid
      v-if="gameStarted"
      :selectedCard="cards[selectedCardIndex]"
      @plant="handlePlant"
    ></GrassGrid>
  </div>
</template>

<style scoped>
#window {
  margin: auto;
  margin-top: 90px;
  width: 1300px;
  height: 800px;
  background: url(/zombie/bg.jpg) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

#bar {
  position: absolute;
}

.start {
  border-radius: 30px;
  width: 300px;
  height: 100px;
  font-size: 30px;
  position: absolute;
  top: 300px;
  text-align: center;
  line-height: 100px;
  color: #3e3e3e;
  z-index: 100;
}
</style>
