import { v4 } from "uuid";
import { Card } from "../../feature/card/card";
import { useAppSelector } from "../../shared/config/store";
import { useAsyncModel } from "../../shared/lib/useAysyncModel";
import styles from "./dishlist.module.scss";
import { dishListModel } from "./model";

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
  {
    title: "Ризотто с курицей и овощами",
    description: "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    price: 3999,
    img: "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
];

export const DishList = () => {
  const { sliceSelector } = useAsyncModel({
    model: dishListModel,
    fetchParam: v4(),
    ssr: true,
  });

  const dishes = useAppSelector(sliceSelector);

  return (
    <div className={styles.wrapper}>
      {dishes.map((item) => {
        return (
          <div className={styles.item}>
            <Card key={item.id} data={item} />
          </div>
        );
      })}
    </div>
  );
};
