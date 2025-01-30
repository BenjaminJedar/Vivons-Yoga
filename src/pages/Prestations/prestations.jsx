import './prestations.css';
import PrestaCard from '../../components/PrestaCard/PrestaCard';
import img_couverture_prestations from '../../assets/cascade.jpg';
import img_couverture_prestations_PC from '../../assets/cascade.jpg';

function Prestations() {
  return (
    <div className="prestation_page">
      <div className="img_presta_container">
        <picture>
          <source
            srcset={img_couverture_prestations}
            media="(max-width: 767px)"
          />
          <img
            src={img_couverture_prestations_PC}
            alt="Un papillon sur une fleure"
            className="img_couverture"
          />
        </picture>
      </div>

      <h2 className="prestation_page_title">Mes préstations</h2>
      <PrestaCard className="presta_card" />
    </div>
  );
}

export default Prestations;
