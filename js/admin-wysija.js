jQuery(function(a){a("#wysija-app .submitdelete").click(function(){return confirm(wysijatrans.suredelete)});a("#wysija-app .linkignore").click(function(){var b=this;wysijaAJAX.controller="config";wysijaAJAX.task="linkignore";wysijaAJAX.ignorewhat=a.trim(a(this).attr("class").replace(/linkignore/g,""));wysijaAJAX._wpnonce=a("#wysijax").val();jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(c){if(a(b).parents("li").siblings().size()>0){a(b).parents("li").fadeOut()}else{a(b).parents("div.updated").fadeOut()}},error:function(d,c){alert("Request error not JSON:"+d.responseText);wysijaAJAXcallback.onSuccess=""},dataType:"json"});return true});a("#wysija-app .wysija-premium").click(function(){var b=this;wysijaAJAX.controller="config";wysijaAJAX.task="validate";a("#wysija-app .wysija-premium img").show();wysijaAJAX._wpnonce=a("#wysijax").val();jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(c){a("#wysija-app .wysija-premium img").hide();if(!c.result.result){if(c.result.nocontact){location.reload(true)}else{tb_show(wysijatrans.gopremium,"http://www.wysija.com/?wysijap=checkout&wysijashop-page=1&testprod=1&controller=orders&action=checkout&popformat=1&wysijadomain="+c.result.domain_name+"&KeepThis=true&TB_iframe=true&height=550&width=850",null)}}else{window.location.reload()}},error:function(d,c){a("#wysija-app .wysija-premium img").hide();alert("Request error not JSON:"+d.responseText);wysijaAJAXcallback.onSuccess=""},dataType:"json"});return true});a(".wysija-footer pre").hide();a(".wysija-footer h2").click(function(){a(".wysija-footer pre").toggle()})});