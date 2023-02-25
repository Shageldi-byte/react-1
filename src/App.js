import "./App.css";
import CustomHook from "./lesson/CustomHook";
import Hook from "./hook/Hook";
import Pagination from "./component/Pagination";
import Props from "./component/Props";
import React, { createContext, useState } from "react";
import Second from "./component/Second";
import StyledComponent, { MyHref } from "./lesson/StyledComponent";
import SwithButton from "./DarkLight/SwithButton";
import Text from "./DarkLight/Text";
import UseCallbackEg from "./lesson/UseCallbackEg";
import UseMemo from "./lesson/UseMemo";
import UseReducerEg from "./lesson/UseReducerEg";
import UseRefEg from "./lesson/UseRefEg";
import { Mode } from "./common/utils";

export const AppContext = createContext();

const darkColor = {
  background: "#1C1824",
  text: "#FFFFFF",
  activeButton:"#322B41",
  passiveButton:"#110E14"
}

const lightColor = {
  background: "#FFFFFF",
  text: "#000000",
  activeButton:"#00B061",
  passiveButton:"#D3DCE2"
}


function App() {
  const [mode,setMode] = useState(Mode.LIGHT);
  const colors = {
    ...mode===Mode.DARK ? darkColor: lightColor
  };

  

 
  return (
    <AppContext.Provider value={{
      colors: colors,
      mode: mode,
      setMode: setMode
    }}>
      <div className="App" style={{backgroundColor: colors.background}}>
        <StyledComponent/>
        <MyHref color="blue" href="#">Click</MyHref>
      </div>
    </AppContext.Provider>
  );
}

export default App;
