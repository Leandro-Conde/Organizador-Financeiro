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

  import { formatCurrency } from "../../utils/formatCurrency";
  import { processChartData } from "../../utils/processChartData";
  
  function FinanceChart({ transactions }) {

    const data = processChartData(transactions);
    
    return (
      <div
        style={{
          width: "100%",
          height: 350,
          marginTop: 30,
        }}
      >

      <h2>Evolução Financeira</h2>

        <ResponsiveContainer>
  
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
  
          <CartesianGrid
            stroke="#e5e7eb"
            strokeDasharray="5 5"
          />
  
            <XAxis
            dataKey="data"
            tick={{ fontSize: 12 }}
          />
  
            <YAxis
            tick={{ fontSize: 12 }}
          />
  
            <Tooltip
              formatter={(value) => formatCurrency(value)}
            />
  
            <Legend />
  
            <Line
              type="monotone"
              dataKey="entrada"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
            />

            <Line
              type="monotone"
              dataKey="saida"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
            />

            <Line
              type="monotone"
              dataKey="investimento"
              stroke="#facc15"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
            />

            </LineChart>
  
          
  
        </ResponsiveContainer>
      </div>

        

    );
  }
   
  
  export default FinanceChart;