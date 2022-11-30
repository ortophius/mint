import { v4 } from "uuid";
import { faker } from "@faker-js/faker";

type Item = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  categoryId: string;
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const categoryNames = [
  "Горячее",
  "Закуски",
  "Салаты",
  "Кофе и чай",
  "Холодные напитки",
  "Бар",
];

export const categories = categoryNames.map((name) => ({
  id: v4(),
  name,
}));

export const items = categories.reduce<Item[]>((acc, category) => {
  for (let i = 0; i < random(1, 15); i += 1) {
    acc.push({
      id: v4(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.food(),
      categoryId: category.id,
    });
  }
  return acc;
}, []);
