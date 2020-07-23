import React, { useState, useEffect } from "react";
import { CardBody, CardText, CardTitle, CardImg, Card, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';

function RenderDish({ dish }) {
    return (
        dish == null ? <div></div> :
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
    );
}

function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        const comnts = comments.map(c => {
            return (
                <li>
                    <p>{c.comment}</p>
                    <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}</p>
                </li>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className='list-unstyled'>
                    {comnts}
                </ul>
                <CommentForm addComment={addComment} dishId={dishId} />
            </div>

        );
    }
    else return <div></div>;
}


function Dishdetail(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish !== null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
                </div>
            </div>
        );
    } else return null;
}


export default Dishdetail;
