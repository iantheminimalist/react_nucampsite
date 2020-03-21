import React, { Component } from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


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
return <div />;
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
    return <div />;
}

render(){

const campsites = this.props.campsites;

const campInfo = this.props.campsitesInfo.map(
    s => {
        return(
            <div>
                {s.id}
                
            </div>
        );
    }
);
console.log(campInfo);

    return(
    <div>
        <div className="row">
            <div className="col-md-5 m-1">
                {this.renderCampsite(this.props.campsites)}
            </div>
            {this.renderComments(campsites)}
        </div>

    </div>

    );
}

}

export default CampsiteInfo;