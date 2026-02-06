import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import {listProjects} from '../actions/projectActions';


export default function HomeScreen() {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const {loading, error, projects} = projectList;

    useEffect(() => {
        dispatch(listProjects());
    }, []);

return (
<div>
    <Row className="mb-3" py={3}>
        <Col className="text-center">
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content"id="panel2-header">
                    <Typography component="span">All Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        {projects.map((project) => (
                            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                <Typography component="span">{project.name}</Typography>
                            </Col>
                        ))}
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
