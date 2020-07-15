import React, { useState, useEffect } from "react";
import { CardBody, CardText, CardTitle, CardImg, Card, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

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

function RenderComments({ comments }) {
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
            </div>

        );
    }
    else return <div></div>;
}


function Dishdetail(props) {
    if (props.dish !== null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
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
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else return null;
}


export default Dishdetail;
