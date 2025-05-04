export function TableSample() {
  const rows = Array.from({ length: 5 }, (_, i) => i + 1);
  const cols = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">6列×5行のテーブル例</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col} className="border px-2 py-1 bg-gray-200">
                列 {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              {cols.map((col) => {
                const isLastCol = col === 6;
                return (
                  <td
                    key={col}
                    className={`border px-2 py-1 text-center ${isLastCol ? "bg-yellow-300" : ""}`}
                  >
                    <span className={isLastCol ? "text-red-400 font-bold" : ""}>
                      {`行 ${row} 列 ${col}`}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
