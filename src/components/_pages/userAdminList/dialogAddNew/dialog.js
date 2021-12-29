import { Dialog, DialogTitle, DialogContent, Button, } from "@mui/material";
import NewAdminAccountForm from "./addNewForm";

function NewAdminAccountDialog({open, onClose, onSuccess}) {
  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tạo tài khoản admin mới</DialogTitle>
      <DialogContent>
        <NewAdminAccountForm
          onSuccess={onSuccess}
        />
        <Button sx={{marginTop: 1}} color='defaultColor' variant='outlined' fullWidth onClick={handleClose}>
          Hủy
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default NewAdminAccountDialog;
