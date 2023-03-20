import React from 'react';
import { Card, Typography, Grid, Link, RadioGroup, Radio, FormControlLabel } from '@mui/material';

function ConsentBox(props) {
    return (
        <Grid item>
            <Card sx={{ minHeight: 150, maxWidth: 600 }}>
                <Typography variant="body1" sx={{ ml: 2, mt: 2, mb: 2, fontWeight: 600 }}>
                    Declaración de consentimiento informado:
                </Typography>
                <Typography variant="body1" sx={{ m: 2, fontStyle: 'italic' }}>
                    Acepto, de manera libre y voluntaria, utilizar los servicios del Vida Plena bajo los lineamientos especificados en el consentimiento informado
                    {' '}
                    <Link
                        component="button"
                        variant="body1"
                        sx={{ fontStyle: 'italic' }}
                        onClick={() => {
                            window.location.replace("https://vidaplenalatam.wordpress.com/74-2/");
                        }}
                    >
                        (hacer clic para leer)
                    </Link>
                </Typography>
                <Typography variant="body1" sx={{ m: 2, fontStyle: 'italic' }}>
                    Dando click en "Si" se da por entendido que acepto las condiciones indicadas.
                    Dando click en "No" entiendo que puedo enviar un correo solicitando que me deriven a otros espacios de apoyo emocional.
                </Typography>
                <RadioGroup
                    sx={{ ml: 2, mb: 1 }}
                    onChange={(event) => {
                        props.updateSelection(event.target.value);
                    }}
                >
                    <FormControlLabel value={"Si"} control={<Radio checked={props.input?.includes("Si")}/>} label={"Si"} />
                    <FormControlLabel value={"No"} control={<Radio checked={props.input?.includes("No")}/>} label={"No"} />
                </RadioGroup>
            </Card>
        </Grid>
    )
}

export default ConsentBox;