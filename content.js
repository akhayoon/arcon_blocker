setTimeout(() => 
{
// Remove all tags that have an id that starts with epom 
$("[id^=epom]").remove();
$("[id^=google_ads").remove();
$('.adsbygoogle').remove();
// remove chat
$(".chatbox-tabs").remove();
$(".chatbox-tab-links").remove();
// Expand width
$('body > div.wrapper.dark > div > div > div.col-xs-12.col-m-8').css({width: '100%'});
}, 2000)
