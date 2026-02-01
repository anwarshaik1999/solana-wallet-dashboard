import { useParams } from 'react-router-dom'

export default function WalletDashboard() {
  const { address } = useParams()

  return (
    <div className="wallet-dashboard">
      <h1>Wallet Dashboard</h1>
      <p>Address: <code>{address}</code></p>

      <section className="wallet-info">
        <h2>Account Information</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Balance</h3>
            <p className="placeholder">Loading...</p>
          </div>
          <div className="info-card">
            <h3>Tokens</h3>
            <p className="placeholder">Loading...</p>
          </div>
          <div className="info-card">
            <h3>NFTs</h3>
            <p className="placeholder">Loading...</p>
          </div>
        </div>
      </section>

      <section className="transactions">
        <h2>Recent Transactions</h2>
        <p className="placeholder">No transactions yet. Connect your wallet to see transaction history.</p>
      </section>
    </div>
  )
}
