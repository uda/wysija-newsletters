var allthemes={};displaychange=0;jQuery(function(d){d(".wysija-theme-click").live("click",function(){var i=d(this).attr("id").replace("theme-cell-","");var h=false;if(d(this).hasClass("installed")){h=true}c(i,h);return true});d(".install-theme").live("click",function(){var i=d(this).attr("id").replace("select-nl-","");var h=false;if(d(this).hasClass("installed")){h=true}c(i,h);return false});function c(j,h){wysijaAJAX.task="install_theme";var i=allthemes[j];wysijaAJAX.theme_id=i.id;wysijaAJAX.theme_key=i.key;wysijaAJAX.premium=i.is_premium;wysijaAJAX.theme_name=i.name;if(h&&!confirm(wysijatrans.reinstallwarning.replace("%1$s",i.key))){return false}wysijaAJAX._wpnonce=d("#wysijax").val();jQuery("#overlay").show();jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(k){if(k.result["result"]){var l="#theme-cell-"+j;if(d(l).hasClass("selected")){d(l).removeClass("selected")}else{d(l).addClass("selected")}}a("searchview");jQuery("#overlay").hide();jQuery.WYSIJA_HANDLE_RESPONSE(k);window.parent.jQuery("#wj_themes_list").html(k.result.themes);window.parent.handleSwitchTheme();window.parent.handleRemoveTheme()},error:function(k){jQuery.WYSIJA_HANDLE_RESPONSE(k);jQuery("#overlay").hide();a("searchview")},dataType:"json"})}function a(h){d(".ml-submit").hide();d("#"+h).show()}d(".view-theme").live("click",function(){var h=allthemes[d(this).attr("alt")];var m="";var p=wysijatrans.install;if(jQuery.inArray(h.key,wysijatrans.installedthemes)!="-1"){m=" installed";p=wysijatrans.reinstall}if(h.is_premium==1){m+=" premium";p=wysijatrans.premiumonly}var j='<img width="320px" src="'+h.screenshot+'" />';var n='<img src="'+e(h.author_email,80)+'" class="avatar" width="80px"/>';var i=n+"<h1>"+h.name+'</h1><p><input type="button" value="'+p+'" id="select-nl-'+h.id+'" class="button-primary install-theme'+m+'" /></p>';var k=wysijaAJAX.adminurl.replace("/wp-admin/admin.php","/wp-content/plugins/wysija-newsletters/img/star.gif");var o='<div id="average-vote" class="star-holder">';o+='<div style="width: '+h.rating*20+'px" class="star star-rating"></div>';o+='<div class="star star5"><img alt="5 stars" src="'+k+'"></div>';o+='<div class="star star4"><img alt="4 stars" src="'+k+'"></div>';o+='<div class="star star3"><img alt="3 stars" src="'+k+'"></div>';o+='<div class="star star2"><img alt="2 stars" src="'+k+'"></div>';o+='<div class="star star1"><img alt="1 star" src="'+k+'"></div>';o+="</div>";var r='<div id="myvote-'+h.id+'" class="star-holder my-rate">';r+='<div style="width: '+Math.ceil(h.user_rating*20)+'px" class="star star-rating"></div>';r+='<div class="star star5"><img alt="5 stars" src="'+k+'"></div>';r+='<div class="star star4"><img alt="4 stars" src="'+k+'"></div>';r+='<div class="star star3"><img alt="3 stars" src="'+k+'"></div>';r+='<div class="star star2"><img alt="2 stars" src="'+k+'"></div>';r+='<div class="star star1"><img alt="1 star" src="'+k+'"></div>';r+="</div>";i+='<div class="paragraph"><strong>'+wysijatrans.stars.replace("%1$s","</strong> "+wysijatrans.totalvotes.replace("%1$s",'<span id="total-votes">'+h.votes+"</span>")+o)+"</div>";i+='<div class="paragraph"><strong>'+wysijatrans.starsyr.replace("%1$s","</strong>"+r)+"</div>";i+="<p><strong>"+wysijatrans.downloads.replace("%1$s","</strong>"+h.downloads_zip)+"</p>";i+="<p><strong>"+wysijatrans.lastupdated.replace("%1$s","</strong>"+h.updated_at)+"</p>";i+="<p>"+wysijatrans.viewallthemes.replace("%1$s",'<a href="javascript:;" class="author-id-filter" id="author-id-filter'+h.author_id+'">'+h.author_name+"</a>")+"</p>";var l="";if(h.has_psd==1){l='<p><a href="http://api.wysija.com/download/psd/'+h.id+"?domain="+wysijatrans.domainname+'" class="downpsd">'+wysijatrans.downloadpsd+"</a></p>";if(h.is_premium==1&&wysijatrans.ispremium!=1){l="<p><strong>"+wysijatrans.premiumfiles+"</strong></p>"}}i+=l;i+='<p><a href="'+h.author_url+'" target="_blank">'+wysijatrans.viewauthorsite+"</a></p>";var q='<div class="actions"><a class="button-secondary2 theme-view-back" href="javascript:;">'+wysijatrans.viewback+"</a></div>";q+='<div class="theme-infos"><div class="preview">'+j+'</div><div class="infos">'+i+'</div><div style="clear:both"></div></div>';d("#theme-view").html(q);a("theme-view");return true});d(".theme-view-back").live("click",function(){a("searchview");return true});d("#gallery-form").submit(function(){g();return false});d(".star-holder.my-rate img").live("click",function(){var i=parseInt(d(this).attr("alt"));var h=d(".star-holder.my-rate").attr("id").replace("myvote-","");d(".my-rate .star-rating").css("width",i*20);d.getJSON("http://api.wysija.com/theme/rate/"+h+"?rating="+i+"&domain="+wysijatrans.domainname+"&callback=?",function(j){if(j){d("#average-vote .star-rating").css("width",j.rating*20);d("#total-votes").html(j.votes);allthemes[h]["votes"]=j.votes;allthemes[h]["user_rating"]=i;allthemes[h]["rating"]=j.rating;var k={msg:{updated:{0:wysijatrans.voterecorded}}}}else{var k={msg:{error:{0:wysijatrans.voterecorded}}}}jQuery.WYSIJA_HANDLE_RESPONSE(k)})});d(".star-holder.my-rate img").live("hover",function(){var i=d(this).attr("alt").replace(" stars","");var h=d(".star-holder.my-rate").attr("id").replace("myvote-","")});function g(){b(0)}function f(i,h){alert("Request error not JSON:"+i.responseText);jQuery.WYSIJA_HANDLE_RESPONSE(response)}function b(k,i,j){var h="<ul>";h+="<li><img title='Loading' alt='loading' src='../wp-content/plugins/wysija-newsletters/img/wpspin_light.gif' /></li>";h+="</ul>";d("#search-results").html(h);var l="";if(i){l+="&author_id="+i}if(j){l+="&tag_id="+j}d.getJSON("http://api.wysija.com/theme/search?offset="+k+"&limit=24&domain="+wysijatrans.domainname+l+"&callback=?",function(o){if(o){var n="";if(o.paginator.pageCount>1){var p=[];d.each(o.paginator.pagesInRange,function(q,r){if(r==o.paginator.current){p.push("<span>"+r+"</span>")}else{p.push('<a href="javascript:;" rel="'+(r-1)+'">'+r+"</a>")}});n='<div class="paginator">'+p.join("\n")+"</div>"}var m=n+'<div id="themes-list">';jQuery.each(o.themes,function(r,t){allthemes[t.id]=t;var q="";var s=wysijatrans.install;if(jQuery.inArray(t.key,wysijatrans.installedthemes)!="-1"){q=" installed";s=wysijatrans.reinstall}if(t.is_premium==1){q+=" premium";s=wysijatrans.premiumonly}textOver='<span class="'+q+'">'+t.name+"</span>";m+='<div class="wysija-theme-floating"><div class="wysija-theme theme-'+t.id+q+'">'+textOver;m+='<div class="install-float">';m+='<a id="theme-cell-'+t.id+'" class="button-primary wysija-theme-click'+q+'" href="javascript:;">'+s+"</a>";m+='<div class="bg"></div></div><img class="thumbnail" src="'+t.thumbnail+'" alt="'+t.name+'" title="'+t.name+'">';m+='</div><a class="view-theme" href="javascript:;" alt="'+t.id+'" >'+wysijatrans.viewinfos+"</a></div>"});m+="</div>"+n}else{var m="<div>";m+="<strong>"+wysijatrans.errorconnecting+"</strong>";m+="</div>"}d("#search-results").html(m)})}d("#sub-theme-box").click(function(){a("theme-upload")});d("#paginator a").live("click",function(){b(d(this).attr("rel"))});d("a.author-id-filter").live("click",function(){d("#filter-selection").html('<a href="javascript:;" class="button-secondary2 filter-none">'+wysijatrans.showallthemes+"</a>");b(0,d(this).attr("id").replace("author-id-filter",""));a("searchview")});d("a.filter-none").live("click",function(){d("#filter-selection").html("");b(0)});b(0);function e(h,i){if(h==null){return"http://www.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s="+i}var j=function(av){function ag(l,m){return(l<<m)|(l>>>(32-m))}function ah(p,m){var n,r,q,o,l;q=(p&2147483648);o=(m&2147483648);n=(p&1073741824);r=(m&1073741824);l=(p&1073741823)+(m&1073741823);if(n&r){return(l^2147483648^q^o)}if(n|r){if(l&1073741824){return(l^3221225472^q^o)}else{return(l^1073741824^q^o)}}else{return(l^q^o)}}function aw(n,m,l){return(n&m)|((~n)&l)}function ax(n,m,l){return(n&l)|(m&(~l))}function ay(n,m,l){return(n^m^l)}function aA(n,m,l){return(m^(n|(~l)))}function at(o,p,r,q,l,n,m){o=ah(o,ah(ah(aw(p,r,q),l),m));return ah(ag(o,n),p)}function aH(o,p,r,q,l,n,m){o=ah(o,ah(ah(ax(p,r,q),l),m));return ah(ag(o,n),p)}function ak(o,p,r,q,l,n,m){o=ah(o,ah(ah(ay(p,r,q),l),m));return ah(ag(o,n),p)}function au(o,p,r,q,l,n,m){o=ah(o,ah(ah(aA(p,r,q),l),m));return ah(ag(o,n),p)}function aI(s){var m;var t=s.length;var p=t+8;var n=(p-(p%64))/64;var q=(n+1)*16;var l=Array(q-1);var o=0;var r=0;while(r<t){m=(r-(r%4))/4;o=(r%4)*8;l[m]=(l[m]|(s.charCodeAt(r)<<o));r++}m=(r-(r%4))/4;o=(r%4)*8;l[m]=l[m]|(128<<o);l[q-2]=t<<3;l[q-1]=t>>>29;return l}function am(l){var m="",o="",n,p;for(p=0;p<=3;p++){n=(l>>>(p*8))&255;o="0"+n.toString(16);m=m+o.substr(o.length-2,2)}return m}function ai(m){m=m.replace(/rn/g,"n");var o="";for(var n=0;n<m.length;n++){var l=m.charCodeAt(n);if(l<128){o+=String.fromCharCode(l)}else{if((l>127)&&(l<2048)){o+=String.fromCharCode((l>>6)|192);o+=String.fromCharCode((l&63)|128)}else{o+=String.fromCharCode((l>>12)|224);o+=String.fromCharCode(((l>>6)&63)|128);o+=String.fromCharCode((l&63)|128)}}}return o}var al=Array();var ac,aF,aj,ar,aG,k,x,F,G;var Z=7,ab=12,ae=17,af=22;var an=5,ao=9,ap=14,aq=20;var az=4,aB=11,aC=16,aD=23;var H=6,I=10,aa=15,ad=21;av=ai(av);al=aI(av);k=1732584193;x=4023233417;F=2562383102;G=271733878;for(ac=0;ac<al.length;ac+=16){aF=k;aj=x;ar=F;aG=G;k=at(k,x,F,G,al[ac+0],Z,3614090360);G=at(G,k,x,F,al[ac+1],ab,3905402710);F=at(F,G,k,x,al[ac+2],ae,606105819);x=at(x,F,G,k,al[ac+3],af,3250441966);k=at(k,x,F,G,al[ac+4],Z,4118548399);G=at(G,k,x,F,al[ac+5],ab,1200080426);F=at(F,G,k,x,al[ac+6],ae,2821735955);x=at(x,F,G,k,al[ac+7],af,4249261313);k=at(k,x,F,G,al[ac+8],Z,1770035416);G=at(G,k,x,F,al[ac+9],ab,2336552879);F=at(F,G,k,x,al[ac+10],ae,4294925233);x=at(x,F,G,k,al[ac+11],af,2304563134);k=at(k,x,F,G,al[ac+12],Z,1804603682);G=at(G,k,x,F,al[ac+13],ab,4254626195);F=at(F,G,k,x,al[ac+14],ae,2792965006);x=at(x,F,G,k,al[ac+15],af,1236535329);k=aH(k,x,F,G,al[ac+1],an,4129170786);G=aH(G,k,x,F,al[ac+6],ao,3225465664);F=aH(F,G,k,x,al[ac+11],ap,643717713);x=aH(x,F,G,k,al[ac+0],aq,3921069994);k=aH(k,x,F,G,al[ac+5],an,3593408605);G=aH(G,k,x,F,al[ac+10],ao,38016083);F=aH(F,G,k,x,al[ac+15],ap,3634488961);x=aH(x,F,G,k,al[ac+4],aq,3889429448);k=aH(k,x,F,G,al[ac+9],an,568446438);G=aH(G,k,x,F,al[ac+14],ao,3275163606);F=aH(F,G,k,x,al[ac+3],ap,4107603335);x=aH(x,F,G,k,al[ac+8],aq,1163531501);k=aH(k,x,F,G,al[ac+13],an,2850285829);G=aH(G,k,x,F,al[ac+2],ao,4243563512);F=aH(F,G,k,x,al[ac+7],ap,1735328473);x=aH(x,F,G,k,al[ac+12],aq,2368359562);k=ak(k,x,F,G,al[ac+5],az,4294588738);G=ak(G,k,x,F,al[ac+8],aB,2272392833);F=ak(F,G,k,x,al[ac+11],aC,1839030562);x=ak(x,F,G,k,al[ac+14],aD,4259657740);k=ak(k,x,F,G,al[ac+1],az,2763975236);G=ak(G,k,x,F,al[ac+4],aB,1272893353);F=ak(F,G,k,x,al[ac+7],aC,4139469664);x=ak(x,F,G,k,al[ac+10],aD,3200236656);k=ak(k,x,F,G,al[ac+13],az,681279174);G=ak(G,k,x,F,al[ac+0],aB,3936430074);F=ak(F,G,k,x,al[ac+3],aC,3572445317);x=ak(x,F,G,k,al[ac+6],aD,76029189);k=ak(k,x,F,G,al[ac+9],az,3654602809);G=ak(G,k,x,F,al[ac+12],aB,3873151461);F=ak(F,G,k,x,al[ac+15],aC,530742520);x=ak(x,F,G,k,al[ac+2],aD,3299628645);k=au(k,x,F,G,al[ac+0],H,4096336452);G=au(G,k,x,F,al[ac+7],I,1126891415);F=au(F,G,k,x,al[ac+14],aa,2878612391);x=au(x,F,G,k,al[ac+5],ad,4237533241);k=au(k,x,F,G,al[ac+12],H,1700485571);G=au(G,k,x,F,al[ac+3],I,2399980690);F=au(F,G,k,x,al[ac+10],aa,4293915773);x=au(x,F,G,k,al[ac+1],ad,2240044497);k=au(k,x,F,G,al[ac+8],H,1873313359);G=au(G,k,x,F,al[ac+15],I,4264355552);F=au(F,G,k,x,al[ac+6],aa,2734768916);x=au(x,F,G,k,al[ac+13],ad,1309151649);k=au(k,x,F,G,al[ac+4],H,4149444226);G=au(G,k,x,F,al[ac+11],I,3174756917);F=au(F,G,k,x,al[ac+2],aa,718787259);x=au(x,F,G,k,al[ac+9],ad,3951481745);k=ah(k,aF);x=ah(x,aj);F=ah(F,ar);G=ah(G,aG)}var aE=am(k)+am(x)+am(F)+am(G);return aE.toLowerCase()};var i=i||80;return"http://www.gravatar.com/avatar/"+j(h)+".jpg?s="+i}});