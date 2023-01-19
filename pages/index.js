import Head from 'next/head'
import Image from 'next/image'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beneath the Surface</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Navbar fixed="top" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              alt="Crane logo with the text: Beneath the Surface"
              src="/bts-crane-wht-logo-en.png"
              width="150"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#topics">Topics</Nav.Link>
              <Nav.Link href="#downloads">Downloads</Nav.Link>
              <Nav.Link href="#purchase">Purchase the Book</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </main>
    </>
  )
}
