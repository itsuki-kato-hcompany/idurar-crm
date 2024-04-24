import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';
import { Client, Provider as UrqlProvider, cacheExchange, fetchExchange } from 'urql';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UrqlProvider value={client}>
          <Suspense fallback={<PageLoader />}>
            <IdurarOs />
          </Suspense>
        </UrqlProvider>
      </Provider>
    </BrowserRouter>
  );
}
