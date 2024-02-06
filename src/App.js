import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import appStore from "./utils/appStore";

function App() {

  return (
    <div className="flex">
      <Provider store={appStore}>
      <img src="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="backgroundImage"
      className='w-screen absolute -z-10'/>
      <SideBar/>
      <MainContainer/>
      </Provider>
    </div>
  );
}

export default App;
