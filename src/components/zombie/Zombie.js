import { move, removeEntity, addEntity } from "./rule";

export const Zombie = {
  Babi: {
    name: "Babi",
    img: "/zombie/Babi.png",
    create: function (entity) {
      entity.tag.style.height = "100px";
    },
    update: function (entity) {
      move(entity, -0.5, 0);

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
  },
  AngryBabi: {
    name: "AngryBabi",
    img: "/zombie/AngryBabi.jpeg",
    create: function (entity) {
      entity.tag.style.height = "100px";
    },
    update: function (entity) {
      move(entity, -1, 0);

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
        entity: Zombie.Babi,
        position: {
          x: entity.position.x,
          y: entity.position.y,
        },
      };
      addEntity(NormalBabi);
      removeEntity(entity);
    },
  },
};
