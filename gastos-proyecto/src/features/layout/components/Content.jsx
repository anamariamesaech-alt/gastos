import React from 'react'
import { Link } from 'react-router-dom'

import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Container,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

import {
    AttachMoney,
    BarChart,
    Security,
    CheckCircle,
    ArrowForward
} from '@mui/icons-material';

import GitHubIcon from '@mui/icons-material/GitHub';

export const Content = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#000', color: '#fff', py: 8 }}>
                <Container>
                    <Typography variant="h3">
                        Controla tus gastos
                    </Typography>

                    <Button component={Link} to="/login">
                        Ir al login
                    </Button>
                </Container>
            </Box>

            <Box sx={{ py: 5 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <AttachMoney />
                                    <Typography>Registro</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <BarChart />
                                    <Typography>Análisis</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Security />
                                    <Typography>Seguridad</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}