import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import { FiRefreshCw } from 'react-icons/fi'
interface Props {
    info:string
}
const ErrorComp:React.FC<Props> = ({info}) => {
  return (
    <Box
            sx={{
                padding: 4,
                minHeight: '100vh',
                backgroundColor: '#f4f6f8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <AiOutlineWarning size={60} color="#d32f2f" style={{ marginBottom: '16px' }} />
            <Typography
                variant="h5"
                color="error"
                align="center"
                sx={{ mb: 2, fontWeight: 'bold' }}
            >
                😞 Oops! Something went wrong.
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ mb: 4 }}
            >
                There was an error loading {info}. Please try again later.
            </Typography>
            <FiRefreshCw size={32} color="#1976d2" style={{ cursor: 'pointer' }} onClick={() => window.location.reload()} />
        </Box>
  )
}

export default ErrorComp