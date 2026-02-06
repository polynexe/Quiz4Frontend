import React from 'react'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'
import { listProjects } from '../actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function DetailScreen() {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const {loading, error, projects} = projectList;
    useEffect(() => {
        dispatch(listProjects());
    }, []);
  return (
    <Row>
        <Col md={6}>
            <Image src={projects.image} alt='Project Image' fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{projects.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>{projects.description}</h3>
                </ListGroup.Item>
                <ListGroup.Item>{projects.status}</ListGroup.Item>
                <ListGroup.Item>{projects.hours_consumed}</ListGroup.Item>
                <ListGroup.Item>{projects.start_date}</ListGroup.Item>
                <ListGroup.Item>{projects.end_date}</ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
  )
}

export default DetailScreen