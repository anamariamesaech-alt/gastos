import { Box, Button, Container, Typography, Chip } from '@mui/material';

const HeroSection = () => {
  return (
    <Box id="inicio" sx={{ backgroundColor: '#fff' }}>

      <Container maxWidth="lg" sx={{ py: 10 }}>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6
        }}>

          {/* TEXTO */}
          <Box sx={{ flex: 1 }}>

            <Chip label="Control financiero inteligente" sx={{ mb: 3 }} />

            <Typography variant="h3" fontWeight={800} mb={2}>
              Organiza tu dinero, elimina gastos innecesarios y mejora tu vida financiera
            </Typography>

            <Typography color="text.secondary" mb={2}>
              Moni es una plataforma diseñada para ayudarte a entender exactamente en qué gastas tu dinero.
              Registra ingresos, gastos y visualiza reportes automáticos en segundos con análisis claros.
            </Typography>

            <Typography color="text.secondary" mb={3}>
              Ideal para estudiantes, freelancers, emprendedores y cualquier persona que quiera tener control total de su economía personal sin complicaciones.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained">Empezar gratis</Button>
              <Button variant="outlined">Ver Planes</Button>
              <Button variant="outlined" onClick={() => window.open('https://github.com/anamariamesaech-alt/gastos.git', '_blank')}>Repositorio Github</Button>
            </Box>

          </Box>

          {/* IMAGEN FIJA */}
          <Box sx={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;