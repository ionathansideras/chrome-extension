const button = document.querySelector("button");
const img = document.querySelector("img");

async function api(){
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    console.log(data.url)
    return data;
}

button.addEventListener("click", async () => {
  const url = await api();
  img.src = url.url;
});
