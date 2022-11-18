import { CartListItem } from "../../feature/cartlistitem/cartlistitem";
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
  return (
    <div className={styles.wrapper}>
      <h1>Ваш заказ:</h1>
      {testData.map((item) => (
        <CartListItem key={Date.now()} data={item} />
      ))}
    </div>
  );
};
