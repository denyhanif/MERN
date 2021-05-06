/* eslint-disable */
import React, { Component } from 'react'

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import ItemDetails from 'json/itemDetails.json'
import FeaturedImage from 'parts/FeaturedImage'
import PadeDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import Footer from "parts/Footer";


export default class DetailPage extends Component{

    //Dom pertaman yang tampil
   componentDidMount() {
        window.title = "Details Page",
        window.scrollTo(0,0)
    }
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            {pageTitle:"House Detail",pageHref:""}
        ]
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                    breadcrumb={breadcrumb}
                    data={ItemDetails}
                ></PageDetailTitle>
                <FeaturedImage data={ItemDetails.imageUrl} />
                <div className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PadeDetailDescription data={ItemDetails}/>
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails}/>

                            
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
}