$.getScript('https://stats.basheer.co/?js');

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-25940549-1"]);
_gaq.push(["_setDomainName", "basheer.co"]);
_gaq.push(["_trackPageview"]);

(function() {
  var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
  ga.src = ("https:" == document.location.protocol ? "https://" : "http://") + "stats.g.doubleclick.net/dc.js";
  var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);
})();