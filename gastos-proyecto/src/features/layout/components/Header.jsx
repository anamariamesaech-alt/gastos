import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'INICIO', id: 'inicio' },
  { label: 'BENEFICIOS', id: 'beneficios' },
  { label: 'PRECIOS', id: 'precios' },
  { label: 'APIS', path: '/api' },
];

const Header = () => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (!el) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }

    el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNav = (link) => {
    if (link.path) return navigate(link.path);
    scrollTo(link.id);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 1300
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>

        {/* LOGO */}
        <Box
          onClick={() => navigate('/')}
          sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
        >
          <MonetizationOnIcon sx={{ color: '#1565C0', fontSize: 32 }} />
          <Typography fontWeight={800} fontSize={20} sx={{ color: '#1565C0' }}>
            Moni
          </Typography>
        </Box>

        {/* LINKS */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navLinks.map((l) => (
            <Button
              key={l.label}
              onClick={() => handleNav(l)}
              sx={{
                color: '#444',
                fontWeight: 600,
                fontSize: 13,
                borderRadius: 2,
                px: 2,
                '&:hover': { backgroundColor: '#e8f0fb', color: '#1565C0' }
              }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        {/* LOGIN */}
        <Button
          onClick={() => navigate('/auth/iniciar')}
          variant="contained"
          sx={{
            backgroundColor: '#1565C0',
            borderRadius: 2,
            fontWeight: 700,
            px: 3,
            '&:hover': { backgroundColor: '#0d47a1' }
          }}
        >
          INICIAR SESIÓN
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;