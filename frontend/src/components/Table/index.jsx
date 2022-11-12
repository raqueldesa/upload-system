import { useState } from "react";

const Table = () => {
  const [dates, setDate] = useState([
    {
      id: 1,
      data: "2022-03-17",
      open: 54.19,
      high: 54.02,
      low: 54.02,
      close: 54.6,
      volume: 179.189,
      status: "Ótimo",
      createdAt: "2022-11-11T20:05:31.000Z",
      updatedAt: "2022-11-11T20:06:54.000Z",
    },
    {
      id: 2,
      data: "2022-03-17",
      open: 54.19,
      high: 54.02,
      low: 54.02,
      close: 54.6,
      volume: 159.189,
      status: "Ótimo",
      createdAt: "2022-11-11T20:05:58.000Z",
      updatedAt: "2022-11-11T20:06:54.000Z",
    },
    {
      id: 3,
      data: "2022-03-17",
      open: 54.19,
      high: 54.02,
      low: 54.02,
      close: 54.6,
      volume: 159.189,
      status: "Ótimo",
      createdAt: "2022-11-11T20:06:05.000Z",
      updatedAt: "2022-11-11T20:06:54.000Z",
    },
  ]);

  return (
    <div>
      oi
      {dates.map((e) => {
        return (
          <div key={e.id}>
            <span style={{ boder: "1px solid black" }}>{e.data} |</span>
            <span> {e.open} |</span>
            <span> {e.high} |</span>
            <span> {e.low} |</span>
            <span> {e.close} |</span>
            <span> {e.volume} |</span>
            <span> {e.status} |</span>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
