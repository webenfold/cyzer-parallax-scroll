var CyzerSP, CyzerSF = false;
var CyzerOsf, CyzerAfl, CyzerParallax, CyzerParallaxEle;

function CyzerParallax(ft = false){
  if(!CyzerSP && !ft) return null;

  var wot = $(window).scrollTop();

  $(CyzerParallaxEle).children('div').css('transform', function(){
    return 'translateY(' + (((wot - $(this).data('offset')) * ($(this).data('depth')))) + 'px)';
  });

  CyzerSP = false;
}

function CyzerOnScrollFunc(){
  if(!CyzerSF) return null;

  for(let i = 0; i < CyzerAfl.length; i++) try{ eval(CyzerAfl[i] + '()'); } catch (err) {}

  CyzerSF = false;
}

// Elements for parallax
// Additional functions to run on scroll at a delay 100ms
function CyzerParallaxInit(Elements = null, Functions = null){
  if(Elements && Elements.length){
    var pe = $(Elements);

    pe.css({
      position: 'relative',
      overflow: 'hidden'
    });

    for(let i = 0; i < pe.length; i++){
      pe.eq(i).children('div').data('offset', pe.eq(i).offset().top).css({
        position: 'absolute',
        width: '100%',
        height: function(){ return (100 + ($(this).data('depth') * 40)) + '%' },
        top: 0,
        left: 0,
        backgroundPosition: function(){ return $(this).data('position') },
        backgroundSize: function(){ return $(this).data('size') },
        backgroundRepeat: 'no-repeat',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      });
    }

    CyzerParallaxEle = Elements;

    // Render For First Time
    CyzerParallax(true);

    // 120 HZ Speed
    CyzerParallax = setInterval(CyzerParallax, 8.3);
  }

  if(Functions && Functions.length){
    CyzerAfl = Functions;
    CyzerOsf = setInterval(CyzerOnScrollFunc, 100);
  }
  

  $(window).scroll(function () {
    CyzerSP = true;
    CyzerSF = true;
  });
}
