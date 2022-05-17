import React from "react";
import "./App.css";

// step 1
function App() {
  return <Container />;
}

//step 4 เรียกใช้
function pathList() {
  return [
    { name: "Google", path: "http://www.google.co.th" },
    { name: "Youtube", path: "http://www.youtube.com" },
    { name: "Yahoo", path: "http://www.yahoo.co.th" },
  ];
}

//step 4 เรียกใช้
function Menu(props) {
  return (
    <ul>
      {props.path().map((x) => (
        <li key={x.path}>
          <a href={x.path} target="_blank">
            {x.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

// step 2
function Container() {
  const websiteName = "DEVCAMP 2023";
  return (
    <>
      <Header sitename={websiteName}      //---step3
      menu={<Menu path={pathList} />}/>   //---step4
    </>
  );
}

//step3 เรียกใช้
function Header(props) {
  return (
    <>
      <h1>{props.sitename}</h1>
      <div>{props.menu}</div>
    </>
  );
}

export default App;
