jQuery(function(a){a("#image-data-submit").click(function(){var b=a("#url").val(),c=a("#alt").val();if(b==""||b=="http://"){b=null}window.parent.WysijaPopup.getInstance().callback({url:b,alt:c});window.parent.WysijaPopup.close();return false})});