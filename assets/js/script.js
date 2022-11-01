window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").classList.add("sticky");
  } else {
    document.getElementById("header").classList.remove("sticky");
  }
}

$(".tabs li").on("click", function () {
  var dataSolution = $(this).attr("data-solution");

  $(".tabs li").removeClass("active");
  $(this).addClass("active");

  $(".panel").removeClass("active");

  $("." + dataSolution).addClass("active");

});

// Modal Functionality
function modalOpen(obj) {
  $("body").addClass("modal-show");
  $(".modal").addClass("modal-open");
  let o = $(obj).attr("data-src");
  $("#video").attr(
    "src",
    o +
      "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&amp;wmode=transparent&amp;mode=opaque&amp;controls=1;"
  );
}

function hideModal(obj) {
  $("body").removeClass("modal-show");
  $(obj).closest(".modal").removeClass("modal-open");
  $(obj).closest(".modal").find("#video").attr("src", "");
}
// Faq Functionality
function showFaq(obj) {
  let faq_tab = $(obj).closest(".faq_tab");
  $(".closeimage").css("display", "none");
  $(".plusimage").css("display", "flex");
  $(".faq_header .title").removeClass("active");
  if ($(faq_tab).find(".faq_body").hasClass("show-faq")) {
    $(faq_tab).find(".faq_body").removeClass("show-faq");
  } else {
    $(".faq_body").removeClass("show-faq");
    $(faq_tab).find(".faq_body").addClass("show-faq");
    $(obj).find(".plusimage").css("display", "none");
    $(obj).find(".closeimage").css("display", "flex");
    $(obj).find(".title").addClass("active");
  }
}
// Differentiator Tabs Change
function changeTab(obj) {
  $(".differentiators_tab").removeClass("active");
  $(obj).addClass("active");
  let tabId = $(obj).attr("data-tab-id");
  $(".differentiators_imagewrapper img").removeClass("active");
  $("#" + tabId).addClass("active");
  console.log(tabId);
}

// Testimonial Tabs Functionality

function changeTestimonial(obj) {
  $("a.tab").removeClass("active");
  $(".panel").removeClass("active");
  $(obj).addClass("active");
  let panelId = $(obj).attr("data-testimonial-id");
  $("#" + panelId).addClass("active");
}

// Sticky Header Effect
window.onscroll = () => {
  let timeout = setTimeout(() => {
    if (window.scrollY > 50) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
    if (window.scrollY > 51) {
      document.getElementById("header").classList.add("transform");
    } else {
      document.getElementById("header").classList.remove("transform");
    }
  }, 10);
};

// Scroll To Section


function scrollToSmoothly(obj, time) {
  window.event.preventDefault();
  $(".nav_toggle").removeClass("active");
  $(".header_links").removeClass("active");
  let el = $(obj).attr("href");
  const targetAnchor = document.querySelector(el);
  let pos = targetAnchor.offsetTop;
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 800;
  (pos = +pos), (time = +time);
  let interval = 100;
  if (window.innerWidth < 769) {
    interval = 420;
  }
  setTimeout(() => {
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      var progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  }, interval);
}


(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_424835();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_424835();
			  	}, false);
			}

			function onloadActions_424835(){
				constructDiv_424835();
				
			}

			function constructDiv_424835(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835');
				iframeDiv.setAttribute('class','zf_main_id_424835');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_424835');
				closeFormDiv.setAttribute('class','zf_lb_closeform_424835');
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_424835');
				containerDiv.setAttribute('class','zf_lB_Container_424835 fadeIn');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_424835');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_424835');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_424835');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_424835(){
				var iframe = document.getElementById("xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_424835();
					
				} 
				document.getElementById("formsLightBox_424835").style.display = "block"; 
				document.body.style.overflow = "hidden";
			}

			function loadZForm_424835() {
				var iframe = document.getElementById("xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_424835('https://forms.zohopublic.in/bhargavraju98/form/BookYourVisit/formperma/xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s?zf_rszfm=1');
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_424835");
					deleteForm.onclick = function deleteZForm_424835() {
						var divCont = document.getElementById("formsLightBox_424835");
						divCont.style.display="none";
						document.body.style.overflow = "";

						var iframe = document.getElementById("xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835").getElementsByTagName("iframe")[0];
						iframe.remove();
					}

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("xszq2zRLww-ZW3r8cEOjFV93LOl6Uw5H9X8Hk4zYx7s_424835").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;
									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
									iframe.style.minHeight = zf_ifrm_ht_nw;
										var containerDiv = document.getElementById("containerDiv_424835");
										containerDiv.style.height=zf_ifrm_ht_nw;
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_424835(zf_src) {
				try {
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			var buttonElem = document.getElementById("zf_button_424835");
			buttonElem.style.display = "block";
			buttonElem.addEventListener("click", showZForm_424835);
		
			
	}catch(e){}
})();
