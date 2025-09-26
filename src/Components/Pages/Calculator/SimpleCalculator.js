import icon1 from '../../../assets/images/icons/icon-1.png';
import shape3 from '../../../assets/images/shape/shape-3.png';
import calculator1 from '../../../assets/images/resource/calculator-1.jpg';
import { useEffect, useState } from 'react';



export default function SimpleCalculator(props) {

    const [principle, setPrinciple] = useState();
    const [interest, setInterest] = useState();
    const [years, setYears] = useState();
    const [emi, setEmi] = useState();


    const calculateEMI = (principal, annualRate, tenureYears) => {

        const monthlyRate = (annualRate / 100) / 12;

        const totalMonths = tenureYears * 12;

        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

        setEmi(Math.round(emi));
    }

    const ResetFeilds = () => {
        setPrinciple(null);
        setInterest(null);
        setYears(null);
        setEmi(null);
    }

    return (


        <section className="calculator-section pt_120 pb_120">
            <div className="light-icon float-bob-y" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: `url(${shape3})` }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div className="content_block_two">
                                <div className="content-box">
                                    <div className="sec-title mb_50">
                                        <h6>Calculate {props.Title} Loan</h6>
                                        <h2>EMI Calculator</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_two">
                                <div className="content-box">
                                    {/* <div className="sec-title mb_50">
                                        <h6>Calculate {props.Title} Loan</h6>
                                        <h2>EMI Calculator</h2>
                                    </div> */}
                                    <div className="calculator-inner">
                                        <form id="loan-form">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Loan Amount ($)</h6>
                                                    <input type="number" id="amount" placeholder="Loan amount" value={principle} onChange={(e) => setPrinciple(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <h6 className='mb-2'>Years</h6>
                                                <input type="number" id="years" placeholder="Number of Years" value={years} onChange={(e) => setYears(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Interest</h6>
                                                    <input type="number" id="interest" placeholder="Interest rate" value={interest} onChange={(e) => setInterest(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group d-flex">
                                                <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} />
                                                <input type="button" value="Reset Data" className="reset-btn" onClick={() => ResetFeilds()} />
                                            </div>
                                        </form>
                                        <div id="results">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Monthly Installment ($)</h6>
                                                    <input type="number" placeholder="Monthly Installment is" id="monthly-payment" value={emi} disabled />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="number" id="total-payment" disabled />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="number" id="total-interest" disabled />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            {/* <figure className="image-box"><img src={calculator1} alt="" /></figure> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
