import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AssetClassEnum } from '../sdks/preqin.js';
import './InvestorDetail.css';

function InvestorDetail() {
  let { id } = useParams();
  const investors = useSelector((state) => state.investors.investors);

  const investorTarget = investors.find(
    (investor) => investor.firmID === id.toString(),
  );

  return (
    <div className="container">
      <h1 className="heading">Investor Detail</h1>
      {investorTarget ? (
        <>
          <ul className="list">
            {Object.keys(investorTarget).map((key, index) => (
              <li className="list-item" key={index}>
                <strong>{key}:</strong> {investorTarget[key]}
              </li>
            ))}
          </ul>
          <h2 className="heading">Asset Classes</h2>
          <ul className="list">
            {Object.entries(AssetClassEnum).map(([key, value]) => (
              <li className="list-item" key={key}>
                <strong>{key}:</strong>{' '}
                <Link
                  key={value}
                  to={`/investors/${investorTarget.firmID}/asset/${key}`}
                >
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export { InvestorDetail };
