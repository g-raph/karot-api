module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/skills/:slug',
            handler: 'skill.findOne',
            config: {
                auth: false
            }
        }
    ]
}