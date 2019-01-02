
export default function getList(userId, func,funcError) {

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, {
        method: 'get'
    }).then(handleResponse)
        .then(data => {
            func(data);
        })
        .then(error => {
            funcError(error);
        })
}

function handleResponse(response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return handleJSONResponse(response)
    } else {
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}

function handleJSONResponse(response) {
    return response.json()
        .then(json => {
            if (response.ok) {
                return json;
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                }))
            }
        })
}
