module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/divisions/:slug',
            handler: 'division.findOne',
            config: {
                auth: false
            }
        }
    ]
}