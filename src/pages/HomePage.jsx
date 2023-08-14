import Hero from "@components/Home/Hero/Hero";
import InfoCards from "@components/Home/InfoCards/InfoCards";
import About from "@components/Home/About/About";
import Testimonial from "@components/Home/Testimonial/Testimonial";
import Offer from "@components/Home/Offer/Offer";
import EcoFriendly from "@components/Home/EcoFriendly/EcoFriendly";
import Gallery from "@components/Home/Gallery/Gallery";
import News from "@components/Home/News/News";
import Products from "@components/Products/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/operations";
import { selectProducts, selectIsLoadind } from "../redux/selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoadind);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <InfoCards />
      <About />
      <Products products={products} />
      <Testimonial />
      <Offer />
      <EcoFriendly />
      <Gallery />
      <News />
    </>
  );
};

export default HomePage;
