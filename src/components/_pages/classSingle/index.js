import { useParams } from 'react-router-dom';
import DefaultLayout from '../../_layout/default';

export default function ClassSingle() {
  const { classId } = useParams();
  return (
    <DefaultLayout>
      <div>Chỉnh sửa lớp id: {classId}</div>
    </DefaultLayout>
  )
}
