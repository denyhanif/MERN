/* eslint-disable */
import React, { Component } from 'react'
import Fade from "react-reveal/Fade";

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import ItemDetails from 'json/itemDetails.json'
import FeaturedImage from 'parts/FeaturedImage'
import PadeDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import Footer from "parts/Footer";
import Categories from 'parts/Categories'
import Testimonial from 'parts/Testimony'


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
                            <Fade bottom>
                                <PadeDetailDescription data={ItemDetails} />
                            </Fade>
                        </div>
                        <div className="col-5">
                            <Fade bottom>
                                <BookingForm itemDetails={ItemDetails} />
                            </Fade>
                        </div>
                    </div>
                </div>
                <Categories data={ItemDetails.categories} />
                <Testimonial data={ItemDetails.testimonial}/>
                <Footer></Footer>
            </>
        )
    }
}