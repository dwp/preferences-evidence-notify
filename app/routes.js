//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

// PEN routes

//Message centre routes

const POB = require('./routes/POB')
router.use('/', POB)

// alt-formats routes
require("./views/alternative-formats/_routes")(router);

// router.post('/my-custom-route', (req, res) => {
//     res.redirect('./alternative-formats/written-format')
//   });

// PEN routes stop

router.post(
  "/iteration-5-1/5-1a/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5-1/5-1a/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/which-benefits-do-you-get",
  function (req, res) {
    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/ineligible");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/are-you-expecting-a-payment-in-the-next-six-working-days"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-6/check-you-can-change-bank-details/are-you-expecting-a-payment-in-the-next-six-working-days-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-payment-due"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-no-payment-due"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-unsure-payment-due"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

router.post(
  "/iteration-6/change-bank-details/benefits-you-need-to-change-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-old-account"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-new-account"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-old-account"
      );
    }
  }
);

router.post(
  "/iteration-6/change-bank-details/check-your-details-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-new-account"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

// 5-1b prototype route below

router.post(
  "/iteration-5-1/5-1b/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5-1/5-1b/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/which-benefits-do-you-get",
  function (req, res) {
    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/ineligible");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/before-you-change-account-details");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1b/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/are-you-expecting-a-payment-in-the-next-six-working-days",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("/iteration-5-1/5-1b/contact-us");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1b/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

// 5-0 prototype route below

router.post(
  "/iteration-5/5-0/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5/5-0/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5/5-0/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5/5-0/which-benefits-do-you-get", function (req, res) {
  // Make a variable and give it the value from 'which-benefits-do-you-get'
  var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

  // Check whether the variable matches a condition
  if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
    // Send user to next page
    res.redirect("/iteration-5/5-0/ineligible");
  } else {
    // Inactive
    res.redirect(
      "/iteration-5/5-0/changing-the-account-we-pay-your-money-into"
    );
  }
});

router.post(
  "/iteration-5/5-0/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-5/5-0/you-can-only-use-this-service-if-your-accounts-in-uk"
      );
    }
  }
);

router.post(
  "/iteration-5/5-0/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect("/iteration-5/5-0/before-you-change-account-details");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("/iteration-5/5-0/contact-us");
    }
  }
);

router.post(
  "/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5/5-0/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

// e1

var filenames = [];
var benefitsChosen = [];
var evidenceType = [];

router.post("/round-5/e1/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  // benefits = [];
  // req.session.data.benefits = benefits;

  res.redirect("/round-5/e1/have-you-been-contacted");
});

router.post("/round-5/e1/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e1/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e1/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e1/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e1/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e1/national-insurance-number");
  }
});

router.post("/round-5/e1/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e1/upload-summary");
});

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post("/round-5/e1/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e1/evidence-type");
});

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e1/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e1/how-to-send-evidence");
});

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.all("/round-5/e1/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e1/upload-summary");
});

// e2

router.post("/round-5/e2/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  req.session.data.benefitsArray = filenames;
  req.session.data.evidenceType = evidenceType;
  req.session.data.benefitsChosen = benefitsChosen;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  res.redirect("/round-5/e2/have-you-been-contacted");
});

router.post("/round-5/e2/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e2/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e2/declaration");
  }
});

router.post("/round-5/e2/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e2/upload-summary");
});

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post("/round-5/e2/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e2/evidence-type");
});

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e2/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e2/benefits");
});

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.all("/round-5/e2/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e2/upload-summary");
});

// e3

router.post("/round-5/e3/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  res.redirect("/round-5/e3/have-you-been-contacted");
});

router.post("/round-5/e3/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e3/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e3/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e3/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e3/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e3/national-insurance-number");
  }
});

router.post("/round-5/e3/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e3/upload-summary");
});

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post("/round-5/e3/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e3/evidence-type");
});

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e3/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e3/how-to-send-evidence");
});

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.all("/round-5/e3/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e3/upload-summary");
});

// e4

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-5/e4/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["yourEvidence"];
  delete req.session.data["file-upload"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  res.redirect("/round-5/e4/have-you-been-contacted");
});

// router.get("/round-5/e4/benefits", function (req, res) {
//   console.log("fdfdf");
//   if (req.session.data.currentFiles.length > 0) {
//     currentFiles = [];
//     req.session.data.currentFiles = currentFiles;

//     benefits = [];
//     req.session.data.benefits = benefits;
//   }
// });

router.post("/round-5/e4/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  benefits.push(obj);

  console.log({ benefits });

  res.redirect("/round-5/e4/evidence-type");
});

