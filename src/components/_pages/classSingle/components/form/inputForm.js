import { Button, TextField } from '@mui/material';
import {
  LoadingButton
} from '@mui/lab';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import AdminClassesAPI from '../../../../../helpers/api/admin/classes';

const validationSchema = yup.object({
  class_name: yup
    .string('Nhập tên lớp')
    .min(6, 'Tối thiểu 6 ký tự')
    .max(30, 'Tối đa 30 ký tự')
    .required('Bắt buộc'),
  subject: yup
    .string('Nhập môn học')
    .max(30, 'Tối đa 30 ký tự')
    .required('Bắt buộc'),
  description: yup
    .string('Nhập mô tả')
});

function ClassEditForm({
  classInfo = {}, 
  onSuccess = () => {}, 
  onFailed = () => {}
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values) => {
    const classId = classInfo.id;
    const submitData = values;
    setIsSubmitting(true);
    AdminClassesAPI.editClassroom(classId, submitData)
    .then((res) => {
      toast.success('Cập nhật thành công');
      onSuccess(submitData);
    })
    .catch(() => {
      toast.error('Lỗi cập nhật');
    })
    .finally(() => {
      setIsSubmitting(false);
    })
  }

  const formik = useFormik({
    initialValues: {
      class_name: classInfo.class_name || '',
      subject: classInfo.subject || '',
      description: classInfo.description ||''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        autoFocus
        margin='normal'
        id='class_name'
        name='class_name'
        label='Tên lớp'
        variant='outlined'
        value={formik.values.class_name}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.class_name)}
        helperText={formik.errors.class_name || ' '}
      />
      <TextField
        fullWidth
        margin='normal'
        id='subject'
        name='subject'
        label='Môn học'
        variant='outlined'
        value={formik.values.subject}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.subject)}
        helperText={formik.errors.subject || ' '}
      />
      <TextField
        fullWidth
        margin='normal'
        id='description'
        name='description'
        label='Mô tả'
        variant='outlined'
        multiline
        rows={2}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.description)}
        helperText={formik.errors.description || ' '}
      />
      <LoadingButton 
        loading={isSubmitting}
        variant='contained'
        fullWidth 
        type='submit'
      >
        Lưu thay đổi
      </LoadingButton>
      <Button 
        sx={{marginTop: 1}} color='defaultColor' variant='outlined' fullWidth 
        component={Link} to='/classes'
      >
        Hủy
      </Button>
    </form>
  )
}

export default ClassEditForm;
