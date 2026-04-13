import ApiRyc_Axios from '../../../shared/Components/ApiRyc_Axios';
import { Box } from '@mui/material';

const ApiPage = () => {
  return (
    <Box sx={{ pt: '90px', px: 2 }}>
      <ApiRyc_Axios />
    </Box>
  );
};

export default ApiPage;