import { Box, Container, Typography, Link } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Footer = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#0f172a', color: '#fff', py: 6, mt: 8 }}>

      <Container maxWidth="lg">

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
          gap: 4
        }}>

          {/* LOGO + DESCRIPCIÓN */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <MonetizationOnIcon sx={{ color: '#1565C0', fontSize: 30 }} />
              <Typography fontWeight={800} fontSize={20}>
                Moni
              </Typography>
            </Box>

            <Typography fontSize={13} color="#94a3b8" sx={{ lineHeight: 1.7 }}>
              Moni es una plataforma de finanzas personales diseñada para ayudarte
              a controlar tus gastos, mejorar tu ahorro y tomar decisiones financieras inteligentes.
            </Typography>
          </Box>

          {/* LINKS */}
          <Box>
            <Typography fontWeight={700} mb={2}>
              Secciones
            </Typography>

            {[
              { label: 'Inicio', id: 'inicio' },
              { label: 'Beneficios', id: 'beneficios' },
              { label: 'Precios', id: 'precios' },
              { label: 'APIs', id: 'apis' },
            ].map((item) => (
              <Typography
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  fontSize: 13,
                  color: '#94a3b8',
                  cursor: 'pointer',
                  mb: 1,
                  '&:hover': { color: '#fff' }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* CONTACTO */}
          <Box>
            <Typography fontWeight={700} mb={2}>
              Soporte
            </Typography>

            <Typography fontSize={13} color="#94a3b8" mb={1}>
              📧 soporte@moni.com
            </Typography>

            <Typography fontSize={13} color="#94a3b8" mb={1}>
              📱 App disponible 24/7
            </Typography>

            <Typography fontSize={13} color="#94a3b8">
              🔒 Seguridad bancaria
            </Typography>
          </Box>

        </Box>

        {/* LINEA FINAL */}
        <Box sx={{
          borderTop: '1px solid #1e293b',
          mt: 4,
          pt: 3,
          textAlign: 'center'
        }}>
          <Typography fontSize={12} color="#64748b">
            © 2026 Moni. Todos los derechos reservados.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;