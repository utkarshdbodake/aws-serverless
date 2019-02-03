'use strict'

module.exports.pingHandler = async (event, context) => {

    const response = {
        message: 'pong'
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}
