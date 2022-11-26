import React, { useState, useEffect } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import InputForm from '../components/inputform.js';
import RadioButton from '../components/radiobutton.js';
import CheckboxButton from '../components/checkboxbutton.js';
import Title from '../components/title.js';
import InfoBox from '../components/infobox.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { database } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore';

export default function View() {

    const [data, setData] = useState([]);

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
    
    useEffect(async () => {
        const submissionCollectionRef = collection(database, "submissions");
        const firebaseData = await getDocs(submissionCollectionRef);
        // const formattedData = Object.fromEntries(firebaseData.docs.map(x => [x.id, x.data()]));
        // console.log(formattedData);
        // console.log(formattedData["o3kPZnUCxxx0apEJBySg"].email)
        const formattedData = firebaseData.docs.map((doc) => {
            let curr = doc.data();
            curr["id"] = doc.id;
            return curr;
        })
        console.log(formattedData);
        setData(formattedData);
    }, [])

    return (
        <Grid container>
            <Grid item container xs={2} alignContent="baseline">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Form Submissions</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ direction: "column" }}>
                        {data.map((item) => {
                            return (
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ mt: 0.5, minWidth: 200 }}
                                    onClick={() => {
                                        setEmail(item.email);
                                        setName(item.name);
                                        setPhoneNumber(item.phoneNumber);
                                        setAge(item.age);
                                        setNo1(item.no1);
                                        setNo2(item.no2);
                                        setNo3(item.no3);
                                        setNo4(item.no4);
                                        setNo5(item.no5);
                                        setNo6(item.no6);
                                        setNo7(item.no7);
                                        setNo8(item.no8);
                                        setNo9(item.no9);
                                        setMiscMC(item.miscMC);
                                        setLocation(item.location);
                                        setTime(item.time);
                                        setCommentsQuestions(item.commentsQuestions);
                                    }}
                                >
                                    {item.id}
                                </Button>
                            )
                        })}
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item container xs={8} alignContent="center" justifyContent="center" spacing={1}>
            <Title />
                <InputForm updateInputForm={setEmail} question={"Email"} input={email}/>
                <InputForm updateInputForm={setName} question={"Nombre y Apellido"} input={name}/>
                <InputForm updateInputForm={setPhoneNumber} question={"Número de teléfono"} input={phoneNumber}/>
                <RadioButton updateSelection={setAge} selections={["menor de 18 años", "mayor de 18 años"]} question={"¿Cuál es tu edad?"} input={age}/>
                <InfoBox />
                <RadioButton updateSelection={setNo1} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"1. Poco interés o placer en hacer cosas"} input={no1}/>
                <RadioButton updateSelection={setNo2} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"2. Se ha sentido decaído(a), deprimido(a) o sin esperanzas"} input={no2}/>
                <RadioButton updateSelection={setNo3} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"3. Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado"} input={no3}/>
                <RadioButton updateSelection={setNo4} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"4. Se ha sentido cansado(a) o con poca energía"} input={no4}/>
                <RadioButton updateSelection={setNo5} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"5. Sin apetito o ha comido en exceso"} input={no5}/>
                <RadioButton updateSelection={setNo6} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"6. Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia"} input={no6}/>
                <RadioButton updateSelection={setNo7} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"7. Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión"} input={no7}/>
                <RadioButton updateSelection={setNo8} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"8. ¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal"} input={no8}/>
                <RadioButton updateSelection={setNo9} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"9. Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera"} input={no9}/>
                <RadioButton updateSelection={setMiscMC} selections={["No ha sido difícil", "Un poco difícil", "Muy difícil", "Extremadamente difícil"]} question={"Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?"} input={miscMC}/>
                <CheckboxButton currentChoices={location} updateChoices={setLocation} choices={["Valle de los Chillos", "Guamaní", "Quitumbe", "San Bartolo", "Las Casas", "La Florida", "Iñaquito", "El Bosque", "Condado", "La Mariscal", "Atucucho", "Other"]} question={"Sector donde vive o trabaja (o la opción más cercana)"} input={location}/>
                <CheckboxButton currentChoices={time} updateChoices={setTime} choices={["Entre semana", "Fines de semana", "En la mañana", "En las Tardes", "En las noches", "No tengo problema con el horario", "Other"]} question={"En que horario puedo asistir, escoja todas las opciones que crea conveniente"} input={time}/>
                <InputForm updateInputForm={setCommentsQuestions} question={"¿Algún comentario o pregunta?"} placeholder={"Comentario o pregunta"} input={commentsQuestions}/>
            </Grid>
        </Grid>
    )

}