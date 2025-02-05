const mockProviders = [
    { id: 1, name: "Proveedora Tech", contact: "Andrea López", email: "contacto@proveedoratech.com" },
    { id: 2, name: "Servicios ABC", contact: "Luis Torres", email: "servicios@abc.com" },
  ];
  
  function Providers() {
    return (
      <div>
        <h1>Proveedores</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {mockProviders.map((provider) => (
              <tr key={provider.id}>
                <td>{provider.id}</td>
                <td>{provider.name}</td>
                <td>{provider.contact}</td>
                <td>{provider.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Providers;
  