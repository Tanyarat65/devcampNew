import './App.css';
import React from "react";
import HeaderComponent from './Header.js';
import ContentComponent from './Content.js';
import FooterContent from './Footer.js';

class App extends React.Component{
  render(){
    return <div>
    <HeaderComponent />;
    <ContentComponent />;
    <FooterContent />;

    </div>
  }
}


export default App;
