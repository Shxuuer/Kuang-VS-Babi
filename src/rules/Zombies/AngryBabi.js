import { move, removeEntity, addEntity } from "../rule";
import { Zombies } from "./index";

export default {
  name: "AngryBabi",
  img: "/zombie/AngryBabi.jpeg",
  create: function (entity) {
    entity.tag.style.height = "100px";
    entity.xspeed = -1.5;
    entity.yspeed = 0;
  },
  update: function (entity) {
    move(entity, entity.xspeed, entity.yspeed);

    if (entity.position.x < 0) {
      removeEntity(entity);
    }
  },
  remove: function () {
    console.log("die");
  },
  attack: function (entity) {
    const NormalBabi = {
      type: 1,
      entity: Zombies.Babi,
      position: {
        x: entity.position.x,
        y: entity.position.y,
      },
    };
    addEntity(NormalBabi);
    removeEntity(entity);
  },
}
