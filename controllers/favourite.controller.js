import {addFavourite, deleteFavourite, getFavourites} from "../services/favourite.service.js";

export function getFavouriteCity(req, res) {
    getFavourites()
        .then((response) => {
            res.json({data:response});
        });
}

export async function addFavouriteCity(req, res) {
    let {cityName} = req.query;
    cityName = decodeURI(cityName);
    try {
        let data = await addFavourite(cityName)
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}

export function deleteFavouriteCity(req, res) {
    let {cityName} = req.query;
    cityName = decodeURI(cityName);
    try {
        deleteFavourite(cityName)
            .then(() => {
                res.status(200);
            });
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}
