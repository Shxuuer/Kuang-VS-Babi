import { removeEntity, attackEntity } from "../rule";

export default {
  name: "LightKuang",
  img: "/zombie/light.png",
  create: function (entity, entitys) {
    entity.tag.src = "/zombie/smile.png";
    entity.tag.style.width = "90px";
    entity.tag.style.height = "90px";
    // 播放声音
    const audio = document.createElement("audio");
    audio.src = "/zombie/sound/bungee_scream3.ogg";
    audio.autoplay = true;

    setTimeout(() => {
      entity.tag.src = "/zombie/light.png";

      const boom = document.createElement("img");
      boom.src = "/zombie/light_light.png";
      boom.style.position = "absolute";
      boom.style.left = entity.position.x + 50 + "px";
      boom.style.top = entity.position.y + "px";
      boom.style.width = "1000px";
      boom.style.height = "100px";
      document.getElementById("grass").appendChild(boom);

      entitys.forEach((zombie) => {
        if (
          zombie.type === 1 &&
          Math.abs(zombie.position.y - entity.position.y) < 50 &&
          zombie.position.x - entity.position.x > 0
        )
          attackEntity(zombie);
      });

      setTimeout(() => {
        removeEntity(entity);
        document.getElementById("grass").removeChild(boom);
      }, 1000);
    }, 1500);
  },
}
