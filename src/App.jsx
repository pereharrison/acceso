import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";
import Products from "./pages/Products";
const App = () => {
  return (
    <>
     <Routes>
        <Route element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="products" element={<Products />}/>
        </Route>
     </Routes>
    </>
  );
};

export default App;
