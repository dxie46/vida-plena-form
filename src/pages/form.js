import React, { useState, useEffect } from 'react';
import { Grid, Button, OutlinedInput } from '@mui/material';
import InputForm from '../components/inputform.js';
import RadioButton from '../components/radiobutton.js';
import CheckboxButton from '../components/checkboxbutton.js';
import Title from '../components/title.js';
import InfoBox from '../components/infobox.js';
import { Link } from 'react-router-dom'
import { database } from '../firebase-config';
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function Form() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState(""); // < 18 or > 18
    const [no1, setNo1] = useState("");
    const [no2, setNo2] = useState("");
    const [no3, setNo3] = useState("");
    const [no4, setNo4] = useState("");
    const [no5, setNo5] = useState("");
    const [no6, setNo6] = useState("");
    const [no7, setNo7] = useState("");
    const [no8, setNo8] = useState("");
    const [no9, setNo9] = useState("");
    const [miscMC, setMiscMC] = useState("");
    const [location, setLocation] = useState([]);
    const [time, setTime] = useState([]);
    const [commentsQuestions, setCommentsQuestions] = useState("");

    const [inputtedKey, setInputtedKey] = useState("");
    const [toggleKey, setTogglekey] = useState(false);

    const pass = "OQB818J749";
    const navigate = useNavigate();

    return (
        <>
            <Grid
                container
                alignItems='center'
                justifyContent="center"
                direction="column"
                spacing={1}
            >
                <Title />
                <InputForm updateInputForm={setEmail} question={"Email"} />
                <InputForm updateInputForm={setName} question={"Nombre y Apellido"} />
                <InputForm updateInputForm={setPhoneNumber} question={"Número de teléfono"} />
                <RadioButton updateSelection={setAge} selections={["menor de 18 años", "mayor de 18 años"]} question={"¿Cuál es tu edad?"} />
                <InfoBox />
                <RadioButton updateSelection={setNo1} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"1. Poco interés o placer en hacer cosas"} />
                <RadioButton updateSelection={setNo2} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"2. Se ha sentido decaído(a), deprimido(a) o sin esperanzas"} />
                <RadioButton updateSelection={setNo3} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"3. Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado"} />
                <RadioButton updateSelection={setNo4} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"4. Se ha sentido cansado(a) o con poca energía"} />
                <RadioButton updateSelection={setNo5} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"5. Sin apetito o ha comido en exceso"} />
                <RadioButton updateSelection={setNo6} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"6. Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia"} />
                <RadioButton updateSelection={setNo7} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"7. Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión"} />
                <RadioButton updateSelection={setNo8} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"8. ¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal"} />
                <RadioButton updateSelection={setNo9} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"9. Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera"} />
                <RadioButton updateSelection={setMiscMC} selections={["No ha sido difícil", "Un poco difícil", "Muy difícil", "Extremadamente difícil"]} question={"Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?"} />
                <CheckboxButton currentChoices={location} updateChoices={setLocation} choices={["Valle de los Chillos", "Guamaní", "Quitumbe", "San Bartolo", "Las Casas", "La Florida", "Iñaquito", "El Bosque", "Condado", "La Mariscal", "Atucucho", "Other"]} question={"Sector donde vive o trabaja (o la opción más cercana)"} />
                <CheckboxButton currentChoices={time} updateChoices={setTime} choices={["Entre semana", "Fines de semana", "En la mañana", "En las Tardes", "En las noches", "No tengo problema con el horario", "Other"]} question={"En que horario puedo asistir, escoja todas las opciones que crea conveniente"} />
                <InputForm updateInputForm={setCommentsQuestions} question={"¿Algún comentario o pregunta?"} placeholder={"Comentario o pregunta"} />
                <Link to="/submission" state={{ choices: [no1, no2, no3, no4, no5, no6, no7, no8, no9 ], age: age }} style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{ mt: 1 }}
                        textAlign="right"
                        onClick={async () => {
                            const docData = {
                                email: email,
                                name: name,
                                phoneNumber: phoneNumber,
                                age: age,
                                no1: no1,
                                no2: no2,
                                no3: no3,
                                no4: no4,
                                no5: no5,
                                no6: no6,
                                no7: no7,
                                no8: no8,
                                no9: no9,
                                miscMC: miscMC,
                                location: location,
                                time: time,
                                commentsQuestions: commentsQuestions
                            };
                            let currentdate = new Date();
                            let datetime = (currentdate.getMonth() + 1) + "-"
                                + currentdate.getDate() + "-"
                                + currentdate.getFullYear() + " @ "
                                + currentdate.getHours() + ":"
                                + currentdate.getMinutes() + ":"
                                + currentdate.getSeconds();
                            await setDoc(doc(database, "submissions", datetime), docData); // date may need to be a string
                        }}
                    >
                        Enviar
                    </Button>
                </Link>
            </Grid>
            <Grid container direction="row">
                <Button
                    onClick={() => {
                        setTogglekey(!toggleKey);
                    }}
                >
                    Key
                </Button>
                {toggleKey &&
                    <>
                        <OutlinedInput 
                            size="small" 
                            sx={{ minWidth: 100 }} 
                            onChange={(event) => {
                                setInputtedKey(event.target.value);
                            }}
                        />
                        <Button 
                            variant='contained' 
                            sx={{ ml: 1 }}
                            onClick={() => {
                                if (inputtedKey == pass) {
                                    navigate('/view', {state: {authorized: true}})
                                }
                            }}
                        >
                            Enter
                        </Button>
                    </>
                }
            </Grid>
        </>
    )

}

export default Form;