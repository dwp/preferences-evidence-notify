const express = require('express')
const router = express.Router()

var inScope = [];  
var uCBenefit = false;
var oOScope = [];

// Summary
router.all('/E2E-testing/research-set-up/PoB-clear-data', function (req, res) {
  
    req.session.data = {}
    inScope = [];
    oOScope = [];
    uCBenefit = false
    req.session.data.inScope = inScope;
    req.session.data.oOScope = oOScope;

    console.log(inScope);
    console.log(oOScope);
    
    res.redirect("benefits");
  
})

// Summary
router.post('/E2E-testing/research-set-up/benefits-answer', function (req, res) {

  var researchSetUpBenefits = req.session.data['researchSetUpBenefits']

  if (!researchSetUpBenefits || researchSetUpBenefits.length === 0) {
    res.redirect('/E2E-testing/research-set-up/benefits')
    return
  }

  inScope = []
  oOScope = []
  uCBenefit = false

  for (var i = 0; i < researchSetUpBenefits.length; i++) {
    if (researchSetUpBenefits[i] === 'Universal Credit') {
      uCBenefit = true
    } else {
      inScope.push(researchSetUpBenefits[i])
    }
  }

  req.session.data.inScope = inScope
  req.session.data.oOScope = oOScope
  req.session.data.uCBenefit = uCBenefit

  res.redirect('/E2E-testing/research-set-up/alt-formats-list')
})


// Select which benefit selection page to show based on number of benefits available for user.
router.all('/E2E-testing/list-benefits-answer', function (req, res) {

  var researchSetUpBenefits = req.session.data['researchSetUpBenefits']

  if (researchSetUpBenefits == [] || researchSetUpBenefits == undefined)  {
    res.redirect('/E2E-testing/you-cannot-use-this-service-no-benefits');
    return

  } else if ((researchSetUpBenefits.length > 0) && (inScope.length > 0 ))   {
      res.redirect('/E2E-testing/select-benefits-you-need-proof-of');

  } else if (inScope.length === 0 )  {
    res.redirect('/E2E-testing/you-cannot-get-proof-of-benefit-letter');

  } 
  
})

// User moves from selecting benefit to alternative format required for POB
router.post('/E2E-testing/select-benefits-answer', function (req, res) {
    res.redirect('/E2E-testing/alternative-format');
  });


  // Resaves the alternative format answer for CYA
  router.post('/E2E-testing/where-we-send-your-letter', function (req, res) {
  let digitalOrLetter = req.body.digitalOrLetter

  if (!digitalOrLetter) {
    return res.redirect('/E2E-testing/check-your-answers')
  }

  if (!Array.isArray(digitalOrLetter)) {
    digitalOrLetter = [digitalOrLetter]
  }

  digitalOrLetter = digitalOrLetter.filter(item => item && item !== '_unchecked')

  req.session.data.digitalOrLetter = digitalOrLetter

  res.redirect('/E2E-testing/where-we-send-your-letter')
})


router.get('/E2E-testing/request-complete', function (req, res) {
  req.session.data.hasCompletedRequest = true
  res.render('E2E-testing/request-complete')
})

module.exports = router;