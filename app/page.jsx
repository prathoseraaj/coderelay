import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      
      <div className="container main">
        <h1 className="page-title">
          <span className="highlight">AI-Driven</span> Supply Chain & Fraud Detection
        </h1>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a73e8" fill="none">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="card-title">Supply Chain Dashboard</h3>
            <p className="card-description">Optimize your inventory and supply chain with AI predictions.</p>
            <div className="card-metrics">
              <div className="metric">
                <span className="metric-value">87%</span>
                <span className="metric-label">Optimization</span>
              </div>
              <div className="metric">
                <span className="metric-value">24%</span>
                <span className="metric-label">Cost Reduction</span>
              </div>
            </div>
            <div className="card-action">
              <Link href="/supply-chain">
                <button className="action-button">
                  <span>Open Dashboard</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a73e8" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="card-title">Fraud Detection</h3>
            <p className="card-description">Identify suspicious patterns and potential fraud in transactions.</p>
            <div className="card-metrics">
              <div className="metric">
                <span className="metric-value">98%</span>
                <span className="metric-label">Accuracy</span>
              </div>
              <div className="metric">
                <span className="metric-value">3.5s</span>
                <span className="metric-label">Response Time</span>
              </div>
            </div>
            <div className="card-action">
              <Link href="/fraud-detection">
                <button className="action-button">
                  <span>Open Dashboard</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-container">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1a73e8" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>Monitor all supply chain activities with live updates and alerts</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1a73e8" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Fraud Prevention</h3>
              <p>Detect and prevent suspicious activities before they occur</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}