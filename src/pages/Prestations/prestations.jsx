import './prestations.css';
import Card from '../../components/Card/card';
const prestation_array = require('../../datas/home_prestations.json');

function Prestations() {
  return (
    <div className="prestation_page">
      <h2 className="prestation_page_title">Mes préstations</h2>
    </div>
  );
}

export default Prestations;