router.post("/round-5/e4/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType: form,
  };

  console.log({ benefits });

  res.redirect("/round-5/e4/how-to-send-evidence");
});

router.post("/round-5/e4/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );
  benefits[index].files.push(fileName);

  currentFiles.push(fileName);
  req.session.data.currentFiles = currentFiles;

  console.log(benefits);

  req.session.data.benefits = benefits;

  console.log(JSON.stringify(req.session.data.benefits));

  res.redirect("/round-5/e4/upload-table");
});

router.post("/round-5/e4/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e4/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e4/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e4/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e4/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e4/national-insurance-number");
  }
});

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post("/round-5/e4/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/round-5/e4/how-to-send-evidence");
});

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.all("/round-5/e4/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e4/upload-summary");
});

// Preferences - customer view

router.post(
  "/preferences/customer-view/language/language-selection",
  function (req, res) {
    res.redirect("/preferences/customer-view/language/confirm-your-changes");
  }
);

router.post(
  "/preferences/customer-view/language/confirm-your-changes",
  function (req, res) {
    req.session.data.SelectLanguageSET = req.session.data.SelectLanguage;
    res.redirect("/preferences/customer-view/language/updated-language");
  }
);

router.get(
  "/preferences/customer-view/how-we-contact-you",
  function (req, res) {
    if (
      req.session.data.HowWeSpeakToYouConfirmed !==
      "Textphone for the deaf and hard of hearing"
    ) {
      delete req.session.data.UnconfirmedTextphoneNumber;
      delete req.session.data.ConfirmedTextphoneNumber;
      delete req.session.data.textphoneNumber;
    }
    

    req.session.data.AlternativeFormatsSubOptions = [];
    req.session.data.AlternativeFormatsBulletPoints = {};

    res.render(
      "/preferences/customer-view/how-we-contact-you.njk"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/confirm-your-changes-textphone",
  function (req, res) {
    req.session.data.ConfirmedTextphoneNumber = req.session.data.TextphoneNumber;
    delete req.session.data.TextphoneNumber;

    console.log(req.session.data);

    res.redirect(
      "updated-speaking-method-textphone"
    );
  }
);

router.get(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/updated-speaking-method-textphone",
  function (req, res) {
    res.render(
      "/preferences/customer-view/contact-preferences/how-we-speak-to-you/updated-speaking-method-textphone.njk"
    );
  }
);

router.get(
  "preferences/customer-view/alternative-formats/when-we-write-to-you/updated-written",
  function (req, res) {
    req.session.data["ConfirmedAlternativeFormats"] = sessionStorage.getItem("UnconfirmedAlternativeFormats");

    res.render(
      "/preferences/customer-view/alternative-formats/when-we-write-to-you/updated-written.njk"
    );
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/options",
  function (req, res) {
    console.log(req.session.data)
    const textPhone = req.session.data.AlternativeFormats.includes(
      "Textphone for the deaf and hard of hearing"
    );

    const writtenAltFormat = req.session.data.AlternativeFormats.includes(
      "I need a written alternative format"
    );

    if (textPhone && writtenAltFormat) {
      req.session.data.TextPhone = true;
      res.redirect("how-should-we-write-to-you");
    } else if (writtenAltFormat) {
      res.redirect("how-should-we-write-to-you");
    } else {
      res.redirect("confirm-your-changes");
    }
  }
);

router.get(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/how-should-we-write-to-you",
  function (req, res) {
    console.log(req.session.data);

    req.session.data.AlternativeFormatsOption = '';
    req.session.data.AlternativeFormatsBulletPoints = {};

    res.render(
      "/preferences/customer-view/alternative-formats/when-we-write-to-you/how-should-we-write-to-you.njk"
    );
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/how-should-we-write-to-you",
  function (req, res) {
    console.log(req.session.data);

    const inputValue = req.session.data.AlternativeFormatsOption;

    if (inputValue === "I do not need an alternative format") {
      res.redirect("confirm-your-changes");
    } else if (inputValue === "Letter with changes to paper colour or print size") {
      res.redirect("font-colour-spacing-size");
    } else if (inputValue === "Audio") {
      res.redirect("audio");
    } else if (inputValue === "Braille") {
      res.redirect("braille");
    } else if (inputValue === "British Sign Language video") {
      res.redirect("british-sign-language");
    } else if (inputValue === "Microsoft Word document with accessible text") {
      res.redirect("confirm-your-changes");
    } else if (inputValue === "PDF with accessible text") {
      res.redirect("confirm-your-changes");
    } else {
      res.redirect("confirm-your-changes");
    }
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/font-colour-spacing-size",
  function (req, res) {
    console.log(req.session.data);
    if (req.session.data.AlternativeFormatsSubOptions.length === 2) {
      res.redirect('colour-paper')
    } else {
      selectedOption = req.session.data.AlternativeFormatsSubOptions[0]
      if (selectedOption === "Coloured paper") {
        res.redirect("colour-paper");
      } else if (selectedOption === "Large print") {
        res.redirect("large-print-1");
      } else {
        return;
      }
    }
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/colour-paper",
  function (req, res) {
    req.session.data.AlternativeFormatsBulletPoints = {
      ...req.session.data.AlternativeFormatsBulletPoints,
      ColourPaper: req.session.data.ColourPaper
    }

    if (req.session.data.AlternativeFormatsSubOptions.length === 2) {
      res.redirect("large-print-1");
    } else {
      res.redirect("confirm-your-changes");
    }
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/large-print-1",
  function (req, res) {
    req.session.data.AlternativeFormatsBulletPoints = {
      ...req.session.data.AlternativeFormatsBulletPoints,
      LargePrint: req.session.data.LargePrint,
    };

    console.log(req.session.data);

    res.redirect("confirm-your-changes")
  }
);

router.get(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/changes-confirmed",
  function (req, res) {

    req.session.data.AlternativeFormatSET = true;

    if (req.session.data.AlternativeFormats[0] === "I do not need an alternative format") {
      req.session.data.ConfirmedAlternativeFormatsOption = "I do not need an alternative format";
    } else {
      req.session.data.ConfirmedAlternativeFormatsOption = req.session.data.AlternativeFormatsOption;
    }

    req.session.data.ConfirmedAlternativeFormats = req.session.data.AlternativeFormats;
    req.session.data.ConfirmedAlternativeFormatsBulletPoints =
      req.session.data.AlternativeFormatsBulletPoints;

    console.log(req.session.data);

    res.redirect('updated-written')
  }
);

router.get(
  "/preferences/customer-view/how-we-contact-you-reset",
  function (req, res) {
    delete req.session.data.Audio;
    delete req.session.data.Braille;
    delete req.session.data.BritishSignLanguage;
    delete req.session.data.ColourPaper;
    delete req.session.data.LargePrint;
    delete req.session.data.AlternativeFormats;
    delete req.session.data.AlternativeFormatsSubOptions;
    delete req.session.data.AlternativeFormatsOption;
    delete req.session.data.AlternativeFormatsBulletPoints;
    delete req.session.data.TextphoneNumber;

    console.log(req.session.data);

    res.redirect("how-we-contact-you");
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/speaking-selection",
  function (req, res) {
    res.redirect("confirm-your-changes");
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/confirm-your-changes",
  function (req, res) {
    
    req.session.data.HowWeSpeakToYouConfirmed =
    req.session.data.HowWeSpeakToYou;
  
    delete req.session.data.HowWeSpeakToYou;

    console.log(req.session.data);

    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-speak-to-you/updated-speaking-method"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/textphone",
  function (req, res) {
    req.session.data.TextphoneNumber = req.session.data.TextphoneNumber;
    console.log(req.session.data);
    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-speak-to-you/confirm-your-changes-textphone"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-write-to-you/writing-selection",
  function (req, res) {
    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-write-to-you/confirm-your-changes"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-write-to-you/confirm-your-changes",
  function (req, res) {
    req.session.data.HowWeWriteToYouSET = req.session.data.HowWeWriteToYou;

    console.log(req.session.data);

    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-write-to-you/updated-writing-method"
    );
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/audio",
  function (req, res) {
    req.session.data.AlternativeFormatsBulletPoints = {
      ...req.session.data.AlternativeFormatsBulletPoints,
      Audio: req.session.data.Audio,
    };

    console.log(req.session.data.AlternativeFormatsBulletPoints)

    res.redirect('confirm-your-changes')
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/braille",
  function (req, res) {
    req.session.data.AlternativeFormatsBulletPoints = {
      ...req.session.data.AlternativeFormatsBulletPoints,
      Braille: req.session.data.Braille,
    };

    console.log(req.session.data.AlternativeFormatsBulletPoints);

    res.redirect("confirm-your-changes");
  }
);

router.post(
  "/preferences/customer-view/alternative-formats/when-we-write-to-you/britishsignlanguage",
  function (req, res) {
    req.session.data.AlternativeFormatsBulletPoints = {
      ...req.session.data.AlternativeFormatsBulletPoints,
      BritishSignLanguage: req.session.data.BritishSignLanguage,
    };

    console.log(req.session.data.AlternativeFormatsBulletPoints);

    res.redirect("confirm-your-changes");
  }
);

// Preferences - agent view

router.post(
  "/preferences-agent/agent-view/language/language-selection",
  function (req, res) {
    res.redirect("/preferences-agent/agent-view/language/confirm-your-changes");
  }
);

router.post(
  "/preferences-agent/agent-view/language/confirm-your-changes",
  function (req, res) {
    req.session.data.SelectLanguageSET = req.session.data.SelectLanguage;
    res.redirect("/preferences-agent/agent-view/language/updated-language");
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/speaking-selection",
  function (req, res) {
    res.redirect("confirm-your-changes");
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/confirm-your-changes-answer",
  function (req, res) {

    if (req.session.data.HowWeSpeakToYou !== 'Textphone for the deaf and hard of hearing') {
      req.session.data.ConfirmedAlternativeFormats.pop();
    }

    req.session.data.HowWeSpeakToYouConfirmed =
      req.session.data.HowWeSpeakToYou;
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/updated-speaking-method"
    );
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/writing-selection",
  function (req, res) {
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/confirm-your-changes"
    );
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/confirm-your-changes",
  function (req, res) {
    req.session.data.HowWeWriteToYouSET = req.session.data.HowWeWriteToYou;
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/updated-writing-method"
    );
  }
);

// e5

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-8/e5/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  res.redirect("/round-8/e5/have-you-been-contacted");
});

router.get("/round-8/e5/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.render("/round-8/e5/evidence-type.njk");
});

router.post("/round-8/e5/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.redirect("/round-8/e5/evidence-type");
});

router.post("/round-8/e5/upload-evidence-type", function (req, res) {
  const evidenceType = req.session.data["evidenceType"];

  if (evidenceType === "na") {
    res.redirect("/round-8/e5/you-cannot-upload-other-types-of-evidence");
    return;
  }

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType,
  };

  console.log({ benefits });

  res.redirect("/round-8/e5/how-to-send-evidence");
});

router.post("/round-8/e5/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  // filenames.push(fileName);
  // req.session.data.benefitsArray = filenames;

  // const index = benefits.findIndex(
  //   (benefit) => benefit.name === req.session.data["yourBenefits"]
  // );
  // benefits[index].files.push(fileName);

  // currentFiles.push(fileName);
  // req.session.data.currentFiles = currentFiles;

  // console.log(benefits);

  // req.session.data.benefits = benefits;

  // console.log(JSON.stringify(req.session.data.benefits));

  console.log("hello + " + JSON.stringify(req.session.data));

  req.session.data.benefits[0].files.push(fileName);

  res.redirect("/round-8/e5/file-check");
});

router.get("/round-8/e5/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./round-8/e5/are-you-sure.njk", { fileToDelete });
});

router.get("/round-8/e5/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./round-8/e5/upload-table.njk");
});

router.post("/round-8/e5/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-8/e5/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-8/e5/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-8/e5/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-8/e5/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-8/e5/national-insurance-number");
  }
});

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post("/round-8/e5/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/round-8/e5/how-to-send-evidence");
});

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.get("/round-8/e5/sending-data", function (req, res) {
  res.render("/round-8/e5/sending-data.njk");
});

