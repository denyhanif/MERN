import React, { Component } from 'react'

import BreadCrumb from 'elements/BreadCrumb'

export default class Example extends Component{
    render() {
        const breadcrumb = [
            { pageTitle:"Home", pageHref:""},
            { pageTitle:"House Details",pageHref:""}
        ]

        return (
            <div className="container">
                <div
                    className="row align-items-center justofy-content-center"
                    style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <BreadCrumb data={breadcrumb}/>
                    </div>
                </div>
            </div>
        )
    }
    
}