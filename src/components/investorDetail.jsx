import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { AssetClassEnum } from '../sdks/preqin.js';

function InvestorDetail() {
  const [assetInfo, setAssetInfo] = useState([]);
  let { id } = useParams();
  const investors = useSelector((state) => state.investors.investors);

  const investorTarget = investors.find(
    (investor) => investor.firmID === id.toString(),
  );

  return (
    <div>
      <h1>Investor Detail</h1>
      {investorTarget ? (
        <>
          <ul>
            {Object.keys(investorTarget).map((key, index) => (
              <li key={index}>
                <strong>{key}:</strong> {investorTarget[key]}
              </li>
            ))}
          </ul>
          <h2>Asset Classes</h2>
          <ul>
            {Object.entries(AssetClassEnum).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
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
