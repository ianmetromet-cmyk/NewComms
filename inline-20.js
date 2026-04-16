try {
                                                                                
window.requestAnimationFrame(function() {setTimeout(() => {
                                                                                        var ele = document.getElementById('pro-gallery-comp-lzdzvm3p');
                                                                                        var pgMeasures = ele.getBoundingClientRect();
                                                                                        var options = (() => 
"layoutParams_cropRatio:1|layoutParams_structure_galleryRatio_value:0|
layoutParams_repeatingGroupTypes:|layoutParams_gallerySpacing:0|
groupTypes:1|numberOfImagesPerRow:2|fixedColumns:2|collageAmount:0|
textsVerticalPadding:0|textsHorizontalPadding:0|
calculateTextBoxHeightMode:MANUAL|targetItemSize:575|cubeRatio:1|
externalInfoHeight:74|externalInfoWidth:0|isRTL:false|isVertical:true|
minItemSize:50|groupSize:1|chooseBestGroup:true|cubeImages:true|cubeType:fill|
smartCrop:false|collageDensity:0|imageMargin:20|hasThumbnails:false|
galleryThumbnailsAlignment:bottom|gridStyle:1|titlePlacement:SHOW_BELOW|
arrowsSize:50|slideshowInfoSize:120|imageInfoType:NO_BACKGROUND|
textBoxHeight:74|scrollDirection:0|galleryLayout:2|gallerySizeType:smart|
gallerySize:50|cropOnlyFill:false|numberOfImagesPerCol:1|groupsPerStrip:0|
scatter:0|enableInfiniteScroll:true|thumbnailSpacings:5|arrowsPosition:0|
thumbnailSize:120|calculateTextBoxWidthMode:PERCENT|
textBoxWidthPercent:50|useMaxDimensions:false|rotatingGroupTypes:|
rotatingCropRatios:|gallerySizePx:0|placeGroupsLtr:false")(ele);
                                                                                        var width = pgMeasures.width;
                                                                                        var height = pgMeasures.height;
                                                                                        var isIOS = /iPad|iPhone|
iPod/.test(navigator?.userAgent);
                                                                                        if (isIOS) {width = width;
                                                                                            width = width;
                                                                                            height = height;
                                                                                            height = height;
                                                                                        } else {width = width;
                                                                                            width = width;
                                                                                            height = height;
                                                                                            height = height;
                                                                                        }
                                                                                        pgMeasures = {top: pgMeasures.top,width,height
                                                                                        };
                                                                                        var isVertical = options.includes('layoutParams_structure_scrollDirection:"VERTICAL"');
                                                                                        var layoutFixerUrl = '/_serverless/pro-gallery-css-v4-server/layoutCss?ver=2&id=comp-lzdzvm3p&items=3712_1108_1564|3282_580_456|3470_350_350|3321_898_942|
3650_922_1024|3208_822_750|3306_918_924|3478_820_804&container=' + pgMeasures.top + '_' + pgMeasures.width + '_' + pgMeasures.height + '_' +window.innerHeight + '&options=' + options;
                                                                                        
document.getElementById('layout-fixer-style-comp-lzdzvm3p').setAttribute('href', encodeURI(layoutFixerUrl));
                                                                                    }, 0);
                                                                                });
                                                                            } catch (e) {console.warn('Cannot setlayoutFixer css', e);
                                                                            }
