import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./Cv.module.css";

export default function Cv() {
    return (
        <>
            <Row>
                <Col lg={{ size: 3, offset: 1 }} className={styles.leftCol}>
                    <Row>
                        <Container>
                            <img
                                className={styles.photo}
                                src={require("./download.png")}
                                alt="profile"
                            />
                        </Container>
                    </Row>
                    <Row>Summary</Row>
                    <Row>Mobile</Row>
                    <Row>Email</Row>
                    <Row>Skills</Row>
                </Col>
                <Col lg={{ size: 6, offset: 1 }} className={styles.rightCol}>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="10">
                            <h3>Work Experience</h3>
                            <p></p>
                            <Col lg="2"></Col>
                            <Col lg="10">
                                <Row>
                                    <h4>
                                        Operations Manager @ SkiBro Technologies
                                        Ltd
                                    </h4>
                                    <h5>Val d’Isère, London, Jersey</h5>
                                    <h6>DEC 2017 – JUL 2019</h6>
                                    <p lg={{ align: "left" }}>
                                        Ran operations for first year of launch
                                        for ski & snowboard lesson aggregator
                                        platform
                                    </p>
                                    <p lg={{ align: "left" }}>
                                        Head relationship manager of lesson
                                        service providers
                                    </p>
                                    <p lg={{ align: "left" }}>
                                        Head of BD campaign to grow service
                                        provider network
                                    </p>
                                    <p lg={{ align: "left" }}>
                                        Product owner of backend management
                                        system and service provider apps.
                                        Closely worked with tech team to design
                                        & build products
                                    </p>
                                    <p lg={{ align: "left" }}>
                                        Managed finances and designed service
                                        provider payment system
                                    </p>
                                </Row>
                                <Row></Row>
                                <Row></Row>
                            </Col>
                        </Col>
                    </Row>
                    <Row>Education</Row>
                    <Row>Interests</Row>
                    <Row>LinkedIn and portfolio</Row>
                </Col>
            </Row>
        </>
    );
}
