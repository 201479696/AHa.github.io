window.onload = function(){
	    	$("h1.green").click(function(){
    			$(".Button1").toggle(1000);
    		});
    		$("p").click(function(){
    			$("div.section").fadeToggle(1000);
    		});
    		$("h2.green").click(function(){
    			$("div.footer").slideToggle(1000);
    		});
    		$("div.Button1").mousedown(function(){
    			$("html").removeClass("BgGray");
    		});
    		$("div.Button1").mouseup(function(){
    			$("html").addClass("BgGray");
    		});
};
