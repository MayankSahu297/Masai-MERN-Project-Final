const express = require("express");
const { addTransection, getAllTransection,editTransection, deleteTransection } = require("../controllers/transectionCtrl");


//router object
const router = express.Router();

//routers
//add transection POST Methord

router.post("/add-transection",addTransection )

//edit transection POST Methord

router.post("/edit-transection",editTransection )
//delete transection POST Methord

router.post("/delete-transection", deleteTransection )

//get transections
router.post("/get-transection",getAllTransection)

module.exports = router;