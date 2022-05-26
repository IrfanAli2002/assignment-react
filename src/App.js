import React from "react";
import DrawerRouter from "./components/Drawer";
import AppRouter from "./config/router";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
    <AppRouter/>
    <Dashboard/>
  
    </>
  )
}

export default App;
