import React, { useState } from "react";
import { FilledInput } from "@mui/material";
import Papa from "papaparse";

// Allowed extensions for input file
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
  const handleParse = () => {
    if (!file) return setError("Insira um arquivo valido");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      let obj = [];

      parsedData.forEach((e) => {
        if (e.Data || e.Open || e.High || e.Low || e.Close) {
          obj.push({
            date: e.Date,
            open: e.Open,
            high: e.High,
            low: e.Low,
            close: e.Close,
            volume: e.Volume,
          });
        }
      });

      if (obj.length > 0) {
        setErrorBool(true);
        setData(obj);
        console.log(JSON.stringify(obj));
      } else {
        setErrorBool(false);
        setError("Dados insuficientes");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        Insira o arquivo CSV
      </label>
      <FilledInput
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "red",
          color: "white",
        }}
        type="file"
        onChange={handleFileChange}
        id="csvInput"
        name="file"
      ></FilledInput>
      <div>
        <button onClick={handleParse}>Parse</button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {erroBool ? (
          data.map((col, idx) => (
            <div key={idx}>
              data: {col.date} | open: {col.open} | high: {col.high} | low:{" "}
              {col.low} | close:{col.close}
            </div>
          ))
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
};

export default FiledInput;
