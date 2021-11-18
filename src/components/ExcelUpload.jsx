import React, { useState, useEffect } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
  const readExcel = async (file) => {
    try {
      const fileReader = await new FileReader();
      await fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e) => {
        const buggerArray = await e.target.result;

        const wb = await XLSX.read(buggerArray, { type: "buffer" });
        const wsname = await wb.SheetNames[0];
        const ws = await wb.Sheets[wsname];
        const data = await XLSX.utils.sheet_to_json(ws);
        console.log(JSON.stringify(data));
        await setItems(JSON.stringify(data));
        const header = { "Content-type": "application/json" };
        await axios({
          method: "post",
          url: "http://localhost:7733/api/client/register/excel",
          headers: header,
          data: JSON.stringify(data),
        });
      };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file);
      }}
    />
  );
}

export default App;
