import React, { useState } from 'react';
import './PrestaCard.css';
const prestation_data = require('../../datas/prestations.json');

function PrestaCard() {
  // Défini l'état pour l'onglet sélectionné
  const [selectedTab, setSelectedTab] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [tabTitleClass, setTabTitleClass] = useState('tab_container');

  function selectTitle() {
    if (isSelected) {
      setTabTitleClass('tab_container selected');
    } else {
      setTabTitleClass('tab_container');
    }
    setIsSelected(!isSelected);
  }

  // Contenu des onglets

  return (
    <div className="presta_card">
      {/* Onglets */}
      <div className={tabTitleClass}>
        {prestation_data.map((tab, index) => (
          <div
            key={index}
            className="tab_title"
            onClick={() => {
              selectTitle();
              setSelectedTab(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Contenu */}
      <div className="tab_content">{prestation_data[selectedTab].content}</div>
    </div>
  );
}

export default PrestaCard;
