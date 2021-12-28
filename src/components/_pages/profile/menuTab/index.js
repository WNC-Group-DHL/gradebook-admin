import {
  Tabs,
  Tab
} from '@mui/material';

import { useState } from 'react';

export default function MenuTab({setActivePanel = () => {}}) {
  const [value, setValue] = useState('user-info');
  
  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(newValue);
    setActivePanel(newValue);
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor='primary'
      variant='fullWidth'
    >
      <Tab value='user-info' label='Thông tin cá nhân' wrapped/>
      <Tab value='change-password' label='Đổi mật khẩu' wrapped/>
    </Tabs>
  )
}
