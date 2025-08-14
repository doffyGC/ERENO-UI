import React from 'react';
import { Icon } from 'bold-ui';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: 'white', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon icon='shieldOutline' style={{ marginRight: '0.5rem' }} />
        <h2 style={{ margin: 0, color: '#0051A2' }}>ERENO-UI</h2>
      </div>
    </header>
  );
}