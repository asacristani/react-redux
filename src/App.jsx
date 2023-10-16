import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { InvestorTable } from './components/investorTable.jsx';
import { InvestorDetail } from './components/investorDetail.jsx';

import { getInvestorsFromAPI, getTokenFromAPI } from './sdks/preqin.js';

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <InvestorTable />,
    },
    {
      path: '/investors/:id',
      element: <InvestorDetail />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
