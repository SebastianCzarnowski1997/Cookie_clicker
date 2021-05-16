import "./Style.css";
import Shop from "./components/Shop";
import React, { useEffect, useState } from "react";
import Achievemnts from "./components/Achievements";
import MainClicker from "./components/MainClicker";
import { Switch, Route, NavLink } from "react-router-dom";

export default function App() {
  // Setting useState for amount of clicks and level
  const [clicksAmount, setClicksAmount] = useState(0);
  const [level, setLevel] = useState(1);

  // getting amount of clicks from localStorage when component mount

  useEffect(() => {
    const data = localStorage.getItem("amountClicks");
    if (data) {
      setClicksAmount(JSON.parse(data));
    }
  }, []);

  // saving data in localStorage

  useEffect(() => {
    localStorage.setItem("amountClicks", JSON.stringify(clicksAmount));
  });

  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Klikanie ciasteczka</NavLink>
        <NavLink to={"/Achievemnts"}>Osiągnięcia</NavLink>
        <NavLink to={"/Shop"}>Sklep</NavLink>
      </nav>
      <Switch>
        <Route
          path={"/"}
          exact
          component={() => (
            <MainClicker
              clicksAmount={clicksAmount}
              setClicksAmount={setClicksAmount}
              level={level}
              setLevel={setLevel}
            />
          )}
        />
        <Route
          path={"/Achievemnts"}
          exact
          component={() => <Achievemnts clicksAmount={clicksAmount} />}
        />
        <Route
          path={"/Shop"}
          exact
          component={() => (
            <Shop level={level} setClicksAmount={setClicksAmount} />
          )}
        />
      </Switch>
    </div>
  );
}
