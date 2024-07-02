import BlockInspector from "./Inspector";
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import blocks_styling from "./styling";
import {range} from "lodash"
import { CircularProgressbar } from 'react-circular-progressbar';
import { Rating } from 'react-simple-star-rating'
const { RichText, MediaUpload, URLInput } = wp.blockEditor;
const icons = {};


icons.upload = (
	<svg
		width="32px"
		height="32px"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z" />
		<path d="m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z" />
		<path d="m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z" />
		<path d="m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z" />
	</svg>
);

export default ({ attributes, setAttributes, className, isSelected, clientId }) => {
	useEffect(() => {
		const $style = document.createElement("style")
		$style.setAttribute("id", "affiliatex-pct-blocks-style-" + clientId)
		document.head.appendChild($style)
	}, [null]);

	useEffect(() => {
		setAttributes({ block_id: clientId });
		var element = document.getElementById("affiliatex-pct-blocks-style-" + clientId)
		if (null != element && "undefined" != typeof element) {
			element.innerHTML = blocks_styling(attributes, "affiliatex-pct-blocks-style", clientId)
		}
	}, [attributes]);

	const { pctTable,
        compShowImage,
        layoutStyle,
        compColumn,
        compImageStyle,
        featuredTxt,
        edButtonOneIcon,
		buttonOneIcon,
		buttonOneiconPosition,    
        edButtonTwoIcon,
		buttonTwoIcon,
		buttonTwoiconPosition,  
        edPctUserRatings,
        RatingStarSize,
        RatingLabel,
        RatingInactiveColor,
        RatingColor,
        contentType,
		listType,
		unorderedType,
		featureListIcon
	} = attributes;
	const { Fragment } = wp.element; 
    const { Button, Dashicon, RangeControl, ToggleControl, TextControl } = wp.components;

    const handletr = (pctTable) => {	
        let itemPushCount = 0			
        pctTable.push( {                
            pctImg: '',
            pctTitle: '',
            pctFeatured: '',
            pctSubTitle: 'Editor Choice',
            pctRating: '',
            pctRatingTwo: '',
            pctFeatures: {
                type: 'string',
                source: 'html',
                selector: 'ol,ul',
                multiline: 'li',
            },
            pctFeatureContent: '',
            pctPrice: '',
            pctPriceSlash: '',
            pctButtonText: '',
            pctButtonURL: '',
            pctButtonTwoText: '',
            pctButtonTwoURL: '',
            pctDescOne: '',
            pctDescTwo: '',
            pctDescThree: '',
            pctDescFour: '',
        } );			
        setAttributes( { pctTable } );     
        itemPushCount = pctTable.length
        setAttributes( { itemCount:itemPushCount } );  
    };

    const onSelectImage = ( media, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctImg:media.url };		
        setAttributes( { pctTable:pctNewTable } );	
        
    };
    
    const onChangeSubtitle = ( subtitle, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctSubTitle:subtitle };		
        setAttributes( { pctTable:pctNewTable } );	        
    };

    const onChangeFeatured = ( featured, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctFeatured:featured };		
        setAttributes( { pctTable:pctNewTable } );	        
    };
    
    const onChangeTitle = ( title, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctTitle:title };		
        setAttributes( { pctTable:pctNewTable } );	        
    };

    const onChangeRating = ( rating, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctRating:rating };		
        setAttributes( { pctTable:pctNewTable } );	        
    };
    
    const onChangeFeatures = ( features, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctFeatures:features };		
        setAttributes( { pctTable:pctNewTable } );        
    };
    
    const onChangeFeatureContent = ( content, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctFeatureContent:content };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangePrice = ( price, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctPrice:price };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangePriceSlash = ( slash, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctPriceSlash:slash };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeButtonText = ( text, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctButtonText:text };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeButtonURL = ( url, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctButtonURL:url };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeButtonTwoText = ( textTwo, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctButtonTwoText:textTwo };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeButtonTwoURL = ( urlTwo, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctButtonTwoURL:urlTwo };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeDescOne = ( descOne, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctDescOne:descOne };		
        setAttributes( { pctTable:pctNewTable } );        
    };
    
    const onChangeDescTwo = ( descTwo, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctDescTwo:descTwo };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeDescThree = ( descThree, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctDescThree:descThree };		
        setAttributes( { pctTable:pctNewTable } );        
    };
    
    const onChangeDescFour = ( descFour, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctDescFour:descFour };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const onChangeRatingTwo = ( ratingTwo, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctRatingTwo:ratingTwo };		
        setAttributes( { pctTable:pctNewTable } );        
    };
    
    const onChangeRatingLabel = ( ratingLabel, index ) => {		
        let pctNewTable = [ ...pctTable ];
        pctNewTable[ index ] = { ...pctNewTable[ index ], pctRatingLabel:ratingLabel };		
        setAttributes( { pctTable:pctNewTable } );        
    };

    const handleRemovetr = ( index ) => {		
        let pctNewTable = [ ...pctTable ];			
        pctNewTable.splice( index, 1 );
        setAttributes( { pctTable:pctNewTable } );
    };

    let pctDisplay, pctDisplayThree, pctDisplayFour;
    
    if ( pctTable.length ) {
        pctDisplay = pctTable.map( ( location, index )  => {
            
            return (
                <Fragment>
                <tr>
                    { pctTable[ index ].pctFeatured ? <td class="affx-pct-product-featured-text">{featuredTxt}</td> : '' }
                </tr>
                <tr className={`affx-pct-card-wrapper`}>
                    { compShowImage && <td data-column="Image" className="affx-pct-image-wrapper"> 
                            <MediaUpload				
                                onSelect = { ( mediaURL ) => onSelectImage( mediaURL, index ) }				
                                value={pctTable[ index ].pctImg}
                                className = "affiliate-cmpr-img"				
                                render={ ( { open } ) => (					
                                    <Button className="block-editor-button-block-appender" onClick={ open }>
                                    <img  src={pctTable[ index ].pctImg} />
                                        {__("Add-Image")}						
                                    </Button>
                                ) }
                            /> 
                        </td>
                    }

                    <td data-column="Product" className="affx-pct-details-wrapper">                       
                        { layoutStyle && layoutStyle !== 'layout-type3' && isSelected &&
                            <ToggleControl
                                label={ __( 'Make Featured', 'affiliatex' ) }
                                checked={pctTable[ index ].pctFeatured}
                                onChange={ newFeatured => onChangeFeatured( newFeatured, index )}
                                className="affx-pct-product-featured"
                            />
                        }                                                
                        <RichText
                            tagName="h2"
                            placeholder={__("Title", "affiliatex")}
                            value={pctTable[ index ].pctTitle}
                            className="affx-pct-details-title"
                            formattingControls={['bold', 'italic', 'underline']}
                            onChange={(newTitle) => onChangeTitle( newTitle, index )}
                        />
                        { layoutStyle && layoutStyle == 'layout-type2' &&   
                            <>                     
                            {contentType === 'list' && unorderedType === 'bullet' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={"affx-pct-feature affiliatex-list affiliatex-list-type-unordered bullet"}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }
                            {contentType === 'list' && unorderedType === 'icon' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={`affiliatex-list affiliatex-list-type-unordered icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }
                        
                            {contentType === "paragraph" &&
                                <RichText
                                    tagName="p"
                                    value={pctTable[ index ].pctFeatureContent}
                                    placeholder={__("Content", "affiliatex")}
                                    className="affiliatex-content"
                                    onChange={(newContent) => onChangeFeatureContent( newContent, index )}
                                />
                            }
                            </>
                        }
                    </td>
                    { layoutStyle && layoutStyle !== 'layout-type1' && 
                        <>
                            <td data-column="Ratings"
                                    className={`affx-pct-star-rating-wrapper affx-pct-star-rating-layout-inline`}
                                >
                            { isSelected ? 
                                <TextControl
                                    id="rating-input-field"
                                    label={"Rating Value"}
                                    value={pctTable[ index ].pctRatingTwo}
                                    onChange={(newRatingTwo) => onChangeRatingTwo( newRatingTwo, index )}
                                />
                                :
                                <CircularProgressbar value={pctTable[ index ].pctRatingTwo} maxValue={10} text={`${pctTable[ index ].pctRatingTwo*10}%`} styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Customize transition animation
                                      transition: 'stroke-dashoffset 0.5s ease 0s',
                                      // Rotate the path
                                      transform: 'rotate(0.25turn)',
                                      transformOrigin: 'center center',
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                      // Trail color
                                      stroke: '#E6ECF7',
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Rotate the trail
                                      transform: 'rotate(0.25turn)',
                                      transformOrigin: 'center center',
                                      strokeWidth : '6px',
                                    },
                                    // Customize the text
                                    text: {
                                      // Text size
                                      fontSize: '24px',
                                      //align
                                      textAnchor : 'middle',
                                      //transform
                                      transform: 'translate(5px,9px)'
                                    
                                    },
                                    // Customize background - only used when the `background` prop is true
                                    background: {
                                      fill: '#3e98c7',
                                    },
                                  }} /> 
                            }
                            </td>
                        </>
                    }
                    { layoutStyle && layoutStyle == 'layout-type1' &&
                        <td data-column="Features" className="affx-pct-features-wrapper">
                        
                            {contentType === 'list' && unorderedType === 'bullet' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={"affx-pct-feature affiliatex-list affiliatex-list-type-unordered bullet"}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }
                            {contentType === 'list' && unorderedType === 'icon' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={`affiliatex-list affiliatex-list-type-unordered icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }
                        
                            {contentType === "paragraph" &&
                                <RichText
                                    tagName="p"
                                    value={pctTable[ index ].pctFeatureContent}
                                    placeholder={__("Content", "affiliatex")}
                                    className="affiliatex-content"
                                    onChange={(newContent) => onChangeFeatureContent( newContent, index )}
                                />
                            }
                        </td>
                    }
                    <td data-column="Price" className="affx-pct-price-wrapper">
                        { layoutStyle && layoutStyle !== 'layout-type2' &&
                            ( 
                            <>
                            <RichText
                                tagName="div"
                                value={ pctTable[ index ].pctPrice }
                                placeholder={ __(
                                    'Add a price',
                                    'affiliatex'
                                ) }
                                onChange={ (newPrice) => onChangePrice( newPrice, index ) }
                                className={"affx-pct-price-value"}
                            /> 
                            <RichText
                                tagName="div"
                                value={ pctTable[ index ].pctPriceSlash }
                                placeholder={ __(
                                    'Add a slash price',
                                    'affiliatex'
                                ) }
                                onChange={ (newPriceSlash) => onChangePriceSlash( newPriceSlash, index ) }
                                className={"affx-pct-price-slash"}
                            />  
                            </>
                            )
                        }

                        {isSelected ? (
                            <>  
                                
                                <TextControl
                                    id="button-one-input-field"
                                    label={"Button One Text"}
                                    value={pctTable[ index ].pctButtonText}
                                    onChange={(newButtonText) => onChangeButtonText( newButtonText, index )}
                                />

                                <form
                                    className={
                                        "affx-pct-button-one"
                                    }
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <URLInput
                                        label={"Button One URL"}
                                        className="affx-pct-button-one-url"
                                        value={pctTable[ index ].pctButtonURL}
                                        onChange={(newButtonURL) => onChangeButtonURL( newButtonURL, index )}
                                    />
                                </form>
                            </>
                        ) : (
                            pctTable[ index ].pctButtonURL && (
                                <>
                                    <a className={"affx-pct-button-one"} href={pctTable[ index ].pctButtonURL}>
                                        { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnleft' ) &&
                                            <i class={`button-icon ` + buttonOneIcon.value}></i>
                                        }
                                            {pctTable[ index ].pctButtonText || "Edit link One"}
                                        { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnright' ) &&
                                        <i class={`button-icon ` + buttonOneIcon.value}></i>
                                        }
                                    </a>

                                </>
                            )
                        )}

                        { layoutStyle && layoutStyle == 'layout-type2' &&
                            ( isSelected ? (
                                <>
                                    <TextControl
                                        id="button-two-input-field"
                                        label={"Button Two Text"}
                                        value={pctTable[ index ].pctButtonTwoText}
                                        onChange={(newButtonTwoText) => onChangeButtonTwoText( newButtonTwoText, index )}
                                    />

                                    <form
                                        className={
                                            "affx-pct-button-two"
                                        }
                                        onSubmit={(event) => event.preventDefault()}
                                    >
                                        <URLInput
                                            label={"Button Two URL"}
                                            className="affx-pct-button-two-url"
                                            value={pctTable[ index ].pctButtonTwoURL}
                                            onChange={(newButtonTwoURL) => onChangeButtonTwoURL( newButtonTwoURL, index )}
                                        />
                                    </form>
                                </>
                            ) : (
                                
                                pctTable[ index ].pctButtonTwoURL && (
                                    <>
                                        <div className="layout-3-btn-wrap">
                                            <a className={"affx-pct-button-two"} href={pctTable[ index ].pctButtonTwoURL}>
                                                { (edButtonTwoIcon == true) && (buttonTwoiconPosition && buttonTwoiconPosition == 'axBtnleft' ) &&
                                                    <i class={`button-icon ` + buttonTwoIcon.value}></i>
                                                }
                                                    {pctTable[ index ].pctButtonTwoText || "Edit link One"}
        
                                                { (edButtonTwoIcon == true) && (buttonTwoiconPosition && buttonTwoiconPosition == 'axBtnright' ) &&
                                                <i class={`button-icon ` + buttonTwoIcon.value}></i>
                                                }
                                            </a>
                                        </div>
                                    </>
                                )
                            )
                        )}
                    </td>
                    <td data-column="Delete" className={`affx-pct-remove-items`}>
                        <Button
                            className="affx-pct-remove-btn"
                            onClick={ () => { handleRemovetr( index ) } }
                        >
                            <Dashicon icon={ 'dismiss' } />
                        </Button>
                    </td>
                </tr>
                </Fragment>    
            )
                                    
        });  
    }

    if ( pctTable.length ) {
        pctDisplayThree = pctTable.map( ( location, index )  => {
            
            return (
                <div className={`affx-pct-card-wrapper`}>
                    <div data-column="Image" className="affx-pct-image-wrapper">
                        { compShowImage && <MediaUpload				
                            onSelect = { ( mediaURL ) => onSelectImage( mediaURL, index ) }				
                            value={pctTable[ index ].pctImg}
                            className = "affiliate-cmpr-img"				
                            render={ ( { open } ) => (					
                                <Button className="block-editor-button-block-appender" onClick={ open }>
                                <img  src={pctTable[ index ].pctImg} />
                                    {__("Add-Image")}						
                                </Button>
                            ) }
                        /> }
                    </div>
                    <div className={`af-small-wrap`}>
                    
                        <div data-column="Product" className="affx-pct-details-wrapper">                       
                            <RichText
                                tagName="span"
                                placeholder={__("Subtitle", "affiliatex")}
                                value={pctTable[ index ].pctSubTitle}
                                className="affx-pct-details-subtitle"
                                formattingControls={['bold', 'italic', 'underline']}
                                onChange={(newSubTitle) => onChangeSubtitle( newSubTitle, index )}
                            />                                                
                            <RichText
                                tagName="h2"
                                placeholder={__("Title", "affiliatex")}
                                value={pctTable[ index ].pctTitle}
                                className="affx-pct-details-title"
                                formattingControls={['bold', 'italic', 'underline']}
                                onChange={(newTitle) => onChangeTitle( newTitle, index )}
                            />
                            
                        </div>
                        
                        {
                            edPctUserRatings && (
                                <div data-column="Ratings"
                                    className={`affx-pct-star-rating-wrapper affx-pct-star-rating-layout-inline`}
                                >
                                    <div className="pct-user-rating-wrapper">
                                        <RichText
                                            value={RatingLabel}
                                            className="user-rating"
                                            onChange={RatingLabel => setAttributes( RatingLabel )}
                                        />											
                                    </div>
                                    <div className="star-rating">
                                        <Rating
                                            onClick={(newpctRating) => onChangeRating( newpctRating, index )}
                                            ratingValue={pctTable[ index ].pctRating}
                                            fillColor={RatingColor}
                                            emptyColor={RatingInactiveColor}
                                            size={RatingStarSize}
                                        />
                                    </div>
                                    
                                </div>
                            )
                        }
                            
                        <div data-column="Price" className="affx-pct-price-wrapper">
                            <RichText
                                tagName="div"
                                value={ pctTable[ index ].pctPrice }
                                placeholder={ __(
                                    'Add a price',
                                    'affiliatex'
                                ) }
                                onChange={ (newPrice) => onChangePrice( newPrice, index ) }
                                className={"affx-pct-price-value"}
                            /> 
                            <RichText
                                tagName="div"
                                value={ pctTable[ index ].pctPriceSlash }
                                placeholder={ __(
                                    'Add a slash price',
                                    'affiliatex'
                                ) }
                                onChange={ (newPriceSlash) => onChangePriceSlash( newPriceSlash, index ) }
                                className={"affx-pct-price-slash"}
                            />                                                  
                            {contentType === 'list' && unorderedType === 'bullet' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={"affx-pct-feature affiliatex-list affiliatex-list-type-unordered bullet"}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }
                            {contentType === 'list' && unorderedType === 'icon' &&
                                <RichText
                                    tagName={listType == "unordered" ? "ul" : "ol"}
                                    multiline="li"
                                    className={`affiliatex-list affiliatex-list-type-unordered icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
                                    placeholder={__("Enter new item", "affiliatex")}
                                    value={pctTable[ index ].pctFeatures}
                                    onChange={(newFeatures) => onChangeFeatures( newFeatures, index )}
                                    keepPlaceholderOnFocus
                                />
                            }                        
                            {contentType === "paragraph" &&
                                <RichText
                                    tagName="p"
                                    value={pctTable[ index ].pctFeatureContent}
                                    placeholder={__("Content", "affiliatex")}
                                    className="affiliatex-content"
                                    onChange={(newContent) => onChangeFeatureContent( newContent, index )}
                                />
                            }  
                        </div>
                    </div>
                    {isSelected ? (
                        <>
                            <TextControl
                                id="button-one-input-field"
                                label={"Button One Text"}
                                value={pctTable[ index ].pctButtonText}
                                onChange={(newButtonText) => onChangeButtonText( newButtonText, index )}
                            />

                            <form
                                className={
                                    "affx-pct-button-one"
                                }
                                onSubmit={(event) => event.preventDefault()}
                            >
                                <URLInput
                                    label={"Button One URL"}
                                    className="affx-pct-button-one-url"
                                    value={pctTable[ index ].pctButtonURL}
                                    onChange={(newButtonURL) => onChangeButtonURL( newButtonURL, index )}
                                />
                            </form>
                        </>
                    ) : (
                        pctTable[ index ].pctButtonURL && (
                            <>
                                <div className="layout-3-btn-wrap">
                                    <a className={"affx-pct-button-one"} href={pctTable[ index ].pctButtonURL}>
                                        { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnleft' ) &&
                                            <i class={`button-icon ` + buttonOneIcon.value}></i>
                                        }
                                            {pctTable[ index ].pctButtonText || "Edit link One"}

                                        { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnright' ) &&
                                        <i class={`button-icon ` + buttonOneIcon.value}></i>
                                        }
                                    </a>
                                </div>
                            </>
                        )
                    )}
                    { index > 0 &&
                        <div data-column="Delete" className={`affx-pct-remove-items`}>
                            <Button
                                className="affx-pct-remove-btn"
                                onClick={ () => { handleRemovetr( index ) } }
                            >
                                <Dashicon icon={ 'dismiss' } />
                            </Button>
                        </div>
                    }
                </div>    
            )
                                    
        });  
    }

    if ( pctTable.length ) {
        pctDisplayFour = pctTable.map( ( location, index )  => {
            
            return (
                <tr className={`affx-pct-card-wrapper`}>
                    <td data-column="DescOne" className="affx-pct-details-wrapper">                                            
                        <RichText
                            tagName="div"
                            placeholder={__("Main Description", "affiliatex")}
                            value={pctTable[ index ].pctDescOne}
                            className="affx-pct-details-descone"
                            formattingControls={['bold', 'italic', 'underline']}
                            onChange={(descOne) => onChangeDescOne( descOne, index )}
                        />
                    </td>
                    { ( compColumn >= 1 ) ?
                    <td data-column="DescTwo" className="affx-pct-details-wrapper">
                        <RichText
                            tagName="div"
                            placeholder={__("Add", "affiliatex")}
                            value={pctTable[ index ].pctDescTwo}
                            className="affx-pct-details-desctwo"
                            formattingControls={['bold', 'italic', 'underline']}
                            onChange={(descTwo) => onChangeDescTwo( descTwo, index )}
                        />
                    </td> : '' }
                    { ( compColumn >=2 ) ?
                    <td data-column="DescThree" className="affx-pct-details-wrapper">
                        <RichText
                            tagName="div"
                            placeholder={__("Add", "affiliatex")}
                            value={pctTable[ index ].pctDescThree}
                            className="affx-pct-details-descthree"
                            formattingControls={['bold', 'italic', 'underline']}
                            onChange={(descThree) => onChangeDescThree( descThree, index )}
                        />
                    </td> : ''}
                    { ( compColumn >= 3 ) ?
                    <td data-column="DescFour" className="affx-pct-details-wrapper">
                        <RichText
                            tagName="div"
                            placeholder={__("Add", "affiliatex")}
                            value={pctTable[ index ].pctDescFour}
                            className="affx-pct-details-descFour"
                            formattingControls={['bold', 'italic', 'underline']}
                            onChange={(descFour) => onChangeDescFour( descFour, index )}
                        />
                    </td> : ''}
                    <td data-column="Delete" className={`affx-pct-remove-items`}>
                        <Button
                            className="affx-pct-remove-btn"
                            onClick={ () => { handleRemovetr( index ) } }
                        >
                            <Dashicon icon={ 'dismiss' } />
                        </Button>
                    </td>
                </tr>    
            )
                                    
        });
    }

	return (
		<Fragment>
			<BlockInspector {...{ attributes, setAttributes, className, isSelected }} />                             
            <div id={`affiliatex-pct-blocks-style-${clientId}`} className={"affx-pct-wrapper"}>
                <div className={`affx-pct-wrapper-inner image-${compImageStyle} ${layoutStyle}`}> 
                
                { layoutStyle && layoutStyle == 'layout-type1' &&
                    <table>
                        <thead className={`affx-pct-table-list`}>
                            <tr>                                
                                { compShowImage && <th>Image</th> }
                                <th>Product Name</th>
                                <th>Features</th>	
                                <th>Price</th>	
                                <th>Delete</th>	
                            </tr>
                        </thead>  
                        <tbody className={`affx-pct-table-body`}>                                                  
                            {pctDisplay}
                        </tbody>
                    </table>
                }
                { layoutStyle && layoutStyle == 'layout-type2' &&
                    <table>
                        <thead className={`affx-pct-table-list`}>
                            <tr>                                
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Ratings</th>	
                                <th>Price</th>	
                                <th>Delete</th>	
                            </tr>
                        </thead>  
                        <tbody className={`affx-pct-table-body`}>                                                  
                            {pctDisplay}
                        </tbody>
                    </table>
                }
                { layoutStyle && layoutStyle == 'layout-type3' &&
                    <>
                    {pctDisplayThree}    
                    </>
                }
                { layoutStyle && layoutStyle == 'layout-type4' &&
                    <table className={`affx-pct-table-body`}> 
                        <thead>                                 
                            <tr className={`affx-pct-card-wrapper`}>   
                            <td></td> 
                            { range(1,compColumn + 1 ).map( i => {
                                const imageUrl = attributes[ `compImgURL${ i }` ]
                                const title = attributes[ `compTitle${ i }` ]
                                const featured = attributes[ `compFeatured${ i }` ]
                                const price = attributes[ [`compPrice${i}`] ]
                                const rating = attributes[ [`compRating${i}`] ]
                                const button = attributes[ [`compButton${i}`] ]
                                const buttonURL = attributes[ [`compButtonURL${i}`] ]
                
                                return(
                                <Fragment>
                                
                                    <td data-column="Products" className="affx-pct-products-wrapper">
                                        {featured ? <span class="affx-pct-product-featured-text">{featuredTxt}</span> : ''}
                                        { compShowImage && <MediaUpload				
                                            onSelect = { (newImageUrl) => setAttributes({ [`compImgURL${i}`]: newImageUrl.url }) }				
                                            value={imageUrl}
                                            className = "affiliate-cmpr-img"				
                                            render={ ( { open } ) => (					
                                                <Button className="block-editor-button-block-appender" onClick={ open }>
                                                <img  src={imageUrl} />
                                                    {__("Add-Image")}						
                                                </Button>
                                            ) }
                                        /> }
                                        {isSelected &&
                                            <ToggleControl
                                                label={ __( 'Make Featured', 'affiliatex' ) }
                                                checked={featured}
                                                onChange={(newFeatured) => setAttributes({ [`compFeatured${i}`]: newFeatured })}
                                                className="affx-pct-product-featured"
                                            />
                                        }                                                
                                        <RichText
                                            tagName="h2"
                                            placeholder={__("Title", "affiliatex")}
                                            value={title}
                                            className="affx-pct-details-title"
                                            formattingControls={['bold', 'italic', 'underline']}
                                            onChange={(newTitle) => setAttributes({ [`compTitle${i}`]: newTitle })}
                                        />
                                        <RichText
                                            tagName="div"
                                            value={ price }
                                            placeholder={ __(
                                                'Add a price',
                                                'affiliatex'
                                            ) }
                                            onChange={(newPrice) => setAttributes({ [`compPrice${i}`]: newPrice })}
                                            className={"affx-pct-price-value"}
                                        /> 
                                        {edPctUserRatings && (
                                            <div className="star-rating">
                                                <Rating
                                                    onClick={(newRating) => setAttributes({ [`compRating${i}`]: newRating })}
                                                    ratingValue={rating}
                                                    fillColor={RatingColor}
                                                    emptyColor={RatingInactiveColor}
                                                    size={RatingStarSize}
                                                />
                                            </div>
                                        )}
                                        {isSelected ? (
                                            <>
                                                <TextControl
                                                    id="button-one-input-field"
                                                    label={"Button One Text"}
                                                    value={button}
                                                    onChange={(newButton) => setAttributes({ [`compButton${i}`]: newButton })}
                                                />
                
                                                <form
                                                    className={
                                                        "affx-pct-button-one"
                                                    }
                                                    onSubmit={(event) => event.preventDefault()}
                                                >
                                                    <URLInput
                                                        label={"Button One URL"}
                                                        className="affx-pct-button-one-url"
                                                        value={buttonURL}
                                                        onChange={(newButtonUrl) => setAttributes({ [`compButtonURL${i}`]: newButtonUrl })}
                                                    />
                                                </form>
                                            </>
                                        ) : (
                                            [`compButtonURL${i}`] && (
                                                <>
                                                <a className={"affx-pct-button-one"} href={[`compButtonURL${i}`]}>
                                                    { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnleft' ) &&
                                                        <i class={`button-icon ` + buttonOneIcon.value}></i>
                                                    }
                                                        {[`compButton${i}`] || "Edit link One"}
                                                    { (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnright' ) &&
                                                        <i class={`button-icon ` + buttonOneIcon.value}></i>
                                                    }
                                                </a>
                                                </>
                                            )
                                        )}
                                    </td>
                                </Fragment>
                                )   
                                
                            } )}
                            </tr>
                        </thead>
                        <tbody>
                            {pctDisplayFour}
                        </tbody>
                    </table>
                }
                </div>
                <Button  isDefault className=" components_panel_btn" onClick={ () => handletr(pctTable) } >
                    <span class="screen-reader-text">{ __( 'Add Row', 'affiliatex' ) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
                </Button>
            </div>
        </Fragment>
	)
}
