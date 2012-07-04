$.fn.enableClickableTilesWithRecordOnSubmit = function(submitButton, recordField) {
  var tiles = $(this);

  submitButton.click(function() {
        var dataToStore = '';
        tiles.each(function(index) { 
          var opacity = $(this).css('opacity');
          if (opacity != '0') {
            dataToStore += index + '_' + opacity + "|";
          }
        });
        recordField.val(dataToStore);
        return true;
      });

  tiles.css('opacity', '0');
  return tiles.click(function() {
        var oldOpacity = $(this).css('opacity');
        var newOpacity = 0;
        if (oldOpacity == '0') {
          newOpacity = '0.5';
        }
        else if (oldOpacity == '0.5') {
          newOpacity = 1;
        }
        $(this).css('opacity', newOpacity);
     });
};

$.fn.reloadTileOpacity = function(opacityDataString) {
  var tiles = $(this);
  tiles.css('opacity', '0');
  var opacities = $(opacityDataString.split('|'));
  opacities.each(function() { 
      var pieces = this.split('_');
      if (pieces != "") {
        var index = pieces[0];
        var opacity = pieces[1];
        $(tiles[index]).css('opacity', opacity);
      }
  });
  
};
