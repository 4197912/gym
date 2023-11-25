import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Plan from './Components/Plan'
import About from './Components/About'
import Trainers from './Components/Trainers'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <main>
      <div id='home'>
      < Home />
      </div>
    </main>
    <main>
      <div id='plans'>
      <Plan />
      </div>
    </main>
    <main>
      <div id='about'>
<About />
      </div>

    </main>
    <main>
      <div id='trainers'>
<Trainers />
      </div>
    </main>
    <main>
      <div id='contact'>
        <Contact/>
      </div>
    </main>
    <Footer />
  </React.StrictMode>,
)
