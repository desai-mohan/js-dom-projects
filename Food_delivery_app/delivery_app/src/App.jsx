import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
// rafce- shortcut to create a react arrow function component

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <Cart />,
        },
        {
          path: "placeorder",
          element: <PlaceOrder />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
};
export default App;
