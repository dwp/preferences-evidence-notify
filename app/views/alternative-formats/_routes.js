/** 
 * Alternative formats - Version 2: Journey 1
*/

module.exports = function(router){

let altFormats;
const patternRootPath = '/alternative-formats';
const pageAfterLastQuestion = patternRootPath + '/check-answers'; // change this path to skip the pattern's check answers page and go to the next step in the journey

/**
 * Checks if a value is 'undefined' or null
 * 
 * @param {Any} value  The value to test  
 * @returns {Boolean}  True if there is a 'some' value, false if value is equal to 'undefined' string or equates to null
 */
const hasValue = (value) => {
  return typeof value === 'undefined' || value === null ? false : true
}

/**
 * Runs on all URLs that contain '/alternative-formats'
 * e.g.
 * http://localhost:3000/alternative-formats
 * http://localhost:3000/alternative-formats/
 * http://localhost:3000/alternative-formats/foo
 * http://localhost:3000/alternative-formats/foo/bar
 * http://foo/bar/alternative-formats/bam/bang
 * 
 * Saves the global session data to a variable altFormats which can be used anywhere within this routes file
 */
router.use(/\/alternative-formats/, (req, res, next) => {
  altFormats = req.session.data.altFormats;

  // Uncomment console lines to print the data to the console
  console.log('--------------------------------------------------------------------------------')
  console.log('\n' + req.method + ': ' + req.originalUrl + '\n')
  console.dir(altFormats, { depth: null }) 
  console.log('\n--------------------------------------------------------------------------------')
  
  next()
});

/**
 * checkAnswersOrDefault
 * 
 * Redirects to check answers page when changing answers
 */
const checkAnswersOrDefault = (defaultNextStep, res) => {
  if (altFormats.skipToCheckAnswers) {
    
    const _skipto = altFormats.skipToCheckAnswers
    delete altFormats.skipToCheckAnswers

    res.redirect(url);
}

/**
 * setWrittenFormat
 * 
 * Cleans the data
 * Navigate to spoken-format after written format questions or if coming from a change then go back to check-answers
 * 
 * @param {object} session request
 * @param {object} session response
 * */ 
const setWrittenFormat = (req, res) => {

  let validKeys

  switch (altFormats.written.format) {
    case 'standard-letter' :
      validKeys = []
      break;
    case 'large-print' :
      validKeys = ['largePrint']
      break;
    case 'non-standard-letter' :
      validKeys = ['nonStandardletter', 'font', 'boldText', 'paperColour', 'doubleLineSpacing', 'largePrint',]
      break;
    case 'audio' :
      validKeys = ['audioFormat', 'email']
      if (altFormats.written.options.audioFormat == 'mp3') {
        // relativePath = "../"
      }
      break;
      case 'braille' :
        validKeys = ['brailleType']
        break;
      case 'british-sign-language-video' :
        validKeys = ['britishSignLanguageVideoFormat', 'email']
        if (altFormats.written.options.britishSignLanguageVideoFormat == 'mpeg') {
          // relativePath = "../"
        }
      break;
    case 'word' :
      validKeys = ['email' ]
      // relativePath = "../"
      break;
    case 'pdf' :
      validKeys = ['email' ]
      // relativePath = "../"
      break;
    default:
      validKeys = [] // this should never happen but delete all options if it does
      break;
  }

  // go through each property and if it's not in the valid keys then remove it
  Object.keys(altFormats.written.options).forEach((key) => validKeys.includes(key) || delete altFormats.written.options[key]);
  
  // remove nonStandardletter object if the format is not been set to non-standard-letter
  if (altFormats.written.format !== 'non-standard-letter'){
    delete altFormats.written.nonStandardletter
  }

  checkAnswersOrDefault(patternRootPath + '/check-answers-written', res)
  
  
}

/**
 * setSpokenFormat
 * 
 * Cleans the data
 * Navigate to other help question after spoken format questions or if coming from a change then go back to check-answers
 * 
 * @param {object} session request
 * @param {object} session response
 * */ 
const setSpokenFormat = (req, res) => {

  let validKeys

  switch (altFormats.spoken.format) {
    case 'standard-phone-call' :
      validKeys = []
      break;
    case 'relay-uk' :
      validKeys = ['relayUkNumber']
      break;
    case 'textphone' :
      validKeys = ['textphone']
      break;
    case 'signing-lipspeaking' :
      validKeys = ['signingLipspeaking']
      break;
    default:
      validKeys = [] // this should never happen but delete all options if it does
      break;
  }

  // go through each property and if it's not in the valid keys then remove it
  Object.keys(altFormats.spoken.options).forEach((key) => validKeys.includes(key) || delete altFormats.spoken.options[key]);

  // checkAnswersOrDefault(patternRootPath + '/check-answers-spoken', res)
  checkAnswersOrDefault('../alternative-formats/check-answers-spoken', res)
}

/**
 * GET: start - redirect to written-format as start page
 */
router.get([/.*alternative-formats$/, '*/alternative-formats', '*/alternative-formats/index'], (req, res) => {
  res.redirect(patternRootPath + '/written-format')
})

/**
 * POST: written-format - redirect to set the selected format options (if applicable) or go to spoekn format question
 */
router.post(patternRootPath + '/written-format', (req, res) => {
  if (hasValue(altFormats.written.format)) {

    switch (altFormats.written.format) {
      case 'large-print' :
        res.redirect(patternRootPath + '/large-print')
        break;
      case 'non-standard-letter' :
        res.redirect(patternRootPath + '/non-standard-letter')
        break;
      case 'audio' :
        res.redirect(patternRootPath + '/audio')
        break;
      case 'braille' :
        res.redirect(patternRootPath + '/braille')
        break;
      case 'british-sign-language-video' :
        res.redirect(patternRootPath + '/british-sign-language-video')
        break;
      case 'word' :
        res.redirect(patternRootPath + '/written-format-email')
        break;
      case 'pdf' :
        res.redirect(patternRootPath + '/written-format-email')
        break;
      default: // if standard-letter or anything else end written format question, reset any options, and go to next step
        altFormats.written.options = new Object()
        setWrittenFormat(req, res) 
        break;
    }

  } else {
    console.log('do validation')
  }

});

/**
 * POST: non-standard-letter - redirect to the first selected option or spoken format if standard letter
 */
router.post(patternRootPath + '/non-standard-letter', (req, res) => {

  const nonStandardletter = altFormats.written.nonStandardletter

  if ( altFormats.written.format !== 'non-standard-letter') {
    altFormats.written.format = 'non-standard-letter'
  }

  if (nonStandardletter.includes('font')) {
    res.redirect(patternRootPath + '/font')
  } else if (nonStandardletter.includes('bold-text')){
    res.redirect(patternRootPath + '/bold-text')
  } else if (nonStandardletter.includes('coloured-paper')) {
    res.redirect(patternRootPath + '/coloured-paper')
  } else if (nonStandardletter.includes('double-line-spacing')) {
    res.redirect(patternRootPath + '/double-line-spacing')
  } else if (nonStandardletter.includes('large-print')) {
    res.redirect(patternRootPath + '/large-print')
  } else {
    delete altFormats.written.nonStandardletter
    altFormats.written = new Object( {'format': 'standard-letter' } )
    setWrittenFormat(req, res) // end written format question and go to next step
  } 

});

/**
 * POST: font - redirect to the next selected option or spoken format if no other options selected
 */
router.post(patternRootPath + '/font', (req, res) => {

  const nonStandardletter = altFormats.written.nonStandardletter

  if (nonStandardletter.includes('bold-text')){
    res.redirect(patternRootPath + '/bold-text')
  } else if (nonStandardletter.includes('coloured-paper')) {
    res.redirect(patternRootPath + '/coloured-paper')
  } else if (nonStandardletter.includes('double-line-spacing')) {
    res.redirect(patternRootPath + '/double-line-spacing')
  } else if (nonStandardletter.includes('large-print')) {
    res.redirect(patternRootPath + '/large-print')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  } 

});

/**
 * GET: bold-text - redirect to the next selected option or spoken format if no other options selected
 */
router.get(patternRootPath + '/bold-text', (req, res) => {

  const nonStandardletter = altFormats.written.nonStandardletter

  altFormats.written.options.boldText = 'bold-text'

  if (nonStandardletter.includes('coloured-paper')) {
    res.redirect(patternRootPath + '/coloured-paper')
  } else if (nonStandardletter.includes('double-line-spacing')) {
    res.redirect(patternRootPath + '/double-line-spacing')
  } else if (nonStandardletter.includes('large-print')) {
    res.redirect(patternRootPath + '/large-print')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  } 

});

/**
 * POST: coloured-paper - redirect to the next selected option or spoken format if no other options selected
 */
router.post(patternRootPath + '/coloured-paper', (req, res) => {

  const nonStandardletter = altFormats.written.nonStandardletter

  if (nonStandardletter.includes('double-line-spacing')) {
    res.redirect(patternRootPath + '/double-line-spacing')
  } else if (nonStandardletter.includes('large-print')) {
    res.redirect(patternRootPath + '/large-print')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  } 
  
});

/**
 * GET: double-line-spacing - redirect to the next selected option or spoken format if no other options selected
*/
router.get(patternRootPath + '/double-line-spacing', (req, res) => {
  
  const nonStandardletter = altFormats.written.nonStandardletter

  altFormats.written.options.doubleLineSpacing = 'double-line-spacing'
  
  if (nonStandardletter.includes('large-print')) {
    res.redirect(patternRootPath + '/large-print')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  } 

});

/**
 * POST: large-print - redirect spoken format
 */
router.post(patternRootPath + '/large-print', (req, res) => {
  setWrittenFormat(req, res) // end written format question and go to next step
});

/**
 * POST: audio - redirect email question if mp3 else redirect to spoken format
 */
router.post(patternRootPath + '/audio', (req, res, next) => { 
  
  if (altFormats.written.options['audioFormat'] == 'mp3') {
    // crude hack for keeping the email in the right order for check answers page if an email already exists
    if ( altFormats.written.options.email ){
      let _email = altFormats.written.options.email
      delete altFormats.written.options.email
      altFormats.written.options.email = _email
    }

    res.redirect(patternRootPath + '/written-format-email')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  }

})

/**
 * POST: braille - redirect spoken format
 */
router.post(patternRootPath + '/braille', (req, res) => {
  setWrittenFormat(req, res) // end written format question and go to next step
});

/**
 * POST: british-sign-language-video - redirect email question if mpeg else redirect to spoken format
 */
router.post(patternRootPath + '/british-sign-language-video', (req, res) => { 
  
  if (altFormats.written.options['britishSignLanguageVideoFormat'] == 'mpeg') {
    
    // crude hack for keeping the email in the right order for check answers page if an email already exists
    if ( altFormats.written.options.email ){
      let _email = altFormats.written.options.email
      delete altFormats.written.options.email
      altFormats.written.options.email = _email
    }

    res.redirect(patternRootPath + '/written-format-email')
  } else {
    setWrittenFormat(req, res) // end written format question and go to next step
  }

})

/**
 * POST: word - redirect email question 
 */
router.post(patternRootPath + '/word', (req, res) => { 
  res.redirect(patternRootPath + '/written-format-email')
})

/**
 * POST: pdf - redirect email question 
 */
router.post(patternRootPath + '/pdf', (req, res) => { 
  res.redirect(patternRootPath + '/written-format-email')
})

/**
 * POST: pdf - redirect email question 
 */
router.post(patternRootPath + '/written-email/:format', (req, res) => { 
  
  // After the email question if there are further questions to ask you can set the page to redirect based on the format
  // currently all default to setWrittenFormat to end the written format question and redirect to spoken-format.html
  switch (req.params.format) {
    case 'british-sign-language-video' :
      setWrittenFormat(req, res) // end written format question and go to next step
      break;
    case 'audio' :
      setWrittenFormat(req, res) // end written format question and go to next step
      break;
    case 'word' :
      setWrittenFormat(req, res) // end written format question and go to next step
      break;
    case 'pdf' :
      setWrittenFormat(req, res) // end written format question and go to next step
      break;
    default:
      setWrittenFormat(req, res) // end written format question and go to next step
      break;
  }
})

/**
 * POST: spoken-format - redirect to set the selected format options (if applicable) or go to other help question
 */
router.post(patternRootPath + '/spoken-format', (req, res) => {
  if (hasValue(altFormats.spoken.format)) {

    switch (altFormats.spoken.format) {
      case 'relay-uk' :
        res.redirect(patternRootPath + '/relay-uk')
        break;
      case 'textphone' :
        res.redirect(patternRootPath + '/textphone')
        break;
      case 'signing-lipspeaking' :
        res.redirect(patternRootPath + '/signing-lipspeaking')
        break;
      default: // if standard-phone-call or anything else end spoken format question, reset options and go to next step
        altFormats.spoken.options = new Object()
        setSpokenFormat(req, res) 
        break;
    }
    
  } else {
    console.log('do validation')
  }

});

/**
 * POST: relay-uk - redirect to other help question
 */
router.post(patternRootPath + '/relay-uk', (req, res) => { 
  setSpokenFormat(req, res) // end spoken format question and go to next step
})

/**
 * POST: textphone - redirect to other help question
 */
router.post(patternRootPath + '/textphone', (req, res) => { 
  setSpokenFormat(req, res) // end spoken format question and go to next step
})

/**
 * POST: signing-lipspeaking - redirect to other help question
 */
router.post(patternRootPath + '/signing-lipspeaking', (req, res) => { 
  setSpokenFormat(req, res) // end spoken format question and go to next step
})

/**
 * POST: other-help - redirect to other help details question if yes else goto check-answers
 */
router.post(patternRootPath + '/other-help', (req, res) => { 
  if (altFormats.otherHelp.required == 'yes') {
    res.redirect(patternRootPath + '/other-help-details')
  } else {

    checkAnswersOrDefault(pageAfterLastQuestion, res)
  }
})

/**
 * POST: other-help-details - redirect to check-answers 
 */
router.post(patternRootPath + '/other-help-details', (req, res) => { 
  checkAnswersOrDefault(pageAfterLastQuestion, res)
})

/**
 * GET: change/written-format - redirect back to written format question with skipToCheckAnswers set to true 
 */
router.get([patternRootPath + '/change/written-format', '/change/written-format'], (req, res) => { 
  
  /* Not using global variable here as this could be linked from a service's exisiting 
     check answers page which doesn't hit the route where altFormats is assigned */
  let altFormats = req.session.data.altFormats;
      
  // altFormats.skipToCheckAnswers = req.headers.referer
  res.redirect(patternRootPath + '/written-format')
})

/**
 * GET: change/spoken-format - redirect back to spoken format question with skipToCheckAnswers set to true 
 */
router.get([patternRootPath + '/change/spoken-format', '/change/spoken-format'], (req, res) => { 
  /* Not using global variable here as this could be linked from a service's exisiting 
     check answers page which doesn't hit the route where altFormats is assigned */
  let altFormats = req.session.data.altFormats;
  
  // altFormats.skipToCheckAnswers = req.headers.referer
  res.redirect(patternRootPath + '/spoken-format')
})

/**
 * GET: change/written - redirect back to other help question
 */
router.get([patternRootPath + '/change/other-help', '/change/other-help'], (req, res) => { 
  /* Not using global variable here as this could be linked from a service's exisiting 
     check answers page which doesn't hit the route where altFormats is assigned */
  let altFormats = req.session.data.altFormats;
  
  // altFormats.skipToCheckAnswers = req.headers.referer
  res.redirect(patternRootPath + '/other-help')
})

} // End module.exports