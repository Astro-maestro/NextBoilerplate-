import React from 'react';
import ResponsiveAppBar from '../footer';
import Footer from '../footer';
import Sidebar from '../sidebar';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

interface props {
  children: React.ReactNode;
}

const Wrapper: React.FC<props> = ({ children }) => {
  const router = useRouter();
  const pathArr = router.pathname.split('/');
  const route = pathArr[pathArr.length - 2 ];
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ display: 'flex',height:"100%"}}>
      {
        route!='auth'&&<Sidebar />
      }
      
      <div style={{display: 'flex',justifyContent: 'center',width:"100%",height:"100%"}}>
      <div style={{width:"100%",height:"100%"}}>
      {children}
      </div>
      </div>
      </Box>
      <Footer />
    </>
  );
};

export default Wrapper;


