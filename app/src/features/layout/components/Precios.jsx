import { Box, Button, Container, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const planes = [
  {
    nombre: 'Gratis',
    precio: '$0',
    periodo: 'para siempre',
    features: [
      'Hasta 50 gastos al mes',
      '2 categorías personalizadas',
      'Reporte mensual básico',
      'Acceso desde móvil y web',
    ],
  },
  {
    nombre: 'Pro',
    precio: '$9.99',
    periodo: 'por mes',
    destacado: true,
    features: [
      'Gastos ilimitados',
      'Categorías ilimitadas',
      'Reportes avanzados',
      'Alertas inteligentes',
      'Exportación a PDF y Excel',
      'Soporte prioritario',
    ],
  },
  {
    nombre: 'Premium',
    precio: '$19.99',
    periodo: 'por mes',
    features: [
      'Todo lo de Pro',
      'Multiusuario (hasta 5)',
      'Dashboard compartido',
      'Reportes por usuario',
      'Acceso a API',
      'Soporte 24/7',
    ],
  },
];

const Precios = () => {
  return (
    <Box id="precios" sx={{ py: 10, backgroundColor: '#f5f7fa' }}>
      <Container maxWidth="lg">

        {/* TITULO */}
        <Typography variant="h4" textAlign="center" mb={1} fontWeight={700}>
          Planes diseñados para ti
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={5}>
          Empieza gratis y mejora tu control financiero a medida que creces
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch'
          }}
        >
          {planes.map((plan, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                backgroundColor: plan.destacado ? '#1565C0' : '#fff',
                color: plan.destacado ? '#fff' : '#000',
                borderRadius: '16px',
                p: 3,
                pt: plan.destacado ? 5 : 3, // 🔥 menos espacio arriba
                border: plan.destacado ? 'none' : '1px solid #e0e0e0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: plan.destacado ? 6 : 2,
                minHeight: '360px' // 🔥 altura más compacta
              }}
            >

              {/* BADGE */}
              {plan.destacado && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10, // 🔥 separado del texto
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#ffc107',
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    zIndex: 2
                  }}
                >
                  <Typography fontSize={12} fontWeight={700}>
                    MÁS POPULAR
                  </Typography>
                </Box>
              )}

              {/* CONTENIDO */}
              <Box>

                <Typography fontWeight={700} fontSize={18}>
                  {plan.nombre}
                </Typography>

                <Typography fontSize={28} fontWeight={800}>
                  {plan.precio}
                </Typography>

                <Typography
                  fontSize={13}
                  mb={2}
                  color={plan.destacado ? '#e3f2fd' : 'text.secondary'}
                >
                  {plan.periodo}
                </Typography>

                {plan.features.map((f, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, mb: 0.7 }}>
                    <CheckIcon
                      sx={{
                        fontSize: 18,
                        color: plan.destacado ? '#90caf9' : '#1565C0'
                      }}
                    />
                    <Typography fontSize={14}>{f}</Typography>
                  </Box>
                ))}

              </Box>

              {/* BOTÓN */}
              <Button
                fullWidth
                variant={plan.destacado ? 'outlined' : 'contained'}
                sx={{
                  mt: 2, // 🔥 menos espacio
                  borderRadius: '8px',
                  fontWeight: 700,
                  backgroundColor: plan.destacado ? 'transparent' : '#1565C0',
                  color: '#fff',
                  borderColor: plan.destacado ? '#90caf9' : 'transparent',
                  '&:hover': {
                    backgroundColor: plan.destacado ? '#1976D2' : '#0d47a1'
                  }
                }}
              >
                {plan.nombre === 'Gratis'
                  ? 'Empezar gratis'
                  : 'Elegir plan'}
              </Button>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Precios;