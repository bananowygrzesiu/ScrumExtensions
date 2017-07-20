function toast_story_cards() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {command: "GET_STORIES_DATA", fields: "Title;Description"}, function(response) {
			alert(response.farewell);
		});
	});
}

document.querySelector('#toast_story_cards').addEventListener('click', toast_story_cards);
