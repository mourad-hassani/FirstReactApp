import React, { Component } from "react";
import { CardBody, CardText, CardTitle, CardImg, Card } from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish: null,
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { dish: props.selectedDish };
    }

    renderDish(dish) {
        return (
            dish == null ? <div></div> :
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            const comnts = comments.map(c => {
                return (
                    <li>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {c.date}</p>
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

    render() {
        return (
            <div className="row">
                {this.renderDish(this.state.dish)}
                {this.renderComments(this.state.dish?.comments)}
            </div>
        );
    }
}

export default Dishdetail;
