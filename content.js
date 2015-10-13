var tabUrl = window.location.href;
console.log('Getting inventory info for: '+ tabUrl);
var index = tabUrl.search('/?variant=');
if (index != -1) {
	console.log('Modifying url to get correct json link');
	tabUrl = tabUrl.slice(0, index-1);
}
var jsonUrl = tabUrl + '.json';
var productVariants = '';
$.getJSON(jsonUrl, function(data){
	productVariants = data['product']['variants'];
});


chrome.runtime.onMessage.addListener( 
	function(request, sender, sendResponse) {
        if (request.message === "popup") {
            sendResponse(productVariants);
        }
    }
);
