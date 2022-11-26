import React from 'react';
import { Card, Typography, Grid } from '@mui/material';

function Title() {
    return (
        <Grid item>
            <Card sx={{ minHeight: 300, maxWidth: 600 }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Inscripción: Grupo de Apoyo de Vida Plena
                </Typography>
                <Typography variant="body1" sx={{ ml: 2, mt: 2 }} gutterBottom>
                    Muchas gracias por su interés en participar en un grupo de apoyo emocional. Este es un breve formulario de 11 preguntas  para ayudarnos a identificar cuál grupo le queda más cercano donde usted.
                </Typography>
                <Typography variant="body1" sx={{ ml: 2 }} gutterBottom>
                    También, vamos a hacer unas preguntas sobre el malestar emocional para entender un poco más sobre su contexto. Toda su información mantenemos sumamente confidencial.
                </Typography>
                <Typography variant="body1" sx={{ ml: 2 }} gutterBottom>
                    Dentro de una semana, vamos a estar en contacto para informarse sobre los siguientes pasos.
                </Typography>
                <Typography variant="body1" sx={{ ml: 2 }} gutterBottom>
                    Si tiene alguna duda se puede contactar con Anita: 99 995 4988 o anita@vidaplena.global.
                </Typography>
                <Typography variant="body1" sx={{ ml: 2, mt: 2, mb: 2, fontWeight: 600 }}>
                    Estamos acá para apoyarte, queremos que sepas que no estás solo. 
                </Typography>
            </Card>
        </Grid>
    )
}

export default Title;