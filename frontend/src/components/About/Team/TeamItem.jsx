import Giovani from "@assets/images/Giovani.jpg";
import Marianne from "@assets/images/Marianne.jpg";
import Riga from "@assets/images/Riga.jpg";

const TeamItem = () => {
  return (
    <ul className="team__list">
      <li className="team__item">
        <img className="team__image" src={Giovani} alt="Giovani" />
        <div className="team__content">
          <p className="team__name">Giovani Bacardo</p>
          <p className="team__profession">Farmer</p>
        </div>
      </li>
      <li className="team__item">
        <img className="team__image" src={Marianne} alt="Marianne" />
        <div className="team__content">
          <p className="team__name">Marianne Loreno</p>
          <p className="team__profession">Designer</p>
        </div>
      </li>
      <li className="team__item">
        <img className="team__image" src={Riga} alt="Riga" />
        <div className="team__content">
          <p className="team__name">Riga Pelore</p>
          <p className="team__profession">Farmer</p>
        </div>
      </li>
    </ul>
  );
};

export default TeamItem;
