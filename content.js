// Remove all tags that have an id that starts with epom
setTimeout(() => 
{
$("[id^=epom]").remove();
$("[id^=google_ads").remove();
$('.adsbygoogle').remove();
}, 2000)
