
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import React, { useRef, useState } from "react"

import { isValidEmail, handleKeyPress, handleKeyPressString } from '../../../Components/Pages/Calculator/Helper'
import { ContactUs } from "../../../Components/APIUrl.js"
import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from "notistack";
import { Link } from 'react-router-dom';
import './Dialog1.css'

import { app } from '../../../firebaseconfig.js';
import { getDatabase, ref, set, push } from "firebase/database";

function Contactus(props) {

    const { enqueueSnackbar } = useSnackbar();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [IsLead, setLead] = useState(true);
    const [CreatedDate, setCreatedDate] = useState(Date.now());
    const [ModifiedBy, setModifiedBy] = useState(1);

    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();
    const subjectref = useRef();

    async function SubmitContact(event) {
        event.preventDefault();

        if (Name.length < 2) {
            nameref.current.focus();
            enqueueSnackbar("Name must be valid", { variant: "warning" });
            return false
        }
        // debugger
        const value = isValidEmail(Email)
        if (!value) {
            // debugger
            emailref.current.focus();
            enqueueSnackbar("Email must be valid", { variant: "warning" });
            return false;
        }
        if (Phone.length < 10) {
            phoneref.current.focus();
            enqueueSnackbar("Phone no must be valid", { variant: "warning" });
            return false;
        }

        if (Subject.length < 2) {
            subjectref.current.focus();
            enqueueSnackbar("Subject must be valid", { variant: "warning" });
            return false;
        }

        if (Message.length < 2) {
            enqueueSnackbar("Message must be valid", { variant: "warning" });
            return false;
        }

        try {
            const db = getDatabase(app);
            const newDoc = push(ref(db, 'ContactUs'));
            set(newDoc, {
                Name: Name,
                Email: Email,
                Phone: Phone,
                Subject: Subject,
                Message: Message,
                IsLead: IsLead,
                CreatedDate: CreatedDate
            }).then(() => {
                ClearUsestate()
                enqueueSnackbar("Submitted Successfully", { variant: "success" });
                handleClose();
            }).catch((error) => {
                console.error("Error writing new message to Firebase Database", error);
                enqueueSnackbar("Error writing new message to Firebase Database", { variant: "error" });
            });


        }
        catch (err) {
            console.log(err)
        }
    }

    function ClearUsestate() {
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Link onClick={handleClickOpen} className={`theme-btn ${props.btn1}`}>{props.name}</Link>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="md"

                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ minHeight: "70vh", maxHeight: "200vh" }}
            >
                <DialogTitle id="alert-dialog-title aligh-right" style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }} >
                    <CloseOutlinedIcon onClick={handleClose} style={{ color: "var(--theme-color)" }} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ borderRadius: "10px!important" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 info-column">
                            <div className="sec-title centred mb_40">
                                <h4 style={{ marginBottom: "10px", fontWeight: "bolder", color: "var(--text-color)" }}>LOOKING FOR ASSISTANCE & FREE CONSULTATION</h4>
                                <h3 style={{ marginBottom: "10px", fontWeight: "bolder", color: "var(--theme-color)" }}>CONTACT US</h3>
                                <h5 style={{ marginTop: "13px", marginBottom: "10px", fontWeight: "bolder", color: "var(--theme-color) !important", textTransform: "unset" }}>Dream Dwell Realtors</h5>
                                <h6 style={{ marginBottom: "13px", fontWeight: "bolder", color: "var(--text-color) !important", textTransform: "unset", }}>Omega Hotel, Plot 2018, GF, Sector-45, Near Huda City Centre Metro Station, Gurgaon, Haryana - 122001</h6>
                                {/* <h6 style={{ marginBottom: "5px", marginTop: "25px", fontWeight: "bolder", color: "var(--theme-color) !important", textTransform: "unset", }}><MailIcon style={{ fontSize: "17px" }} />&nbsp;yadavpushpender22@gmail.com</h6>
                                <h6 style={{ marginBottom: "25px", fontWeight: "bolder", color: "var(--theme-color) !important", textTransform: "unset", }}><PhoneIcon style={{ fontSize: "17px" }} />&nbsp;+91 9929800823</h6> */}
                                {/* <h2>Contact Us</h2> */}
                            </div>
                            <div className="form-inner">
                                <form>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                                            <input type="text" name="username" ref={nameref} value={Name} onChange={(e) => setName(e.target.value)} maxLength={40} placeholder="Your Name" onKeyDown={handleKeyPressString} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                                            <input type="email" name="email" ref={emailref} value={Email} onChange={(e) => setEmail(e.target.value)} maxLength={60} placeholder="Your email" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                                            <input type="text" name="phone" ref={phoneref} value={Phone} onChange={(e) => setPhone(e.target.value)} maxLength={15} placeholder="Phone" onKeyDown={handleKeyPress} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                                            <input type="text" name="subject" ref={subjectref} value={Subject} onChange={(e) => setSubject(e.target.value)} maxLength={200} placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" className='_textarea textareamodifies' value={Message} rows={4} cols={86} onChange={(e) => setMessage(e.target.value)} maxLength={500} placeholder="Type message"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button className="theme-btn btn-one" type="submit" name="submit-form" onClick={(e) => SubmitContact(e)}>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button className='theme-btn btn-two' onClick={handleClose} autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Contactus;

