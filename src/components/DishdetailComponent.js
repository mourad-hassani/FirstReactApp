import React, { useState, useEffect } from "react";
import { CardBody, CardText, CardTitle, CardImg, Card } from "reactstrap";

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
    const [dish, setDish] = useState(0);

    useEffect(
        () => {
            setDish(props.selectedDish);
        },
        [props.selectedDish]
    );

    return (
        <div className='container'>
            <div className="row">
                <RenderDish dish={dish} />
                <RenderComments comments={dish?.comments} />
            </div>
        </div>
    );
}


export default Dishdetail;
