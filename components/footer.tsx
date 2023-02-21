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

export default function Footer() {

    const [lang, setLang] = React.useState(0)

    return (
        <>
        {/* Footer starts here */}

        <Container fluid className="bg-primary" data-testid="footer">
            {/* For this row, replace this when Simon finishes and merges the language switcher */}
            <Row className="text-center d-flex justify-content-center align-items-center py-3 fs-6 text-white">
                <div>
                    <span onClick={()=>setLang(0)} style={lang === 0 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>English</span>
                    <span>&nbsp; | &nbsp;</span>
                    <span onClick={()=>setLang(1)} style={lang === 1 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>Japanese</span>
                </div>
            </Row>
            {/* See comment above */}
            <Row className="text-center d-flex flex-column justify-content-center align-items-center py-3 px-3">
                {/* this max width is temporary until we know final desktop layout */}
                <div className='px-1 mw-50' style={{maxWidth:'600px'}}>
                    <input className="form-control border-0 border-bottom bg-primary text-white px-0 fs-6 rounded-0"
                    type="email" placeholder="Sign up to get updates from us"></input>
                </div>
                <Button className="my-3 text-center bg-secondary text-white fs-6" style={{maxWidth:'600px'}}>Submit</Button>
            </Row>
            <Row className="text-center">
                <p className="my-2 text-white fs-6 fw-light">In partnership with these ministry organizations</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pb-3">
                {/* these images as well are temporary until we know final importing */}
                <Image style={{maxHeight:'30px', width:'auto'}} src="https://omf.org/us/wp-content/uploads/2015/04/OMF_LOGO_COL_Web-1024x1024.png" alt="omf logo"></Image>
                <Image style={{maxHeight:'20px', width:'auto'}} src="https://pioneers.org/wp-content/uploads/2018/09/pioneers_logo_full.png" alt="pioneers logo"></Image>
            </Row>
            <Row className="d-flex justify-content-center">
                {/* another temp inline style maxWidth */}
                <div className="d-flex flex-column px-3 gap-0 text-white" style={{maxWidth:'600px'}}>
                    <p className="m-1 fs-5 fw-bold">Site Map</p>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Praying for Japan by topics</Link>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Praying for Japan by location</Link>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Downloadable resources</Link>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Stories</Link>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">Purchase the book</Link>
                    <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">About us</Link>
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
                <p className="text-white fs-6 fw-light">Copyright &copy; 2021 Beneath the Surface. All rights reserved.</p>
            </Row>
        </Container>
        </>
    )
}