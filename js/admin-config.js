jQuery(function(h){var k=h("#smtp-login").val();h(".hidechoice").hide();h(".choice-sending-method-"+h('input[name="wysija[config][sending_method]"]:checked').val()).show();h('input[name="wysija[config][sending_method]"]').change(function(){h(".hidechoice").hide();h(".choice-sending-method-"+this.value).show();i()});h("#sending-emails-each").change(function(){a()});h("#linksendingmethod").click(function(){h("#tabs").tabs("select",h(this).attr("href"))});h("#mainmenu li a").click(function(){h("#redirecttab").val(h(this).attr("href"))});h('input[name="wysija[config][confirm_dbleoptin]"]').change(l);h("#confirm_dbleoptin-1").click(function(){return confirm(wysijatrans.doubleoptinon)});h("#confirm_dbleoptin-0").click(function(){return confirm(wysijatrans.doubleoptinoff)});h('input[name="wysija[config][sending_emails_site_method]"]').change(function(){if(h('input[name="wysija[config][sending_emails_site_method]"]:checked').val()=="sendmail"){h("#p-sending-emails-site-method-sendmail-path").show()}else{h("#p-sending-emails-site-method-sendmail-path").hide()}});h('input[name="wysija[config][sending_emails_site_method]"]').change();h("#smtp-host").keyup(c);function c(){h("#restapipossible").hide();switch(h("#smtp-host").val()){case"smtp.gmail.com":if(k==""){h("#smtp-port").val("465");h("#smtp-secure").val("ssl");h("#smtp-login").val("your_username@gmail.com")}break;case"smtp.sendgrid.net":h("#restapipossible").show();break;case"":if(k==""){h("#smtp-port").val("25");h("#smtp-secure").val("0");h("#smtp-login").val("")}break}if(k==""){h("#smtp-secure").change()}}h("#smtp-rest").change(e);function e(){if(h('input[name="wysija[config][sending_method]"]:checked').val()=="smtp"){if(h("#restapipossible").css("display")!="none"&&h("#smtp-rest").attr("checked")){h(".choice-no-restapi").hide()}else{h(".choice-no-restapi").show()}}}function l(){if(parseInt(h('input[name="wysija[config][confirm_dbleoptin]"]:checked').attr("value"))===1){h(".confirmemail").fadeIn()}else{h(".confirmemail").fadeOut()}}function a(){if(h.inArray(h("#sending-emails-each").val(),["one_min","two_min","five_min","ten_min"])!==-1){h(".choice-under15").show()}else{h(".choice-under15").hide()}}function j(){if(h('input[name="wysija[config][sending_method]"]:checked').val()=="gmail"){if(h("#sending-emails-number").val()=="200"||h("#sending-emails-number").val()=="20"){h("#sending-emails-number").val("200");h('select[name="wysija[config][sending_emails_each]"]').removeAttr("disabled");h("#sending-emails-number").removeAttr("readonly")}}}function i(){if(h('input[name="wysija[config][sending_method]"]:checked').val()=="gmail"){h("#sending-emails-number").val("20");h('select[name="wysija[config][sending_emails_each]"]').val("hourly");h("#sending-emails-number").attr("readonly","readonly");h('select[name="wysija[config][sending_emails_each]"]').attr("disabled","disabled")}else{if(h("#sending-emails-number").val()=="200"||h("#sending-emails-number").val()=="20"){h("#sending-emails-number").val("200");h('select[name="wysija[config][sending_emails_each]"]').removeAttr("disabled");h("#sending-emails-number").removeAttr("readonly")}}}function b(){wysijaAJAX.task="send_test_mail";wysijaAJAX.data=h("form").serializeArray();wysijaAJAX.popTitle=wysijatrans.testemail;wysijaAJAX.dataType="json";h.WYSIJA_SEND();return false}h("#send-test-mail-phpmail").click(function(){h("#sending-emails-site-method-phpmail").attr("checked","checked");b();return false});h("#send-test-mail-sendmail").click(function(){h("#sending-emails-site-method-sendmail").attr("checked","checked");b();return false});h("#send-test-mail-smtp").click(function(){b();return false});function d(){wysijaAJAX.task="bounce_connect";wysijaAJAX.data=h("form").serializeArray();wysijaAJAX.popTitle=wysijatrans.bounceconnect;wysijaAJAX.dataType="json";wysijaAJAXcallback.onSuccess=function(o){var n="";if(o.result.result){n='<a class="bounce-submit button-secondary" href2="admin.php?page=wysija_campaigns&action=test">'+wysijatrans.processbounce+"</a>"}if(displaychange){h(".allmsgs.ui-dialog-content.ui-widget-content").append(n)}else{h("#bounce-connector").after(n)}return true};h.WYSIJA_SEND();return false}h("#bounce-connector").click(d);function g(){wysijaAJAX.task="bounce_process";wysijaAJAX.data=h("form").serializeArray();wysijaAJAX.popTitle=wysijatrans.processbounceT;wysijaAJAX.dataType="html";h(".allmsgs").dialog();h.WYSIJA_SEND();return false}h(".bounce-submit").live("click",function(){g();h(".allmsgs").dialog("close");tb_show(wysijatrans.processbounceT,h(this).attr("href2")+"&KeepThis=true&TB_iframe=true&height=400&width=600",null);tb_showIframe();return false});h(".forwardto").change(function(){if(h(this).attr("checked")){h("#"+h(this).attr("id")+"_input").show()}else{h("#"+h(this).attr("id")+"_input").hide()}});h.each(h(".hideifnovalue"),function(){if(h(this).find("input").val()==""){h(this).hide()}});h("#wysija-settings").submit(function(){var n=false;h(".bounce-forward-email").each(function(){var o=trim(h(this).val());if(o!==""&&o==h("#bounce_email").val()){h('#wysija-tabs a[href="#bounce"]').trigger("click");h('#wysija-innertabs a[href="#actions"]').trigger("click");h(this).css("border","1px solid #CC0000");h("#bounce-msg-error").addClass("error");h("#bounce-msg-error").html(wysijatrans.errorbounceforward);n=true}});if(n){return false}h('select[name="wysija[config][sending_emails_each]"]').removeAttr("disabled")});if(h("#bounce-process-auto").attr("checked")){h("#bounce-frequency").show()}else{h("#bounce-frequency").hide()}h("#bounce-process-auto").change(function(){if(h(this).attr("checked")){h("#bounce-frequency").show()}else{h("#bounce-frequency").hide()}});h(".activateInput").change(f);function f(){if(typeof(this)!=="undefined"){h.each(h(".activateInput"),function(){m(this)})}else{m(this)}}function m(n){if(h(n).attr("checked")){h("#"+h(n).attr("id")+"_linkname").show()}else{h("#"+h(n).attr("id")+"_linkname").hide()}}h("#wysija-innertabs a").live("click",function(){h("#wysija-innertabs a").removeClass("nav-tab-active");h(this).addClass("nav-tab-active");h(".wysija-innerpanel").hide();if(h(h(this).attr("href")).length>0){h(h(this).attr("href")).show()}h(this).blur();return false});h("#wysija-tabs a").live("click",function(){h("#wysija-tabs a").removeClass("nav-tab-active");h(this).addClass("nav-tab-active");h(".wysija-panel").hide();if(h(h(this).attr("href")).length>0){h(h(this).attr("href")).show();window.location.hash="tab-"+h(this).attr("href").substring(1)}h(this).blur();return false});h(document).ready(function(){i();a();l();f();c();e();h(".wysija-panel").hide();h(".wysija-innerpanel").hide();if(window.location.hash.length>0){var n="#"+window.location.hash.substring(5);h('#wysija-tabs a[href="'+n+'"]').trigger("click")}else{h("#wysija-tabs .nav-tab-active").trigger("click")}h("#wysija-innertabs .nav-tab-active").trigger("click")});h("#dkimpub, #domainrecord").focus(function(){this.select()});h("#dkimpub, #domainrecord").click(function(){this.select()});h("#dkimpub, #domainrecord").mouseup(function(){this.select()})});