function setDOMInfo(info) {
    var table = document.getElementById('t01');
	for (var i=0; i<info.length; i++) {
		var row = table.insertRow(i+1)
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		cell0.innerHTML = info[i]['title'];
		cell1.innerHTML = info[i]['id'];
		cell2.innerHTML = info[i]['inventory_quantity'];
	}
}

window.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message" : 'popup'}, setDOMInfo);
    });
});

