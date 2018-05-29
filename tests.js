var Tests = {};

Tests.runAllTests = function() {
  var errors = [];
  Tests.testGenerate(errors);
  Tests.testDeal(errors);
  Tests.logErrors(errors);
};

Tests.testGenerate = function(errors) {
  if (Object.keys(Deck.generate()).length !== 53) {
    errors.push('generate: generate should return an object with 53 card keys');
  }
};

Tests.testDeal = function(errors) {
  if (Deck.deal().length !== 2) {
    errors.push('deal: deal should return a valid card key');
  }
}

Tests.logErrors = function(errors) {
  if (errors.length === 0) {
    console.log('%cAll tests passed!', 'color: #30AD35');
  } else {
    var errorMessage = 'errors found:';
    if (errors.length === 1) {
      errorMessage = 'error found:';
    }
    console.log('%c' + errors.length + ' ' + errorMessage, 'color: #BA1222');
    errors.forEach(function(error) {
      console.log('%c  ' + error, 'color: #BA1222');
    });
  }
};
