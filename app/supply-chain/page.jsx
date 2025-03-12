import Navbar from '@/components/Navbar';
import SupplyChainDashboard from '@/components/SupplyChainDashboard';

export default function SupplyChainPage() {
  return (
    <>
      <Navbar />
      
      <div className="container main">
        <h1 className="page-title">Supply Chain Optimization</h1>
        <SupplyChainDashboard />
      </div>
    </>
  );
}