import React from 'react';
import { Card, Typography, Grid } from '@mui/material';

function InfoBox() {
    return (
        <Grid item>
            <Card sx={{ minHeight: 150, maxWidth: 600 }}>
                <Typography variant="body1" sx={{ ml: 2, mt: 2, mb: 2, fontWeight: 600 }}>
                    Para la siguiente sesión de preguntas, por favor reflexiona sobre las últimas 2 semanas,  ¿qué tan seguido ha tenido molestias debido a los siguientes problemas?
                </Typography>
                <Typography variant="body1" sx={{ ml: 2, mt: 2, mb: 2, fontStyle: 'italic' }}>
                    Marque para indicar su respuesta:
                </Typography>
            </Card>
        </Grid>
    )
}

export default InfoBox;