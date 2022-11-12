import Table from "../../components/Table";
import NavBar from "../../components/NavBar";
import { Page } from "../Upload/style";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";

const ViewPage = () => {
  function loadRelatorios() {
    api
      .get(`/relatorios`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => err);
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    loadRelatorios();
  }, []);

  return (
    <Page>
      <NavBar></NavBar>
      <Table data={data}></Table>
    </Page>
  );
};

export default ViewPage;
