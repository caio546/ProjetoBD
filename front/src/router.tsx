import { Route, BrowserRouter } from 'react-router-dom';

import { ListAll } from './pages/ListAll';
import { ListObject } from './pages/ListObject';
import { Add } from './pages/Add';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ListAll} path="/List" exact />
      <Route component={ListObject} path="/List/:object/:id" exact />
      <Route component={Add} path="/Add" exact />
    </BrowserRouter>
  );
};
