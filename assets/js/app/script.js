
var Carousel = function( $target )
{
	this.$				    = {};
	this.$.container 	    = $target;
	this.$.next			    = this.$.container.find( '.next');
	this.$.prev			    = this.$.container.find( '.prev');
	this.$.slides_container	= this.$.container.find( '.items');
	this.$.slides	        = this.$.slides_container.find( '.item');

	this.count = this.$.slides.length;
	
	this.init_events();
};


Carousel.prototype.count = 0;
Carousel.prototype.index = 0;

Carousel.prototype.init_events = function()
{
	var that = this;

	this.$.next.on( 'click', function()
	{
		that.next();

		return false;
	} );

	this.$.prev.on( 'click', function()
	{
		that.prev();

		return false;
	});

	this.$.container.on('mouseenter', function () 
	{
		that.pause();

		return false;
	});

	this.$.container.on('mouseleave', function () 
	{
		that.play();

		return false;
	});


// KEYBOARD NAVIGATION

	$("body").on( "keydown", function(e) {
		var code = e.keyCode;
	
		if( code == 37 ) {
			that.prev();
		}
		if( code == 39 ) {
			that.next();
		}
	});

};
      

/*
*** AUTOPLAY FEATURE
*/ 

// Autoplay based on a setInterval 

Carousel.prototype.play = function ()
{
	var that = this;
	this.autoplay = setInterval(function()
	{
		that.next();
	},1000);
};

// The pause function based on the removal of the previous interval 

Carousel.prototype.pause= function ()
{
	clearInterval(this.autoplay);
}

/*
*** PREVIOUS AND NEXT  
*/

Carousel.prototype.next = function()
{
	this.go_to( this.index + 1 );
};

Carousel.prototype.prev = function()
{
	this.go_to( this.index - 1 );
};




Carousel.prototype.go_to = function( index )
{
	// In order to create the infinite slideshow the first item has to be placed as the last: 
	$('.items .item:first').before($('.items .item:last'));
	return false;
	
	if ( index < 0)
		 index = 0;
	else if( index > this.count - 1 )
		 index = 0;

	// Allowing the animation
	$('.item (' + (this.index+1) + ')' );
	
};


var $carousels = $( '.carousel'); 
$carousels.each (function()
{
	var $carousel = $ ( this ),
		carousel  = new Carousel( $carousel );
});






