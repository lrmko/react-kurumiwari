import { FC } from 'react';
import { IndexRoutes } from 'routes';
import { Providers } from 'Provider';

const App: FC = () => (
  <Providers>
    <IndexRoutes />
  </Providers>
);

export default App;
