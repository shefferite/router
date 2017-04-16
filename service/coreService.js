const request = require('request');
const querystring = require('querystring');

const baseUri = 'http://localhost:8080';
const apiVersion = 'v1';

const CoreService = function () {

    const _makeRequest = function (method, endpoint, data) {
        return new Promise((fulfull, reject) => {
            const options = {
                method: method,
                uri: [baseUri, apiVersion, endpoint].join("/"),
                json: true,
                headers: {
                    "Content-Type": "application/json"
                }
            };

            if (["POST", "PUT"].indexOf(method) >= 0) {
                options.json = data;
            } else {
                options.uri = [options.uri, querystring.stringify(data)].join('?')
            }

            request(options, function (error, response, body) {
                try {
                    if (response.statusCode >= 200 && response.statusCode <= 400) {
                        fulfull(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            error: body
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });
    };

    let translate = function(word) {
        return new Promise((fulfill, reject) => {
            let request = {
                word: word
            };

            _makeRequest('POST', '/translate', request).then(response => {
                console.log(response);
                fulfill(response);
            }).catch(reason => {
                reject(reason);
            });
        });
    }
};