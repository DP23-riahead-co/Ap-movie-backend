const { Films } = require("../models")





const getFilmList = async (req, res) => {
    try {
        const Films = await Films.findAll({});
        res.send(Films);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
const getFilmDetail = async (req, res) => {
    try {
        const film = await Films.findByPk(id);
        res.send(film);
    } catch (err) {
        res.status(400).send(err);
    }
    // const {id}=req.params;
    // const film=filmList.find(film=>film.id==id);
    // if(film){
    //     res.send(film);
    // }
    // else{
    //     res.status(404).send("Not Found");
    // }
}
const addNewFilm = async (req, res) => {
    const { title, year, director, actors, country, genre, description } = req.body;
    try {
        const film = await Films.create({ title, year, director, actors, country, genre, description });
        res.status(201).send(film);
    } catch (err) {
        res.status(500).send(err);
    }
    // console.log(req.body);
    // const { title, year, director, actors, country, genre, description } = req.body;
    // const film = {
    //     id: filmList.length,
    //     title,
    //     year,
    //     director,
    //     actors,
    //     country,
    //     genre,
    //     description
    // }
    // filmList.push(film);
    // res.send(film);
}
const deleteFilms = async (req, res) => {
    const { id } = req.params;
    try {
        await Films.destroy({ where: { id } });
    } catch {
        res.status(404).send(err);
    }
    // const film = filmList.find(film => film.id == id);
    // if (film) {
    //     filmList.splice(filmList.indexOf(film), 1);
    //     res.send(film);
    // }
    // else {
    //     res.status(404).send("Not Found");
    // }
}
const updateFilm = async (req, res) => {
    const { id } = req.params;
    const { title, year, director, actors, country, genre, description } = req.body;
    try {
        await Films.update({ title, year, director, actors, country, genre, description }, { where: { id } });
    } catch {

    }

    // const film = filmList.find(film => film.id == id);
    // if (film) {
    //     film.title = title;
    //     film.year = year;
    //     film.director = director;
    //     film.actors = actors;
    //     film.country = country;
    //     film.genre = genre;
    //     film.description = description;
    //     res.send(film);
    // }
    // else {
    //     res.status(404).send("Not Found");
    // }
}
module.exports = { getFilmDetail, addNewFilm, deleteFilms, updateFilm, getFilmList };