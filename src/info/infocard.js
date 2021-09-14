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
        return(
            <Card style = {{maxWidth: '22rem'}}>
                <CardImg variant = "top" src = "pictures/orange.jpg" />
                <CardBody>
                    <CardTitle as = "h5">orange hehe</CardTitle>
                    <CardText as = "h3">annoying</CardText>
                </CardBody>
            </Card>
        );
    }
}
export default InfoCard