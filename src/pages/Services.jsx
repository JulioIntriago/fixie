const mockServices = [
    { id: 1, name: "Reparación de pantalla", price: 50 },
    { id: 2, name: "Cambio de batería", price: 30 },
    { id: 3, name: "Diagnóstico técnico", price: 15 },
  ];
  
  function Services() {
    return (
      <div>
        <h1>Servicios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Servicio</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {mockServices.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>${service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Services;
  