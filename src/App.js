import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "@components/SharedLayout/SharedLayout";

function App() {
  const Home = lazy(() => import("@pages/HomePage"));
  const NotFound = lazy(() => import("@pages/NotFoundPage"));
  const Cart = lazy(() => import("@pages/CartPage"));
  const Projects = lazy(() => import("@pages/ProjectsPage"));
  const Shop = lazy(() => import("@pages/ShopPage"));
  const Services = lazy(() => import("@pages/ServicesPage"));
  const About = lazy(() => import("@pages/AboutPage"));
  const Blog = lazy(() => import("@pages/BlogPage"));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
