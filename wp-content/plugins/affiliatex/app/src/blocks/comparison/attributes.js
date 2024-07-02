const customizationData = AffiliateX.customizationData;
const attributes = {
	block_id: {
		type: "string",
		default: "",
	},
	layoutStyle: {
		type: "string",
		default: "layout-type1",
	},
	featuredTxt: {
		type: "string",
		default: "Featured Product",
	},
	featuredTxtBgColor: {
		type: "string",
		default: "#F13A3A",
	},
	compColumn: {
		type: "number",
		default: 2,
	},
	compImageStyle: {
		type: "string",
		default: "normal",
	},
	pctTable: {
		type: "array",
		default: [
			{
				pctImg: "",
				pctTitle: "Title",
				pctFeatured: false,
				pctSubTitle: "Editor Choice",
				pctRating: "0",
				pctRatingTwo: "0",
				pctFeatures: {
					type: "string",
					source: "html",
					selector: "ol,ul",
					multiline: "li",
				},
				pctFeatureContent: "",
				pctPrice: "$49",
				pctPriceSlash: "$59",
				pctButtonText: "Purchase Now",
				pctButtonURL: "",
				pctButtonTwoText: "",
				pctButtonTwoURL: "",
				pctDescOne: "",
				pctDescTwo: "",
				pctDescThree: "",
				pctDescFour: "",
			},
		],
	},
	compCardBgType: {
		type: "string",
		default: "solid",
	},
	compCardBgGradient: {
		type: "object",
		default: {
			gradient: "",
		},
	},
	compCardBgColor: {
		type: "string",
		default: "#ffffff",
	},
	compBorder: {
		type: "object",
		default: {
			style: "solid",
			color: {
				color: "#dddddd",
			},
		},
	},
	compBorderWidth: {
		type: "object",
		default: {
			desktop: {
				top: "1px",
				left: "1px",
				right: "1px",
				bottom: "1px",
			},
			mobile: {
				top: "1px",
				left: "1px",
				right: "1px",
				bottom: "1px",
			},
			tablet: {
				top: "1px",
				left: "1px",
				right: "1px",
				bottom: "1px",
			},
		},
	},
	compBorderRadius: {
		type: "object",
		default: {
			desktop: {
				top: "5px",
				left: "5px",
				right: "5px",
				bottom: "5px",
			},
			mobile: {
				top: "5px",
				left: "5px",
				right: "5px",
				bottom: "5px",
			},
			tablet: {
				top: "5px",
				left: "5px",
				right: "5px",
				bottom: "5px",
			},
		},
	},
	compboxShadow: {
		type: "object",
		default: {
			enable: false,
			h_offset: 0,
			v_offset: 5,
			blur: 20,
			spread: 0,
			inset: false,
			color: {
				color: "rgba(210,213,218,0.2)",
			},
		},
	},
	compMargin: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compShowImage: {
		type: "boolean",
		default: true,
	},
	compImgWidth: {
		type: "object",
		default: "100px",
	},
	compImgMargin: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compImgPadding: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	comptitleColor: {
		type: "string",
		default: "",
	},
	comptitleHoverColor: {
		type: "string",
		default: "",
	},
	compratingColor: {
		type: "string",
		default: "",
	},
	compratingHoverColor: {
		type: "string",
		default: "",
	},
	compRatingSize: {
		type: "number",
	},
	compRatingGap: {
		type: "number",
	},
	compRatingAlign: {
		type: "string",
		default: "left",
	},
	compRatingunmarkedColor: {
		type: "string",
		default: "#ccd6df",
	},
	compRatingfontSize: {
		type: "number",
	},
	compRatingfontSizeType: {
		type: "string",
		default: "px",
	},
	compRatingfontSizeTablet: {
		type: "number",
	},
	compRatingfontSizeMobile: {
		type: "number",
	},
	compRatingfontFamily: {
		type: "string",
		default: "Default",
	},
	compRatingfontWeight: {
		type: "string",
	},
	compRatinglineHeightType: {
		type: "string",
		default: "em",
	},
	compRatinglineHeight: {
		type: "number",
	},
	compfeaturesColor: {
		type: "string",
		default: "",
	},
	compfeaturesHoverColor: {
		type: "string",
		default: "",
	},
	comppriceColor: {
		type: "string",
		default: "",
	},
	comppriceHoverColor: {
		type: "string",
		default: "",
	},
	comppriceSlashColor: {
		type: "string",
		default: "",
	},
	comppriceSlashHoverColor: {
		type: "string",
		default: "",
	},
	comppriceMoreColor: {
		type: "string",
		default: "",
	},
	comppriceMoreHoverColor: {
		type: "string",
		default: "",
	},
	compSubtitleColor: {
		type: "string",
		default: "#24B644",
	},
	compSubtitleBgColor: {
		type: "string",
		default: "#D7F9DF",
	},
	compSubtitleHoverColor: {
		type: "string",
		default: "",
	},
	compbuttonOneColor: {
		type: "string",
		default: "#ffffff",
	},
	compbuttonOneBgColor: {
		type: "string",
		default: "#2670FF",
	},

	compbuttonOneHoverColor: {
		type: "string",
		default: "##fff",
	},

	compbuttonOneBgHoverColor: {
		type: "string",
		default: "#FFB800",
	},

	compbuttonTwoColor: {
		type: "string",
		default: "#ffffff",
	},
	compbuttonTwoBgColor: {
		type: "string",
		default: "#FFB800",
	},
	compbuttonTwoHoverColor: {
		type: "string",
		default: "#fff",
	},

	compbuttonTwoBgHoverColor: {
		type: "string",
		default: "#FFB800",
	},

	compTableBgColor: {
		type: "string",
		default: "#084ACA",
	},
	subtitleTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	titleTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	featuresListTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	priceTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "24px",
				mobile: "24px",
				tablet: "24px",
			},
			"line-height": "1.5",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	buttonOneTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	buttonTwoTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	featuredTextTypography: {
		type: "object",
		default: {
			family: customizationData?.typography?.family || "Default",
			variation: "Default",

			size: {
				desktop: "17px",
				mobile: "18px",
				tablet: "20px",
			},
			"line-height": "1.65",
			"letter-spacing": "0em",
			"text-transform": "none",
			"text-decoration": "none",
		},
	},
	compButtonOneMargin: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "0px",
				right: "0px",
				bottom: "0px",
			},
			mobile: {
				top: "10px",
				left: "0px",
				right: "0px",
				bottom: "0px",
			},
			tablet: {
				top: "10px",
				left: "0px",
				right: "0px",
				bottom: "0px",
			},
		},
	},
	compButtonOnePadding: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "30px",
				right: "30px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compButtonTwoMargin: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compButtonTwoPadding: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compFeaturedTextMargin: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compFeaturedTextPadding: {
		type: "object",
		default: {
			desktop: {
				top: "10px",
				left: "10px",
				right: "10px",
				bottom: "10px",
			},
			mobile: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
			tablet: {
				top: "10px",
				left: "5px",
				right: "10px",
				bottom: "5px",
			},
		},
	},
	compEditorTextMargin: {
		type: "object",
		default: {
			desktop: {
				top: "0px",
				left: "0px",
				right: "0px",
				bottom: "8px",
			},
			mobile: {
				top: "0px",
				left: "0px",
				right: "0px",
				bottom: "8px",
			},
			tablet: {
				top: "0px",
				left: "0px",
				right: "0px",
				bottom: "8px",
			},
		},
	},
	compEditorTextPadding: {
		type: "object",
		default: {
			desktop: {
				top: "1px",
				left: "10px",
				right: "10px",
				bottom: "1px",
			},
			mobile: {
				top: "1px",
				left: "5px",
				right: "10px",
				bottom: "1px",
			},
			tablet: {
				top: "1px",
				left: "5px",
				right: "10px",
				bottom: "1px",
			},
		},
	},
	compEditorboxShadow: {
		type: "object",
		default: {
			enable: false,
			h_offset: 0,
			v_offset: 5,
			blur: 20,
			spread: 0,
			inset: false,
			color: {
				color: "rgba(210,213,218,0.2)",
			},
		},
	},
	edButtonOneIcon: {
		type: "boolean",
		default: false,
	},
	buttonOneIcon: {
		type: "object",
		default: {
			name: "thumb-up-simple",
			value: "far fa-thumbs-up",
		},
	},

	buttonOneiconPosition: {
		type: "string",
		default: "axBtnright",
	},
	buttonOneIconSize: {
		type: "object",
		default: {
			desktop: "18px",
			mobile: "18px",
			tablet: "18px",
		},
	},
	edButtonTwoIcon: {
		type: "boolean",
		default: false,
	},
	buttonTwoiconPosition: {
		type: "string",
		default: "axBtnright",
	},
	buttonTwoIconSize: {
		type: "object",
		default: {
			desktop: "18px",
			mobile: "18px",
			tablet: "18px",
		},
	},
	buttonTwoIcon: {
		type: "object",
		default: {
			name: "thumb-up-simple",
			value: "far fa-thumbs-up",
		},
	},
	edPctUserRatings: {
		type: "boolean",
		default: true,
	},
	RatingLabel: {
		type: "string",
		default: "",
	},
	RatingStarSize: {
		type: "number",
		default: 25,
	},
	RatingColor: {
		type: "string",
		default: "#FFD700",
	},
	RatingInactiveColor: {
		type: "string",
		default: "#808080",
	},
	contentType: {
		type: "string",
		default: "list",
	},
	listType: {
		type: "string",
		default: "unordered",
	},
	unorderedType: {
		type: "string",
		default: "icon",
	},
	featureListIcon: {
		type: "object",
		default: {
			name: "check-circle",
			value: "far fa-circle",
		},
	},
};

export default attributes;
