import cover_img from '../../assets/Ana_tournesol_1.jpeg';
import './prestations.css';
const prestation_array = require('../../datas/home_prestations.json');

function Prestations() {
  return (
<<<<<<< HEAD
    <div className="prestation_page">
      <h2 className="prestation_page_title">Mes préstations</h2>
=======
    <div className="presta">
      <div className="img_container">
        <img
          src={cover_img}
          alt="Ana dans les tournesols"
          className="img_container"
        />
      </div>
      <h2 className="presta_title">Mes préstations</h2>
      <div className="presta_card_container">
        <h3>{prestation_array(1)}</h3>
      </div>
>>>>>>> bf1b2f912e6d0173b14265e3711bbc6c2878eea7
    </div>
  );
}

export default Prestations;
