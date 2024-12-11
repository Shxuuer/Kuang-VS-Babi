<script>
import { addEntity, COL, ROW } from "@/rules/rule";

export default {
  name: "GrassGrid",
  props: {
    selectedCard: {
      type: Object,
    },
  },
  emits: ["plant"],
  data() {
    return {};
  },
  methods: {
    handleClick(index) {
      if (this.selectedCard === undefined) return;
      this.$emit("plant");
      // 生成植物
      addEntity({
        type: 0,
        entity: this.selectedCard,
        position: {
          x: COL[index % 9],
          y: ROW[Math.floor(index / 9)],
        },
      });
    },
  },
};
</script>

<template>
  <div id="grass">
    <div id="table">
      <div
        v-for="i in 45"
        :key="i"
        class="block"
        @click="handleClick(i - 1)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
#grass {
  width: 100%;
  height: 100%;
  position: absolute;
}

#table {
  z-index: 10;
  height: 655px;
  width: 1000px;
  position: absolute;
  top: 110px;
  left: 170px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

.block {
  /* border: red 1px solid; */
}
</style>
