import { useEffect, useState } from "react";
import "./App.scss";
import CustomRouter from "./routes";
import Welcome from "./components/Welcome/Welcome";
import MobileNavbar from "./mobile/Navbar/MobileNavbar";
import Menu from "./mobile/Menu/Menu";
import { register } from "swiper/element/bundle";

function App() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    register();
  }, []);

  const [MenuOpened, setMenuOpened] = useState(false);

  return (
    <div
      className={
        "App " + (Loading ? "loading" : "") + (MenuOpened ? "menuOpened" : "")
      }
    >
      <MobileNavbar MenuOpened={MenuOpened} setMenuOpened={setMenuOpened} />
      <Menu MenuOpened={MenuOpened} setMenuOpened={setMenuOpened} />
      <Welcome Loading={Loading} />
      <CustomRouter />
    </div>
  );
}

export default App;
