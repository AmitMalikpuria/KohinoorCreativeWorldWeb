import React, { useRef, useState } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { isValidEmail, handleKeyPress, handleKeyPressString } from '../../../Components/Pages/Calculator/Helper'
import { ContactUs } from "../../../Components/APIUrl.js"
import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from "notistack";
import { Link } from 'react-router-dom';
import { tr } from "date-fns/locale";
import imgbackground from '../../../assets/images/background/process-bg.jpg'
import './Dialog1.css'

function Dialog1(props) {

    const { enqueueSnackbar } = useSnackbar();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [CreatedBy, setCreatedBy] = useState(1);
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

        try {
            const data = { Name, Email, Phone, Subject, Message, CreatedBy, ModifiedBy }
            const response = await fetch(ContactUs + 'InsertContactUs',
                {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

            const mydata = response.json();
            //debugger
            if (mydata.data !== null) {
                ClearUsestate()
                handleClose()
                enqueueSnackbar("Submitted Successfully", { variant: "success" });
            }
            else {
                // setdatapushed([]);
            }
        }
        catch (err) {
            console.loh(err)
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



    return (<>

        <section className="process-section centred pt_40 pb_90">
            <div className="bg-layer" style={{ backgroundImage: `url(${imgbackground})`, backgroundColor: "rgb(255, 255, 255, 0.5)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_110">
                    {/* <h6>Our process</h6> */}
                    <h2>Help me work out...</h2>
                </div>
                {/* {
                opendialog ? <Dialog1 open={true} /> : <Dialog1 close={true} />
            } */}
                <div className="inner-container">
                    <Link onClick={() => handleClickOpen()}>
                        <div className="processing-block-one">
                            <div className="arrow-shape" ></div>
                            <div className="inner-box">
                                <Link onClick={() => handleClickOpen()}><span className="count-text"> Contact <br />us</span></Link>

                                <h3>I want to buy<br /> a home</h3>
                                {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => handleClickOpen()}>
                        <div className="processing-block-one">
                            <div className="arrow-shape" ></div>
                            <div className="inner-box">
                                <Link onClick={() => handleClickOpen()}><span className="count-text"> Contact <br />us</span></Link>
                                <h3>I want to buy an <br />investment</h3>
                                {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => handleClickOpen()}>
                        <div className="processing-block-one">
                            <div className="inner-box">
                                <Link onClick={() => handleClickOpen()}><span className="count-text"> Contact <br />us</span></Link>
                                <h3>I'm considering <br />refinancing</h3>
                                {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            {/* <Link onClick={handleClickOpen} className={`theme-btn ${props.btn1}`}>Contact Us</Link> */}
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
                    <CloseOutlinedIcon onClick={handleClose} style={{color:"var(--theme-color)"}}  />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="col-lg-12 col-md-12 col-sm-12 info-column">
                            <div className="sec-title centred">
                                <h4 style={{ marginBottom: "10px", fontWeight: "bolder", color: "var(--text-color)" }}>LOOKING FOR ASSISTANCE</h4>
                                <h3 style={{ marginBottom: "10px", fontWeight: "bolder", color: "var(--theme-color)" }}>CONTACT US</h3>
                                <h5 style={{ marginTop: "13px", marginBottom: "5px", fontWeight: "bolder", color: "var(--text-color) !important", textTransform: "unset", }}>Amber Loans Pty Ltd</h5>
                                <h6 style={{ marginBottom: "13px", fontWeight: "bolder", color: "var(--text-color) !important", textTransform: "unset", }}>Sydney, NSW, Australia - 2000</h6>
                                <h6 style={{ marginBottom: "5px", marginTop: "25px", fontWeight: "bolder", color: "var(--theme-color) !important", textTransform: "unset", }}><MailIcon style={{ fontSize: "17px" }} />&nbsp;rd@amberloans.com.au</h6>
                                <h6 style={{ marginBottom: "25px", fontWeight: "bolder", color: "var(--theme-color) !important", textTransform: "unset", }}><PhoneIcon style={{ fontSize: "17px" }} />&nbsp;0401 978 641</h6>
                                {/* <h2>Contact Us</h2> */}
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
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred mt_10">
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
    </>
    );
}

export default Dialog1;