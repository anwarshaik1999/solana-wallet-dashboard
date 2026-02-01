import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to WalletVista</h1>
      <p>A minimal React + Vite starter with routing and layout.</p>
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>⚡ React 19 with Vite</li>
          <li>🛣️ React Router for navigation</li>
          <li>🎨 Clean minimal layout</li>
          <li>💼 Ready for your Solana wallet integration</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Get Started</h2>
        <p>Try navigating to the <Link to="/wallet/example">wallet dashboard</Link> to see routing in action.</p>
      </section>
    </div>
  )
}
