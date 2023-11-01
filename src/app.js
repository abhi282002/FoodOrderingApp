import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
const root = ReactDOM.createRoot(document.querySelector(".root"));
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
const ResturantMenu = lazy(() => import("./components/ResturantMenu"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Abhishek Sharma",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        {/* Default Value */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {/*  Abhishek Sharma */}

          {/*  Elon Musk  */}
          <Header></Header>

          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>*/}
          <Outlet />
          {/* </UserContext.Provider>*/}
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/helps",
        element: <Help></Help>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "resturants/:resId",
        element: (
          <Suspense>
            <ResturantMenu></ResturantMenu>
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={AppRouter} />);
