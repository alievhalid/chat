import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "./Content";
import {loadContact} from "../redux/contact"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContact())
  }, [dispatch]);
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
