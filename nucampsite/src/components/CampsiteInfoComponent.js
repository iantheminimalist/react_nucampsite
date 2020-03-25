import React, { Component } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class CampsiteInfo extends Component{
constructor(props){
    super(props);
    this.state = {
        selectedCampsite: null
    };
}

renderComments(campsites){
if(campsites){
    return(
    <div className="col-md-5 m-1">
        <h4>Comments</h4>
            {campsites.comments.map(comment => 
            <div key={comment.id}>
               <p>{comment.text} - {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> 
            </div>)
                }
        </div>
    );
}
return <div />; //returns Comments if fails
}
renderCampsite(campsite){
    if (campsite) {
        return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle ><h5>{campsite.name}</h5></CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    return <div />; //returns Comments if fails
}
render(){
const campsites = this.props.campsite;
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-5 m-1">
                {this.renderCampsite(this.props.campsite)}

            </div>
            {this.renderComments(campsites)}
        </div>
    </div>
    );
}//End of render
}//End of Class

export default CampsiteInfo;