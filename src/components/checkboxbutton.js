import React, { useState, useEffect } from 'react';
import { Grid, Card, Typography, FormGroup, FormControlLabel, Checkbox, OutlinedInput } from '@mui/material';

function CheckboxButton(props) {

    const [editingOther, setEditingOther] = useState(false)
    const [currentOther, setCurrentOther] = useState("");

    useEffect(() => {
        let found = false;
        for (let i = 0; i < props.input?.length; i++) {
            if (props.input[i].substring(0, 5) == "Other") {
                setCurrentOther(props.input[i]);
                found = true;
                break;
            }
        }
        if (!found) { setCurrentOther(""); }
    }, [props])

    return (
        <Grid item>
            <Card
                sx={{ minWidth: 500, maxWidth: 500, minHeight: 85 }}
            >
                <Typography sx={{ ml: 1.5, mt: 1, fontWeight: 600, wordWrap: 'break-word' }} color="text.secondary">
                    {props.question}
                </Typography>
                <FormGroup
                    sx={{ ml: 1 }}
                    onChange={(event) => {
                        if (!editingOther) {
                            if (!props.currentChoices.includes(event.target.value)) {
                                props.updateChoices([...props.currentChoices, event.target.value]);
                            } else {
                                props.updateChoices(props.currentChoices.filter(item => item != event.target.value));
                            }
                        }
                    }}
                >
                    {props.choices.map((element) => {
                        if (element == "Other") {
                            return (
                                <Grid container direction='row'>
                                    <Grid item>
                                        {currentOther != "" && <FormControlLabel
                                            value={element}
                                            control={<Checkbox checked={currentOther != ""}/>}
                                            label={element}
                                        />}
                                        {currentOther == "" && <FormControlLabel
                                            value={element}
                                            control={<Checkbox />}
                                            label={element}
                                        />}
                                    </Grid>
                                    <Grid item sx={{ mb: 1 }}>
                                        <OutlinedInput
                                            sx={{ ml: 1, mt: 0.5, minWidth: 300 }}
                                            size="small"
                                            placeholder={currentOther != "" ? currentOther.substring(7) : ""}
                                            onFocus={() => {
                                                setEditingOther(true);
                                            }}
                                            onBlur={() => {
                                                setEditingOther(false);
                                            }}
                                            onChange={(event) => {
                                                let foundOther = false;
                                                for (let i = 0; i < props.currentChoices.length; i++) {
                                                    if (props.currentChoices[i].substring(0, 5) == "Other") {
                                                        // create deep copy
                                                        let copy = JSON.parse(JSON.stringify(props.currentChoices));
                                                        copy[i] = "Other: " + event.target.value;
                                                        props.updateChoices(copy)
                                                        foundOther = true;
                                                        break;
                                                    }
                                                }
                                                if (!foundOther) {
                                                    props.updateChoices([...props.currentChoices, "Other: " + event.target.value])
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return <FormControlLabel value={element} control={<Checkbox checked={props.input?.includes(element)} />} label={element} />
                        }
                    })}
                </FormGroup>
            </Card>
        </Grid>
    )
}

export default CheckboxButton;