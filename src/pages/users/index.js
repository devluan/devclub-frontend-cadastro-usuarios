import React, { useState, useEffect } from "react";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Imagem, Button, User } from "./styles";
import H1 from "../../components/title";
import ContainerItens from "../../components/containeritens";

function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Imagem alt="people-img" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="arrow-button" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
