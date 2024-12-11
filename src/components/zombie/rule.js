// {
//   type: 0,
//   entity: Object
//   position: {
//     x: 0,
//     y: 0
//   },
//   tag: Object
// }
import { Map } from "./Map";
let entitys = [];

function configWindow() {
  document.body.ondrag = () => {
    return false;
  };
}

export function addEntity(entity) {
  // 生成uuid
  entity.id = Math.random().toString(36).slice(2);

  const plant = document.createElement("img");
  plant.src = entity.entity.img;
  plant.id = entity.id;
  plant.style.position = "absolute";
  plant.style.left = entity.position.x + "px";
  plant.style.top = entity.position.y + "px";
  document.getElementById("grass").appendChild(plant);
  entity.tag = plant;

  entitys.push(entity);
  if (entity.entity.create) entity.entity.create(entity, entitys);
}

export function removeEntity(entity) {
  if (entity.entity.remove) entity.entity.remove(entity, entitys);
  entitys = entitys.filter((item) => item !== entity);
  document.getElementById("grass").removeChild(entity.tag);
}

export function attackEntity(entity) {
  if (entity.entity.attack) entity.entity.attack(entity, entitys);
}

export function startGame() {
  Map.create(entitys);
  setInterval(() => {
    entitys.forEach((entity) => {
      if (entity.entity.update) entity.entity.update(entity, entitys);
    });
    Map.update(entitys);
  }, 30);
}

export function move(entity, x, y) {
  entity.position.x += x;
  entity.position.y += y;
  entity.tag.style.left = entity.position.x + "px";
  entity.tag.style.top = entity.position.y + "px";
}

export const ROW = [120, 251, 382, 513, 644];

export const COL = [180, 291, 402, 513, 624, 735, 846, 957, 1068];
