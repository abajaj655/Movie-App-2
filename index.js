async function main(){
    let query = document.getElementById("query").value;
    let data = await getData(query);
    append(data)
    // console.log(data)
    
}

async function getData(query){
    const url = `https://www.omdbapi.com/?apikey=85ebf0eb&s=${query}`

    let res = await fetch(url);
    let data = await res.json();
    return data.Search;
}

function append(data){
    if(!data){
        return;
    }

    let container = document.getElementById("container");
    container.innerHTML=null;

    data.forEach(function(el){
        
    let image = document.createElement("img");
    image.src = el.Poster;

    let p = document.createElement("p");
    p.innerText = el.Title;

    let h4 = document.createElement("h4");
    h4.innerText = `Year of Release: ${el.Year}`;

    let rating = document.createElement("h4");
    rating.innerText="IMDB Rating: 8.1";

    let cast = document.createElement("p");
    cast.innerText="Cast: XYZ"

    let plot = document.createElement("p");
    plot.innerText="PLOT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec pulvinar risus, lacinia hendrerit metus. Aliquam quis dapibus tortor, non tristique ipsum. Integer a velit sagittis arcu congue fringilla at eu felis. Duis quis leo sed lorem aliquam suscipit. Curabitur placerat diam pretium, efficitur nisi et, porttitor dolor. Suspendisse mollis vel nulla id lacinia. In lacinia fermentum tellus, ut dignissim tellus commodo a. Vivamus non quam nulla. Aenean dictum mattis quam, nec rhoncus dolor accumsan sed. Sed faucibus ex quis erat tempus, sit amet auctor enim condimentum. Etiam quis cursus lacus. Nullam quis posuere velit. Morbi gravida sem id malesuada consectetur. Proin neque ex, laoreet et efficitur vel, ornare nec eros. Aenean ac ligula et neque vestibulum pharetra. Suspendisse in lectus aliquet, interdum metus vel, ornare massa."

    let lang = document.createElement("h4");
    lang.innerText="Language: English";

    let div = document.createElement("div");
    div.setAttribute("class","movies");
    div.addEventListener("click", function(){
        // const url = `https://www.omdbapi.com/?apikey=85ebf0eb&s=${div.innerText}`
        // let container = document.getElementById("container");
        container.innerHTML=null;
        document.getElementById("x").innerHTML=null;

        let poster = document.createElement("div");
        poster.setAttribute("id", "poster")

        let h1 = document.createElement("h1");
        h1.innerText=p.innerText;

        let details = document.createElement("div");
        details.setAttribute("id","details");

        let cont = document.createElement("div");
        cont.setAttribute("id","cont");

        

        poster.append(image);
        details.append(h1,h4,rating,cast,plot,lang)
        cont.append(poster,details);
        document.querySelector("body").append(cont)

        

    });

    div.append(image,p);
    container.append(div);
    
    })

}



let id;

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay)
}