import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalBody,ModalHeader,Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite({campsite}){
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
            <Card>
            <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
                            <CardBody>
                    <CardTitle ><h5>{campsite.name}</h5></CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    return <div />; //returns Comments if fails
}
function RenderComments({comments, postComment, campsiteId}){ 
if(comments){
    return(
    <div className="col-md-5 m-1"> 
        <h4>Comments</h4>
        {comments.map(comment => {
            return(
                <div key={comment.id}>
                    <p>{comment.text}<br /> 
                    {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            );
        })}     
            <CommentForm campsiteId={campsiteId} postComment={postComment} />
        </div>
        
    );
}

return <div />; //returns Comments if fails
}

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

 
toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}
handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
}
    render(){
        return(
            <div className="col-md-5 m-1">
                <Button outline onClick={this.toggleModal}> <i className="fa fa-pencil fa-lg" />{' '} Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>CommentForm</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                placeholder="Rating"
                                className="form-control"
                                defaultValue="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                               <Col md={12}>
                               <Control.text 
                               model=".author"
                               id="author"
                               name="author"
                               placeholder="Author"
                               className="form-control"
                               validators={{
                                required,                                            
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                               />
                               <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters.',
                                            maxLength: 'Must be at 15 characters or less.',

                                        }} />
                               </Col>
                            </Row>
                            <Row>
                                <Label htmlFor="text" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".text" id="text" name="text" 
                                    rows={12}
                                    className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group ">
                                <Col md={12} className="my-3" >
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
function CampsiteInfo(props){
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.campsite){
        return(
            <div className="container">
                <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments
                        comments={props.comments}
                        postComment={props.postComment}
                        campsiteId={props.campsite.id}
                    />

                </div>
            </div>
        );
    }
    return <div />
}





export default CampsiteInfo;