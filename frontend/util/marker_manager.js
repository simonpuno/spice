export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
    updateMarkers(businesses) {
        if (businesses.length > 1) {
            businesses.forEach((business, i) => {
                if (!Object.keys(this.markers).includes(business.id.toString())) {
                    this.createMarkerFromBusiness(business, i)
                }
            })
        } else if (businesses.length === 1) {
            businesses.forEach((business) => {
                if (!Object.keys(this.markers).includes(business.id.toString())) {
                    this.createMarkerFromBusiness(business, 'single')
                }
            })
        }
    }

    createMarkerFromBusiness(business, i) {
        if (i === 'single') {
            const latLng = { lat: business.lat, lng: business.lng };
            this.markers[business.id] = business;
            new google.maps.Marker({
                position: latLng,
                map: this.map,
            })
        } else {
            const latLng = { lat: business.lat, lng: business.lng };
            this.markers[business.id] = business;
            new google.maps.Marker({
                position: latLng,
                map: this.map,
                label: `${i+1}`
            })
        }
    }
}