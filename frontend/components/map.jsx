import React from 'react';
import MarkerManager from '../util/marker_manager';

class Map extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const middle = this.props.businesses.length === 1 ? 
        {lat: this.props.businesses[0].lat, lng: this.props.businesses[0].lng}
            : 
        { lat: 41.8781, lng: -87.6298 }

        const zoomSize = this.props.businesses.length === 1 ? 15 : 13;

        const mapOptions = {
            center: middle, 
            zoom: zoomSize
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    render(){
        return (
            <div id={this.props.businesses.length === 1 ? 'map-show-container' : 'map-container'} ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default Map;