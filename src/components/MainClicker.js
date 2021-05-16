import Clicker from "./Clicker";
import AmountClicks from "./AmountClicks";
import { useEffect } from "react";

const MainClicker = ({ clicksAmount, setClicksAmount, level, setLevel }) => {
  // Alerts thats show whenever user unclock another achievement

  const alerts = () => {
    if (clicksAmount === 100) {
      alert("Gratuluje odblokowales pierwsze osiagniecie");
    } else if (clicksAmount === 500) {
      alert("Gratuluje odblokowales drugie osiagniecie");
    } else if (clicksAmount === 1000) {
      alert("Gratuluje odblokowales trzecie osiagniecie");
    } else if (clicksAmount === 10000) {
      alert("Gratuluje odblokowales czwarte osiagniecie");
    }
  };

  // invoking the function every time amount of clicks change
  useEffect(() => {
    alerts();
  }, [clicksAmount]);

  // removing data from localStorage

  const removeDataFromStorage = () => {
    localStorage.removeItem("amountClicks");
    setClicksAmount(0);
  };

  return (
    <div className="mainContainer">
      <h1>Ciastko Shrek</h1>
      <h3>Kliknij w Pana ciastko by grać</h3>
      <div className="imgandstats">
        <Clicker
          setClicksAmount={setClicksAmount}
          clicksAmount={clicksAmount}
        />
        <AmountClicks
          clicksAmount={clicksAmount}
          level={level}
          setLevel={setLevel}
        />
        <button className="cleaner" onClick={() => removeDataFromStorage()}>
          Zacznij od nowa
        </button>
      </div>
    </div>
  );
};

export default MainClicker;
