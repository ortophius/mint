import express from "express";
import { categories, items } from "./data";

export const routerV1 = express.Router();

routerV1.get("/categories", (_, res) => res.send(JSON.stringify(categories)));

routerV1.get("/category/:id", (req, res) => {
  const { id } = req.params;

  const category = categories.find((item) => item.id === id);

  if (typeof category === "undefined") {
    res.statusCode = 404;
    res.send("No such category");
  }

  res.send(JSON.stringify(category));
  console.log(1);
});

routerV1.get("/items/:categoryId", (req, res) => {
  const { categoryId } = req.params;
  const categoryItems = items.filter((item) => item.categoryId === categoryId);

  res.send(JSON.stringify(categoryItems));
});

routerV1.get("/items/", (_, res) => {
  const categoryItems = items.filter(
    (item) => item.categoryId === categories[0].id
  );

  res.send(JSON.stringify(categoryItems));
});

routerV1.get("/item/:id", (req, res) => {
  const { id } = req.params;
  const item = items.find((currentItem) => currentItem.id === id);

  if (typeof item === "undefined") {
    res.statusCode = 404;
    res.send("No such item");
  }

  res.send(JSON.stringify(item));
});
