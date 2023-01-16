async function main() {
    let data = await getData();
    // console.log(data);
    append(data)
}

async function getData() {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=2e6cddb143a39f1e6a072126fc72e196&language=en-US&page=1";
    let response = await fetch(url);
    let data = await response.json();
    return data.results;
}

main();

function append(data) {
    console.log(data);
    let container = document.getElementById("container");

    data.forEach((el) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.poster_path;

        let h3 = document.createElement("h3");
        h3.innerText = el.title;

        let p = document.createElement("p");
        p.innerText = `Release Date: ${el.release_date}`;

        let p2 = document.createElement("p");
        p2.innerText = `IMDB rating: ${el.vote_average}`;

        div.append(img,h3,p,p2);
        container.append(div);
    })
}