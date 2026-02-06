import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Row, Col} from 'react-bootstrap';

export default function AccordionExpandIcon() {
return (
<div>
    <h1 className="my-3" sm={12} md={6} lg={4} xl={3}>Latest Projects</h1>
    {loading ? (
    <Loader />
    ) : error ? (
    <Message variant='danger'>{error}</Message>
    <Row className="mb-3">
        <Col className="text-center">
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content"id="panel2-header">
                    <Typography component="span">All Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        
                    </Row>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Manager</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Col>
    </Row>
   
</div>
);
}
