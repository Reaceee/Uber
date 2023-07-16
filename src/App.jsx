import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import ArrowTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import More from './pages/More.jsx'


const App = () => {

  const Arrow = <svg aria-hidden="true" focusable="false" width="1em" height="25" fill="currentColor" viewBox="0 0 36 36" style="top: calc(50% - 12px); right: 0px; position: absolute;"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>

  return (
    <>
      <Header />
      <ArrowTop />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="more" element={<More />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;