import { categoriesSlice } from "../../entities/categories/model";
import { fetchCart } from "../../feature/cart/model";
import { withAsyncThunk, withSlice } from "../../shared/lib/hocs";
import { Background } from "../../shared/ui/components/layout";
import { CartList } from "../../widgets/cartlist/cartlist";
import { Checkout } from "../../widgets/checkout/checkout";
import Header from "../../widgets/header/ui/header";

const CheckoutLayout = () => {
  return (
    <Background>
      <Header />
      <CartList />
      <Checkout />
    </Background>
  );
};

export const CheckoutPage = withSlice(
  withAsyncThunk(CheckoutLayout, fetchCart),
  categoriesSlice
);
