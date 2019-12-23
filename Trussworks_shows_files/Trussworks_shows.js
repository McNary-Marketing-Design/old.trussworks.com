// Created by iWeb 3.0.3 local-build-20111126

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="348" height="213" style="height: 197px; left: 33px; position: absolute; top: -35px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" style="height: 197px; left: 33px; position: absolute; top: -35px; width: 348px; z-index: 1; "><param name="src" value="Trussworks_shows_files/logo-mobile.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" data="Media/logo-mobile-3.m4v" style="height: 197px; left: 33px; position: absolute; top: -35px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
function createMediaStream_id4()
{return IWCreatePhotocast("http://www.trussworks.com/trussworks/Trussworks_shows_files/rss.xml",false);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.trussworks.com/trussworks',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.trussworks.com/trussworks',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(311,311),new IWSize(311,16),new IWSize(381,342),27,27,0,new IWSize(36,34)),new IWPhotoFrame([IWCreateImage('Trussworks_shows_files/Rosewood_01.png'),IWCreateImage('Trussworks_shows_files/Rosewood_02.png'),IWCreateImage('Trussworks_shows_files/Rosewood_03.png'),IWCreateImage('Trussworks_shows_files/Rosewood_06.png'),IWCreateImage('Trussworks_shows_files/Rosewood_09.png'),IWCreateImage('Trussworks_shows_files/Rosewood_08.png'),IWCreateImage('Trussworks_shows_files/Rosewood_07.png'),IWCreateImage('Trussworks_shows_files/Rosewood_04.png')],null,2,0.666667,0.000000,0.000000,0.000000,0.000000,26.000000,24.000000,26.000000,27.000000,79.000000,105.000000,79.000000,105.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:0},'Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Trussworks_shows_files/Trussworks_showsMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
