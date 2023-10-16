import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  AssetClassEnum,
  getAssetFromAPI,
  getInvestorsFromAPI,
} from '../sdks/preqin.js';
import './InvestorAssetDetail.css';

function InvestorAssetDetail() {
  let { id, asset } = useParams();
  const [assetInfo, setAssetInfo] = useState([]);

  const token = useSelector((state) => state.token.token);
  useEffect(() => {
    if (token) {
      const fetchInvestorAsset = async () => {
        const investorAsset = await getAssetFromAPI(token, asset, id);
        console.log(investorAsset.data);
        setAssetInfo(investorAsset.data);
      };

      fetchInvestorAsset();
    }
  }, [token]);

  return (
    <div className="container">
      <h1 className="heading">
        Asset {asset} for {id}
      </h1>
      <ul className="list">
        {assetInfo.map((record, index) => (
          <li className="list-item" key={index}>
            {Object.entries(record).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { InvestorAssetDetail };
