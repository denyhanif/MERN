import React, { Component } from 'react'
import Header from 'parts/Header'
import Fade from 'react-reveal/Fade'
import Button from 'elements/Button'

import Stepper,{Numbering,Meta,MainContent,Controller} from 'elements/Stepper'

import ItemDetails from 'json/itemDetails.json'

import BookingInformation from 'parts/Checkout/Bookinginformation'
import Payment from 'parts/Checkout/Payment'
import Completed from 'parts/Checkout/Compeleted'

export default class Checkout extends Component {
    
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankHolder: ""
        }
    };

    //menampung data nama email dll
    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        const { data } = this.state
        const checkout = {
            duration:3
        }
        const steps = {
            bookingInformation: {
                title: "Boking Information",
                description: "Please dill up bank fields bellow",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}/>
                )
            },
            payment: {
                title: "Payment",
                description: "Kindly Follow the insctuction bellow",
                content: (
                    <Payment
                        data={data}
                        ItemDetails={ItemDetails}
                        checkout={checkout}
                        onChange={this.onChange}/>
                )
            },
            completed: {
                title: "Yy! COmplated",
                description: null,
                content: <Completed/>

            }
        }
        return (
            <>
                <Header isCentered></Header>
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (                       
                            <>
                                <Numbering
                                    data={data}
                                    current={CurrentStep}
                                    style={{ marginBottom: 50}}/>
                            
                                <Meta data={steps} current={CurrentStep} />
                                <MainContent data={steps} current={CurrentStep} />
                                
                                {CurrentStep == "booking Information" && (
                                    <Fade>
                                        <Controller>
                                            {data.firstName !== "" &&
                                                data.lastName !== "" &&
                                                data.email !== "" &&
                                                data.phone !== "" && (
                                                <Fade>
                                                    <Button
                                                        className="btn mb-3"
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={nextStep}>
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                                )}
                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href={`/properties/${ItemDetails._id}`}
                                            >
                                                Cancel
                                            </Button>
                                        </Controller>
                                    </Fade>
                                    )
                                }
                                {CurrentStep == "payment" && (
                                    <Controller>
                                        {
                                            data.proofPayment !== "" &&
                                            data.bankHolder !== "" &&
                                            data.bankName !== "" && (
                                                <Fade>
                                                    <Button
                                                        className="btn mb-3"
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={nextStep}>
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                            )
                                        }
                                        <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href={prevStep}
                                            >
                                                Cancel
                                            </Button>
                                    </Controller>
                                )
                                }
                                {CurrentStep == "completed" && (
                                    <Controller>
                                         <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href=""
                                            >
                                                Back TO hOme
                                            </Button>
                                    </Controller>
                                )}
                            </>
                            
                        )
                    }
                </Stepper>
            </>
        )
    }
}
