/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import { generateCSS } from "../helpers/generateCSS";
import { cssBoxShadow, fontWeightVariation, fontStyle } from "../ui-components/helpers/get-label";

export default (attributes, id, clientId) => {

	const {
		compBorder,
		compBorderWidth,
		compBorderRadius,
		compboxShadow,
		compMargin,
		compCardBgType,
		compCardBgColor,
		compCardBgGradient,
		compImgWidth,
		compImgMargin,
		compImgPadding,
		
		compTableBgColor,
		comptitleColor,
		comptitleHoverColor,
		compratingColor,
		compratingHoverColor,
		compfeaturesColor,
		compfeaturesHoverColor,
		compfeaturedColor,
		compfeaturedBgColor,
		comppriceColor,
		comppriceHoverColor,
		comppriceSlashColor,
		comppriceSlashHoverColor,
		compSubtitleColor,
		compSubtitleHoverColor,
		compSubtitleBgColor,
		compbuttonOneColor,
		compbuttonOneBgColor,
		compbuttonOneHoverColor,
		compbuttonOneBgHoverColor,
		compbuttonTwoColor,
		compbuttonTwoBgColor,
		compbuttonTwoHoverColor,
		compbuttonTwoBgHoverColor,
		subtitleTypography,
		titleTypography,
		featuresListTypography,
		featuredTextTypography,
		compButtonOneMargin,
		compButtonOnePadding,
		compButtonTwoMargin,
		compButtonTwoPadding,
		buttonOneTypography,
		buttonTwoTypography,
		priceTypography,
		compEditorTextMargin,
		compEditorTextPadding,
		compEditorboxShadow
	} = attributes;

	var selectors = {}
	var mobile_selectors = {}
	var tablet_selectors = {}

	selectors = {
		" .affx-pct-wrapper-inner": {
			"border-style": compBorder.style,
			"border-width": compBorderWidth.desktop.top + ' ' + compBorderWidth.desktop.right + ' ' + compBorderWidth.desktop.bottom + ' ' + compBorderWidth.desktop.left,
			"border-color": compBorder.color.color,
			"border-radius": compBorderRadius.desktop.top + ' ' + compBorderRadius.desktop.right + ' ' + compBorderRadius.desktop.bottom + ' ' + compBorderRadius.desktop.left,
			"box-shadow": cssBoxShadow(compboxShadow),
			"margin-top": compMargin.desktop.top,
			"margin-left": compMargin.desktop.left,
			"margin-right": compMargin.desktop.right,
			"margin-bottom": compMargin.desktop.bottom,
		},
		" .affx-pct-image-wrap img": {
			"margin-top": compImgMargin.desktop.top,
			"margin-left": compImgMargin.desktop.left,
			"margin-right": compImgMargin.desktop.right,
			"margin-bottom": compImgMargin.desktop.bottom,
			"width": compImgWidth,
			"padding-top": compImgPadding.desktop.top,
			"padding-left": compImgPadding.desktop.left,
			"padding-right": compImgPadding.desktop.right,
			"padding-bottom": compImgPadding.desktop.bottom,
		},
		" .affx-pct-details-wrapper .affx-pct-details-title": {
			"color": comptitleColor,
			"font-family": titleTypography.family,
			"font-weight": fontWeightVariation(titleTypography.variation),
			"font-style": fontStyle(titleTypography.variation),
			"font-size": titleTypography.size.desktop,
			"line-height": titleTypography["line-height"].desktop,
			"text-transform": titleTypography["text-transform"],
			"text-decoration": titleTypography["text-decoration"],
			"letter-spacing": titleTypography["letter-spacing"].desktop,
		},

		" .affx-pct-details-title": {
			"color": comptitleColor,
			"font-family": titleTypography.family,
			"font-weight": fontWeightVariation(titleTypography.variation),
			"font-style": fontStyle(titleTypography.variation),
			"font-size": titleTypography.size.desktop,
			"line-height": titleTypography["line-height"].desktop,
			"text-transform": titleTypography["text-transform"],
			"text-decoration": titleTypography["text-decoration"],
			"letter-spacing": titleTypography["letter-spacing"].desktop,
		},
		" .affx-pct-details-title:hover": {
			"color": comptitleHoverColor,
		},


		" .affx-pct-details-wrapper .affx-pct-details-title:hover": {
			"color": comptitleHoverColor,
		},
		" .affx-pct-products-wrapper .affx-pct-details-title:hover": {
			"color": comptitleHoverColor,
		},
		" .affx-pct-products-wrapper .affx-pct-details-title": {
			"color": comptitleColor,
		},

		" .affx-pct-wrapper-inner table thead": {
			"background-color": compTableBgColor,
		},
		
		" .affx-pct-product-featured-text": {
			"background-color": compfeaturedBgColor,
			"color" :compfeaturedColor, 
		},
		" .affx-pct-product-featured-text::before": {
			"border-bottom-color": compfeaturedBgColor,
		},

		" .affx-pct-wrapper-inner.layout-type4 thead .affx-pct-card-wrapper .affx-pct-product-featured-text::after": {
			"border-bottom-color": compfeaturedBgColor,
		},

		" .affx-pct-wrapper-inner table tbody .affx-pct-product-featured-text": {
			"color": compfeaturedColor,
			"font-family": featuredTextTypography.family,
			"font-weight": fontWeightVariation(featuredTextTypography.variation),
			"font-style": fontStyle(featuredTextTypography.variation),
			"font-size": featuredTextTypography.size.desktop,
			"line-height": featuredTextTypography["line-height"].desktop,
			"text-transform": featuredTextTypography["text-transform"],
			"text-decoration": featuredTextTypography["text-decoration"],
			"letter-spacing": featuredTextTypography["letter-spacing"].desktop,
		},

		" .affx-pct-card-wrapper a.affx-pct-button-one": {
			"color": compbuttonOneColor,
			"background-color": compbuttonOneBgColor,
			"font-family": buttonOneTypography.family,
			"font-weight": fontWeightVariation(buttonOneTypography.variation),
			"font-style": fontStyle(buttonOneTypography.variation),
			"font-size": buttonOneTypography.size.desktop,
			"line-height": buttonOneTypography["line-height"].desktop,
			"text-transform": buttonOneTypography["text-transform"],
			"text-decoration": buttonOneTypography["text-decoration"],
			"letter-spacing": buttonOneTypography["letter-spacing"].desktop,
			"margin-top": compButtonOneMargin.desktop.top,
			"margin-left": compButtonOneMargin.desktop.left,
			"margin-right": compButtonOneMargin.desktop.right,
			"margin-bottom": compButtonOneMargin.desktop.bottom,
			"padding-top": compButtonOnePadding.desktop.top,
			"padding-left": compButtonOnePadding.desktop.left,
			"padding-right": compButtonOnePadding.desktop.right,
			"padding-bottom": compButtonOnePadding.desktop.bottom,
		},
		
		" .affx-pct-card-wrapper a.affx-pct-button-two": {
			"color": compbuttonTwoColor,
			"background-color": compbuttonTwoBgColor,
			"font-family": buttonTwoTypography.family,
			"font-weight": fontWeightVariation(buttonTwoTypography.variation),
			"font-style": fontStyle(buttonTwoTypography.variation),
			"font-size": buttonTwoTypography.size.desktop,
			"line-height": buttonTwoTypography["line-height"].desktop,
			"text-transform": buttonTwoTypography["text-transform"],
			"text-decoration": buttonTwoTypography["text-decoration"],
			"letter-spacing": buttonTwoTypography["letter-spacing"].desktop,
			"margin-top": compButtonTwoMargin.desktop.top,
			"margin-left": compButtonTwoMargin.desktop.left,
			"margin-right": compButtonTwoMargin.desktop.right,
			"margin-bottom": compButtonTwoMargin.desktop.bottom,
			"padding-top": compButtonTwoPadding.desktop.top,
			"padding-left": compButtonTwoPadding.desktop.left,
			"padding-right": compButtonTwoPadding.desktop.right,
			"padding-bottom": compButtonTwoPadding.desktop.bottom,
		},
		" .affx-pct-wrapper-inner.layout-type2 .affx-pct-star-rating-wrapper svg path": {
			"stroke": compratingColor,
		},

		" .affx-pct-wrapper-inner.layout-type2 .affx-pct-star-rating-wrapper svg .CircularProgressbar-text": {
			"fill": compratingColor,
		},

		" .affx-pct-wrapper-inner .affx-pct-star-rating-wrapper .affx-pct-star-rating .affx-pct-star": {
			"color": compratingColor,
		},

		" .affx-pct-wrapper-inner .affx-pct-star-rating-wrapper .affx-pct-star-rating .affx-pct-star:hover": {
			"color": compratingHoverColor,
		},

		" .affx-pct-star-rating .affx-pct-star": {
			"color": compratingColor,
		},

		" .affx-pct-star-rating .affx-pct-star:hover": {
			"color": compratingHoverColor,
		},



		" .affx-pct-card-wrapper a.affx-pct-button-one:hover": {
			"background-color": compbuttonOneBgHoverColor,
			"color" : compbuttonOneHoverColor,
		},
		
		" .affx-pct-card-wrapper a.affx-pct-button-two:hover": {
			"background-color": compbuttonTwoBgHoverColor,
			"color" : compbuttonTwoHoverColor,
		},
		
		" .affx-pct-wrapper-inner.layout-type3 .affx-pct-card-wrapper a.affx-pct-button-one": {
			"box-shadow": cssBoxShadow(compEditorboxShadow),
		},

		" .affx-pct-wrapper-inner .affx-pct-feature li": {
			"color": compfeaturesColor,
			"font-family": featuresListTypography.family,
			"font-weight": fontWeightVariation(featuresListTypography.variation),
			"font-style": fontStyle(featuresListTypography.variation),
			"font-size": featuresListTypography.size.desktop,
			"line-height": featuresListTypography["line-height"].desktop,
			"text-transform": featuresListTypography["text-transform"],
			"text-decoration": featuresListTypography["text-decoration"],
			"letter-spacing": featuresListTypography["letter-spacing"].desktop,
		},

		" .affx-pct-wrapper-inner .affx-pct-feature li:hover": {
			"color": compfeaturesHoverColor,
		},

		" .affiliatex-content": {
			"color": compfeaturesColor,
			"font-family": featuresListTypography.family,
			"font-weight": fontWeightVariation(featuresListTypography.variation),
			"font-style": fontStyle(featuresListTypography.variation),
			"font-size": featuresListTypography.size.desktop,
			"line-height": featuresListTypography["line-height"].desktop,
			"text-transform": featuresListTypography["text-transform"],
			"text-decoration": featuresListTypography["text-decoration"],
			"letter-spacing": featuresListTypography["letter-spacing"].desktop,
		},

		" .affiliatex-content:hover": {
			"color": compfeaturesHoverColor,
		},

		" .affiliatex-list li": {
			"color": compfeaturesColor,
			"font-family": featuresListTypography.family,
			"font-weight": fontWeightVariation(featuresListTypography.variation),
			"font-style": fontStyle(featuresListTypography.variation),
			"font-size": featuresListTypography.size.desktop,
			"line-height": featuresListTypography["line-height"].desktop,
			"text-transform": featuresListTypography["text-transform"],
			"text-decoration": featuresListTypography["text-decoration"],
			"letter-spacing": featuresListTypography["letter-spacing"].desktop,
		},

		" .affiliatex-list li:hover": {
			"color": compfeaturesHoverColor,
		},

		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-value": {
			"color": comppriceColor,
			"font-family": priceTypography.family,
			"font-weight": fontWeightVariation(priceTypography.variation),
			"font-style": fontStyle(priceTypography.variation),
			"font-size": priceTypography.size.desktop,
			"line-height": priceTypography["line-height"].desktop,
			"text-transform": priceTypography["text-transform"],
			"text-decoration": priceTypography["text-decoration"],
			"letter-spacing": priceTypography["letter-spacing"].desktop,
		},

		" .affx-pct-price-value": {
			"color": comppriceColor,
			"font-family": priceTypography.family,
			"font-weight": fontWeightVariation(priceTypography.variation),
			"font-style": fontStyle(priceTypography.variation),
			"font-size": priceTypography.size.desktop,
			"line-height": priceTypography["line-height"].desktop,
			"text-transform": priceTypography["text-transform"],
			"text-decoration": priceTypography["text-decoration"],
			"letter-spacing": priceTypography["letter-spacing"].desktop,
		},


		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-value:hover": {
			"color": comppriceHoverColor,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-slash": {
			"color": comppriceSlashColor,
			"font-family": priceTypography.family,
			"font-weight": fontWeightVariation(priceTypography.variation),
			"font-style": fontStyle(priceTypography.variation),
			"font-size": priceTypography.size.desktop,
			"line-height": priceTypography["line-height"].desktop,
			"text-transform": priceTypography["text-transform"],
			"text-decoration": priceTypography["text-decoration"],
			"letter-spacing": priceTypography["letter-spacing"].desktop,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-slash:hover": {
			"color": comppriceSlashHoverColor,
		},
		" .affx-pct-card-wrapper .affx-pct-details-subtitle": {
			"color": compSubtitleColor,
			"background-color": compSubtitleBgColor,
			"font-family": subtitleTypography.family,
			"font-weight": fontWeightVariation(subtitleTypography.variation),
			"font-style": fontStyle(subtitleTypography.variation),
			"font-size": subtitleTypography.size.desktop,
			"line-height": subtitleTypography["line-height"].desktop,
			"text-transform": subtitleTypography["text-transform"],
			"text-decoration": subtitleTypography["text-decoration"],
			"letter-spacing": subtitleTypography["letter-spacing"].desktop,
			"margin-top": compEditorTextMargin.desktop.top,
			"margin-left": compEditorTextMargin.desktop.left,
			"margin-right": compEditorTextMargin.desktop.right,
			"margin-bottom": compEditorTextMargin.desktop.bottom,
			"padding-top": compEditorTextPadding.desktop.top,
			"padding-left": compEditorTextPadding.desktop.left,
			"padding-right": compEditorTextPadding.desktop.right,
			"padding-bottom": compEditorTextPadding.desktop.bottom,
		},
		" .affx-pct-card-wrapper .affx-pct-details-subtitle:hover": {
			"color": compSubtitleHoverColor,
		},
		" .affiliatex-notice-content .affiliatex-list": {},
		" .affx-pct-card-wrapper": {}
	}
	selectors[" .affx-pct-card-wrapper"].background = compCardBgType === 'solid' ? compCardBgColor : compCardBgGradient.gradient
	// selectors[" .affx-notice-inner-wrapper"].background = listBgType === 'solid' ? listBgColor : listBgGradient.gradient
	// selectors[" .affiliatex-notice-content .affiliatex-list"]["list-style"] = noticeContentType == "list" && noticeListType == "unordered" ? 'none' : ''

	tablet_selectors = {
		" .affx-pct-image-wrap": {
			"margin-top": compImgMargin.tablet.top,
			"margin-left": compImgMargin.tablet.left,
			"margin-right": compImgMargin.tablet.right,
			"margin-bottom": compImgMargin.tablet.bottom,
			"padding-top": compImgPadding.tablet.top,
			"padding-left": compImgPadding.tablet.left,
			"padding-right": compImgPadding.tablet.right,
			"padding-bottom": compImgPadding.tablet.bottom,
		},
		" .affx-pct-wrapper-inner .affx-pct-details-wrapper .affx-pct-details-title": {
			"font-size": titleTypography.size.tablet,
			"line-height": titleTypography["line-height"].tablet,
			"letter-spacing": titleTypography["letter-spacing"].tablet,
		},
		" .affx-pct-wrapper-inner .affx-pct-features-wrapper .affx-pct-feature": {
			"font-size": featuresListTypography.size.tablet,
			"line-height": featuresListTypography["line-height"].tablet,
			"letter-spacing": featuresListTypography["letter-spacing"].tablet,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-slash": {
			"font-size": priceTypography.size.tablet,
			"line-height": priceTypography["line-height"].tablet,
			"letter-spacing": priceTypography["letter-spacing"].tablet,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-value": {
			"font-size": priceTypography.size.tablet,
			"line-height": priceTypography["line-height"].tablet,
			"letter-spacing": priceTypography["letter-spacing"].tablet,
		},
	}

	mobile_selectors = {
		" .affx-pct-image-wrap": {
			"margin-top": compImgMargin.mobile.top,
			"margin-left": compImgMargin.mobile.left,
			"margin-right": compImgMargin.mobile.right,
			"margin-bottom": compImgMargin.mobile.bottom,
			"padding-top": compImgPadding.mobile.top,
			"padding-left": compImgPadding.mobile.left,
			"padding-right": compImgPadding.mobile.right,
			"padding-bottom": compImgPadding.mobile.bottom,
		},
		" .affx-pct-wrapper-inner .affx-pct-details-wrapper .affx-pct-details-title": {
			"font-size": titleTypography.size.mobile,
			"line-height": titleTypography["line-height"].mobile,
			"letter-spacing": titleTypography["letter-spacing"].mobile,
		},
		" .affx-pct-wrapper-inner .affx-pct-features-wrapper .affx-pct-feature": {
			"font-size": featuresListTypography.size.mobile,
			"line-height": featuresListTypography["line-height"].mobile,
			"letter-spacing": featuresListTypography["letter-spacing"].mobile,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-slash": {
			"font-size": priceTypography.size.mobile,
			"line-height": priceTypography["line-height"].mobile,
			"letter-spacing": priceTypography["letter-spacing"].mobile,
		},
		" .affx-pct-wrapper-inner .affx-pct-price-wrapper .affx-pct-price-value": {
			"font-size": priceTypography.size.mobile,
			"line-height": priceTypography["line-height"].mobile,
			"letter-spacing": priceTypography["letter-spacing"].mobile,
		},
	}

	var block_styling_css = ""

	block_styling_css = generateCSS(selectors, `#${id}-${clientId}`)
	block_styling_css += generateCSS(tablet_selectors, `#${id}-${clientId}`, true, "tablet")
	block_styling_css += generateCSS(mobile_selectors, `#${id}-${clientId}`, true, "mobile")

	return block_styling_css;
}