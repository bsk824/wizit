var layer = {
	open : function(id) {
		var layerWrap = $('#'+id);
		layerWrap.show();
	},
	close : function(id) {
		var layerWrap = '';
		if(id) {
			layerWrap = $('#'+id);
		} else {
			var target = event.target || event.srcElement;
			var $this = $(target);
			layerWrap = $this.closest('.layerPop');
		}
		layerWrap.hide();
	}
}

var depthToggle = function() {
	var target = event.target || event.srcElement;
	var $this = $(target);
	$this.closest('li').toggleClass('open');
}