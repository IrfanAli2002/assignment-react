import { Dashboard } from "@mui/icons-material";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Analysis from "../screens/Analysis";
import Profile from "../screens/Profile";

import SignUp from "../screens/signup";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
            {/* <Route to="/" element={<SignUp/>}/> */}
            <Route to="/dashboard/*" element={<Dashboard/>}/>
            <Route to="/profile" element={<Profile/>}/>
            <Route to="/analysis" element={<Analysis/>}/>
        </Routes>
      </div>
    </Router>
  )
}
        
