const express=require('express');
const useRouter=express.Router();
const {getFilmDetail,getFilmList,addNewFilm,deleteFilms,updateFilm}=require("../Controller/Films.controller")
useRouter.get('/',getFilmList)
useRouter.get('/:id',getFilmDetail)
useRouter.post('/',addNewFilm)
useRouter.put('/:id',updateFilm)
useRouter.delete('/:id',deleteFilms)
module.exports=useRouter;