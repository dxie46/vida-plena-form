import React, { useState, useEffect } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Button, Snackbar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputForm from '../components/inputform.js';
import RadioButton from '../components/radiobutton.js';
import CheckboxButton from '../components/checkboxbutton.js';
import Title from '../components/title.js';
import InfoBox from '../components/infobox.js';
import Dropdown from '../components/dropdown.js';
import ConsentBox from '../components/consentbox.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { database } from '../firebase-config.js'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link, useLocation } from 'react-router-dom';
import XLSX from 'sheetjs-style';
import * as FileSaver from 'file-saver';

export default function View() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const locationRoute = useLocation();

    const [data, setData] = useState([]);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyNumber, setEmergencyNumber] = useState("");
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
    const [referrer, setReferrer] = useState("");
    const [consent, setConsent] = useState("");
    const [id, setId] = useState("");

    const [alertOpen, setAlertOpen] = useState(false)
    const [barOpen, setBarOpen] = useState(false)

    useEffect(() => {
        const handler = async () => {
            const submissionCollectionRef = collection(database, "submissions");
            const firebaseData = await getDocs(submissionCollectionRef);
            const formattedData = firebaseData.docs.map((doc) => {
                let curr = doc.data();
                curr["id"] = doc.id;
                if (doc.id != "StopDelete") {
                    return curr;
                }
            })
            console.log(formattedData);
            setData(formattedData);
        }
        handler();
    }, [])

    const exportExcel = async () => {
        const submissionCollectionRef = collection(database, "submissions");
        const firebaseData = await getDocs(submissionCollectionRef);
        const formattedData = firebaseData.docs.map((doc) => {
            let curr = doc.data();
            curr["id"] = doc.id;
            return curr;
        })
        let excelData = formattedData;
        console.log(excelData);
        const ws = XLSX.utils.json_to_sheet(excelData.map(function (entry) {

            if (entry.id == "StopDelete") {
                console.log('here')
                return {};

            }
            let locationString = "";
            let timeString = "";
            entry.location.forEach((each) => {
                locationString = locationString + each + ", ";
            })
            entry.time.forEach((each) => {
                timeString = timeString + each + ", ";
            })
            locationString = locationString.substring(0, locationString.length - 2);
            timeString = timeString.substring(0, timeString.length - 2);
            return {
                "Email": entry.email,
                "Name": entry.name,
                "Phone Number": entry.phoneNumber,
                "Emergency Contact Name": entry.emergencyName,
                "Emergency Phone Number": entry.emergencyNumber,
                "Age": entry.age,
                "Poco interés o placer en hacer cosas": entry.no1,
                "Se ha sentido decaído(a), deprimido(a) o sin esperanzas": entry.no2,
                "Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado": entry.no3,
                "Se ha sentido cansado(a) o con poca energía": entry.no4,
                "Sin apetito o ha comido en exceso": entry.no5,
                "Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia": entry.no6,
                "Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión": entry.no7,
                "¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal": entry.no8,
                "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera": entry.no9,
                "Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?": entry.miscMC,
                "Sector donde vive o trabaja (o la opción más cercana)": locationString,
                "En que horario puedo asistir, escoja todas las opciones que crea conveniente": timeString,
                "¿Algún comentario o pregunta?": entry.commentsQuestions,
                "Referido por (nombre de la persona o institución)": entry.referrer,
                "Consent": entry.consent,
                "Timestamp": entry.id
            }
        }));
        // const ws = XLSX.utils.json_to_sheet([{
        //     "Email": email,
        //     "Name": name,
        //     "Phone Number": phoneNumber,
        //     "Age": age,
        //     "Poco interés o placer en hacer cosas": no1,
        //     "Se ha sentido decaído(a), deprimido(a) o sin esperanzas": no2,
        //     "Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado": no3,
        //     "Se ha sentido cansado(a) o con poca energía": no4,
        //     "Sin apetito o ha comido en exceso": no5,
        //     "Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia": no6,
        //     "Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión": no7,
        //     "¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal": no8,
        //     "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera": no9,
        //     "Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?": miscMC,
        //     "Sector donde vive o trabaja (o la opción más cercana)": locationString,
        //     "En que horario puedo asistir, escoja todas las opciones que crea conveniente": timeString,
        //     "¿Algún comentario o pregunta?": commentsQuestions
        // }]);
        // const ws = XLSX.utils.json_to_sheet(
        //     [
        //         {
        //         "Email": "test",
        //         "Field2": "test2"
        //         },
        //         {
        //             "Email": "test",
        //             "Field2": "test2"
        //             },
        // ]
        // )
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        FileSaver.saveAs(data, id + ".xlsx");
    }

    const deleteEntries = async () => {

        const submissionCollectionRef = collection(database, "submissions");
        const firebaseData = await getDocs(submissionCollectionRef);
        firebaseData.docs.forEach(async (this_doc) => {
            if (this_doc.id != "StopDelete") {
                await deleteDoc(doc(database, "submissions", this_doc.id))
            }
        })

    }

    const openAlert = () => {
        setAlertOpen(true);
    }

    const closeAlert = () => {
        setAlertOpen(false);
    }

    const openBar = () => {
        setBarOpen(true)
    }

    const closeBar = () => {
        setBarOpen(false)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setBarOpen(false);
      };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    if (locationRoute.state.authorized) {

        return (
            <Grid container>
                <Grid item container xs={2} alignContent="baseline" direction="column">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Form Submissions</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ direction: "column" }}>
                            {data.map((item) => {
                                if (item != null) {
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
                                            setReferrer(item.referrer);
                                            setId(item.id);
                                            setConsent(item.consent);
                                            setEmergencyName(item.emergencyName);
                                            setEmergencyNumber(item.emergencyNumber);
                                        }}
                                    >
                                        {item.id}
                                    </Button>
                                )}
                            })}
                        </AccordionDetails>
                    </Accordion>
                    <Grid item>
                        <Button color="success" variant="contained" startIcon={<FileDownloadIcon />} sx={{ mt: 1 }} onClick={() => { exportExcel(); }}>
                            Export
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color="error" variant="contained" startIcon={<DeleteIcon />} sx={{ mt: 1 }} onClick={openAlert}>
                            Clear
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to='/form' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ mt: 1 }}>
                                Back
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item container xs={8} alignContent="center" justifyContent="center" spacing={1}>
                    <Title />
                    <InputForm updateInputForm={setEmail} question={"Email"} input={email} />
                    <InputForm updateInputForm={setName} question={"Nombre y Apellido"} input={name} />
                    <InputForm updateInputForm={setPhoneNumber} question={"Número de teléfono"} input={phoneNumber} />
                    <InputForm updateInputForm={setEmergencyName} question={"Nombre de contacto de emergencia"} input={emergencyName}/>
                    <InputForm updateInputForm={setEmergencyNumber} question={"Número telefónico de contacto de emergencia"} input={emergencyNumber}/>
                    <RadioButton updateSelection={setAge} selections={["menor de 18 años", "mayor de 18 años"]} question={"¿Cuál es tu edad?"} input={age} />
                    <InfoBox />
                    <RadioButton updateSelection={setNo1} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"1. Poco interés o placer en hacer cosas"} input={no1} />
                    <RadioButton updateSelection={setNo2} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"2. Se ha sentido decaído(a), deprimido(a) o sin esperanzas"} input={no2} />
                    <RadioButton updateSelection={setNo3} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"3. Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado"} input={no3} />
                    <RadioButton updateSelection={setNo4} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"4. Se ha sentido cansado(a) o con poca energía"} input={no4} />
                    <RadioButton updateSelection={setNo5} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"5. Sin apetito o ha comido en exceso"} input={no5} />
                    <RadioButton updateSelection={setNo6} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"6. Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia"} input={no6} />
                    <RadioButton updateSelection={setNo7} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"7. Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión"} input={no7} />
                    <RadioButton updateSelection={setNo8} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"8. ¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal"} input={no8} />
                    <RadioButton updateSelection={setNo9} selections={["0 Ningún día", "1 Varios días", "2 Más de la mitad de los días", "3 Casi todos los días"]} question={"9. Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera"} input={no9} />
                    <RadioButton updateSelection={setMiscMC} selections={["No ha sido difícil", "Un poco difícil", "Muy difícil", "Extremadamente difícil"]} question={"Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?"} input={miscMC} />
                    <CheckboxButton currentChoices={location} updateChoices={setLocation} choices={["Valle de los Chillos", "Guamaní", "Quitumbe", "San Bartolo", "Las Casas", "La Florida", "Iñaquito", "El Bosque", "Condado", "La Mariscal", "Atucucho", "Other"]} question={"Sector donde vive o trabaja (o la opción más cercana)"} input={location} />
                    <CheckboxButton currentChoices={time} updateChoices={setTime} choices={["Entre semana", "Fines de semana", "En la mañana", "En las Tardes", "En las noches", "No tengo problema con el horario", "Other"]} question={"En que horario puedo asistir, escoja todas las opciones que crea conveniente"} input={time} />
                    <Dropdown updateSelection={setReferrer} selections={["Hospital del Dia de la Central", "Fundacion Fabián Ponce", "Centro de Mediación Municipal ", "Casa Somos", "Parroquia María Auxiliadora", "empleado de Kruger", "familiar de un empleado de Kruger", "recomendación por un participante pasado", "recibí una publicidad digital", "Bienestar Universitario UCE", "Vision Mundial", "Otro"]} question={"Referido por (nombre de la persona o institución)"} placeholder={"Nombre"} input={referrer.substring(0, 4) == "Otro" ? "Otro" : referrer} />
                    <InputForm updateInputForm={setCommentsQuestions} question={"¿Algún comentario o pregunta?"} placeholder={"Comentario o pregunta"} input={commentsQuestions} />
                    <ConsentBox updateSelection={setConsent} input={consent}/>
                </Grid>
                <Dialog
                    open={alertOpen}
                    onClose={closeAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Delete all forms?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This will delete all forms currently submitted. This action is irreversible.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeAlert}>Cancel</Button>
                        <Button onClick={() => {closeAlert(); openBar(); deleteEntries(); setData([]) }} autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={barOpen}
                    autoHideDuration={6000}
                    onClose={closeBar}
                    message="All forms deleted"
                    action={action}
                />
            </Grid>
        )

    }

}