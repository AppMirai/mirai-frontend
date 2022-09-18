import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/form/Form";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
        <div className="topbar">
        <div>
          <Topbar />
          <div className="container">
            <Sidebar/>
            <Routes>
              <Route path="/">
                <Route index element={<Home />}/>
                </Route>
              <Route path="/form">
                <Route index element={<Form />}/>
                </Route>
              <Route path="/table-user">
                <Route index element={<UserList/>}/>
                </Route>
                <Route path="/user">
                <Route index element={<User/>}/>
                </Route>
                <Route path="/product">
                <Route index element={<Product/>}/>
                </Route>
                <Route path="/newProduct">
                <Route index element={<NewProduct/>}/>
                </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
