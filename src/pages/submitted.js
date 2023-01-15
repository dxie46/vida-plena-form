import React, { useEffect } from 'react';
import { Button, Grid, Card, Typography } from '@mui/material'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

function Submitted() {

    const location = useLocation();
    const navigate = useNavigate();

    const { choices } = location.state;
    const { age } = location.state;

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

    console.log(age);

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
        >
            <Grid item>
                <Card sx={{ minHeight: 150, maxWidth: 550 }}>
                    {/* {(score <= 9 && age == "mayor de 18 años") && <>
                        <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                            Gracias por su respuesta
                        </Typography>
                        <Typography variant="body1" sx={{ ml: 2, mb: 2, mt: 2, wordWrap: 'break-word' }}>
                            Comuníquese si tiene alguna pregunta. Agradecemos su tiempo y participación.
                        </Typography>
                    </>} */}
                    {(score <= 9 && age == "mayor de 18 años") && window.location.replace('https://vidaplenalatam.wordpress.com/muchas-gracias-por-cuidar-de-tu-salud-mental/')}
                    {(score > 9 && age == "mayor de 18 años") && window.location.replace('https://vidaplenalatam.wordpress.com/gracias-por-tu-interes-en-vida-plena/')}
                    {(age == "menor de 18 años" || age == "") && window.location.replace('https://vidaplenalatam.wordpress.com/gracias-por-tu-interes-en-un-grupo-de-apoyo-de-salud-mental/')}
                    {/* {(age == "menor de 18 años" || age == "") &&
                        <Grid container direction="column">
                            <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                                Gracias por su respuesta
                            </Typography>
                            <Typography variant="body1" sx={{ ml: 2, mb: 1, mt: 2, wordWrap: 'break-word' }}>
                                Comuníquese si tiene alguna pregunta. Agradecemos su tiempo y participación.
                            </Typography>
                            <Grid item>
                                <Link to="https://www.google.com" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ ml: 2, mb: 1 }}>
                                        Resource 1
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="https://www.google.com" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ ml: 2, mb: 1 }}>
                                        Resource 2
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="https://www.google.com" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ ml: 2, mb: 1 }}>
                                        Resource 3
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="https://www.google.com" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ ml: 2, mb: 1 }}>
                                        Resource 4
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="https://www.google.com" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ ml: 2, mb: 1 }}>
                                        Resource 5
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>} */}
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