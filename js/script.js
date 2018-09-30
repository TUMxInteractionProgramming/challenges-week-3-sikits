/* #6.1 tell user we're alive */
console.log('app is alive');

/*
#6.2 switch channel functions
@param channelName
*/
function switchChannel(channelName) {
    /* #6.1 switch channels - renaming right app-bar */
    console.log('Tuning into channel ' + channelName);
    document.getElementById('channelName').innerHTML=channelName;
    document.getElementById('locationName').innerHTML='<a href="https://what3words.com/" alt="w3w link" target="_blank">' + 'upgrading.never.helps' + '</a>';

    /* #6.3 set app-bar favorite icon to standard */
    $('#app-bar-favicon').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
};

function favoriteChannel() {
    /* #6.3 set app-bar favorite icon to standard */
    $('#app-bar-favicon').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

/*
#6.4 switch tab buttons
@param tabId
*/
function selectTab(tabId) {
    /* first, remove selected class from all tabs */
    $("#tab-bar>button").removeClass("selected");
    /* then set the class to the clicked tab */
    $(tabId).addClass("selected");

    console.log('Changing to tab ' + tabId);
}

/*
#6.5 toggle emoji box
this could be done inline, but maybe we'll add more functions here later
*/
function toggleEmojibox() {
    $('#emojis').toggle();
}