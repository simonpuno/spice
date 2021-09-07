import { fetchBusinessesUtil, fetchBusinessUtil } from "../util/business_api_util";
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'

const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchBusinesses = () => dispatch => (
    fetchBusinessesUtil()
        .then(businesses => dispatch(receiveBusinesses(businesses)))
)

export const fetchBusiness = (businessId) => dispatch => (
    fetchBusinessUtil(businessId)
        .then(business => dispatch(receiveBusiness(business)))
)