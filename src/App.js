import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import appStore from "./utils/appStore";

function App() {

  return (
    <div className="flex">
      <Provider store={appStore}>
      <SideBar/>
      <MainContainer/>
      </Provider>
    </div>
  );
}

export default App;
