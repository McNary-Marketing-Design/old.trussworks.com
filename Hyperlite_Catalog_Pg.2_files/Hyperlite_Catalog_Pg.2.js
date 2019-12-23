// Created by iWeb 3.0.3 local-build-20120704

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Hyperlite_Catalog_Pg.2_files/logo-mobile.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="348" height="213" data="Media/logo-mobile-3.m4v" style="height: 197px; left: 13px; position: absolute; top: -56px; width: 348px; z-index: 1; "><param name="src" value="Media/logo-mobile-3.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWPhotoFrame([IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_01_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_02_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_03_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_06_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_09_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_08_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_07_1.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_04_1.png')],null,2,0.500000,0.000000,0.000000,0.000000,0.000000,26.000000,24.000000,26.000000,27.000000,79.000000,105.000000,79.000000,105.000000,null,null,null,0.400000),stroke_0:new IWPhotoFrame([IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_01.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_02.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_03.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_06.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_09.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_08.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_07.png'),IWCreateImage('Hyperlite_Catalog_Pg.2_files/Rosewood_04.png')],null,2,0.500000,0.000000,0.000000,0.000000,0.000000,26.000000,24.000000,26.000000,27.000000,79.000000,105.000000,79.000000,105.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Hyperlite_Catalog_Pg.2_files/Hyperlite_Catalog_Pg.2Moz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
