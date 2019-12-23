// Created by iWeb 3.0.3 local-build-20111126

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="637" height="375" style="height: 375px; left: 13px; position: absolute; top: 73px; width: 637px; z-index: 1; "><param name="src" value="../../../../Media/Exhibitor-2009-Medium.m4v" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="637" height="375" style="height: 375px; left: 13px; position: absolute; top: 73px; width: 637px; z-index: 1; "><param name="src" value="4_Exhibitor_2009_files/Exhibitor-2009-Medium.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/Exhibitor-2009-Medium.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="637" height="375" data="../../../../Media/Exhibitor-2009-Medium.m4v" style="height: 375px; left: 13px; position: absolute; top: 73px; width: 637px; z-index: 1; "><param name="src" value="../../../../Media/Exhibitor-2009-Medium.m4v"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('4_Exhibitor_2009_files/4_Exhibitor_2009Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('../../../../Media/transparent.gif');Widget.onload();BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
