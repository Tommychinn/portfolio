import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./Cv.module.css";

export default function Cv() {
    return (
        <>
            <Row>
                <Col lg={{ size: 3, offset: 1 }} className={styles.leftCol}>
                    <Row>
                        <img
                            className={styles.photo}
                            src={require("./download.png")}
                            alt="profile"
                        />
                    </Row>
                    <Row>Summary</Row>
                    <Row>Mobile</Row>
                    <Row>Email</Row>
                    <Row>Skills</Row>
                </Col>
                <Col lg={{ size: 6, offset: 1 }} className={styles.rightCol}>
                    <Row>
                        <h3>Work Experience</h3>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>Education</Row>
                    <Row>Interests</Row>
                    <Row>LinkedIn and portfolio</Row>
                </Col>
            </Row>
        </>
    );
}
