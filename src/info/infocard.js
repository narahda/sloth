import React, {Component} from 'react';
import {Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { information } from './info';


class InfoCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedinfo: null
        }
    }
    onInfoSelect(information) {
        this.setState({ selectedinfo: information});
    }


    render() {
        return (
            <Card>
                <CardImg top src = {information.image} alt = {information.name} />
                <CardBody>
                    <CardTitle>{information.name}</CardTitle>
                    <CardText>{information.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default InfoCard