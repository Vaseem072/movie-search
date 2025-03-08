const moviename = document.getElementById('moviename')
const button = document.getElementById('btn');
button.addEventListener('click', fetchData);
moviename.addEventListener('input',fetchData)
function fetchData ()
{
    const url = `https://www.omdbapi.com/?s=${moviename.value}&apikey=2107d75b`
     fetch(url)
				.then((res) => res.json())
				.then((data) => displayData(data))
				.catch((err) => console.log(err))
}
const maindiv= document.getElementById('main')
function displayData (data)
{
    console.log(data);
    maindiv.textContent=''
    data.Search.forEach((m) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImage = document.createElement("img");
        movieImage.src = m.Poster;
        movieImage.alt= m.Title
        const movieTitle = document.createElement("h2");
        movieTitle.textContent=m.Title
        movieDiv.append(movieImage, movieTitle);
        maindiv.appendChild(movieDiv) 



    })
}