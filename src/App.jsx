import { useEffect, useState } from "react";
import "./App.scss";
import CustomRouter from './routes';
import Welcome from './components/Welcome/Welcome';

function App() {

  const [Loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 3000);
  }, [])

  return (
    <div className={"App " + (Loading ? "loading" : "")}>
      <Welcome Loading={Loading} />
      <CustomRouter />
    </div>
  );
}

export default App;
