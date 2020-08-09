import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import moment from 'moment';

    function RenderDish({dish}){
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

    function RenderComments({dish}){
        if(dish != null){
            const commentsLoop = dish.comments.map((comment) => {
                return(
                    <ul className="list-unstyled">
                        <li><p>{comment.comment}</p></li>
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

    const DishDetail = (props) => {
        if(props.dish != null){
           return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish}/> 
                        <RenderComments dish={props.dish}/>
                    </div> 
                </div>
            ); 
        }
        else{
            return(<div></div>);
        }
        
    }


export default DishDetail;