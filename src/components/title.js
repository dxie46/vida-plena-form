import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Typography, Grid } from '@mui/material';

function Title() {
    return (
        <Grid item>
            <Card sx={{ minHeight: 250, maxWidth: 600 }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Inscripción: Grupo de Apoyo de Vida Plena
                </Typography>
                <Typography variant="body1" sx={{ m: 2, fontStyle: 'italic' }}>
                    Gracias por tu interés en aprender más sobre los grupos de apoyo emocional de Vida Plena. Hemos cambiado nuestro formulario de inscripción, por favor haz clic en este enlace para ser redirigido inmediatamente:                    {' '}
                    <Link
                        component="button"
                        variant="body1"
                        sx={{ fontStyle: 'italic' }}
                        onClick={() => {
                            window.open("https://airtable.com/appVbXvolyANKCgB6/pagqCMhGZG7O0JSBt/form", "_blank");
                        }}
                    >
                         https://airtable.com/appVbXvolyANKCgB6/pagqCMhGZG7O0JSBt/form 
                    </Link>
                </Typography>
                </Card>
        </Grid>
    )
}

export default Title;