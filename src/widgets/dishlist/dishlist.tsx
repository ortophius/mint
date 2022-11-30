import { categoriesSelector } from "../../entities/categories/model";
import {
  displayItemsSelector,
  displayItemsSlice,
  loadDefaultItems,
} from "../../entities/items/model";
import { Card } from "../../feature/card/card";
import { useAppSelector } from "../../shared/config/store";
import { withAsyncThunk, withSlice } from "../../shared/lib/hocs";
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

const DishListComponent = () => {
  const dishes = useAppSelector(displayItemsSelector);

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

export const DishList = withSlice(
  withAsyncThunk(DishListComponent, loadDefaultItems),
  displayItemsSlice
);
