function printThis(){
  console.log('I scrolled');
}



function functionSequence(){
  CyzerParallaxInit('.parallax', ['printThis']);
}



// =========================================================
// On Load
// =========================================================
if (window.addEventListener) {
  window.addEventListener('load', function () {
    functionSequence();
  });
} else {
  window.attachEvent('onload', function () {
    functionSequence();
  });
}
