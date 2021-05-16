import { useEffect } from "react";

const AmountClicks = ({ clicksAmount, level, setLevel }) => {
  let numberOfClick = 10; // Counting levels from number of clicks  = 10
  let countLoops = 1; // amount of loops is this same as level current user is on

  useEffect(() => {
    setLevel(countLoops);
  }, [clicksAmount]);

  // simple loop to check which level user is on

  while (numberOfClick <= clicksAmount) {
    numberOfClick *= 2;
    countLoops++;
  }

  return (
    <div className="stats">
      <p>Kliknięcia: {clicksAmount}</p>
      <p>Level: {level}</p>
    </div>
  );
};

export default AmountClicks;
