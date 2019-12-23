// Created by iWeb 3.0.3 local-build-20111126

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="254" height="159" style="height: 143px; left: -1px; position: absolute; top: 86px; width: 254px; z-index: 1; "><param name="src" value="Media/logo.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="254" height="159" style="height: 143px; left: -1px; position: absolute; top: 86px; width: 254px; z-index: 1; "><param name="src" value="email20709_files/logo.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/logo.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="254" height="159" data="Media/logo.m4v" style="height: 143px; left: -1px; position: absolute; top: 86px; width: 254px; z-index: 1; "><param name="src" value="Media/logo.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('email20709_files/email20709Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');detectBrowser();adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id10');applyEffects()}
function onPageUnload()
{Widget.onunload();}
