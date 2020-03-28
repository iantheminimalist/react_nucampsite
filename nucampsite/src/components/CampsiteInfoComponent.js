import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';



function RenderCampsite({campsite}){
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
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
function RenderComments({comments}){
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
                
        </div>
        
    );
}

return <div />; //returns Comments if fails
}


function CampsiteInfo(props){
    if (props.campsite){
        return(
            <div className="container">
                <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return <div />
}





export default CampsiteInfo;