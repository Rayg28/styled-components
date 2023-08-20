import React, {useState} from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import Tema from "./Components/SwitcherTema";
console.log(temaClaro, temaOscuro)

function App() {
  const [tema, setTema] = useState(true)
  const toggleTema = () =>{
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
    <GlobalStyle/>
    <BtnTema onClick={toggleTema} >
      <Tema  tema={tema}/>
    </BtnTema>
      <Header/>
      <Container />
    </ThemeProvider>
  );
}

export default App;
