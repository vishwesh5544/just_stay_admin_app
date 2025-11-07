const TableComponent = ({ columns, data, onRowClick }) => {
  return (
    <div className=" no-scrollbar bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="max-h-[420px] overflow-auto no-scrollbar">
        <table className="min-w-full text-left border-collapse">
          <thead className="sticky top-0 z-30 bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="text-[#6A7282] text-[12px] font-medium uppercase leading-4 tracking-[0.6px] px-6 py-3 whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onRowClick && onRowClick(row, rowIndex)}
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap align-middle">
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : (
                        <div>
                          <p className="font-poppins font-medium text-[14px] leading-5 tracking-[0px]">
                            {row[col.accessor]}
                          </p>
                          {col.meta && (
                            <p className="font-poppins font-normal text-[12px] leading-4 tracking-[0px] text-[#6A7282]">
                              {row[col.meta]}
                            </p>
                          )}
                        </div>
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;