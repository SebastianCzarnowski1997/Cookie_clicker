const Achievemtns = ({ clicksAmount }) => {
  return (
    <div className="achivements">
      {/* condition that show achivement after user get certain number of clicks */}
      <div className={`oneAchievemnt ${clicksAmount >= 100 && "active"}`}>
        <h3>Osiagniecie 100 klikniec</h3>
        <p>Gratuluje jestes amatorem</p>
      </div>
      <div className={`oneAchievemnt ${clicksAmount >= 500 && "active"}`}>
        <h3>Osiagniecie 500 klikniec</h3>
        <p>Przyznaje musi ci sie nudzic</p>
      </div>
      <div className={`oneAchievemnt ${clicksAmount >= 1000 && "active"}`}>
        <h3>Osiagniecie 1000 klikniec</h3>
        <p>W tym momencie zaslugujesz na cos slodkiego</p>
      </div>
      <div className={`oneAchievemnt ${clicksAmount >= 10000 && "active"}`}>
        <h3>Osiagniecie 10000 klikniec</h3>
        <p>Musisz znalezc sobie lepsze zajecie</p>
      </div>
    </div>
  );
};

export default Achievemtns;
