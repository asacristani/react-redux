import { useSelector } from 'react-redux';

function InvestorTable() {
  const investors = useSelector((state) => state.investors.investors);

  return (
    <div>
      <h1>Investors List</h1>
      {investors && investors.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>FirmId</th>
              <th>FirmName</th>
              <th>Type</th>
              <th>DateAdded</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {investors.map((investor) => (
              <tr key={investor.firmID}>
                <td>{investor.firmID}</td>
                <td>{investor.firmName}</td>
                <td>{investor.region}</td>
                <td>{investor.address}</td>
                <td>{investor.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export { InvestorTable };
