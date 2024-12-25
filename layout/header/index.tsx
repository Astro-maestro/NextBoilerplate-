import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion for animation
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useUserStore } from '@/toolkit/store/store';
import { set } from 'react-hook-form';
import { profile_pic } from '@/api/axios/axios';
import { IoIosLogOut } from "react-icons/io";
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { LuLogIn } from "react-icons/lu";
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import path from 'path';
const pages = [
  { name: 'Products', link: '/cms/list' },
  { name: 'Pricing', link: '/cms/pricing' },
  { name: 'Blogs', link: '/cms/blogs' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, setCookie, removeCookie] = useCookies();
  const { token, setToken, user, setUser } = useUserStore();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    setUser();
  }, [token])

  const handleLogout = () => {
    // Remove the cookie by name
    removeCookie('token', { path: '/' });
    setToken('');
    localStorage.removeItem('user');
    setUser();
    toast.success('Logout Successfully');
    router.push('/auth/login');
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true); // Open the drawer
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false); // Close the drawer
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky" sx={{ zIndex: 10, width: '100vw', bgcolor: theme.palette.grey[900] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo for desktop and mobile */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "white",
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Desktop nav items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', alignItems: 'center' } }}>
            {
              (user && token) ? <>
                <Avatar
                  alt={user?.name}
                  // src={profile_pic(user?.photo)}
                  src={user?.photo}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                />
                <Box>
                  <Typography sx={{ ml: 1, color: "white" }}>
                    {user?.name}
                  </Typography>
                  <Typography sx={{ ml: 1, color: "lightgray" }} fontSize={"12px"}>
                    +91 {user?.mobile}
                  </Typography>
                </Box>
                {token && <IoIosLogOut size={32} style={{ cursor: 'pointer', marginLeft: "10px" }} onClick={() => handleLogout()} />}
              </> :
                (

                  pathname !== '/auth/login' && <Link href="/auth/login" passHref>
                    <Button color="inherit" startIcon={<LuLogIn />}>Login</Button>
                  </Link>

                )
            }
          </Box>


        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.grey[900],
            color: "white",
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          {/* Logo inside Drawer for mobile */}
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: "white",
                textDecoration: 'none',
              }}
            >
              Pages
            </Typography>
          </Box>

          {/* Accordion for Blogs */}
          {token && <Accordion sx={{ backgroundColor: "#444444" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="blogs-content"
              id="blogs-header"
            >
              <Typography sx={{ textAlign: 'center', color: "white" }}>
                Blogs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/cms/blogs" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    All Blogs
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/cms/blogs/categories" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    Show All Categories
                  </Typography>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>}

          {/* Accordion for Page Content */}
          {token && <Accordion sx={{ backgroundColor: "#444444" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="page-content"
              id="page-content-header"
            >
              <Typography sx={{ textAlign: 'center', color: "white" }}>
                Page Content
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/cms/services" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    Services
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/cms/testimonials" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    Testimonials
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/cms/teams" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    Our Team
                  </Typography>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>}

          {/* Accordion for Courses */}
          <Accordion sx={{ backgroundColor: "#444444" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="courses-content"
              id="courses-header"
            >
              <Typography sx={{ textAlign: 'center', color: "white" }}>
                Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/cms/courses" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: 'white' }}>
                    All Courses
                  </Typography>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>

          {/* Accordion for CRUD */}
          <Accordion sx={{ backgroundColor: "#444444" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="crud-content"
              id="crud-header"
            >
              <Typography sx={{ textAlign: 'center', color: "white" }}>
                CRUD
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/crud/all_students" passHref>
                <MenuItem onClick={handleCloseDrawer}>
                  <Typography sx={{ color: "white" }}>
                    All Students
                  </Typography>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>
        </Box>
        {user && token && <Box display={"flex"} position={'absolute'} bottom={'1rem'} width={'100%'} padding={'0.5rem'}>
          <Box display={"flex"} alignItems={"center"} justifyContent={'space-between'} width={'100%'}>
            <Box display={"flex"} alignItems={"center"} width={'100%'}>
              <Avatar
                alt={user?.name}
                // src={profile_pic(user?.photo)}
                src={user?.photo}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              />
              <Box>
                <Typography sx={{ ml: 1, color: "white" }}>
                  {user?.name}
                </Typography>
                <Typography sx={{ ml: 1, color: "lightgray" }} fontSize={"12px"}>
                  +91 {user?.mobile}
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <IoIosLogOut size={32} style={{ cursor: 'pointer', marginLeft: "10px" }} onClick={() => handleLogout()} />
            </Box>
          </Box>
        </Box>}
        {
          (!user || !token) && pathname !== '/auth/login' && <Box display={"flex"} position={'absolute'} bottom={'1rem'} width={'100%'} padding={'0.5rem'}>
            <Box display={"flex"} alignItems={"center"} justifyContent={'space-between'} width={'100%'}>
              <Box display={"flex"} flexDirection={"row-reverse"} alignItems={"center"} width={'100%'}>
                <Link href="/auth/login" passHref>
                  <Button color="inherit" startIcon={<LuLogIn />}>Login</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        }
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;
