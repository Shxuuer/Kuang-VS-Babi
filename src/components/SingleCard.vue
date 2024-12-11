<script>
export default {
  name: "SingleCard",
  props: {
    type: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("cardClick", this.index);
    },
  },
  emits: ["cardClick"],
};
</script>
<template>
  <div class="card" @click="handleClick">
    <div class="filter" v-if="selected"></div>
    <img :src="type.img" alt="card" class="card-img" />
  </div>
</template>

<style scoped>
.card {
  height: 100px;
  width: 70px;
  background-color: #fff;
  background: url(/zombie/SeedPacket_Larger.png) no-repeat center center;
  background-size: cover;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  transition: 1s;
}

.card-img {
  width: 60px;
  margin: 10px 5px;
  position: relative;
}

.filter {
  height: 100px;
  width: 70px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
}
</style>
