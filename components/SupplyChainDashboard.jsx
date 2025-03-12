'use client';

import { useState } from 'react';
import SimpleCard from './SimpleCard';

export default function SupplyChainDashboard() {
  const [inventoryData, setInventoryData] = useState([
    { id: 1, product: 'Product A', quantity: 150, status: 'In Stock', location: 'Warehouse 1' },
    { id: 2, product: 'Product B', quantity: 75, status: 'Low Stock', location: 'Warehouse 2' },
    { id: 3, product: 'Product C', quantity: 200, status: 'In Stock', location: 'Warehouse 1' },
    { id: 4, product: 'Product D', quantity: 50, status: 'Low Stock', location: 'Warehouse 3' },
    { id: 5, product: 'Product E', quantity: 0, status: 'Out of Stock', location: 'Warehouse 2' },
  ]);

  const [optimizationResults, setOptimizationResults] = useState(null);

  const runOptimization = () => {
    setOptimizationResults({
      recommendations: [
        'Restock Product B by ordering 125 units',
        'Restock Product D by ordering 150 units',
        'Order Product E immediately - 200 units recommended',
        'Consider relocating Product C to Warehouse 3 for better distribution'
      ],
      expectedSavings: '$12,450',
      optimizationScore: '87%'
    });
  };

  return (
    <div className='chaindashborad'>
      <SimpleCard title="Current Inventory Status">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map(item => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SimpleCard>

      <SimpleCard title="AI Supply Chain Optimization">
        <p>Run our AI algorithm to optimize your inventory levels and distribution.</p>
        <button 
          className="button" 
          style={{ marginTop: '1rem' }}
          onClick={runOptimization}
        >
          Run Optimization
        </button>

        {optimizationResults && (
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Optimization Results:</h4>
            <p><strong>Expected Savings:</strong> {optimizationResults.expectedSavings}</p>
            <p><strong>Optimization Score:</strong> {optimizationResults.optimizationScore}</p>
            
            <h4 style={{ margin: '1rem 0 0.5rem' }}>Recommendations:</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {optimizationResults.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </SimpleCard>
    </div>
  );
}