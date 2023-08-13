import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

const SharedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default SharedLayout;
