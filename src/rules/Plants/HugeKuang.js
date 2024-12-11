import { attackEntity, move, removeEntity } from "../rule";

export default {
  name: "HugeKuang",
  img: "/zombie/huge.png",
  create: function (entity) {
    entity.degree = 0;
    entity.xSpeed = 4;
    entity.ySpeed = 0;
    entity.lastCrack = Date.now();

    entity.tag.style.width = "200px";
    entity.tag.style.height = "200px";

    const audio = document.createElement("audio");
    audio.src = "/zombie/sound/crazydavecrazy.ogg";
    audio.autoplay = true;
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
        Math.abs(zombie.position.x - entity.position.x) < 200 &&
        Math.abs(zombie.position.y - entity.position.y) < 200 &&
        Date.now() - entity.lastCrack > 100
      ) {
        attackEntity(zombie);
        if (entity.ySpeed === 0) entity.ySpeed = 7;
        else entity.ySpeed = -entity.ySpeed;
        entity.lastCrack = Date.now();
        const audio = document.createElement("audio");
        audio.src = "/zombie/sound/bowlingimpact2.ogg";
        audio.autoplay = true;
      }
    });
  },
}
