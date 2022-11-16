import { Card, Dish } from '../../feature/card/card';
import styles from './dishlist.module.scss';

const testData:Dish[] = [
  {
    "title": "Ризотто с курицей и овощами",
    "description": "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    "price": 3999,
    "img": "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    "title": "Ризотто с курицей и овощами",
    "description": "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    "price": 3999,
    "img": "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    "title": "Ризотто с курицей и овощами",
    "description": "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    "price": 3999,
    "img": "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    "title": "Ризотто с курицей и овощами",
    "description": "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    "price": 3999,
    "img": "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  },
  {
    "title": "Ризотто с курицей и овощами",
    "description": "блюдо итальянской кухни из риса, с мягким, сливочным вкусом.",
    "price": 3999,
    "img": "https://p.kindpng.com/picc/s/654-6542627_best-steak-in-cheshire-food-in-plate-top.png",
  }
]

export const DishList = () => {
  return (
    <div className={styles.wrapper}>
      {
        testData.map(item => {
          return (
            <div className={styles.item}>
              <Card 
                id={Date.now()}
                title={item.title}
                descr={item.description}
                img={item.img}
                price={item.price}
              />
            </div>
          )
        })
      }
    </div>
  );
}