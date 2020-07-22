import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Input } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


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

    handleSubmit(values) {
        this.toggle();
        alert(JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={this.toggle}> <span className="fa fa-pencil fa-lg"></span> Submit Comment </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model='.rating' name="select" id="rating"
                                        className="form-control">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".author" id="name" name="author"
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
                                    <Control.textarea model=".comment" name="comment" id="comment"
                                        rows={6} className="form-control"
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" color="primary" >Submit</Button>
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