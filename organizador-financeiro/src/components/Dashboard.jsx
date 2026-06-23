
function Dashboard({ transactions }) {

    const entradas = transactions
      .filter(item => item.tipo === "entrada")
      .reduce((acc, item) => acc + item.valor, 0);
    
      const saidas = transactions
      .filter(item => item.tipo === "saida")
      .reduce((acc, item) => acc + item.valor, 0);
    
      const saldo = entradas - saidas;

      const investimentos = transactions
    .filter(item =>
        item.tipo === "investimento"
    )
    .reduce(
        (acc, item) =>
        acc + item.valor,
        0
    );


    return (

        

      <section className="dashboard">
  
        <div className="card saldo">
          <h2>Saldo Atual</h2>
          <p>
        {saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}
        </p>
        </div>
  
        <div className="cards">
  
          <div className="card">
            <h3>Entradas</h3>
            <p>R$ {entradas}</p>
          </div>
  
          <div className="card">
            <h3>Saídas</h3>
            <p>R$ {saidas}</p>
          </div>
  
        </div>

      <div className="card">
        
        <h3>Investimentos</h3>

        <p>
            {investimentos.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL",
            }
            )}
        </p>
        </div>
  
      </section>

      
    );

    
  }
  
  export default Dashboard;