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
    } catch {

    }

 
}

module.exports = { getFilmDetail, addNewFilm, deleteFilms, updateFilm, getFilmList };