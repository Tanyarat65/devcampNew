import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//เรียกใช้ bootstrap

import HeaderComponent from './Header.js';
import ContentComponent from './Content.js';
import FooterComponent from './Footer.js';

function App() {
  return (
    <>
    <HeaderComponent/>
    <ContentComponent/>
    <FooterComponent/>
    </>
  );
}

export default App;
