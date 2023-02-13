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
import styles from '../styles/Footer.module.css'
import Link from "next/link";

export default function Footer({data}:{data:any}) {

    const [lang, setLang] = React.useState(0)

    return (
        <>
        {/* Footer starts here */}

        <Container fluid className={styles.footerContainer}>
            {/* For this row, replace this when Simon finishes and merges the language switcher */}
            <Row className="text-center d-flex justify-content-center align-items-center py-3" style={{color: 'white', fontSize:'0.8rem'}}>
                <div>
                    <span onClick={()=>setLang(0)} style={lang === 0 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>English</span>
                    <span>&nbsp; | &nbsp;</span>
                    <span onClick={()=>setLang(1)} style={lang === 1 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>Japanese</span>
                </div>
            </Row>
            {/* See comment above */}
            <Row className="text-center d-flex flex-column justify-content-center align-items-center py-3 px-3">
                <div className='px-1' style={{maxWidth: '600px'}}>
                    <input style={{border: 'none', backgroundColor: '#002A63', color: 'white', borderBottom:'#CECECE 1px solid', borderRadius:"0", paddingLeft:0, fontSize:'0.8rem'}}
                    type="email" className="form-control" placeholder="Sign up to get updates from us"></input>
                </div>
                <Button className="my-3" style={{backgroundColor:'#4592CF', color:'white', textAlign:'center', maxWidth:'600px', fontSize:'0.8rem'}}>Submit</Button>
            </Row>
            <Row className="text-center">
                <p className="my-2" style={{color:'white', fontSize:'0.75rem'}}>In partnership with these ministry organizations</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pb-3">
                <Image style={{maxHeight:'30px', width:'auto'}} src="https://omf.org/us/wp-content/uploads/2015/04/OMF_LOGO_COL_Web-1024x1024.png" alt="omf logo"></Image>
                <Image style={{maxHeight:'20px', width:'auto'}} src="https://pioneers.org/wp-content/uploads/2018/09/pioneers_logo_full.png" alt="pioneers logo"></Image>
            </Row>
            <Row className="d-flex justify-content-center">
                <div className="d-flex flex-column px-3" style={{gap: 0, color:'white', maxWidth:'600px'}}>
                    <p className="m-1" style={{fontSize:'0.9rem', fontWeight: 500}}>Site Map</p>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>Praying for Japan by topics</Link>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>Praying for Japan by location</Link>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>Downloadable resources</Link>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>Stories</Link>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>Purchase the book</Link>
                    <Link href="/" className="m-1" style={{fontSize:'0.8rem', fontWeight:200, color: 'white', textDecoration:'none'}}>About us</Link>
                </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
                <Image style={{maxHeight:'50px', width:'auto'}} src="/bts-crane-blue-logo-en.png" alt="logo"></Image>
            </Row>
            <Row className="text-center px-5">
                <p style={{color: 'white', fontSize:'0.7rem', fontWeight:200}}>We desire to see a prayer movement for Japan&apos;s spiritual breakthrough</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pt-1 pb-3" style={{color:'white'}}>
                <IconContext.Provider value={{size:'25px'}}>
                    <BsYoutube style={{width:'auto'}}></BsYoutube>
                    <BsInstagram style={{width:'auto'}}></BsInstagram>
                    <MdEmail style={{width:'auto'}}></MdEmail>
                    <FaAmazon style={{width:'auto'}}></FaAmazon>
                </IconContext.Provider>
            </Row>
            <Row className="text-center py-3 px-5">
                <p style={{color: 'white', fontSize:'0.8rem', fontWeight:200}}>Copyright &copy; 2021 Beneath the Surface. All rights reserved.</p>
            </Row>
        </Container>
        </>
    )
}