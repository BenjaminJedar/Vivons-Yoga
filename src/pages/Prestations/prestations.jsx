import './prestations.css';
import Card from '../../components/Card/card';
const prestation_array = require('../../datas/home_prestations.json');

function Prestations() {
  return (
    <div className="presta">
      <h2 className="presta_title">Mes préstations</h2>
      <div className="presta_card_container">
        {prestation_array.map((presta) => (
          <Card
            key={presta.id}
            title={presta.title}
            content={presta.content}
            classname="prestations_card"
          />
        ))}
      </div>
    </div>
  );
}

export default Prestations;
