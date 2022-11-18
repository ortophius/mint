import { useEffect, useLayoutEffect } from "react";
import { fetchCart } from "../../feature/cart/model";
import { useAppDispatch } from "../../shared/config/store";
import { Background } from "../../shared/ui/components/layout";
import { CartList } from "../../widgets/cartlist/cartlist";
import { Checkout } from "../../widgets/checkout/checkout";
import Header from "../../widgets/header/ui/header";

export const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchCart());

  return (
    <Background>
      <Header />
      <CartList />
      <Checkout />
    </Background>
  );
};
