import React, { useState } from 'react';

const PrestaCard = () => {
  // Définir l'état pour l'onglet sélectionné
  const [selectedTab, setSelectedTab] = useState(0);

  // Contenu des onglets
  const tabContents = [
    { title: 'Tab 1', content: 'This is the content of Tab 1' },
    { title: 'Tab 2', content: 'This is the content of Tab 2' },
    { title: 'Tab 3', content: 'This is the content of Tab 3' },
  ];

  return (
    <div style={styles.card}>
      {/* Onglets */}
      <div style={styles.tabHeader}>
        {tabContents.map((tab, index) => (
          <div
            key={index}
            style={{
              ...styles.tab,
              ...(selectedTab === index ? styles.activeTab : {}),
            }}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Contenu */}
      <div style={styles.content}>{tabContents[selectedTab].content}</div>
    </div>
  );
};

// Styles pour le composant
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  tabHeader: {
    display: 'flex',
    cursor: 'pointer',
  },
  tab: {
    flex: 1,
    padding: '10px',
    textAlign: 'center',
    borderBottom: '2px solid transparent',
  },
  activeTab: {
    borderBottom: '2px solid #007bff',
    fontWeight: 'bold',
  },
  content: {
    padding: '20px',
  },
};

export default PrestaCard;
