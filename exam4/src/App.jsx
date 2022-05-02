import { Navigate, Route, Routes } from "react-router-dom";
import Restaurant from "./components/pages/restaurants/restaurant";
import { Box } from "@mui/system";
import Branches from "./components/pages/branches/Branches";
import Menu from './components/pages/menu/Menu';
import Admin from "./components/pages/admin/Admin";
import AdminRestaurant from './components/pages/admin/AdminRestaurants';
import AdminBranches from "./components/pages/admin/AdminBranches";
import AdminMenu from "./components/pages/admin/AdminFoods";
const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="admin" element={<Navigate to={`/admin/orders`} />} />
        <Route path="admin/orders" element={<Admin />} />
        <Route path="admin/restaurants" element={<AdminRestaurant />} />
        <Route path="admin/branches" element={<AdminBranches />} />
        <Route path="admin/foods" element={<AdminMenu />} />
        <Route path='branches/:id' element={<Branches/>}/>        
        <Route path='menu/:branchId' element={<Menu/>}/>        
      </Routes>
    </Box>
  );
};

export default App;
