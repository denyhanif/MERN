import React, { Component } from 'react'
import propTypes from "prop-types";

import Button from 'elements/Button'
import { InputDate, InputNumber } from 'elements/Form'

export default class BookingForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            data: {
                duration: 1,
                date: {
                    startDate: new Date(),
                    endDate: new Date(),
                    key:"selection"
                }
            }
        }
    }
    //event on Click received data from inputDate&inputNumber 
    updateData = e => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { data } = this.state
        //durasi
        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate)
            const endDate = new Date(data.date.endDate)
            const countDuration = new Date(endDate - startDate).getDate();//getDate()ambil tangga sajs
            this.setState({
                data: {
                    ...this.state.data,
                    duration: countDuration
                }
            })
        }
        //date
        if (prevState.data.duration !== data.duration) {
            const startDate = new Date(data.date.startDate)
            const endDate = new Date(startDate.setDate(startDate.getDate() + + data.duration - 1))//getdate()memngambil tanggalnya saja
            this.setState({
                ...this.state,
                data: {
                    ...this.state.data,
                    date: {
                        ...this.state.data.date,
                        endDate: endDate
                    }
                }
            })
            
        }
    }

    render() {
        const { data } = this.state
        const { itemDetails, startBooking } = this.props
        
        return (
            <div className="card bordered" style={{ padding: "60px 60px" , marginBottom: "50px" }}>
                <h4 className="mb-3">Start Booking</h4>
                <h5 className="h2 text-teal mb-4">
                    ${itemDetails.price}{" "}
                    <span className="text-gray-500 font-weight-light">
                        per {itemDetails.unit}
                    </span>
                </h5>
                <label htmlFor="duration" className="h6">
                    Berapa lama waktu bermalam anda
                </label>
                <InputNumber
                    max={30}
                    suffix={" night"}
                    isSuffixPlurat
                    onChange={this.updateData}
                    name="duration"
                    value={data.duration}
                />
                <label htmlFor="date" className="h6">Pilih Tanggal</label>
                <InputDate onChange={this.updateData} name="date" value={data.date}></InputDate>

                <h6 className="text-gray-700 font-weight-light" style={{ marginBotton: 40 }}>
                    You Will Pay{" "}
                    <span className="text-gray-900 font-weight-medium">
                        ${itemDetails.price * data.duration} USD {" "}
                    </span>
                    <span className="h6">
                        {data.duration}  {itemDetails.unit}
                    </span>
                </h6>
                <Button className="btn"
                    hasShadow
                    isPrimary
                    isBlock
                    onClick={this.updateData}>
                    Continue to book
                </Button>
            </div>
        )
    }


}

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func
}