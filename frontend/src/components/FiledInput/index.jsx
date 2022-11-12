import React, { useState } from "react";
import { Button, FilledInput } from "@mui/material";
import Papa from "papaparse";
import api from "../../services/api";

const allowedExtensions = ["csv"];

const FiledInput = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [erroBool, setErrorBool] = useState(false);
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");

    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Por favor, insira um arquivo CSV");
        return;
      }
      setFile(inputFile);
    }
  };

  function dataFormatada(dataA) {
    var data = new Date(dataA),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return anoF + "-" + mesF + "-" + diaF;
  }

  const handleParse = () => {
    if (!file) return setError("Insira um arquivo valido");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      let obj = [];

      parsedData.forEach((e) => {
        if (e.Data || e.Open || e.High || e.Low || e.Close || e.Volume) {
          obj.push({
            date: dataFormatada(e.Date),
            open: parseFloat(e.Open),
            high: parseFloat(e.High),
            low: parseFloat(e.Low),
            close: parseFloat(e.Close),
            volume: parseFloat(e.Volume.toString().replace(",", ".")),
          });
        }
      });

      if (obj.length > 0) {
        setErrorBool(true);
        setData(obj);
        // console.log(JSON.stringify(obj));
        api
          .post("/relatorios", obj)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => err);
      } else {
        setErrorBool(false);
        setError("Dados insuficientes");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="FiledInput">
      <div className="mod1"></div>
      <div className="upload">
        <label htmlFor="csvInput" style={{ display: "block" }}>
          Upload do arquivo
        </label>

        <FilledInput
          style={{
            width: "300px",
            height: "150px",
            backgroundColor: "#83d2de",
            color: "white",
            display: "flex",
            flexDirection: "row",
          }}
          type="file"
          onChange={handleFileChange}
          id="csvInput"
          name="file"
        ></FilledInput>
        <div className="btns">
          <Button>Cancelar</Button>
          <Button variant="contained" onClick={handleParse}>
            Enviar Arquivos
          </Button>
          {/* <button onClick={handleParse}>Parse</button> */}
        </div>
        <div style={{ marginTop: "3rem" }}>
          {erroBool ? <div>Dados Salvos com sucesso</div> : <div>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default FiledInput;
