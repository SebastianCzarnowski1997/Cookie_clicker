const Shop = ({ level, setClicksAmount }) => {
  const buyFunction = () => {
    // checking if user can buy certain purchase dependent on level he currently is
    if (level >= 2) {
      alert("Kupiłeś pierwszą maszynę");
      setInterval(() => {
        setClicksAmount((prevState) => prevState + 30);
      }, 10000);
    }
    if (level >= 10) {
      alert("Kupiłeś drugą maszynę");
      setInterval(() => {
        setClicksAmount((prevState) => prevState + 100);
      }, 20000);
    }
    if (level >= 20) {
      alert("Kupiłeś trzecią maszynę");
      setInterval(() => {
        setClicksAmount((prevState) => prevState + 1000);
      }, 50000);
    }
  };

  return (
    <div className="shopContainer">
      <div className="onePurchase">
        <h3>Maszyna do klikania level 5</h3>
        <p>Co 10 sekund zwiększa liczbę kliknięć o 30</p>
        {/* when the user is not at the appropriate level button didin't show up*/}
        <button
          className={`btn ${level >= 2 && "activeButton"}`}
          onClick={() => buyFunction()}
        >
          Kup
        </button>
      </div>
      <div className="onePurchase">
        <h3>Maszyna do klikania level 10</h3>
        <p>Co 20 sekund zwiększa liczbę kliknięć o 100</p>
        <button className={`btn ${level >= 10 && "activeButton"}`}>kup</button>
      </div>
      <div className="onePurchase">
        <h3>Maszyna do klikania level 20</h3>
        <p>Co 50 sekund zwiększa liczbę kliknięć o 1000</p>
        <button className={`btn ${level >= 20 && "activeButton"}`}>kup</button>
      </div>
    </div>
  );
};

export default Shop;
