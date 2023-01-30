module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/projects/:slug',
            handler: 'project.findOne',
            config: {
                find: {
                    auth: false
                }
            }
        }
    ]
}