import { move, removeEntity, attackEntity } from "../rule";

export default {
  name: "AngryKuang",
  img: "/zombie/angry.png",
  create: function (entity) {
    entity.degree = 0;
    entity.xSpeed = 7;
    entity.ySpeed = 0;
    entity.lastCrack = Date.now();

    entity.tag.style.width = "90px";
    entity.tag.style.height = "90px";
  },
  update: function (entity, entitys) {
    move(entity, entity.xSpeed, entity.ySpeed);
    entity.degree += 12;
    entity.tag.style.transform = `rotate(${entity.degree}deg)`;

    if (
      entity.position.x > 1300 ||
      entity.position.y > 900 ||
      entity.position.y < 0
    )
      removeEntity(entity);

    entitys.forEach((zombie) => {
      if (
        zombie.type === 1 &&
        Math.abs(zombie.position.x - entity.position.x) < 50 &&
        Math.abs(zombie.position.y - entity.position.y) < 50
      ) {
        // 遍历所有僵尸，如果僵尸的位置和植物的位置相差小于400，那么移除僵尸
        entitys.forEach((z) => {
          if (
            z.type === 1 &&
            Math.abs(z.position.x - entity.position.x) < 200 &&
            Math.abs(z.position.y - entity.position.y) < 200
          )
            attackEntity(z);
        });
        const boom = document.createElement("img");
        boom.src = "/zombie/boom.jpg";
        boom.style.position = "absolute";
        boom.style.left = entity.position.x - 100 + "px";
        boom.style.top = entity.position.y - 100 + "px";
        boom.style.width = "200px";
        boom.style.height = "200px";
        document.getElementById("grass").appendChild(boom);

        const audio = document.createElement("audio");
        audio.src = "/zombie/sound/evillaugh.ogg";
        audio.autoplay = true;

        setTimeout(() => {
          document.getElementById("grass").removeChild(boom);
        }, 3000);

        removeEntity(entity);
      }
    });
  },
}
