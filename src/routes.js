import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';

function Routes() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
    </Switch>
  </BrowserRouter>)
}

export default Routes;
