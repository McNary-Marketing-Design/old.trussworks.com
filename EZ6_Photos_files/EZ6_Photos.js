// Created by iWeb 3.0.3 local-build-20120704

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="EZ6_Photos_files/logo-mobile.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" data="Media/logo-mobile-3.m4v" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
function createMediaStream_id4()
{return IWCreatePhotocast("http://www.trussworks.com/trussworks/EZ6_Photos_files/rss.xml",false);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.trussworks.com/trussworks',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.trussworks.com/trussworks',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(5,new IWSize(174,174),new IWSize(174,0),new IWSize(209,189),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-1,1,2,172),url:'EZ6_Photos_files/stroke.png'},{rect:new IWRect(-4,-5,5,6),url:'EZ6_Photos_files/stroke_1.png'},{rect:new IWRect(1,-1,172,2),url:'EZ6_Photos_files/stroke_2.png'},{rect:new IWRect(173,-5,3,6),url:'EZ6_Photos_files/stroke_3.png'},{rect:new IWRect(173,1,2,172),url:'EZ6_Photos_files/stroke_4.png'},{rect:new IWRect(173,173,6,4),url:'EZ6_Photos_files/stroke_5.png'},{rect:new IWRect(1,173,172,2),url:'EZ6_Photos_files/stroke_6.png'},{rect:new IWRect(-4,173,5,4),url:'EZ6_Photos_files/stroke_7.png'}],new IWSize(174,174),true,1),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('EZ6_Photos_files/EZ6_PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id7');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
