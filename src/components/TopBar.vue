<script>
import SingleCard from './SingleCard.vue'

export default {
  name: 'TopBar',
  components: {
    SingleCard,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
    selectCardIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:selectCardIndex'],
  data() {
    return {
      selectedCardIndex: -1,
    }
  },
  methods: {
    selectCard(index) {
      if (this.selectedCardIndex === index) {
        this.selectedCardIndex = -1
        document.onmousemove = null
      } else {
        this.selectedCardIndex = index
        // 立即更新dom
        this.$nextTick(() => {
          const curImg = document.getElementById('cur-img')
          curImg.style.left = event.clientX + 1 + 'px'
          curImg.style.top = event.clientY + 1 + 'px'
          // 鼠标移动时
          document.onmousemove = e => {
            const curImg = document.getElementById('cur-img')
            curImg.style.left = e.clientX + 1 + 'px'
            curImg.style.top = e.clientY + 1 + 'px'
          }
        })
      }
      this.$emit('update:selectCardIndex', this.selectedCardIndex)
    },
  },
  watch: {
    selectCardIndex(val) {
      this.selectedCardIndex = val
    },
  },
}
</script>

<template>
  <div id="bar">
    <SingleCard
      class="card"
      :type="card"
      :index="index"
      v-for="(card, index) in cards"
      :key="card.id"
      :selected="selectedCardIndex === index"
      @cardClick="selectCard"
    />

    <div
      v-if="selectedCardIndex !== -1"
      style="position: fixed; z-index: 9"
      id="cur-img"
    >
      <img :src="cards[selectedCardIndex].img" alt="card" class="card-img" />
    </div>
  </div>
</template>

<style scoped>
#bar {
  width: 745px;
  height: 100px;
  background-color: #2e2e2e;
  border: #e3e3e3 6px solid;
  border-top: none;
  display: flex;
  position: relative;
  gap: 5px;
  padding: 6px 5px 4px 5px;
}

.card {
  position: relative;
}

.card-img {
  width: 90px;
}
</style>
