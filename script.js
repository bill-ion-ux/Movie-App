// initialize reference
let movieNameRef = document.getElementById("movie-name");
let searchbtn = document.getElementById("search-button");
let result = document.getElementById("results");



let getMovie = () => {
    let movieName  = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    //if input filed is empty
    if(movieName.length <= 0 ){
        result.innerHTML = `<h3 class ="msg"> Please Enter A movie Name </h3>`;

    }
    else{
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                //if movie exists in database
                if(data.Response == 'True'){
                    result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class ="rating">
                                <img src="star.svg";
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class= "genre" >
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            
                            
                            </div>

                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                 `;
                }else{
                    result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
                }
             

                
    });
    //if error occur
    
        
    }

};
searchbtn.addEventListener("click",getMovie);
window.addEventListener("load",getMovie);