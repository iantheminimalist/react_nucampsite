import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
//import ExampleComp from './ExampleComponents'; //practicing Parent -> Child Components 

class Directory extends Component {
    renderSelectedCampsite(campsite) {
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

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={ () => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;