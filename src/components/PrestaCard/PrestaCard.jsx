import React, { useState } from 'react';
import './PrestaCard.css';
const prestation_data = require('../../datas/prestations.json');

function PrestaCard() {
  // Défini l'état pour l'onglet sélectionné
  const [selectedTab, setSelectedTab] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [tabTitleClass, setTabTitleClass] = useState('tab_title');

  function selectTitle() {
    if (isSelected) {
      setTabTitleClass('tab_title selected');
    } else {
      setTabTitleClass('tab_title');
    }
    setIsSelected(!isSelected);
  }

  // Contenu des onglets

  return (
    <div className="presta_card">
      {/* Onglets */}
      <div className="tab_container">
        {prestation_data.map((tab, index) => (
          <div
            key={index}
            className={
              selectedTab === index ? 'tab_title selected' : 'tab_title'
            }
            onClick={() => {
              setSelectedTab(index);
              selectTitle();
              console.log('titre n°' + selectedTab + '  ' + 'selectioné');
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Contenu */}
      <div className="tab_content">
        {prestation_data[selectedTab].content.map((content, index) => (
          <p key={index} className="prestation_p">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PrestaCard;
