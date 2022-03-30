const express = require("express");

const mainControllers = require("../controllers/main-controllers");

const router = express.Router();

// @route     POST /api/main/gtm-diagnostic
// @desc      Receives the GTM diagnostic data from Shopify
// @access    Public

router.post("/gtm-diagnostic", mainControllers.gtmDiagnostic);

module.exports = router;
