// Mock data para Clients.jsx
const mockClients = [
    { id: 1, name: "Juan Pérez", email: "juan.perez@gmail.com", phone: "0987654321" },
    { id: 2, name: "María Gómez", email: "maria.gomez@hotmail.com", phone: "0998765432" },
    { id: 3, name: "Carlos Martínez", email: "carlos.martinez@yahoo.com", phone: "0976543210" },
  ];
  
  function Clients() {
    return (
      <div>
        <h1>Clientes</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {mockClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Clients;
  