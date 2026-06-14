import React from "react";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";

const App = () => {
  return (
    <>
     <Routes>
        <Route element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="message" element={<Message/>}/>
        </Route>
     </Routes>
    </>
  );
};

export default App;
