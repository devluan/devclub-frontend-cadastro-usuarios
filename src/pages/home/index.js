import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import axios from "axios";
import H1 from "../../components/title";
import ContainerItens from "../../components/containeritens";

import {
  Container,
  Imagem,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Imagem alt="people-img" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow-button" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
