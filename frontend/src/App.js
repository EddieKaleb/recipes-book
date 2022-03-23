import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div id="app">
      <div className="view view-main view-init ios-edges" data-url="/">
        <div className="page page-home">
          <div className="page-content">
            <Header />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default App
