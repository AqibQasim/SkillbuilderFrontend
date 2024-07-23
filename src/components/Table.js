import { createContext, useContext } from "react";
const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-hidden">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid items-center uppercase tracking-wider grid-cols-[${columns}] ${columns} gap-4 p-4 text-bg_text_gray`}
    >
      {children}
    </div>
  );
}

function Row({ children, onClick }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      onClick={onClick}
      className={`grid items-center capitalize tracking-wider grid-cols-[${columns}] ${columns} group cursor-pointer items-center gap-4 p-4 tracking-tight text-black transition-all duration-200 hover:bg-white`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p>No data to show at the moment</p>;

  return (
    <div className="divide-y-[1px] divide-dashboard-border">
      {data.map(render)}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
