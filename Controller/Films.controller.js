const { Films } = require("../models")





const getFilmList = async (req, res) => {
    try {
        const FilmList = await Films.findAll();
        res.status(200).send(FilmList);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
const getFilmDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const filmDetail = await Films.findOne({
            where: {
                id,
            }
        });
        console.log(filmDetail);
        !filmDetail?res.send("not found"):
        res.send(filmDetail);
    } catch (err) {
        res.status(404).send(err);
    }
    
}
const addNewFilm = async (req, res) => {
    const { title, year, director, actors, country, genre, description } = req.body;
    try {
        const film = await Films.create({ title, year, director, actors, country, genre, description });
        res.status(201).send(film);
    } catch (err) {
        res.status(500).send(err);
    }

}
const deleteFilms = async (req, res) => {
    const { id } = req.params;
    try {
        await Films.destroy({ where: { id } });
    } catch {
        res.status(404).send(err);
    }

}
const updateFilm = async (req, res) => {
    const { id } = req.params;
    const { title, year, director, actors, country, genre, description } = req.body;
    try {
        await Films.update({ title, year, director, actors, country, genre, description }, { where: { id } });
        const film=await Films.findByPk(id);
        console.log("film",film);
        res.status(200).send(film);
        
    } catch {

    }
}

module.exports = { getFilmDetail, addNewFilm, deleteFilms, updateFilm, getFilmList };