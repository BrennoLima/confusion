import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import moment from 'moment';

class DishDetail extends Component{


    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg  width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }

    renderComments(dish){
        if(dish != null){
            const commentsLoop = dish.comments.map((comment) => {
                return(
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {moment(comment.date).format('MMM, DD , YYYY')}</li>
                    </ul>
                )
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4><strong>Comments</strong></h4>
                    {commentsLoop}
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }

    render(){
        const selectedDish = this.renderDish(this.props.selectedDish);
        const comments = this.renderComments(this.props.selectedDish);
        return(
            <div className="row">
                {selectedDish}
                {comments}
            </div>
        );
    }
}

export default DishDetail;