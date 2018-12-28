/* request */
export default class Req {
  // get
  g(path) {
    return fetch(path)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }

  // post
  p(path, data) {
    return fetch(path, {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
    })
  }
}




