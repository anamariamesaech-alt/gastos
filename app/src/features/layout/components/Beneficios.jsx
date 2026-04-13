import { Box, Container, Typography } from '@mui/material';

const Beneficios = () => {
  return (
    <Box id="beneficios" sx={{ py: 10, backgroundColor: '#f5f7fa' }}>

      <Container maxWidth="lg">

        <Typography
          variant="h4"
          fontWeight={800}
          mb={2}
          sx={{ textAlign: 'center' }}
        >
          Beneficios que transforman tus finanzas
        </Typography>

        <Typography
          color="text.secondary"
          mb={6}
          sx={{ textAlign: 'center' }}
        >
          Controla tu dinero con herramientas diseñadas para mejorar tus hábitos financieros
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3
        }}>

          {[
            {
              t: "Control total de ingresos y gastos",
              d: "Registra cada movimiento financiero y obtén una visión completa de tu dinero en tiempo real."
            },
            {
              t: "Ahorro automático inteligente",
              d: "Detecta patrones de gasto y aprende dónde puedes reducir costos sin afectar tu estilo de vida."
            },
            {
              t: "Reportes avanzados",
              d: "Gráficas mensuales, semanales y comparativas para entender tu comportamiento financiero."
            },
            {
              t: "Seguridad de nivel bancario",
              d: "Tus datos están protegidos con cifrado avanzado y nunca se comparten con terceros."
            },
            {
              t: "Acceso desde cualquier dispositivo",
              d: "Sincronización automática entre móvil, tablet y computadora."
            },
            {
              t: "Alertas inteligentes en tiempo real",
              d: "Recibe notificaciones cuando te acerques a tu límite de gasto."
            }
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0'
              }}
            >
              <Typography fontWeight={700}>
                {item.t}
              </Typography>

              <Typography fontSize={13} color="text.secondary">
                {item.d}
              </Typography>
            </Box>
          ))}

        </Box>

      </Container>
    </Box>
  );
};

export default Beneficios;