router.all("/round-5/e5/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e5/upload-summary");
});

// e5-file-too-big

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-8/e5-file-too-big/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];
  delete req.session.data["hasSeenFileTooBigError"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  // Currently not making use of this, might implement in future
  req.session.data.hasSeenFileTooBigError = false;

  res.redirect("/round-8/e5-file-too-big/have-you-been-contacted");
});

// router.get("/round-8/e5-file-too-big/benefits", function (req, res) {
//   console.log("fdfdf");
//   if (req.session.data.currentFiles.length > 0) {
//     currentFiles = [];
//     req.session.data.currentFiles = currentFiles;

//     benefits = [];
//     req.session.data.benefits = benefits;
//   }
// });

router.get("/round-8/e5-file-too-big/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.render("/round-8/e5-file-too-big/evidence-type.njk");
});

router.post("/round-8/e5-file-too-big/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.redirect("/round-8/e5-file-too-big/evidence-type");
});

router.post(
  "/round-8/e5-file-too-big/upload-evidence-type",
  function (req, res) {
    const evidenceType = req.session.data["evidenceType"];

    if (evidenceType === "na") {
      res.redirect("/round-8/e5/you-cannot-upload-other-types-of-evidence");
      return;
    }

    const index = benefits.findIndex(
      (benefit) => benefit.name === req.session.data["yourBenefits"]
    );

    benefits[index] = {
      ...benefits[index],
      evidenceType,
    };

    console.log({ benefits });

    res.redirect("/round-8/e5-file-too-big/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-evidence-form",
  function (req, res) {
    var fileName = req.session.data["file-upload"].replaceAll(" ", "");
    // filenames.push(fileName);
    // req.session.data.benefitsArray = filenames;

    // const index = benefits.findIndex(
    //   (benefit) => benefit.name === req.session.data["yourBenefits"]
    // );
    // benefits[index].files.push(fileName);

    // currentFiles.push(fileName);
    // req.session.data.currentFiles = currentFiles;

    // console.log(benefits);

    // req.session.data.benefits = benefits;

    // console.log(JSON.stringify(req.session.data.benefits));

    console.log("hello + " + JSON.stringify(req.session.data));

    // req.session.data.benefits[0].files.push(fileName);

    res.redirect("/round-8/e5-file-too-big/error/upload-evidence");
  }
);

router.post(
  "/round-8/e5-file-too-big/error/upload-evidence-form",
  function (req, res) {
    var fileName = req.session.data["file-upload"].replaceAll(" ", "");
    // filenames.push(fileName);
    // req.session.data.benefitsArray = filenames;

    // const index = benefits.findIndex(
    //   (benefit) => benefit.name === req.session.data["yourBenefits"]
    // );
    // benefits[index].files.push(fileName);

    // currentFiles.push(fileName);
    // req.session.data.currentFiles = currentFiles;

    // console.log(benefits);

    // req.session.data.benefits = benefits;

    // console.log(JSON.stringify(req.session.data.benefits));

    console.log("hello + " + JSON.stringify(req.session.data));

    req.session.data.benefits[0].files.push(fileName);

    res.redirect("/round-8/e5-file-too-big/file-check");
  }
);

router.get("/round-8/e5-file-too-big/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./round-8/e5-file-too-big/are-you-sure.njk", { fileToDelete });
});

