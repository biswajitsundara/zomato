import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header/Header";
import Body from "./src/components/body/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./src/components/help/Help";
import Error from "./src/components/error/Error";
import RestaurantMenu from "./src/components/RestaurantMenu/RestaurantMenu";
//import Grocery from "./src/components/grocery/Grocery";
import { Provider } from "react-redux";
import appStore from './src/utils/appStore'

const Grocery = lazy(() => import("./src/components/grocery/Grocery"));

const App = () => {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
  // {
  //   path: "/help",
  //   element: <Help />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
