import React from "react";

class Location extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
        }
    }

    render() {
        const taskSize = this.props.match.params.taskSize;
        const { latitude, longitude } = this.state;

        return (
            <div>
                <h1>Task size is: {taskSize}</h1>
                <h4>Located at: latitude={latitude}, longitude={longitude}</h4>
                <input type="button" value="Get Location" onClick={this.handleClick.bind(this)}/>
            </div>
        );

    }

    shouldComponentUpdate(nextProps, nextState) {
        //comparing current state and next state values
        const currentLatitude = this.state.latitude;
        const currentLongitude = this.state.longitude;
        const nextLatitude = nextState.latitude;
        const nextLongitude = nextState.longitude;
        if ((currentLatitude === nextLatitude) && (currentLongitude === nextLongitude)){
            console.log("not updating state values");
            return false;
        }
            
        else{
            console.log("calling render to update state values");
            return true;
        }
            
    }

    getPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude + ", " + longitude);
        this.setState({
            latitude: latitude,
            longitude: longitude
        })
    }

    handleClick(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
        } 
    }
}

export default Location;