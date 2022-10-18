const express = require("express");
const routeController = require("../controllers/controller");

const router = express.Router();

router.get("/trucks", routeController.getTrucks);

router.get("/parcels", routeController.getParcels);

router.get("/truck", routeController.getTruck);

router.post("/truck", routeController.createTruck);

router.post("/parcel", routeController.createParcel);

router.delete("/truck", routeController.deleteTruck);

router.delete("/parcel", routeController.deleteParcel);

router.put("/load", routeController.loadParcel);

router.put("/unload-truck", routeController.unloadTruck);

router.put("/unload-parcel", routeController.unloadParcel);

module.exports = router;
