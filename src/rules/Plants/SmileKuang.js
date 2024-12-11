import { move, removeEntity, attackEntity } from "../rule";

export default {
  name: "SmileKuang",
  img: "/zombie/smile.png",
  create: function (entity) {
    entity.degree = 0;
    entity.xSpeed = 7;
    entity.ySpeed = 0;
    entity.lastCrack = Date.now();

    entity.tag.style.width = "90px";
    entity.tag.style.height = "90px";
    const audio = document.createElement("audio");
    audio.src = "/zombie/sound/crazydaveextralong1.ogg";
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
        Math.abs(zombie.position.x - entity.position.x) < 50 &&
        Math.abs(zombie.position.y - entity.position.y) < 50 &&
        Date.now() - entity.lastCrack > 300
      ) {
        if (entity.ySpeed === 0) entity.ySpeed = 7;
        else entity.ySpeed = -entity.ySpeed;
        entity.lastCrack = Date.now();
        attackEntity(zombie);
        // 播放声音
        const audio = document.createElement("audio");
        audio.src = "/zombie/sound/bowlingimpact.ogg";
        audio.autoplay = true;
      }
    });
  },
}
