import React from 'react';

import  { useState } from 'react';

const BingAdd = () => {
  const [state, setState] = useState({
    id: '',
    company_name: '',
    insurance_cost: ''
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id, company_name, insurance_cost } = state;

    const url = `https://turners-car.search.windows.net/indexes/insurance/docs/index?api-version=2020-08-01`;
    const apiKey = 'iItroH2dqTCQGE74mob5v9xA0rZyF3IsO19YWzMZquAzSeDEkW8D';
    const body = JSON.stringify({ id, company_name, insurance_cost });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: body,
      });

      if (response.ok) {
        setState((prevState) => ({
          ...prevState,
          message: 'Document added successfully!',
        }));
      } else {
        throw new Error(`Failed to add document: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setState((prevState) => ({
        ...prevState,
        message: 'An error occurred while adding the document.',
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={state.id} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Company Name:
        <input type="text" name="company_name" value={state.company_name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Insurance Cost:
        <input type="number" name="insurance_cost" value={state.insurance_cost} onChange={handleInputChange} />
      </label>
       <br />
      <button type="submit">Add Document</button>
    </form>
  );
};

export default BingAdd;
