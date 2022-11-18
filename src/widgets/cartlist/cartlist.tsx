import { useCallback, useEffect, useLayoutEffect } from "react";
import { fetchCart } from "../../feature/cart/model";
import { CartListItem } from "../../feature/cartlistitem/cartlistitem";
import { getCart } from "../../shared/api/modules/menu";
import { useAppDispatch, useAppSelector } from "../../shared/config/store";
import { isClient } from "../../shared/lib/isClient";
import { promises } from "../../shared/lib/promises";
import styles from "./cartlist.module.scss";

const testData = [
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://flyclipart.com/thumbs/tex-mex-chicken-wings-pepper-noodles-1223290.png",
  },
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
];

export const CartList = () => {
  const items = useAppSelector((state) => state.sync.cart);

  return (
    <div className={styles.wrapper}>
      <h1>Ваш заказ:</h1>
      {items.map((item) => (
        <CartListItem key={item.id} menuItem={item} />
      ))}
    </div>
  );
};
