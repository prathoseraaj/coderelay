export default function SimpleCard({ title, children }) {
    return (
      <div className="card">
        <h3 className="card-title">{title}</h3>
        {children}
      </div>
    );
  }