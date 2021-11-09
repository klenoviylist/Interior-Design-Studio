import React from "react";
import './Home.css';
import {Parallax} from "react-parallax";
import {Container, Row} from "react-bootstrap";
import projects from "../projects";
import ProjectItem from "../components/ProjectItem";
import {NavLink} from "react-router-dom";


function Home() {
    return (
        <Container fluid className="p-0">
            <Parallax className="parallax-container" bgImage="./images/sofa.jpg" strength={500}>
                <Container className="parallax-text">
                    <Container className="parallax-title text-center">Interior Design Studio</Container>
                </Container>
            </Parallax>


            <Container className="px-4 py-5 my-5 text-center">
                 <Container className="col-lg-6 mx-auto">
                   <p className="lead mb-2 ">We specialize in highly functioning spaces that are both beautiful and comfortable.
                    We believe that living spaces can be happier, healthier and more beautiful through thoughtful design.</p>

                   <NavLink className="btn btn-secondary btn-lg me-md-2 contact-button" to="/contact">Contact us for a free estimate</NavLink>

                  </Container>
            </Container>

            <Container fluid className="projects-list">
                <h1 className="text-center projects-title">Our projects</h1>
                <Row lg={1} className="justify-content-center">
                    {projects.map((project) => (
                        <ProjectItem key={project.key} title={project.title} img={project.img} path={project.path} />
                    ))}
                    <Container className="text-center contact-button-container">
                       <NavLink className="btn btn-secondary btn-lg contact-button2" to="/contact">Contact us for a free estimate</NavLink>
                    </Container>

                </Row>

            </Container>

        </Container>
    )
};

export default Home;
