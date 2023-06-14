import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Image from "next/image";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { IconContext } from "react-icons/lib";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { MdEmail } from 'react-icons/md'
import { FaAmazon } from "react-icons/fa";
import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";
import { Col } from "react-bootstrap";

export default function Footer() {

    const [lang, setLang] = React.useState(0)

    /**
     * 
     * 
     * 
     * 
     * 
     * 
     * BIG NOTE SO I DON't FORGET: NEED TO INCORPORATE i18 INTO HERE!!!
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     *  */ 

    return (
        // Footer needs to be two separate things I THINK because the order of components is different between
        // mobile and large sizes
        <>
        {/* Small screens footer starts here */}
        <div className="w-100 d-lg-none">
            <Container fluid className="bg-primary pt-3" data-testid="footer">
                <LanguageSwitcher/>
                <Row className="d-flex justify-content-center mt-4">
                    {/* another temp inline style maxWidth */}
                    <div data-testid='linksList' className="d-flex flex-column px-3 gap-0 text-white" style={{maxWidth:'600px'}}>
                        <p className="m-1 fs-5 fw-bold">Site Map</p>
                        <Link href="/topics" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Praying for Japan by Topics</Link>
                        <Link href="/downloads" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Downloadable resources</Link>
                        <Link href="/stories" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Stories</Link>
                        <Link href="/purchase" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Purchase the book</Link>
                        <Link href="/about" className="m-1 fs-6 fw-lighter text-white text-decoration-none">About us</Link>
                    </div>
                </Row>
                <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
                    {/* another temp inline-style for an image */}
                    <Image style={{maxHeight:'50px', width:'auto'}} src="/bts-crane-blue-logo-en.png" alt="logo"></Image>
                </Row>
                <Row className="text-center px-5">
                    <p className="text-white fs-6 fw-light">We desire to see a prayer movement for Japan&apos;s spiritual breakthrough</p>
                </Row>
                <Row className="d-flex justify-content-center align-items-center pt-1 pb-3 text-white">
                    <IconContext.Provider value={{size:'25px'}}>
                        <BsYoutube className="footer-icon"></BsYoutube>
                        <BsInstagram className="footer-icon"></BsInstagram>
                        <MdEmail className="footer-icon"></MdEmail>
                        <FaAmazon className="footer-icon"></FaAmazon>
                    </IconContext.Provider>
                </Row>
                <Row className="text-center py-3 px-5">
                    <p className="text-white fs-6 fw-light" data-testid={'copyright'}>Copyright &copy; 2021 Beneath the Surface. All rights reserved.</p>
                </Row>
            </Container>
        </div>
        {/* Large screens footer starts here */}
        <div className="w-100 d-none d-lg-flex">
            <Container fluid className="bg-primary pt-3 d-flex" data-testid="footer">
                {/* <LanguageSwitcher/> */}
                <Col className="d-flex justify-content-center my-4" sm={4}>
                    {/* another temp inline style maxWidth */}
                    <div data-testid='linksList' className="d-flex flex-column px-3 gap-0 text-white" style={{maxWidth:'600px'}}>
                        <p className="m-1 fs-5 fw-bold">Site Map</p>
                        <Link href="/topics" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Praying for Japan by Topics</Link>
                        <Link href="/downloads" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Downloadable resources</Link>
                        <Link href="/stories" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Stories</Link>
                        <Link href="/purchase" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Purchase the book</Link>
                        <Link href="/about" className="m-1 fs-6 fw-lighter text-white text-decoration-none">About us</Link>
                    </div>
                </Col>
                <Col sm={4} className="my-4">
                    <Row className="d-flex justify-content-center align-items-center pt-1 pb-3 text-white">
                        <IconContext.Provider value={{size:'25px'}}>
                            <BsYoutube className="footer-icon"></BsYoutube>
                            <BsInstagram className="footer-icon"></BsInstagram>
                            <MdEmail className="footer-icon"></MdEmail>
                            <FaAmazon className="footer-icon"></FaAmazon>
                        </IconContext.Provider>
                    </Row>
                    <Row className="text-center py-3 px-5">
                        <p className="text-white fs-6 fw-light" data-testid={'copyright'}>Copyright &copy; 2021 Beneath the Surface. All rights reserved.</p>
                    </Row>
                </Col>
                <Col sm={4} className="my-4">
                    <Row>
                        <LanguageSwitcher/>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
                        {/* another temp inline-style for an image */}
                        <Image style={{maxHeight:'50px', width:'auto'}} src="/bts-crane-blue-logo-en.png" alt="logo"></Image>
                    </Row>
                    <Row className="text-center px-5">
                        <p className="text-white fs-6 fw-light">We desire to see a prayer movement for Japan&apos;s spiritual breakthrough</p>
                    </Row>
                </Col>
            </Container>
        </div>
        </>
    )
}