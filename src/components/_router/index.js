import { Route, Switch, Redirect } from 'react-router-dom';
import AuthOnlyRoute from './customRoute/authOnlyRoute';
import NonAuthOnlyRoute from './customRoute/nonAuthOnlyRoute';

// Pages
import NotFoundPage from '../_pages/notfound';
import ClassroomList from '../_pages/classroomList';
import SignInPage from '../_pages/signin';
import ProfilePage from '../_pages/profile';

// Pages

function Router() {
  return (
    <Switch>
      <NonAuthOnlyRoute exact path='/signin'>
        <SignInPage/>
      </NonAuthOnlyRoute>
      <AuthOnlyRoute exact path='/dashboard'>
        <ClassroomList/>
      </AuthOnlyRoute>
      <AuthOnlyRoute exact path='/profile'>
        <ProfilePage/>
      </AuthOnlyRoute>
      <Route exact path='/notfound'>
        <NotFoundPage/>
      </Route>
      <Route exact path='/'>
        <Redirect to='/dashboard'/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  )
}

export default Router;
