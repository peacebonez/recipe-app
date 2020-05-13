const API_KEY = "4bb072c7";
const APP_KEY = "d7935c71fa4deed8f5f442f7f910a12c";
const rawUrl =
  "https://api.edamam.com/search?q=chicken&app_id=4bb072c7&app_key=d7935c71fa4deed8f5f442f7f910a12c";
let url = `https://api.edamam.com/search?q=chicken&app_id=${API_KEY}&app_key=${APP_KEY}`;

export default function getData() {
  fetch(url)
    .then((data) => JSON.parse(data))
    .then((result) => {
      console.log("result:", result);
    });
}

getData();
