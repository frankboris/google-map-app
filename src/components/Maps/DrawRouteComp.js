import React from 'react'
import {DirectionsRenderer, DirectionsService} from "@react-google-maps/api";

class DrawRouteComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: null
        }

        this.directionServiceCallback = this.directionServiceCallback.bind(this)
    }

    directionServiceCallback(response) {
        if (response && response.status === 'OK') {
            this.setState(() => ({
                response
            }))
        } else {
            this.setState(() => ({
                response: null
            }))
        }
        console.log(response);
    }

    render() {
        const {origin, destination, travelMode} = this.props;
        const {response} = this.state;

        return (
            <React.Fragment>
                <DirectionsService
                    options={{
                        destination: origin.location,
                        origin: destination.location,
                        travelMode: travelMode
                    }}
                    callback={this.directionServiceCallback}
                />
                {response &&
                <DirectionsRenderer
                    options={{
                        directions: response,
                    }}
                />}
            </React.Fragment>
        )
    }
}

export {DrawRouteComp}
