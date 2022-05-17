import React from "react";
import "./App.css";

function App() {
  return <Container />;
}

function pathList() {
  return [
    { name: "Google", path: "http://www.google.co.th" },
    { name: "Youtube", path: "http://www.youtube.com" },
    { name: "Yahoo", path: "http://www.yahoo.co.th" },
  ];
}

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

function Container() {
  const websiteName = "DEVCAMP 2023";
  return (
    <>
      <Header sitename={websiteName} menu={<Menu path={pathList} />} />
    </>
  );
}

function Header(props) {
  return (
    <>
      <h1>{props.sitename}</h1>
      <div>{props.menu}</div>
    </>
  );
}

export default App;
