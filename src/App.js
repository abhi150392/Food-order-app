import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Login from "./Components/Login";
import RestrauntMenu from "./Components/RestrauntMenu";
import ProfileClass from "./Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import Instamart from "./Components/Instamart";
import UserContext from "./Utils/UserContext";
/*import About from "./Components/About";
 */

// const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  //get data from API for user Authentication and display
  const [user, setUser] = useState({
    name: "Abhishek Vijayakumar",
  });

  // useEffect(); --APi and setting username to display

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    //We can use useContext anywhere we require in the APP
    /*  {
      /* <>
      <Header />
      <UserContext.Provider value={{ user: user }}>
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </> /
    } */
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About fallback={<h1>Loading....</h1>} />
          </Suspense>
        ),
        errorElement: <Error />,
        children: [
          //Nested Routing
          {
            path: "profileInfo",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
        /* element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ), */
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
