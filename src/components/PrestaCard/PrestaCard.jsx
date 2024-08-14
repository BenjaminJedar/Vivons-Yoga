import React, { useState } from 'react';
import './PrestaCard.css';
import Button from '../Button/button';

const prestation_data = require('../../datas/prestations.json');

function PrestaCard() {
  // Défini l'état pour l'onglet sélectionné
  const [selectedTab, setSelectedTab] = useState(0);

  // Contenu des onglets

  return (
    <div className="presta_card">
      <div className="tab_container">
        {prestation_data.map((tab, index) => (
          <div
            key={index}
            className={
              selectedTab === index ? 'tab_title selected' : 'tab_title'
            }
            onClick={() => {
              setSelectedTab(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tab_content">
        {prestation_data[selectedTab].content.map((content, index) => (
          <p key={index} className="prestation_p">
            {content}
          </p>
        ))}
        <p className="details prestation_p">
          {prestation_data[selectedTab].details}
        </p>
        <p className="duration prestation_p">
          Durée : {prestation_data[selectedTab].duration}
        </p>
        <p className="price prestation_p">
          Prix : {prestation_data[selectedTab].price}
        </p>
      </div>
      <div className="btn_container">
        <Button
          value={'Je veux prendre un cours !'}
          link_to="/contact"
          className="contact_btn"
        />
      </div>
    </div>
  );
}

export default PrestaCard;
