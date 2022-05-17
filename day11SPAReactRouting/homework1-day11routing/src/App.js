import { Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomeComp from './HomeComp';
import PortfolioComp from './PortfolioComp';
import AboutComp from './AboutComp';
import ContactComp from './ContactComp';

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
          <Route index element={<HomeComp />}/>
          <Route path="portfolio" element={<PortfolioComp />} />
          <Route path="about" element={<AboutComp />} />
          <Route path="contact" element={<ContactComp />} />

          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </div>

  );
}

function Layout(){
  return(
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About us</Link></li>
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
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}


export default App;


// 1.สร้าง Web Portfolio
// 2.สร้าง  React Routing โดยเว็ปมีเมนู
// Portfolio
// About us
// Contact
// 2. ทั้ง 4 path ไปเรียก Component แยกไฟล์
// 3. แต่ละหน้า ใส่ Content ให้เหมาะสม
