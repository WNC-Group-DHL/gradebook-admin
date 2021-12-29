import AdminListTable from './adminTable';
import DefaultLayout from '../../_layout/default';
import AdminListToolbar from './topBar';

export default function AdminAccountList() {
  const users = [...Array(24)].map((_, index) => ({
    id: index,
    avatarUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabsspeedsensors.com%2Fproduct%2Fsample-product-1%2F&psig=AOvVaw09yjnPg6YzIIkQKievAJRc&ust=1640853439410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDwx8XNiPUCFQAAAAAdAAAAABAD',
    name: 'tester',
    username: 'st@gmail.com',
    status: 'A',
    lastActive: '2021-01-01 21:21:21'
  }));

  const handleRefresh = () => {

  }

  return (
    <DefaultLayout>
      <AdminListToolbar handleRefresh={handleRefresh}/>
      <AdminListTable userData={users}/>
    </DefaultLayout>
  )
}
