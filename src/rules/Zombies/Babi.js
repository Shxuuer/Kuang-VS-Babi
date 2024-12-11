import { move, removeEntity } from "../rule";

export default {
  name: "Babi",
  img: "/zombie/Babi.png",
  create: function (entity) {
    entity.tag.style.height = "100px";
    entity.xspeed = -0.5;
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
    removeEntity(entity);
  },
}
