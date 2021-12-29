import UserListTable from './usersTable';
import DefaultLayout from '../../_layout/default';
import UserListToolbar from './topBar';

export default function UserAccountList() {
  const users = [...Array(24)].map((_, index) => ({
    id: index,
    avatarUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabsspeedsensors.com%2Fproduct%2Fsample-product-1%2F&psig=AOvVaw09yjnPg6YzIIkQKievAJRc&ust=1640853439410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDwx8XNiPUCFQAAAAAdAAAAABAD',
    name: 'tester',
    username: 'st@gmail.com',
    status: 'A',
    student_code: '18120001',
    lastActive: '2021-01-01 21:21:21'
  }));

  const handleRefresh = () => {

  }

  return (
    <DefaultLayout>
      <UserListToolbar handleRefresh={handleRefresh}/>
      <UserListTable userData={users}/>
    </DefaultLayout>
  )
}
