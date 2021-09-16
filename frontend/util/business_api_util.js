export const fetchBusinessesUtil = (data) => (
    $.ajax({
        url: '/api/businesses',
        method: 'GET',
        data: data
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

