import React from 'react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Menu from './components/Header/Menu';

const App = () => {
  return (
    <div className='app h-screen w-[80vw] m-auto relative'>
        <Header/>
        <Body/>
        <Footer/>
        <Menu/>
    </div>
  )
}

export default App;