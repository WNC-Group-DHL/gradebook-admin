import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AdminClassesAPI from '../../../../../../helpers/api/admin/classes';

import { CLASS_STATUS } from '../../../../../../helpers/constants';

export default function ToggleDisable({
  classId,
  classStatus = 'A',
  onSuccess = () => {}
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  let statusInfo = CLASS_STATUS[classStatus];

  if (!statusInfo) {
    statusInfo = CLASS_STATUS['A'];
  }

  const isClassDisabled = statusInfo.isClassDisabled;
  const extraButtonProps = {};
  if (!isClassDisabled) {
    extraButtonProps.color = 'error';
  }

  const handleClick = () => {
    setIsSubmitting(true);
    const newStatus = (classStatus !== 'A') ? 'A' : 'D';
    AdminClassesAPI.editClassroom(classId, {
      status: newStatus
    })
    .then((res) => {
      toast.success('Cập nhật thành công');
      onSuccess();
    })
    .catch(() => {
      toast.error('Lỗi cập nhật');
    })
    .finally(() => {
      setIsSubmitting(false);
    })
  }

  return (
    <LoadingButton
      {...extraButtonProps}
      loading={isSubmitting}
      variant='contained'
      onClick={handleClick}
    >
      {isClassDisabled ? 'Hủy vô hiệu hóa' : 'Vô hiệu hóa'}
    </LoadingButton>
  )
}