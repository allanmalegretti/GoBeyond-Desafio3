import './App.css'
import React from "react";
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
  <div className="App">

    <Card titulo="Condicional Ifs">
      <CondicionalComIf numero={5}></CondicionalComIf>
      <CondicionalComIf numero={6}></CondicionalComIf>
    </Card>

    <Card titulo="Condicional">
      <Condicional numero={9}></Condicional>
      <Condicional numero={10}></Condicional>
    </Card>

    <Card titulo="Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Huguinho</li>
          <li>Zezinho</li>
          <li>Luisinho</li>
          <li>Timmy</li>
        </ul>
      </ComFilhos></Card>

    <Card titulo="Componente com parametro">
      <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtítulo" />
    </Card>

    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);