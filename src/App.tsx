import "./App.css";
import { useState } from "react";
import Papa from "papaparse";

interface Employee {
  id: string;
  name: string;
  netSalary: number;
  lopDays: string;
  pf: string;
  esi: string;
  tds: string;
}

function App() {
  const [data, setData] = useState<Employee[]>([]);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/csv") {
      alert("Please upload a valid CSV file.");
      e.target.value = "";
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData: Employee[] = result.data.map((row: any) => ({
          id: row["Employee ID"]?.toString() || "",
          name: row["Name"]?.toString() || "",
          netSalary: parseFloat(row["Net Salary"] || "0"),
          lopDays: row["LOP Days"]?.toString() || "0",
          pf: row["PF"]?.toString() || "",
          esi: row["ESI"]?.toString() || "",
          tds: row["TDS"]?.toString() || "",
        }));

        const total = parsedData.reduce((sum, emp) => sum + emp.netSalary, 0);
        setTotalSalary(total);
        setData(parsedData);
      },
    });
  };

  return (
    <div className="container">
      <h2 className="title">Payroll CSV Upload</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="file-input"
      />

      {data.length > 0 && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Net Salary</th>
                <th>LOP Days</th>
                <th>PF</th>
                <th>ESI</th>
                <th>TDS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>₹{emp.netSalary.toFixed(2)}</td>
                  <td>{emp.lopDays}</td>
                  <td>{emp.pf}</td>
                  <td>{emp.esi}</td>
                  <td>{emp.tds}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-salary">
            Total Net Salary: ₹{totalSalary.toFixed(2)}
          </div>
          <button className="proceed-button">Proceed to Disbursal</button>
        </div>
      )}
    </div>
  );
}

export default App;