router.get("/round-8/e5-file-too-big/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./round-8/e5-file-too-big/upload-table.njk");
});

router.post(
  "/round-8/e5-file-too-big/evidence-summary-answer",
  function (req, res) {
    var addAnotherEvidence = req.session.data["add-another-evidence"];
    req.session.data.benefitsArray = filenames;

    if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 1
    ) {
      // Send user to next page
      res.redirect("/round-8/e5-file-too-big/upload-more-evidence/benefits-2");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 2
    ) {
      res.redirect("/round-8/e5-file-too-big/upload-more-evidence/benefits-3");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 3
    ) {
      res.redirect("/round-8/e5-file-too-big/upload-more-evidence/benefits-4");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 4
    ) {
      res.redirect("/round-8/e5-file-too-big/no-more-uploads");
    } else {
      // Inactive
      res.redirect("/round-8/e5-file-too-big/national-insurance-number");
    }
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-file-too-big/upload-table");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-file-too-big/upload-table");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-file-too-big/upload-table");
  }
);

router.post(
  "/round-8/e5-file-too-big/how-to-send-evidence",
  function (req, res) {
    console.log("session data: " + JSON.stringify(req.session.data));

    res.redirect("/round-8/e5-file-too-big/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-2"
    );
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-3"
    );
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-file-too-big/upload-more-evidence/evidence-type-4"
    );
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-file-too-big/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-file-too-big/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-file-too-big/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-file-too-big/how-to-send-evidence");
  }
);

