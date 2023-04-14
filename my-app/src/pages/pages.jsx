import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';
import Discount from '../components/discount/Discount';
import Shop from '../components/shop/Shop';
import Annocument from '../components/annocument/Annocument';
import Wrapper from '../components/wrapper/Wrapper';
import Footer from '../common/footer/Footer';
export default function pages({
  productItems,
  CartItem,
  addToCart,
  shopItems,
}) {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Annocument />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
      <Footer />
    </>
  );
}
