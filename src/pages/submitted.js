import React, { useEffect } from 'react';
import { Button, Grid, Card, Typography } from '@mui/material'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

function Submitted() {

    const location = useLocation();
    const navigate = useNavigate();

    const { choices } = location.state;

    const dict = {
        ['0 Ningún día']: 0,
        ['1 Varios días']: 1,
        ['2 Más de la mitad de los días']: 2,
        ['3 Casi todos los días']: 3,
    }

    let score = 0;

    choices.forEach((choice) => {
        if (dict[choice]) {
            score = score + dict[choice];
        }
    })

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
        >
            <Grid item>
                <Card sx={{ minHeight: 150, maxWidth: 550 }}>
                    <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                        Gracias por su respuesta
                    </Typography>
                    <Typography variant="body1" sx={{ ml: 2, mb: 2, mt: 2, wordWrap: 'break-word' }}>
                        Comuníquese si tiene alguna pregunta. Agradecemos su tiempo y participación.
                    </Typography>
                    {score > 0 &&
                        <>
                            <Typography variant="body1" sx={{ ml: 2, mb: 2, mt: 2, wordWrap: 'break-word' }}>
                                Le recomendamos que visite este sitio para obtener más ayuda.
                            </Typography>
                            <Button 
                                variant="outlined" 
                                size="small" 
                                sx={{ ml: 2, mb: 2 }}
                                onClick={() => {
                                    if (window.confirm("Navegando a www.google.com?")) {
                                        window.location.replace('https://www.google.com');
                                    }
                                }}
                                >
                                Redirigir
                            </Button>
                        </>}
                </Card>
            </Grid>
            <Grid item>
                <Link to="/form" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ mt: 1 }} textAlign="right">
                        Enviar otro
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Submitted;