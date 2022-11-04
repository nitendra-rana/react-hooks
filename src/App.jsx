import "./App.css";
import Navigation from "./Header/Navigation";
import UseContext from "./UseCotext/UseContext";
import UseEffect from "./useEffect/UseEffect";
import UseImperative from "./UseImperative/UseImperative";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./UseRef/UseRef";
import Usestate from "./useState/Usestate";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navigation />
      </div>
      <div className="items">
        <UseContext/>
        <Usestate />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseLayoutEffect/>
        <UseImperative/>
      </div>
    </div>
  );
}

export default App;
