try {
                                                                                                        
window.requestAnimationFrame(function() {setTimeout(() => {
                                                                                                                var ele = document.getElementById('pro-gallery-comp-lzeb03zx');
                                                                                                                var pgMeasures = ele.getBoundingClientRect();
                                                                                                                var options = (() => "layoutParams_cropRatio:20.00%/100%|
layoutParams_structure_galleryRatio_value:0|
layoutParams_repeatingGroupTypes:|layoutParams_gallerySpacing:0|
groupTypes:1|numberOfImagesPerRow:4|collageAmount:0.8|
textsVerticalPadding:0|textsHorizontalPadding:0|
calculateTextBoxHeightMode:MANUAL|targetItemSize:50|cubeRatio:20.00%/100%|externalInfoHeight:0|externalInfoWidth:0|isRTL:false|isVertical:false|
minItemSize:120|groupSize:1|chooseBestGroup:true|cubeImages:false|
cubeType:fit|smartCrop:false|collageDensity:1|imageMargin:-1|
hasThumbnails:false|galleryThumbnailsAlignment:bottom|gridStyle:1|
titlePlacement:SHOW_ON_HOVER|arrowsSize:50|slideshowInfoSize:120|
imageInfoType:NO_BACKGROUND|textBoxHeight:0|scrollDirection:1|
galleryLayout:4|gallerySizeType:smart|gallerySize:50|cropOnlyFill:true|
numberOfImagesPerCol:1|groupsPerStrip:0|scatter:0|enableInfiniteScroll:true|
thumbnailSpacings:5|arrowsPosition:0|thumbnailSize:120|
calculateTextBoxWidthMode:PERCENT|textBoxWidthPercent:50|
useMaxDimensions:false|rotatingGroupTypes:|fixedColumns:0|rotatingCropRatios:|
gallerySizePx:0|placeGroupsLtr:false")(ele);
                                                                                                                var width = pgMeasures.width;
                                                                                                                var height = pgMeasures.height;
                                                                                                                var isIOS = /iPad|iPhone|iPod/.test(navigator?.userAgent);
                                                                                                                if (isIOS) {width =width;
                                                                                                                    width = width;
                                                                                                                    height = height;
                                                                                                                    height = height;
                                                                                                                } else {width =width;
                                                                                                                    width = width;
                                                                                                                    height = height;
                                                                                                                    height = height;
                                                                                                                }
                                                                                                                pgMeasures = {top:pgMeasures.top,width,height
                                                                                                                };
                                                                                                                var isVertical = options.includes('layoutParams_structure_scrollDirection:"VERTICAL"');
                                                                                                                var layoutFixerUrl = '/_serverless/pro-gallery-css-v4-server/layoutCss?ver=2&id=comp-lzeb03zx&items=3575_640_800|3562_640_426|
3431_1080_1350|3455_1080_720|3534_1440_1800|3477_1124_1404|
3359_640_800|3426_640_800|3679_640_800|3662_640_800|3526_640_799|
3464_1440_1800|3433_640_800|3625_640_800|3352_640_800|3474_640_426|
3505_640_800|3270_1440_1800|3758_1080_1350|3404_1440_1799&container=' + pgMeasures.top + '_' + pgMeasures.width + '_' + pgMeasures.height + '_' +window.innerHeight + '&options=' + options;
                                                                                                                
document.getElementById('layout-fixer-style-comp-lzeb03zx').setAttribute('href', encodeURI(layoutFixerUrl));
                                                                                                            }, 0);
                                                                                                        });
                                                                                                    } catch (e) {
                                                                                                        
console.warn('Cannot set layoutFixer css', e);
                                                                                                    }
