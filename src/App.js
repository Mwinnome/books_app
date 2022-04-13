import React from 'react'
import BookForm from './components/BookForm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
    <NavBar/>
    <main>
    <div className='container'>
    <BookForm/>
    </div>
    </main>
    <Footer/>

    </div>
  )
}

export default App