router.all(
  "/round-5/e5-file-too-big/remove-evidence-answer",
  function (req, res) {
    const index = filenames.indexOf(req.query.query);
    filenames.splice(index, 1);
    benefitsChosen.splice(index, 1);
    evidenceType.splice(index, 1);

    req.session.data.benefitsArray = filenames;
    req.session.data.benefitsChosen = benefitsChosen;
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e5-file-too-big/upload-summary");
  }
);

// e5-upload-error

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-8/e5-upload-error/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  res.redirect("/round-8/e5-upload-error/have-you-been-contacted");
});

// router.get("/round-8/e5-upload-error/benefits", function (req, res) {
//   console.log("fdfdf");
//   if (req.session.data.currentFiles.length > 0) {
//     currentFiles = [];
//     req.session.data.currentFiles = currentFiles;

//     benefits = [];
//     req.session.data.benefits = benefits;
//   }
// });

router.get("/round-8/e5-upload-error/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.render("/round-8/e5-upload-error/evidence-type.njk");
});

router.post("/round-8/e5-upload-error/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.redirect("/round-8/e5-upload-error/evidence-type");
});

router.post(
  "/round-8/e5-upload-error/upload-evidence-type",
  function (req, res) {
    const evidenceType = req.session.data["evidenceType"];

    if (evidenceType === "na") {
      res.redirect("/round-8/e5/you-cannot-upload-other-types-of-evidence");
      return;
    }

    const index = benefits.findIndex(
      (benefit) => benefit.name === req.session.data["yourBenefits"]
    );

    benefits[index] = {
      ...benefits[index],
      evidenceType,
    };

    console.log({ benefits });

    res.redirect("/round-8/e5-upload-error/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-evidence-form",
  function (req, res) {
    var fileName = req.session.data["file-upload"].replaceAll(" ", "");
    // filenames.push(fileName);
    // req.session.data.benefitsArray = filenames;

    // const index = benefits.findIndex(
    //   (benefit) => benefit.name === req.session.data["yourBenefits"]
    // );
    // benefits[index].files.push(fileName);

    // currentFiles.push(fileName);
    // req.session.data.currentFiles = currentFiles;

    // console.log(benefits);

    // req.session.data.benefits = benefits;

    // console.log(JSON.stringify(req.session.data.benefits));

    console.log("hello + " + JSON.stringify(req.session.data));

    // req.session.data.benefits[0].files.push(fileName);

    res.redirect("/round-8/e5-upload-error/file-check");
  }
);

router.post(
  "/round-8/e5-upload-error/error/upload-evidence-form-retry",
  function (req, res) {
    var fileName = req.session.data["file-upload"].replaceAll(" ", "");

    console.log("hello + " + JSON.stringify(req.session.data));

    req.session.data.benefits[0].files.push(fileName);

    res.redirect("/round-8/e5-upload-error/file-check-retry");
  }
);

router.get("/round-8/e5-upload-error/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./round-8/e5-upload-error/are-you-sure.njk", { fileToDelete });
});

