import React, { useState } from 'react';
import axios from 'axios';

const AddProtein = () => {
  const [protein, setProtein] = useState({
    name: '',
    source: '',
    quantity: '',
    benefits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProtein({ ...protein, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/proteins', protein);
      alert('Protein added successfully!');
    } catch (error) {
      console.error('Error adding protein:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Protein</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={protein.name} onChange={handleChange} required />
        <input name="source" placeholder="Source" value={protein.source} onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity (g)" value={protein.quantity} onChange={handleChange} required />
        <input name="benefits" placeholder="Benefits" value={protein.benefits} onChange={handleChange} required />
        <button type="submit">Add Protein</button>
      </form>
    </div>
  );
};

export default AddProtein;
