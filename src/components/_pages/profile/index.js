import { Container, Box } from '@mui/material';
import {useState} from 'react';

import DefaultLayout from '../../_layout/default';
import InfoUser from './InfoUser';
import ChangePassword from './ChangePassword/ChangePassword';
import MenuTab from './menuTab';

function ProfilePage() {
  const [actived, setActived] = useState('user-info')
  const [openInfo, setOpenInfo] = useState(true)
  const [openSecurity, setOpenSecurity] = useState(false)
  const setActivePanel = (actived) =>
  {
    setActived(actived)
    if (actived === 'user-info')
    {
      setOpenInfo(true)
      setOpenSecurity(false)
    }
    else{
      setOpenInfo(false)
      setOpenSecurity(true)
    }
  }
  return (
    <DefaultLayout>
      <Container maxWidth='md'>
        <MenuTab setActivePanel={setActivePanel}/>
        <Box sx={{marginTop: 2}}>
          {openInfo && <InfoUser/>}
          {openSecurity && <ChangePassword actived={actived} setAct={setActivePanel}/>}
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default ProfilePage;
