import './App.css';
import { Routes, Route, Outlet, Link, Navigate, useNavigate } from 'react-router-dom';
import {ShopStockComp, ShopStockDetail} from './ShopStockComp';
import { WarehouseLocationComp, WarehouseDetail } from './WarehouseLocationComp';
import {ContactComp} from './ContactComp';

function App() {
  return (
    <RouteComp />
  );
}

function RouteComp(){
  return(
    <div>
      <h1>Portfolio</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomeComp />}/> */}
          <Route path="shopstock" element={<ShopStockComp />} />
          <Route path="shopstock/:id" element={<ShopStockDetail />}/>
          {/* <Route path="shopstock/detail" element={<ShopStockDetail />}/> */}
          <Route path="warehouse" element={<WarehouseLocationComp />} />
          <Route path="warehouse/:id/:warehouseName/:Latitude/:Longitude/:telNo/:faxNo" element={<WarehouseDetail />}/>
          <Route path="contact" element={<ContactComp />} />

          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </div>

  );
}

function Layout(){

  // const navigate =useNavigate();

  // const linkNavigate = () => {
    
  //   let item = shopStockList;
  //   let itemData = new FormData(item);
  //   let data ={
  //               name: itemData.get('name'),
  //               lot: itemData.get('lot')
  //           }
  //   navigate('/shopstock/detail',{state:data})
  // }
  

  return(
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shopstock">Shop Stock</Link></li>
          {/* <li><Link to={linkNavigate}>Shop Stock</Link></li> */}
          <li><Link to="/warehouse">Warehouse Location</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="/nothing-here"></Link></li>
        </ul>
        <hr />
        <Outlet />
      </nav>
    </div>
  );
}

function NoMatch() {
  return (
    <>
    <h2>Nothing to see here!</h2>
    <p><Link to="/">Go to the home page</Link></p>
    </>
  );
}


export default App;
