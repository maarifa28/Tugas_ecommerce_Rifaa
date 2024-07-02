import { __ } from "@wordpress/i18n";
import blocks_styling from "./styling";
import { range } from "lodash"
import { RatingView } from 'react-simple-star-rating'

import { CircularProgressbar } from 'react-circular-progressbar';

export default ({ attributes, className }) => {

	const { RichText } = wp.blockEditor;
	const {
		block_id,
		pctTable,
		compShowImage,
		layoutStyle,
		compColumn,
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
		featureListIcon,
		compImageStyle,
	} = attributes;

	function getbutton(getclass, gettext, geturl) {
		if (
			"undefined" != typeof gettext &&
			geturl &&
			"undefined" != typeof geturl
		) {
			return (
				<a
					className={getclass}
					href={geturl}
					target="_blank"
					rel="noopener nofollow"
				>
					{ (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnleft' ) &&
						<i class={`button-icon ` + buttonOneIcon.value}></i>
					}
					{gettext}
					{ (edButtonOneIcon == true) && (buttonOneiconPosition && buttonOneiconPosition == 'axBtnright' ) &&
						<i class={`button-icon ` + buttonOneIcon.value}></i>
					}
				</a>
			);
		}
	}
	function getbuttontwo(getclass, gettext, geturl) {
		if (
			"undefined" != typeof gettext &&
			geturl &&
			"undefined" != typeof geturl
		) {
			return (
				<a
					className={getclass}
					href={geturl}
					target="_blank"
					rel="noopener nofollow"
				>
					{ (edButtonTwoIcon == true) && (buttonTwoiconPosition && buttonTwoiconPosition == 'axBtnleft' ) &&
						<i class={`button-icon ` + buttonTwoIcon.value}></i>
					}
					{gettext}
					{ (edButtonTwoIcon == true) && (buttonTwoiconPosition && buttonTwoiconPosition == 'axBtnright' ) &&
						<i class={`button-icon ` + buttonTwoIcon.value}></i>
					}
				</a>
			);
		}
	}

	let pctSaveDisplay, pctSaveDisplayThree, pctSaveDisplayFour;

	if (pctTable.length) {
		pctSaveDisplay = pctTable.map((location, index) => {
			return (
				<>
					<tr>{ pctTable[ index ].pctFeatured ? <td class="affx-pct-product-featured-text">{__( 'Featured Product', 'affilaitex' )}</td> : '' }
                	</tr>
					<tr className={`affx-pct-card-wrapper`}>
						{compShowImage && ("undefined" != typeof pctTable[index].pctImg) ?
							<td data-column="Image" className="affx-pct-image-wrapper"><img src={pctTable[index].pctImg} /></td> : ''
						}
						<td data-column="Product" className="affx-pct-details-wrapper">
							<RichText.Content
								tagName="h2"
								className="affx-pct-details-title"
								value={pctTable[index].pctTitle}
							/>
							{layoutStyle && layoutStyle == 'layout-type2' &&
								<>
								{contentType === "list" && unorderedType === 'bullet' &&
									<RichText.Content
										tagName={listType == "unordered" ? "ul" : "ol"}
										multiline="li"
										value={pctTable[index].pctFeatures}
										className="affx-pct-feature affiliatex-list bullet"
									/>
								}
								{contentType === "list" && unorderedType === 'icon' &&
									<RichText.Content
										tagName={listType == "unordered" ? "ul" : "ol"}
										multiline="li"
										value={pctTable[index].pctFeatures}
										className={`affiliatex-list icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
									/>
								}
								{contentType === "paragraph" &&
									<RichText.Content
										tagName="p"
										value={pctTable[index].pctFeatureContent}
										className="affiliatex-content"
									/>
								}
								</>
							}
						</td>
						{layoutStyle && layoutStyle !== 'layout-type1' &&
							<td data-column="Ratings"
								className={`affx-pct-star-rating-wrapper affx-pct-star-rating-layout-inline`}
							>
								<CircularProgressbar value={pctTable[ index ].pctRatingTwo} maxValue={10} text={`${pctTable[ index ].pctRatingTwo*10}%`} styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      // Path color
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
                                  }} /> 
							</td>
						}
						{layoutStyle && layoutStyle == 'layout-type1' &&
							<td data-column="Features" className="affx-pct-features-wrapper">
								{contentType === "list" && unorderedType === 'bullet' &&
									<RichText.Content
										tagName={listType == "unordered" ? "ul" : "ol"}
										multiline="li"
										value={pctTable[index].pctFeatures}
										className="affiliatex-list bullet"
									/>
								}
								{contentType === "list" && unorderedType === 'icon' &&
									<RichText.Content
										tagName={listType == "unordered" ? "ul" : "ol"}
										multiline="li"
										value={pctTable[index].pctFeatures}
										className={`affiliatex-list icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
									/>
								}
								{contentType === "paragraph" &&
									<RichText.Content
										tagName="p"
										value={pctTable[index].pctFeatureContent}
										className="affiliatex-content"
									/>
								}
							</td>
						}
						<td data-column="Price" className="affx-pct-price-wrapper">
							{layoutStyle && layoutStyle !== 'layout-type2' && (
								<>
									<RichText.Content
										tagName="div"
										className="affx-pct-price-value"
										value={pctTable[index].pctPrice}
									/>
									<RichText.Content
										tagName="div"
										className="affx-pct-price-slash"
										value={pctTable[index].pctPriceSlash}
									/>
								</>
							)}
							
							{pctTable[index].pctButtonURL && getbutton("affx-pct-button-one", pctTable[index].pctButtonText, pctTable[index].pctButtonURL)}
							
							{ layoutStyle && layoutStyle == 'layout-type2' && 
								<>
								
								{pctTable[index].pctButtonTwoURL && getbuttontwo("affx-pct-button-two", pctTable[index].pctButtonTwoText, pctTable[index].pctButtonTwoURL)}
								
								</>	
							}
						</td>
					</tr>
				</>
			);
		})
	}

	if (pctTable.length) {
		pctSaveDisplayThree = pctTable.map((location, index) => {
			return (
				<div className={`affx-pct-card-wrapper`}>
					{compShowImage && ("undefined" != typeof pctTable[index].pctImg) ?
						<div data-column="Image" className="affx-pct-image-wrapper"><img src={pctTable[index].pctImg} /></div> : ''
					}
					<div className="af-small-wrap">
						<div data-column="Product" className="affx-pct-details-wrapper">
							<RichText.Content
								tagName="span"
								className="affx-pct-details-subtitle"
								value={pctTable[index].pctSubTitle}
							/>
							<RichText.Content
								tagName="h2"
								className="affx-pct-details-title"
								value={pctTable[index].pctTitle}
							/>
						</div>

						{edPctUserRatings && (
								<div className={`affx-pct-star-rating-wrapper affx-pct-star-rating-layout-inline`}>
									<div className="pct-user-rating-wrapper">
										<span className="pct-user-rating">{RatingLabel}</span>
									</div>
									<div className="star-rating">
										<RatingView
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
							<RichText.Content
								tagName="div"
								className="affx-pct-price-value"
								value={pctTable[index].pctPrice}
							/>
							<RichText.Content
								tagName="div"
								className="affx-pct-price-slash"
								value={pctTable[index].pctPriceSlash}
							/>
							{contentType === "list" && unorderedType === 'bullet' &&
								<RichText.Content
									tagName={listType == "unordered" ? "ul" : "ol"}
									multiline="li"
									value={pctTable[index].pctFeatures}
									className="affiliatex-list bullet"
								/>
							}
							{contentType === "list" && unorderedType === 'icon' &&
								<RichText.Content
									tagName={listType == "unordered" ? "ul" : "ol"}
									multiline="li"
									value={pctTable[index].pctFeatures}
									className={`affiliatex-list icon affiliatex-icon affiliatex-icon-${featureListIcon.name}`}
								/>
							}
							{contentType === "paragraph" &&
								<RichText.Content
									tagName="p"
									value={pctTable[index].pctFeatureContent}
									className="affiliatex-content"
								/>
							}
						</div>						
					</div>
					<div className="layout-3-btn-wrap">						
						{pctTable[index].pctButtonURL && getbutton("affx-pct-button-one", pctTable[index].pctButtonText, pctTable[index].pctButtonURL)}						
					</div>
				</div>
			);
		})
	}

	if (pctTable.length) {
		pctSaveDisplayFour = pctTable.map((location, index) => {
			return (
				<tr className={`affx-pct-card-wrapper`}>
					<td data-column="DescOne" className="affx-pct-details-wrapper">
						<RichText.Content
							tagName="span"
							className="affx-pct-details-descone"
							value={pctTable[index].pctDescOne}
						/>
					</td>
					{ ( compColumn >=1 ) ?
					<td data-column="DescTwo" className="affx-pct-details-wrapper">
						<RichText.Content
							tagName="span"
							className="affx-pct-details-desctwo"
							value={pctTable[index].pctDescTwo}
						/>
					</td> : ''}
					{ ( compColumn >=2 ) ?
					<td data-column="DescThree" className="affx-pct-details-wrapper">
						<RichText.Content
							tagName="span"
							className="affx-pct-details-descthree"
							value={pctTable[index].pctDescThree}
						/>
					</td> : ''}
					{ ( compColumn >=3 ) ?
					<td data-column="DescFour" className="affx-pct-details-wrapper">
						<RichText.Content
							tagName="span"
							className="affx-pct-details-descfour"
							value={pctTable[index].pctDescFour}
						/>
					</td> : ''}

				</tr>
			);
		})
	}

	return (
		<>
			<style>
				{blocks_styling(
					attributes,
					"affiliatex-pct-blocks-style",
					block_id
				)}
			</style>

			<div id={`affiliatex-pct-blocks-style-${block_id}`} className={`affx-pct-wrapper`}>
				<div className={`affx-pct-wrapper-inner image-${compImageStyle} ${layoutStyle}`}>

					{layoutStyle && layoutStyle == 'layout-type1' &&
						<table>
							<thead className={`affx-pct-table-list`}>
								<tr>
									<th>Image</th>
									<th>Product Name</th>
									<th>Features</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody className={`affx-pct-table-body`}>
								{pctSaveDisplay}
							</tbody>
						</table>
					}
					{layoutStyle && layoutStyle == 'layout-type2' &&
						<table>
							<thead className={`affx-pct-table-list`}>
								<tr>
									<th>Image</th>
									<th>Product Name</th>
									<th>Ratings</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody className={`affx-pct-table-body`}>
								{pctSaveDisplay}
							</tbody>
						</table>
					}
					{layoutStyle && layoutStyle == 'layout-type3' &&
						<>
							{pctSaveDisplayThree}
						</>
					}
					{layoutStyle && layoutStyle == 'layout-type4' &&
						<table className={`affx-pct-table-body`}> 
                        	<thead>
								<tr className={`affx-pct-card-wrapper`}>   
								<td></td>
								{range(1, compColumn + 1).map(i => {
									const imageUrl = attributes[`compImgURL${i}`]
									const title = attributes[`compTitle${i}`]
									const featured = attributes[`compFeatured${i}`]
									const price = attributes[[`compPrice${i}`]]
									const rating = attributes[[`compRating${i}`]]
									const button = attributes[[`compButton${i}`]]
									const buttonURL = attributes[[`compButtonURL${i}`]]
									return (
										<Fragment>
												<td data-column="Products" className="affx-pct-products-wrapper">
													{featured ? <span class="affx-pct-product-featured-text">{featuredTxt}</span> : ''}
													{compShowImage && ("undefined" != typeof imageUrl) ?
														<img src={imageUrl} /> : ''
													}
													<RichText.Content
														tagName="h2"
														className="affx-pct-details-title"
														value={title}
													/>
													<RichText.Content
														tagName="div"
														className="affx-pct-price-value"
														value={price}
													/>
													{edPctUserRatings && (
														<div className="star-rating">
															<RatingView
																ratingValue={rating}
																fillColor={RatingColor}
																emptyColor={RatingInactiveColor}
																size={RatingStarSize}
															/>
														</div>	
													)}												
													{buttonURL && getbutton("affx-pct-button-one", button, buttonURL)}												

												</td>
										</Fragment>
									)
								})}
								</tr>
							</thead>
							<tbody>	
								{pctSaveDisplayFour}
							</tbody>
						</table>
					}
				</div>
			</div>
		</>
	);
};
