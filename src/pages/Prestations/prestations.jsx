import './prestations.css';
const prestation_array = require('../../datas/home_prestations.json');

function Prestations() {
  return (
    <div className="prestation_page">
      <h2 className="prestation_page_title">Mes préstations</h2>
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
