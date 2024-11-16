import React from 'react';

const Products = () => (
  <section style={{ padding: '2rem' }}>
    <h2>Our Products</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '200px' }}>
        <h3>Wildflower Honey</h3>
        <p>$10 / jar</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '200px' }}>
        <h3>Orange Blossom Honey</h3>
        <p>$12 / jar</p>
      </div>
    </div>
  </section>
);

export default Products;
