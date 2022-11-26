import React from 'react';
import { Grid, Typography, OutlinedInput, Card } from '@mui/material';

function InputForm(props) {
    return (
        <Grid item>
            <Card
                sx={{ minWidth: 500, minHeight: 85 }}
            >
                <Typography sx={{ ml: 1.5, mt: 1, fontWeight: 600, wordWrap: 'break-word' }} color="text.secondary">
                    {props.question}
                </Typography>
                <OutlinedInput
                    sx={{ ml: 1, mt: 0.5, minWidth: 400 }}
                    placeholder={(props.placeholder != null && props.input == null ? props.placeholder : (props.input != null ? props.input : props.question))}
                    size="small"
                    onChange={(event) => {
                        props.updateInputForm(event.target.value)
                    }}
                />
            </Card>
        </Grid>
    )
}

export default InputForm;