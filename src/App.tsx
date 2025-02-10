import "./styles/App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./styles/App.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
