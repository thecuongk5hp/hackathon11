import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
