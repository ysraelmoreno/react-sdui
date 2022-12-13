import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Renderer from "./components/Renderer";
import api from "./service/api";
import GlobalStyles from "./styles/global";

const router = await (async () => {
  const { data } = await api.get("/config");

  const routerData = createBrowserRouter(
    data.urls.map((item: { label: string; path: string }) => ({
      path: item.path,
      element: <Renderer url={item.path} />,
    }))
  );

  return routerData;
})();

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
