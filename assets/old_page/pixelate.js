/*
 * pixelate hover effects
 * @use TweenLite.js
 * @use TimelineMax.js
 * @use jQuery.js
 */

var app = {};
app.pixelhover = (function() {
	function pixelate() {
  	var options = {
    	value: 0.5,
      duration: .5
    };
    var element = this,
    		elementParent = element.parentNode;
    
    var imgWidth = element.width,
    		imgHeight = element.height,
        canv = document.createElement('canvas');

    canv.width = imgWidth;
    canv.height = imgHeight;
    
    var ctx = canv.getContext('2d');
    
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    try {
    	ctx.drawImage(element, 0, 0, canv.width, canv.height);
    } catch(e) {
    	//
    }
    
    if (!$(elementParent).find('canvas').length) {
    	elementParent.insertBefore(canv, element);

      var thisBlur = { value: 1 };
      var pixelTimeline = new TimelineMax({ paused: true })
      	.to(thisBlur, options.duration, {
        	value: options.value,
          onStart: function() {
          	canv.style.display = 'block';
          },
          onUpdate: function() {
          	var blurHeight = imgHeight * thisBlur.value,
            		blurWidth = imgWidth * thisBlur.value;
            ctx.drawImage(element, 0, 0, blurWidth, blurHeight);
            ctx.drawImage(canv, 0, 0, 
            	blurWidth, blurHeight, 0, 0, 
              canv.width, canv.height
            );
          },
          onComplete: function() {},
          onReverseStart: function() {},
          onReverseComplete: function() {
          	element.style.display = 'block';
            canv.style.display = 'none';
            ctx.drawImage(element, 0, 0, imgWidth, imgHeight);
          }
        }
      );

      $(elementParent).on('mouseenter', function(e) {
				pixelTimeline.play();
      });
      
      $(elementParent).on('mouseleave', function(e) {
      	pixelTimeline.reverse();
      });
      
      $(elementParent).on('click', function(e) {
      	element.style.display = 'block';
        canv.style.display = 'none';
        ctx.drawImage(element, 0, 0, imgWidth, imgWidth);
      });   
    }
	}
  
  window.HTMLImageElement.prototype.pixelate = pixelate;
  
  if (typeof $ === 'function') {
  	$.fn.extend({
    	pixelate: function() {
      	return this.each(function() {
        	pixelate.apply(this, arguments);
        });
      }
    });
  }
  
  function _pagePixels() {
  	$('img[data-pixelate]').one('load', function() {
    	this.pixelate();
    }).each(function() {
    	if (this.complete) $(this).load();
    });
  }
  
  function _clearPixels() {
  	$(pixelTweens).each(function(e) {
			this.kill();
    });
    $('img[data-pixelate]').parent().find('canvas').remove();
    $('img[data-pixelate]').parent().off();
  }
  
  function _refreshPixels() {
  	_clearPixels();
    _pagePixels();
  }
  
  function _forcePixelize() {}
  function _forceDepixelize() {}
  
  return {
  	apply: _pagePixels,
    destroy: _clearPixels,
    refresh: _refreshPixels,
    forcePixel: _forcePixelize,
    forceDepixel: _forceDepixelize
  };
})();

$(function() {
	app.pixelhover.apply();
});
