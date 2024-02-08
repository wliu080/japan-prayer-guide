import React, { ReactNode } from "react"
import { Collapse, Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

interface feedbackProps {
    title: string
    children: ReactNode
    startOpened?: boolean
}

const CollapseBlock = ({ title, children, startOpened = false }: feedbackProps) => {
    const [openCollapse, setOpenCollapse] = React.useState(startOpened)

    return (
        <Container>
            <hr />
            <Button
                className="collapse-label fs-2 fw-semibold lh-sm ps-0"
                onClick={() => setOpenCollapse(!openCollapse)}
                aria-controls="collapse-block"
                aria-expanded={openCollapse}
            >
                {title} {openCollapse ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </Button>
            <Collapse in={openCollapse}>
                <Container id="collapse-block">{children}</Container>
            </Collapse>
        </Container>
    )
}

export default CollapseBlock
