import { Background } from "../../shared/ui/components/layout";
import { CartList } from "../../widgets/cartlist/cartlist";
import { Checkout } from "../../widgets/checkout/checkout";
import Header from "../../widgets/header/ui/header";

export const CheckoutPage = () => {
  return (
    <Background>
      <Header />
      <CartList />
      <Checkout />
    </Background>
  );
};
