// let port
// if (process.env.NODE_ENV === 'development') {
//   port = ':5010'
// } else {
//   port = (window.location.port === 80 || window.location.port === 443) ? '' : ':' + window.location.port
// }
// const path = 'api'
// const baseUri = `${window.location.protocol}//${window.location.hostname}${port}/${path}`
const baseUri = 'http://localhost:3030/api/'

// Helpers
function isContentJson(response) {
  return response.headers.get('content-type').indexOf('application/json') !== -1
}

function parseBody(response) {
  if (response && isContentJson(response)) {
    return response.json()
  }

  return null
}

async function checkHttpStatus(response) {
  if (response.ok) {
    return response
  }
  if (response.status === 401) {
    window.location.href = '/login'
  }

  window.location.href = '/error'
  return null
}

function getToken() {
  return sessionStorage.getItem('id_token')
}

async function getResponse(type, uri, data) {
  const options = {
    method: type,
    headers: {
      Accept: 'application/json',
      Authorization: getToken(),
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  const request = await fetch(`${baseUri}/${uri}`, options)
  const response = await checkHttpStatus(request)
  return parseBody(response)
}

// GET
export function apiGet(uri) {
  return getResponse('GET', uri)
}

// POST
export function apiPost(uri, data) {
  return getResponse('POST', uri, data)
}
