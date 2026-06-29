import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  function FinanceChart({ transactions }) {
  
    const data = transactions.map((item) => ({
      data: item.data,
      entrada:
        item.tipo === "entrada"
          ? item.valor
          : 0,
  
      saida:
        item.tipo === "saida"
          ? item.valor
          : 0,
  
      investimento:
        item.tipo === "investimento" ||
        item.tipo === "renda_passiva"
          ? item.valor
          : 0,
    }));
  
    return (
      <div
        style={{
          width: "100%",
          height: 350,
          marginTop: 30,
        }}
      >
        <ResponsiveContainer>
  
          <LineChart data={data}>
  
            <CartesianGrid strokeDasharray="3 3" />
  
            <XAxis dataKey="data" />
  
            <YAxis />
  
            <Tooltip />
  
            <Legend />
  
            <Line
              type="monotone"
              dataKey="entrada"
            />
  
            <Line
              type="monotone"
              dataKey="saida"
            />
  
            <Line
              type="monotone"
              dataKey="investimento"
            />
  
          </LineChart>
  
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default FinanceChart;