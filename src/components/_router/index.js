import { Route, Switch, Redirect } from 'react-router-dom';
import AuthOnlyRoute from './customRoute/authOnlyRoute';
import NonAuthOnlyRoute from './customRoute/nonAuthOnlyRoute';

// Pages
import NotFoundPage from '../_pages/notfound';
import ClassroomList from '../_pages/classroomList';
import SignInPage from '../_pages/signin';
import ProfilePage from '../_pages/profile';
import UserAccountList from '../_pages/userList';
import AdminAccountList from '../_pages/userAdminList';
import UserSingle from '../_pages/userSingle';
import ClassSingle from '../_pages/classSingle';

// Pages

function Router() {
  return (
    <Switch>
      <NonAuthOnlyRoute exact path='/signin'>
        <SignInPage/>
      </NonAuthOnlyRoute>
      <AuthOnlyRoute exact path='/dashboard'>
        <Redirect to='/classes'/>
      </AuthOnlyRoute>

      <AuthOnlyRoute exact path='/classes'>
        <ClassroomList/>
      </AuthOnlyRoute>
      <AuthOnlyRoute path='/class/:classId'>
        <ClassSingle/>
      </AuthOnlyRoute>

      <AuthOnlyRoute exact path='/profile'>
        <ProfilePage/>
      </AuthOnlyRoute>
      <AuthOnlyRoute exact path='/users'>
        <UserAccountList/>
      </AuthOnlyRoute>
      <AuthOnlyRoute exact path='/users/admin'>
        <AdminAccountList/>
      </AuthOnlyRoute>
      <AuthOnlyRoute path='/user/:userId'>
        <UserSingle/>
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
