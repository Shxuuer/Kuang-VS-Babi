import { ROW, addEntity } from './rule'
import { Zombie } from './Zombie'

let lastSpawn = Date.now()

export const Map = {
  create: function () {},
  update: function () {
    // 随机一个概率为0.1的数
    if (Math.random() < 0.02 && Date.now() - lastSpawn > 3000) {
      lastSpawn = Date.now()
      if (Math.random() < 0.4) {
        const zombie = {
          type: 1,
          entity: Zombie.AngryBabi,
          position: {
            x: 1250,
            y: ROW[Math.floor(Math.random() * 5)],
          },
        }
        addEntity(zombie)
        return
      }
      // 创建一个僵尸
      const zombie = {
        type: 1,
        entity: Zombie.Babi,
        position: {
          x: 1250,
          y: ROW[Math.floor(Math.random() * 5)],
        },
      }
      addEntity(zombie)
    }
  },
}
