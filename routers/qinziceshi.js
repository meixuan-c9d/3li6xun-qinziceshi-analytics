const express = require('express')
const router = express.Router()

const handleUV = require('../libs/handle-uv')
router
  .route('/uv')
  .get(handleUV)

const handleParentGenderSubmission = require('../libs/handle-parent-gender-submission')
router
  .route('/parent-gender/:parentGender')
  .get(handleParentGenderSubmission)

const handleChildGenderSubmission = require('../libs/handle-child-gender-submission')
router
  .route('/child-gender/:childGender')
  .get(handleChildGenderSubmission)

const handleChildAgeRangeSubmission = require('../libs/handle-child-age-range-submission')
router
  .route('/child-age-range/:childAgeRange')
  .get(handleChildAgeRangeSubmission)
  
module.exports = router