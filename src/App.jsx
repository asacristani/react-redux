import { InvestorTable } from './components/investorTable.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInvestorsFromAPI, getTokenFromAPI } from './sdks/preqin.js';
import { addToken } from './redux/tokenSlice.js';
import { addInvestors } from './redux/investorsSlice.js';

function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getTokenFromAPI();
      setToken(token);
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchInvestors = async () => {
        const investors = await getInvestorsFromAPI(token);
        dispatch(addInvestors(investors.data));
      };

      fetchInvestors();
    }
  }, [token]);

  return (
    <div>
      <InvestorTable />
    </div>
  );
}

export default App;
