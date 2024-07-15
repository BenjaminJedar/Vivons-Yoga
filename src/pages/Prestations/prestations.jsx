import './prestations.css';
import PrestaCard from '../../components/PrestaCard/PrestaCard';
import img_couverture_prestations from '../../assets/couverture_prestations_redim.jpg';
const prestation_array = require('../../datas/home_prestations.json');

function Prestations() {
  return (
    <div className="prestation_page">
      <div className="img_presta_container">
        <img
          src={img_couverture_prestations}
          alt="Un papillon sur une fleure"
          className="img_couverture"
        />
      </div>

      <h2 className="prestation_page_title">Mes préstations</h2>
      <PrestaCard />
      <div className="prestations_container">
        {prestation_array.map((presta) => (
          <div className="prestations_description" key={presta.id}>
            <h3>{presta.title}</h3>
            <p>{presta.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestations;
