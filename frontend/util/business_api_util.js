export const fetchBusinessesUtil = () => (
    $.ajax({
        url: '/api/businesses',
        method: 'GET',
        // error: (err) => console.log(err)
    })
)

export const fetchBusinessUtil = (businessId) => (
    $.ajax({
        url: `/api/businesses/${businessId}`,
        method: 'GET',
        // error: (err) => console.log(err)
    })
)

