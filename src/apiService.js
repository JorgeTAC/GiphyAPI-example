const API_FACT = "https://catfact.ninja/fact";
const GIF_API = "https://api.giphy.com/v1/gifs";
const API_KEY = "6s4NS9dNsG0xIdYSoGRbtqCk6xECII6u";

export class ApiService {
  static getFacts() {
    return fetch(API_FACT)
      .then((data) => data.json())
      .then((data) => data.fact);
  }

  static getGifs(keywords) {
    return fetch(
      `${GIF_API}/search?api_key=${API_KEY}&q=${keywords.join(
        "+"
      )}&limit=1&offset=0&rating=g&lang=en`
    )
      .then((data) => data.json())
      .then(
        (data) =>
          data.data.map((x) => ({
            title: x.title,
            image: x.images["downsized_medium"]
          }))[0]
      );
  }
}
