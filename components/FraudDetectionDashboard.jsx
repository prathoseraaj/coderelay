'use client';

import { useState } from 'react';
import SimpleCard from './SimpleCard';

export default function FraudDetectionDashboard() {
  const [transactions, setTransactions] = useState([
    { id: 'T001', date: '2025-03-10', amount: '$2,450.00', risk: 'Low', status: 'Approved' },
    { id: 'T002', date: '2025-03-10', amount: '$18,750.00', risk: 'High', status: 'Flagged' },
    { id: 'T003', date: '2025-03-11', amount: '$1,200.00', risk: 'Low', status: 'Approved' },
    { id: 'T004', date: '2025-03-11', amount: '$5,800.00', risk: 'Medium', status: 'Under Review' },
    { id: 'T005', date: '2025-03-12', amount: '$950.00', risk: 'Low', status: 'Approved' },
  ]);

  const [alertCount, setAlertCount] = useState({
    high: 1,
    medium: 1,
    low: 3
  });

  const analyzeTransaction = () => {
    const newTransaction = {
      id: 'T006',
      date: '2025-03-12',
      amount: '$7,850.00',
      risk: 'High',
      status: 'Flagged'
    };
    
    setTransactions([newTransaction, ...transactions]);
    setAlertCount({
      ...alertCount,
      high: alertCount.high + 1
    });
  };

  return (
    <div className='chaindashborad'>
      <SimpleCard title="Fraud Risk Summary">
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem', justifyContent: 'space-between' }}>
          <div>
            <h4>High Risk</h4>
            <p style={{ fontSize: '2rem', color: '#e53935' }}>{alertCount.high}</p>
          </div>
          <div>
            <h4>Medium Risk</h4>
            <p style={{ fontSize: '2rem', color: '#ff9800' }}>{alertCount.medium}</p>
          </div>
          <div>
            <h4>Low Risk</h4>
            <p style={{ fontSize: '2rem', color: '#43a047' }}>{alertCount.low}</p>
          </div>
        </div>
      </SimpleCard>

      <SimpleCard title="Recent Transactions">
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Date</th>

              <th>Amount</th>
              <th>Risk Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.risk}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SimpleCard>

      <SimpleCard title="Test Fraud Detection">
        <p>Simulate a new transaction to test our AI fraud detection system.</p>
        <button 
          className="button" 
          style={{ marginTop: '1rem' }}
          onClick={analyzeTransaction}
        >
          Analyze New Transaction
        </button>
      </SimpleCard>
    </div>
  );
}