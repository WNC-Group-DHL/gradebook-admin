import { 
  Paper, 
  Typography,
  Box,
} from '@mui/material';

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Box padding={4}>
        <Typography gutterBottom align='center' variant='subtitle1'>
          Không có kết quả
        </Typography>
        <Typography variant="body2" align="center">
          Không tìm thấy kết quả cho &nbsp;
          <strong>&quot;{searchQuery}&quot;</strong>. 
        </Typography>
      </Box>
    </Paper>
  );
}
