const Clicker = ({ setClicksAmount, clicksAmount }) => {
  // simple function that increase number of clicks every time user clicks on image
  const changingAmount = () => {
    setClicksAmount(clicksAmount + 1);
  };

  return (
    <div className="buttonClicker" onClick={changingAmount}>
      <img src="/images/ciastek2.png" alt="ciastko" />
    </div>
  );
};

export default Clicker;
