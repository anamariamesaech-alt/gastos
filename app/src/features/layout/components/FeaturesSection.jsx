import { Box, Container, Typography } from '@mui/material';

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 10 }}>

      <Container maxWidth="lg">

        <Typography variant="h4" textAlign="center" mb={6}>
          Funcionalidades principales
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 3
        }}>

          {[
            {
              t: "Registro de gastos",
              img: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80"
            },
            {
              t: "Reportes visuales",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            },
            {
              t: "Control financiero",
              img: "https://tse2.mm.bing.net/th/id/OIP.gW8jRxiF_me7ojTbVYl0YAAAAA?w=474&h=316&rs=1&pid=ImgDetMain&o=7&rm=3"
            }
          ].map((f, i) => (
            <Box key={i} sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>

              <img
                src={f.img}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />

              <Box sx={{ p: 2 }}>
                <Typography fontWeight={700}>{f.t}</Typography>
              </Box>

            </Box>
          ))}

        </Box>

      </Container>
    </Box>
  );
};

export default FeaturesSection;