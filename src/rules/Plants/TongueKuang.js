import { move } from "../rule";

export default {
  name: "LightKuang",
  img: "/zombie/TongueKuang.jpg",
  create: function (entity) {
    entity.tag.style.width = "90px";
    entity.tag.style.height = "90px";

    entity.tag.zIndex = 1;
  },
  update: function (entity, entitys) {
    // 遍历周围的90的所有僵尸
    entitys.forEach((zombie) => {
      if (
        zombie.type === 1 &&
        Math.abs(zombie.position.x - entity.position.x) < 90 &&
        Math.abs(zombie.position.y - entity.position.y) < 90
      ) {
        move(zombie, -zombie.xspeed / 2.5, 0);
      }
    });
  }
}
