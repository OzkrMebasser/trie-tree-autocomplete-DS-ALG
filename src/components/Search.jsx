import React, { useState } from "react";
import styled from "styled-components";
import { FaUserTie, FaRegAddressCard } from "react-icons/fa";
// import { GoPrimitiveDot} from "react-icons/go";
import { SearchBar } from "./SearchBar";
import studentList from "../assets/students";
import studentTuition from "../assets/tuition";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/estudiando-programacion-min.png?alt=media&token=f032a2c6-75ba-4339-ba75-21197b68e86d");
  background-repeat: no-repeat;
  
`;

const Title = styled.h1`
  color: #000;
  margin-left: 650px;
  font-size: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 10px;
  text-align: left;
  
`;

export function Search() {
  const [words] = useState(studentList);
  const [tuition] = useState(studentTuition);

  return (
    <Style>
      <div>
        {/* Search bar */}
        <Title>
          Buscar estudiante por apellido <span></span>
          <FaUserTie />
          <br />
        </Title>
        <SearchBar words={words} />
      </div>
      <br />
      <div>
        {/* Search bar */}
        <Title>
          Buscar por numero de matricula<span> </span>
          <FaRegAddressCard />
          <br />
        </Title>
        <SearchBar
          words={tuition}
          placeholder="Ingresa la inicial de tu nombre y apellido"
        />
      </div>
      <div>
        {/* Search bar */}
        <Title>
          Buscar por modulo<span> </span>
          <FaRegAddressCard />
          <br />
        </Title>
        <SearchBar
          words={tuition}
          placeholder="Ingresa la inicial de tu nombre y apellido"
        />
      </div>
    </Style>
  );
}
