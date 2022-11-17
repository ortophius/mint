import { Background } from "../../shared/ui/components/layout";
import { Checkout } from "../../widgets/checkout/checkout";
import { DishList } from "../../widgets/dishlist/dislist";
import Header from "../../widgets/header/ui/header";
import { ListTitle } from "../../widgets/listtitle/listtitle";

const Home = () => {
  return (
    <Background>
      <Header />
      <ListTitle />
      <DishList />
      <Checkout />
    </Background>
  );
};

export default Home;
