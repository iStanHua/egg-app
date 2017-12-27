// app.js
'use strict'

module.exports = app => {
    console.log(app.config.env)
    if (app.config.env === 'local') {
        app.beforeStart(function* () {
            yield app.model.sync({ force: true })
        })
    }
}
