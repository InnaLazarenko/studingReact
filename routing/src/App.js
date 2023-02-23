import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Error from "./pages/Error";

import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";

/* const routeDefenetions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<RootLayout />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
  </Route>
); */

//const router = createBrowserRouter(routeDefenetions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, //path: ''
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
