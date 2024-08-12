import React from 'react';
import { OrderProvider } from './context/OrderContext';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import TotalDisplay from './components/TotalDisplay';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <OrderProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Dry Cleaning Service</h1>
        <ItemForm />
        <ItemList />
        <TotalDisplay />
        <SubmitButton/>
      </div>
    </OrderProvider>

  );
}

export default App;
