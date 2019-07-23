import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import Profile from '../Profile';

class index extends Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        var { category } = this.props;
        return (
            <Col className="text-center" md="6" key={category.id}>
                {/* <NavLink to={`/example/${category.id}`}> */}
                <a href='#' onClick={this.toggle}>
                    <img
                        alt="..."
                        title={category.name}
                        className="img-rounded img-responsive"
                        src={category.image}
                        style={{ width: "500px", height: '300px' }}

                    />
                </a>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><Profile /></ModalHeader>
                    <ModalBody>
                        <p>Chào mừng bạn đến với bài thi trắc nghiệm {category.name}.</p>
                        <p>Bạn có 40 phút để hoàn thành bài thi.</p>
                        <p>Chúc bạn thi tốt.</p>
                    </ModalBody>
                    <ModalFooter>
                        <NavLink
                            to={`/example/${category.id}`}
                            className="btn btn-primary">
                            Start
                        </NavLink>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }
}

export default index;