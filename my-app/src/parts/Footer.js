import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconText />
                        <p>Kami menyediakan segala kebutuhan liburan Anda</p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginer</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Bookin Room</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payment</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore US</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Carrers</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms and Coditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="mailto:SUpport@staycation.id">SUpport@staycation.id</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="tel:+6212234567">+6212234567</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span>staycitanio, magelang</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 .ALlrights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}