import React from 'react'
import Fade from 'react-reveal/Fade'
import CompletedIlustration from 'assets/images/completed.jpg'

export default function Compeleted() {
    return (
        <Fade>
            <div className="container " style={{ marginBottom: 30 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img src={CompletedIlustration}
                            className="img-fluid"
                            alt="compltd ilustration" />
                        <p className="text-gray-500">
                            WE will inform you vvia emal letter once the transaction has been accpeted 
                        </p>
                    </div>
                </div>

            </div>
            
        </Fade>
    )
}
