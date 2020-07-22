import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Input } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !(this.state.isOpen) });
    }


    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={this.toggle}> <span className="fa fa-pencil fa-lg"></span> Submit Comment </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <LocalForm>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input type="select" name="select" id="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".firstname" id="name" name="authorName"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            maxLength: maxLength(15),
                                            minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger font-weight-bold"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            minLength: "Must be geater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" name="comment" id="comment" rows={6} />
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;