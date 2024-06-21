export default class FlaskAPI {
  // call this flaskAPI
  // process which function is needed,

  static predict(body) {
    return fetch(`http://localhost:5000/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
