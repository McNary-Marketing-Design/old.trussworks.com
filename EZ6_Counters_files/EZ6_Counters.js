// Created by iWeb 3.0.3 local-build-20120704

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="EZ6_Counters_files/logo-mobile.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" data="Media/logo-mobile-3.m4v" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,35),url:'EZ6_Counters_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'EZ6_Counters_files/stroke_9.png'},{rect:new IWRect(1,-1,25,2),url:'EZ6_Counters_files/stroke_10.png'},{rect:new IWRect(26,-1,2,2),url:'EZ6_Counters_files/stroke_11.png'},{rect:new IWRect(26,1,2,35),url:'EZ6_Counters_files/stroke_12.png'},{rect:new IWRect(26,36,2,3),url:'EZ6_Counters_files/stroke_13.png'},{rect:new IWRect(1,36,25,3),url:'EZ6_Counters_files/stroke_14.png'},{rect:new IWRect(-1,36,2,3),url:'EZ6_Counters_files/stroke_15.png'}],new IWSize(27,38)),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,58),url:'EZ6_Counters_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'EZ6_Counters_files/stroke_1.png'},{rect:new IWRect(2,-2,97,4),url:'EZ6_Counters_files/stroke_2.png'},{rect:new IWRect(99,-2,4,4),url:'EZ6_Counters_files/stroke_3.png'},{rect:new IWRect(99,2,4,58),url:'EZ6_Counters_files/stroke_4.png'},{rect:new IWRect(99,60,4,4),url:'EZ6_Counters_files/stroke_5.png'},{rect:new IWRect(2,60,97,4),url:'EZ6_Counters_files/stroke_6.png'},{rect:new IWRect(-2,60,4,4),url:'EZ6_Counters_files/stroke_7.png'}],new IWSize(101,62)),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('EZ6_Counters_files/EZ6_CountersMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');adjustLineHeightIfTooBig('id15');adjustFontSizeIfTooBig('id15');adjustLineHeightIfTooBig('id16');adjustFontSizeIfTooBig('id16');adjustLineHeightIfTooBig('id17');adjustFontSizeIfTooBig('id17');adjustLineHeightIfTooBig('id18');adjustFontSizeIfTooBig('id18');adjustLineHeightIfTooBig('id19');adjustFontSizeIfTooBig('id19');adjustLineHeightIfTooBig('id20');adjustFontSizeIfTooBig('id20');adjustLineHeightIfTooBig('id21');adjustFontSizeIfTooBig('id21');adjustLineHeightIfTooBig('id22');adjustFontSizeIfTooBig('id22');adjustLineHeightIfTooBig('id23');adjustFontSizeIfTooBig('id23');adjustLineHeightIfTooBig('id24');adjustFontSizeIfTooBig('id24');adjustLineHeightIfTooBig('id25');adjustFontSizeIfTooBig('id25');adjustLineHeightIfTooBig('id26');adjustFontSizeIfTooBig('id26');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