router.get("/round-8/e5-upload-error/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./round-8/e5-upload-error/upload-table.njk");
});

router.post(
  "/round-8/e5-upload-error/evidence-summary-answer",
  function (req, res) {
    var addAnotherEvidence = req.session.data["add-another-evidence"];
    req.session.data.benefitsArray = filenames;

    if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 1
    ) {
      // Send user to next page
      res.redirect("/round-8/e5-upload-error/upload-more-evidence/benefits-2");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 2
    ) {
      res.redirect("/round-8/e5-upload-error/upload-more-evidence/benefits-3");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 3
    ) {
      res.redirect("/round-8/e5-upload-error/upload-more-evidence/benefits-4");
    } else if (
      addAnotherEvidence == "yes" &&
      req.session.data.benefitsArray.length === 4
    ) {
      res.redirect("/round-8/e5-upload-error/no-more-uploads");
    } else {
      // Inactive
      res.redirect("/round-8/e5-upload-error/national-insurance-number");
    }
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-upload-error/upload-table");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-upload-error/upload-table");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5-upload-error/upload-table");
  }
);

router.post(
  "/round-8/e5-upload-error/how-to-send-evidence",
  function (req, res) {
    console.log("session data: " + JSON.stringify(req.session.data));

    res.redirect("/round-8/e5-upload-error/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-upload-error/upload-more-evidence/evidence-type-2"
    );
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-upload-error/upload-more-evidence/evidence-type-3"
    );
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect(
      "/round-8/e5-upload-error/upload-more-evidence/evidence-type-4"
    );
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-upload-error/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-upload-error/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5-upload-error/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5-upload-error/how-to-send-evidence");
  }
);

router.all(
  "/round-5/e5-upload-error/remove-evidence-answer",
  function (req, res) {
    const index = filenames.indexOf(req.query.query);
    filenames.splice(index, 1);
    benefitsChosen.splice(index, 1);
    evidenceType.splice(index, 1);

    req.session.data.benefitsArray = filenames;
    req.session.data.benefitsChosen = benefitsChosen;
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e5-upload-error/upload-summary");
  }
);

// e6

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-9/e6/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  res.redirect("/round-9/e6/have-you-been-contacted");
});

router.get("/round-9/e6/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.render("/round-9/e6/evidence-type.njk");
});

router.post("/round-9/e6/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.redirect("/round-9/e6/evidence-type");
});

