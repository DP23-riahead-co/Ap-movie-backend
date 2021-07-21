const filmList=[];


const getFilmList=(req,res)=>{
    res.send(filmList);
}
const getFilmDetail=(req,res)=>{
    const {id}=req.params;
    const film=filmList.find(film=>film.id==id);
    if(film){
        res.send(film);
    }
    else{
        res.status(404).send("Not Found");
    }
}
const addNewFilm=(req,res)=>{
    console.log(req.body);
    const {title,year,director,actors,country,genre,description}=req.body;
    const film={
        id:filmList.length,
        title,
        year,
        director,
        actors,
        country,
        genre,
        description
    }
    filmList.push(film);
    res.send(film);
}
const deleteFilms=(req,res)=>{
    const {id}=req.params;
    const film=filmList.find(film=>film.id==id);
    if(film){
        filmList.splice(filmList.indexOf(film),1);
        res.send(film);
    }
    else{
        res.status(404).send("Not Found");
    }
}
const updateFilm=(req,res)=>{
    const {id}=req.params;
    const {title,year,director,actors,country,genre,description}=req.body;
    const film=filmList.find(film=>film.id==id);
    if(film){
        film.title=title;
        film.year=year;
        film.director=director;
        film.actors=actors;
        film.country=country;
        film.genre=genre;
        film.description=description;
        res.send(film);
    }
    else{
        res.status(404).send("Not Found");
    }
}
module.exports={getFilmDetail,addNewFilm,deleteFilms,updateFilm,getFilmList};