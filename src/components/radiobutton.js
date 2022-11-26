import React from 'react';
import { Grid, Typography, Card, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function RadioButton(props) {
    return (
        <Grid item>
                <Card
                    sx={{ minWidth: 500, maxWidth: 500, minHeight: 85 }}
                >
                    <Typography sx={{ ml: 1.5, mt: 1, fontWeight: 600, wordWrap: 'break-word' }} color="text.secondary">
                        {props.question}
                    </Typography>
                    <RadioGroup 
                        sx={{ ml: 1 }}
                        onChange={(event) => {
                            props.updateSelection(event.target.value);
                        }}
                    >
                        {props.selections.map((element) => {
                            return <FormControlLabel value={element} control={<Radio checked={props.input?.includes(element)} />} label={element}/>
                        })}
                    </RadioGroup>
                </Card>
            </Grid>
    )
}

export default RadioButton;