router.post("/round-9/e6/upload-evidence-type", function (req, res) {
  const evidenceType = req.session.data["evidenceType"];

  if (evidenceType === "na") {
    res.redirect("/round-9/e6/you-cannot-upload-other-types-of-evidence");
    return;
  }

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType,
  };

  console.log({ benefits });

  res.redirect("/round-9/e6/how-to-send-evidence");
});

router.post("/round-9/e6/upload-evidence-form", function (req, res) {
  console.log("hello + " + JSON.stringify(req.session.data));

  if (Array.isArray(req.session.data["file-upload"])) {
    req.session.data["file-upload"].forEach((file) => {
      req.session.data.benefits[0].files.push(file);
    });
  } else {
    req.session.data.benefits[0].files.push(req.session.data["file-upload"]);
  }

  res.redirect("/round-9/e6/file-check");
});

router.get("/round-9/e6/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./round-9/e6/are-you-sure.njk", { fileToDelete });
});

router.get("/round-9/e6/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./round-9/e6/upload-table.njk");
});

router.post("/round-9/e6/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-9/e6/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-9/e6/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-9/e6/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-9/e6/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-9/e6/national-insurance-number");
  }
});

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-9/e6/upload-table");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-9/e6/upload-table");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-9/e6/upload-table");
  }
);

router.post("/round-9/e6/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/round-9/e6/how-to-send-evidence");
});

router.post(
  "/round-9/e6/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-9/e6/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-9/e6/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-9/e6/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-9/e6/how-to-send-evidence");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-9/e6/how-to-send-evidence");
  }
);

router.post(
  "/round-9/e6/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-9/e6/how-to-send-evidence");
  }
);

router.get("/round-9/e6/sending-data", function (req, res) {
  res.render("/round-9/e6/sending-data.njk");
});

router.all("/round-9/e6/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-9/e6/upload-summary");
});



// evidence baseline

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/evidence/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  res.redirect("/evidence/have-you-been-contacted");
});

router.get("/evidence/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.render("/evidence/evidence-type.njk");
});

router.post("/evidence/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits = [obj];

  console.log({ benefits });

  res.redirect("/evidence/evidence-type");
});

router.post("/evidence/upload-evidence-type", function (req, res) {
  const evidenceType = req.session.data["evidenceType"];

  if (evidenceType === "na") {
    res.redirect("/evidence/you-cannot-upload-other-types-of-evidence");
    return;
  }

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType,
  };

  console.log({ benefits });

  res.redirect("/evidence/how-to-send-evidence");
});

router.post("/evidence/upload-evidence-form", function (req, res) {
  console.log("hello + " + JSON.stringify(req.session.data));

  if (Array.isArray(req.session.data["file-upload"])) {
    req.session.data["file-upload"].forEach((file) => {
      req.session.data.benefits[0].files.push(file);
    });
  } else {
    req.session.data.benefits[0].files.push(req.session.data["file-upload"]);
  }

  res.redirect("/evidence/file-check");
});

router.get("/evidence/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./evidence/are-you-sure.njk", { fileToDelete });
});

router.get("/evidence/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./evidence/upload-table.njk");
});

router.post("/evidence/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/evidence/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/evidence/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/evidence/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/evidence/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/evidence/national-insurance-number");
  }
});

router.post(
  "/evidence/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/evidence/upload-table");
  }
);

router.post(
  "/evidence/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/evidence/upload-table");
  }
);

router.post(
  "/evidence/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/evidence/upload-table");
  }
);

router.post("/evidence/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/evidence/how-to-send-evidence");
});

router.post(
  "/evidence/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/evidence/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/evidence/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/evidence/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/evidence/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/evidence/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/evidence/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/evidence/how-to-send-evidence");
  }
);

router.post(
  "/evidence/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/evidence/how-to-send-evidence");
  }
);

router.post(
  "/evidence/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/evidence/how-to-send-evidence");
  }
);

router.get("/evidence/sending-data", function (req, res) {
  res.render("/evidence/sending-data.njk");
});

router.all("/evidence/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/evidence/upload-summary");
});



// CuV Prototype 14 //

const express = require('express')
// const router = express.Router()

// * Release - 2 - England and Scotland

var inScope = [];  
var uCBenefit = false;
var oOScope = [];

