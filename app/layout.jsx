import './globals.css';

export const metadata = {
  title: 'Supply Chain & Fraud Detection',
  description: 'AI-Driven Supply Chain & Fraud Detection System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}