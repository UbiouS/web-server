import {Router} from "express";
import {
    addFavouriteCity,
    deleteFavouriteCity,
    getFavouriteCity
} from "../controllers/favourite.controller.js";

const router = Router();

router.post("/favourites", addFavouriteCity);

router.delete("/favourites", deleteFavouriteCity);

router.get("/favourites", getFavouriteCity);

export default router