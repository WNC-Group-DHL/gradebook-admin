import { useParams } from 'react-router-dom';
import DefaultLayout from '../../_layout/default';

export default function UserSingle() {
  const { userId } = useParams();
  return (
    <DefaultLayout>
      <div>Chỉnh sửa tài khoản id: {userId}</div>
    </DefaultLayout>
  )
}
