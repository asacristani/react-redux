import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './InvestorTable.css';

function InvestorTable() {
  const investors = useSelector((state) => state.investors.investors);

  return (
    <div className="table-container">
      <h1>Investors List</h1>
      {investors && investors.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th className="th">FirmId</th>
              <th className="th">FirmName</th>
              <th className="th">Type</th>
              <th className="th">DateAdded</th>
              <th className="th">Address</th>
            </tr>
          </thead>
          <tbody>
            {investors.map((investor) => (
              <tr key={investor.firmID}>
                <td className="td">
                  <Link
                    key={investor.firmID}
                    to={`/investors/${investor.firmID}`}
                  >
                    {investor.firmID}
                  </Link>
                </td>
                <td className="td">{investor.firmName}</td>
                <td className="td">{investor.region}</td>
                <td className="td">{investor.address}</td>
                <td className="td">{investor.city}</td>
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
