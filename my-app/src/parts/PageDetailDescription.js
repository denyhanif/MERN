import React from 'react'
import ReactHtmlParse from 'react-html-parser'


export default function PadeDetailDescription({ data }) {
    return (
        <main>
            <h4>About the Place</h4>
            {ReactHtmlParse(data.description)}
            <div className="row" style={{ marginTop: 30 }}>
                {data.features.map((feature, index) => {
                    return (
                        <div
                            key={`feature-${index}`}
                            className="col-3"
                            style={{ marginBottom: 20 }}
                        >
                            <img
                                width="38"
                                className="d-block mb-2"
                                src={feature.imageUrl}
                                alt={feature.name} />{" "}
                            <span>{feature.qty}</span>{" "}
                            <span className="text-gray-600 font-weight-light">
                                {feature.name}
                            </span>
                            

                        </div>
                    )
                })}

            </div>

        </main>
    )
}