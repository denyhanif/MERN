import React from 'react'
import Fade from 'react-reveal/Fade'
import {InputText,InputFile} from 'elements/Form'

import logoBca from 'assets/images/logo-bca.jpg'
import logoMandiri from 'assets/images/logo-mandiri.jpg'
export default function Payment(props) {

    const { data, ItemDetails, checkout } = props
    const tax = 10
    const subTotal = ItemDetails.price * checkout.duration
    const gradTotal = (subTotal * tax) / 100 +subTotal
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5" style={{ padiingRight: 80 }}>
                        <Fade delay={300}>
                            <p className="mb-4">Transfer Pembayaran : </p>
                            <p>Tax : {tax}%</p>
                            <p>Sub Total: ${subTotal} USD</p>
                            <p>Total: ${gradTotal} USD</p>
                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBca} alt="bank baca"/>
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd> Bank BCA</dd>
                                        <dd> 12343434  </dd>
                                        <dd>Deny haNif</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 text-right">
                                    <img src={logoMandiri} alt="mandiri" width="60"/>
                                </div>
                                <div className="Col">
                                    <dd>
                                        <dl>Bank Mandiri</dl>
                                        <dl>123423 3423 </dl>
                                        <dl>Deny Hanif</dl>
                                    </dd>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade delay={600}>
                            <label htmlFor="proofPayment">Upload bukti transfer</label>
                            <InputFile
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange} />
                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText
                                id="bankName"
                                name="bankName"
                                value={data.bankName}
                                onChange={props.onChange} />
                            <label htmlFor="bankHolder">Nama Pengirim</label>
                            <InputText
                                id="bankHolder"
                                name="bankHolder"
                                value={data.bankHolder}
                                onChange={props.onChange} />
                            

                            
                        </Fade>
                    </div>
                </div>
            </div>
             
        </Fade>
            
        
    )
}
