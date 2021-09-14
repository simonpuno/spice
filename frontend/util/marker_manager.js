export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
    updateMarkers(businesses) {
        businesses.forEach(business => {
            if (!Object.keys(this.markers).includes(business.id.toString())) {
                this.createMarkerFromBusiness(business)
            }
        })
    }

    createMarkerFromBusiness(business) {
        const latLng = { lat: business.lat, lng: business.lng };
        this.markers[business.id] = business;
        new google.maps.Marker({
            position: latLng,
            map: this.map
        })
    }
}