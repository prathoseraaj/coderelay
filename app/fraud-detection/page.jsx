import Navbar from '@/components/Navbar';
import FraudDetectionDashboard from '@/components/FraudDetectionDashboard';


export default function FraudDetectionPage() {
  return (
    <div>
      <Navbar />
      
      <div className="container main">
        <h1 className="page-title">Fraud Detection System</h1>
        <FraudDetectionDashboard />
      </div>
    </div>
  );
}