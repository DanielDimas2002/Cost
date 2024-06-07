import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/paginas/Home';
import Contatos from './componentes/paginas/Contatos';
import NovoProjeto from './componentes/paginas/NovoProjeto';
import Companhia from './componentes/paginas/Companhia';
import Projetos from './componentes/paginas/Projetos';
import Projeto from './componentes/paginas/Projeto'; // Certifique-se de importar o componente Projeto
import Container from './componentes/paginas/layout/Container';
import Navbar from "./componentes/paginas/layout/Navbar";
import Footer from "./componentes/paginas/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/companhia" element={<Companhia />} />
          <Route path="/novoprojeto" element={<NovoProjeto />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<Projeto />} /> {/* Corrija o path aqui */}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