router.all('/notifications-drafts/ideas/14/research-set-up/PoB-clear-data', function (req, res) {
  
  req.session.data = {}
  inScope = [];
  oOScope = [];
  uCBenefit = false
  req.session.data.inScope = inScope;
  req.session.data.oOScope = oOScope;
  // delete req.session.data['which-benefits-need-proof'];
  delete inScope;
  delete oOScope;

  console.log(inScope);
  console.log(oOScope);
  
  res.redirect("benefits");
  
  })

  router.post('/notifications-drafts/ideas/14/research-set-up/benefits-answer', function (req, res) {

    var researchSetUpBenefits = req.session.data['researchSetUpBenefits']
  
    inScope = [];
    oOScope = [];
    uCBenefit = false
    delete inScope;
    delete oOScope;
    delete uCBenefit
  
    for (var i=0; i < researchSetUpBenefits.length; i++) {
  
      if (researchSetUpBenefits[i] === 'Bereavement Benefit' ||
            researchSetUpBenefits[i] === 'Bereavement Support Payment' ||
            researchSetUpBenefits[i] === 'Carer’s Allowance' ||
            researchSetUpBenefits[i] === 'Incapacity Benefit' ||
            researchSetUpBenefits[i] === 'Industrial Injuries Disablement Benefit (IIDB)' ||
            researchSetUpBenefits[i] === 'Maternity Allowance' ||
            researchSetUpBenefits[i] === 'Severe Disablement Allowance' ||
            researchSetUpBenefits[i] === 'Widow’s Benefit'
          ) {
            oOScope.push(researchSetUpBenefits[i])
          } 
      
      else if (researchSetUpBenefits[i] === 'Universal Credit') {
              uCBenefit = true;
      }
      
      else {
        inScope.push(researchSetUpBenefits[i])
      }
    }
  
    req.session.data.inScope = inScope;
    req.session.data.oOScope = oOScope;
    req.session.data.uCBenefit = uCBenefit;
  
  
    console.log(inScope)
    console.log(oOScope)
    console.log(uCBenefit)
  
  res.redirect('/notifications-drafts/ideas/14/research-set-up/address');
  
   })

  

// Drop user if they were not invited to use the service
router.post('/notifications-drafts/ideas/14/how-did-you-find-out-about-this-service-answer', function (req, res) {

  var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']


  if (howDidYouFindOutAboutThisService === "heard-about-on-phone" || howDidYouFindOutAboutThisService === "job-centre")  {
    res.redirect('/notifications-drafts/ideas/14/go-to-identity-check');

  } else {
    res.redirect('/notifications-drafts/ideas/14/cannot-get-a-proof-of-benefit-letter');
  }
})

// Select which benefit selection page to show based on number of benefits available for user.
router.all('/notifications-drafts/ideas/14/list-benefits-answer', function (req, res) {

  var researchSetUpBenefits = req.session.data['researchSetUpBenefits']

  if (researchSetUpBenefits == [] || researchSetUpBenefits == undefined)  {
    res.redirect('/notifications-drafts/ideas/14/you-cannot-use-this-service-no-benefits');
    return

  } else if ((researchSetUpBenefits.length > 0) && (inScope.length > 0 ))   {
      res.redirect('/notifications-drafts/ideas/14/select-benefits-you-need-proof-of');

  } else if (inScope.length === 0 )  {
    res.redirect('/notifications-drafts/ideas/14/you-cannot-get-proof-of-benefit-letter');

  } 
  
})

router.post('/notifications-drafts/ideas/14/select-benefits-answer', function (req, res) {

  var doYouWantLetterFor = req.session.data['doYouWantLetterFor']

    if (doYouWantLetterFor === 'no') {
      res.redirect('/notifications-drafts/ideas/14/contact-us-for-different-benefit-letter');
    } 

    else {
      res.redirect('/notifications-drafts/ideas/14/where-we-send-your-letter');
    }

})


// Drop user if they state their address is incorrect
router.post('/notifications-drafts/ideas/14/send-letter-to-address-answer', function (req, res) {

  var confirmLetterSend = req.session.data['confirmLetterSend']


  // Check if user selected no on single address page
  if (confirmLetterSend == "no")  {
    // Send user to contact us page
    res.redirect('/notifications-drafts/ideas/14/you-cannot-use-this-service-incorrect-address');
  }

  else {
    // Send user to check answers
    res.redirect('/notifications-drafts/ideas/14/check-your-answers');
  }

})

module.exports = router;

// Drop user if they state their address is incorrect
router.post('/notifications-drafts/ideas/14/send-letter-to-address-answer', function (req, res) {

  var confirmLetterSend = req.session.data['confirmLetterSend']


  // Check if user selected no on single address page
  if (confirmLetterSend == "no")  {
    // Send user to contact us page
    res.redirect('/notifications-drafts/ideas/14/you-cannot-use-this-service-incorrect-address');
  }

  else {
    // Send user to check answers
    res.redirect('/notifications-drafts/ideas/14/check-your-answers');
  }

})