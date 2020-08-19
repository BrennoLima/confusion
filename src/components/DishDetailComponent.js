import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

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

    function RenderComments({comments}){
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}{'. '}
                                        {new Intl.DateTimeFormat("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit"
                                        }).format(new Date(comment.date))}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm/>
                </div>
                
            );
        }
        else{
            console.log("null");
            return (<div></div>);
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null){
           return(
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/> 
                        <RenderComments comments={props.comments}/>
                    </div> 
                </div>
            ); 
        }
        else{
            return(<div></div>);
        }
        
    }


export default DishDetail;


