import React, { useState } from 'react';
import { Grid, Typography, OutlinedInput, Card } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Dropdown(props) {

    const [otherSelected, setOtherSelected] = useState(false);
    const [refer, setRefer] = useState("")
    console.log(props)
    return (
        <Grid item>
            <Card
                sx={{ minWidth: 500, minHeight: 85 }}
            >
                <Typography sx={{ ml: 1.5, mt: 1, fontWeight: 600, wordWrap: 'break-word' }} color="text.secondary">
                    {props.question}
                </Typography>
                <Grid container direction="column">
                    <Grid item>
                        <FormControl size='small' sx={{ ml: 1, mt: 0.5, minWidth: 400 }}>
                            <InputLabel>Nombre</InputLabel>
                            <Select
                                label="Nombre"
                                value={props.input != null ? props.input : refer}
                                onChange={(event) => {
                                    setRefer(event.target.value)
                                    if (event.target.value == "Otro") {
                                        setOtherSelected(true);
                                    } else {
                                        setOtherSelected(false);
                                    }
                                    props.updateSelection(event.target.value)
                                }}
                            >
                                {props.selections.map((select) => {
                                    return <MenuItem value={select}>{select}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    {otherSelected &&
                    <Grid item>
                        <OutlinedInput
                            sx={{ ml: 1, mt: 0.5, mb: 0.5, minWidth: 400 }}
                            placeholder="Por favor explique aquí"
                            size="small"
                            onChange={(event) => {
                                props.updateSelection("Otro: " + event.target.value)
                            }}
                        />
                    </Grid>}
                </Grid>
            </Card>
        </Grid>
    )
}

export default Dropdown;