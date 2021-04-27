import React from 'react'
import Star from 'elements/Star'
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg"
import Button from 'elements/Button'
export default function Testimony({data}) {
    return (
        <section className="container" >
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 70 }}>
                    <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                        <img src={ data.imageUrl } alt="Testimonial" className="position-absolute" style={{ zIndex:1 }}></img>
                        <img src={ TestimonyAccent } alt="Testimonial Frame" className="position-absolute" style={{ margin:`-30px 0 0 -30px`}}></img>                    
                    </div>
                </div>
                <div className="col" style={{ marginTop: -40 }}>
                    <h4 style={{ marginBotton:40 }}>
                        {data.name}
                    </h4>
                    <Star value={data.rate} spacing={4} width={35} height={35}></Star>
                    <h5 className="h2 font-weight-normal line-height-2 my-2">
                        {data.content}
                    </h5>
                    <span className="text-gray-500" >
                        {data.familyName},{data.familyOccupation}
                    </span>
                    <div>
                        <Button className="btn px-5" style={{ marginTop: 60 }} hasShadow isPrimary href={`/testimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>

            </div>
            {/* <Star value={4.5} width={35} height={35} spacing={4}></Star> */}
        </section>
    )
}
