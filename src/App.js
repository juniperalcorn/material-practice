import React from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';

//components
import Header from './components/layout/header'
import DynamicDrawer from './components/layout/dynamicDrawer.js'
import Footer from './components/layout/footer'

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        <DynamicDrawer />
        <div>Cos’è Lorem Ipsum?
Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</div>
        <Footer />
    </div>
  );
}

export default App;
