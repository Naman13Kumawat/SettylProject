import React, { useEffect, useState } from "react";
import AddUser from "../../components/AddUser/AddUser";
import Container from "../../components/CardContainer/Container";
import Navbar from "../../components/Navbar/Navbar";
import MNavbar from "../../components/Navbar/MNavbar";
import MContainer from "../../components/CardContainer/MContainer";

export default function Users() {
  const [add, setAdd] = useState(false);
  const [width, setWidth] = useState(1440);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  return (
    <>
      {width > 768 ? (
        <>
          <Navbar setAdd={setAdd} add={add} />
          {add ? <AddUser /> : null}
          <Container />
        </>
      ) : (
        <>
          <MNavbar setAdd={setAdd} add={add} />
          {add ? <AddUser /> : null}
          <MContainer />
        </>
      )}
    </>
  );
}
