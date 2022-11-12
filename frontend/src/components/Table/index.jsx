const Table = ({ data }) => {
  return (
    <div>
      {data.map((e) => {
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
