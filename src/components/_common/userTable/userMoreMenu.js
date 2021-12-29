import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

// ----------------------------------------------------------------------

export default function UserMoreMenu({
  userId = '',
  onDeleteClick = () => {},
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const editLink = `/user/${userId}`;

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <MoreVertIcon/>
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={onDeleteClick}>
          <ListItemIcon>
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText primary='Xóa' primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem component={RouterLink} to={editLink} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
          <ListItemText primary='Chỉnh sửa' primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
