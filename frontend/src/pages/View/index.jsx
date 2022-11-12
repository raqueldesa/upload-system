import Table from "../../components/Table";
import NavBar from "../../components/NavBar";
import { Page } from "../Upload/style";
import { useEffect } from "react";
import api from "../../services/api";

const ViewPage = () => {
  function loadTechs() {
    api
      .get(`/relatorios`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    loadTechs();
  }, []);

  return (
    <Page>
      <NavBar></NavBar>
      <Table></Table>
    </Page>
  );
};

export default ViewPage;
