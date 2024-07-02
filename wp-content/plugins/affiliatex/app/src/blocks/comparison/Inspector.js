import { __ } from "@wordpress/i18n";
import ColorPicker from "../ui-components/colorPicker";
import GenericOptionType from "../ui-components/GenericOptionType";
import Typography from "../ui-components/typographyOptions";
import GradientPicker from "../ui-components/options/background/GradientPicker";
import IconSelector from "../ui-components/icon-picker";

export default ({ attributes, setAttributes, className, isSelected, clientId }) => {
	const { InspectorControls } = wp.blockEditor;
	const { PanelBody, TextControl, ToggleControl, SelectControl, RangeControl, Dashicon, Dropdown, Button, ToolbarButton } = wp.components;
	const {
		layoutStyle,
		compColumn,
		compBorder,
		compBorderWidth,
		compBorderRadius,
		compMargin,
		compboxShadow,
		compCardBgType,
		compCardBgColor,
		compCardBgGradient,
		compShowImage,
		compImageStyle,
		compImgWidth,
		compImgMargin,
		compImgPadding,
		comptitleColor,
		comptitleHoverColor,
		compfeaturedColor,
		compfeaturedBgColor,
		compratingColor,
		compratingHoverColor,
		compfeaturesColor,
		compfeaturesHoverColor,
		comppriceColor,
		comppriceHoverColor,
		comppriceSlashColor,
		comppriceSlashHoverColor,
		compSubtitleColor,
		compSubtitleHoverColor,
		compSubtitleBgColor,
		compButtonOneMargin,
		compButtonOnePadding,
		compButtonTwoMargin,
		compButtonTwoPadding,
		compbuttonOneColor,
		compbuttonOneBgColor,
		compbuttonOneHoverColor,
		compbuttonOneBgHoverColor,
		compbuttonTwoColor,
		compbuttonTwoBgColor,
		compbuttonTwoHoverColor,
		compbuttonTwoBgHoverColor,
		compTableBgColor,
		subtitleTypography,
		titleTypography,
		featuresListTypography,
		priceTypography,
		featuredTxt,		
		featuredTextTypography,
		buttonOneTypography,
		buttonTwoTypography,	
		edButtonOneIcon,
		buttonOneIcon,
		buttonOneiconPosition,	
		buttonOneIconSize,
		edButtonTwoIcon,
		buttonTwoIcon,
		buttonTwoiconPosition,	
		buttonTwoIconSize,
		compEditorTextMargin,
		compEditorTextPadding,
		compEditorboxShadow,
		edPctUserRatings,
		RatingLabel,
		RatingStarSize,
		RatingColor,
		RatingInactiveColor,
		contentType,
		listType,
		unorderedType,
		featureListIcon
	} = attributes;

	const { Fragment } = wp.element;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={__("Layout Settings", "affiliatex")} className={"affx-panel-label"} initialOpen={false}>
				<div className="affiliate-blocks-option">
					<SelectControl
						label={__("Choose Layout", "affiliatex")}
						value={layoutStyle}
						options={[
							{ value: 'layout-type1', label: 'Default Layout' },
							{ value: 'layout-type2', label: 'Layout Two' },
							{ value: 'layout-type3', label: 'Layout Three' },							
							{ value: 'layout-type4', label: 'Layout Four' },
						]}
						onChange={(value) => setAttributes({ layoutStyle: value })}
					/>
				</div>
				{ layoutStyle && layoutStyle == 'layout-type4' &&
					<div className="affiliate-blocks-option">
						<label>{__("Number Of Products", "affiliatex")}</label>
						<RangeControl
							value={compColumn}
							onChange={newcompColumn => setAttributes({ compColumn: newcompColumn })}
							min={1}
							max={3}
							className="affx-pct-general-columns"
						/>

					</div>
				}
			</PanelBody>
			<PanelBody title={__("General Settings", "affiliatex")} initialOpen={false}>				
				<div className="affiliate-blocks-option">
					<label>{__("Featured Product Text", "affiliatex")}</label>
					<TextControl
						value={featuredTxt}
						onChange={(value) => setAttributes({ featuredTxt: value })}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compCardBgType}
						values={compCardBgType}
						id="comp-card-bg-type"
						option={{
							id: "comp-card-bg-type",
							label: __("Card Background Color Type", "affiliatex"),
							type: "ab-radio",
							choices: { solid: __("Solid Color", "affiliatex"), gradient: __("Gradient", "affiliatex") },
						}}
						hasRevertButton={true}
						onChange={(newValue) =>
							setAttributes({ compCardBgType: newValue })
						}
					/>
				</div>
				{
					compCardBgType === "solid" && (
						<div className="affiliate-blocks-option">
							<label>{__("Color", "affiliatex")}</label>
							<ColorPicker
								value={{
									bgColor: { color: compCardBgColor },
								}}
								onChange={(colorValue) =>
									setAttributes({ compCardBgColor: colorValue.bgColor.color })
								}
								option={{
									pickers: [
										{
											id: "bgColor",
											title: __("Bg Color", "affiliatex"),
										}
									],
								}}
							/>
						</div>
					)
				}
				{
					compCardBgType === 'gradient' && (
						<div className="affiliate-blocks-option">
							<GradientPicker
								value={compCardBgGradient}
								onChange={(gradientValue) =>
									setAttributes({ compCardBgGradient: gradientValue })
								}
							/>
						</div>
					)
				}
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compBorder}
						values={compBorder}
						id="affx-pct-general-box-border"
						option={{
							id: "affx-pct-general-box-border",
							label: __("Box Border", "affiliatex"),
							type: "ab-border",
							value: compBorder,
						}}
						hasRevertButton={true}
						onChange={(newcompBorder) =>
							setAttributes({ compBorder: newcompBorder })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compBorderWidth}
						values={compBorderWidth}
						id="affx-pct-general-border-width"
						option={{
							id: "affx-pct-general-border-width",
							label: __("Border Width", "affiliatex"),
							type: "ab-spacing",
							value: compBorderWidth,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 100,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompBorderWidth) =>
							setAttributes({ compBorderWidth: newcompBorderWidth })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compBorderRadius}
						values={compBorderRadius}
						id="affx-pct-general-border-radius"
						option={{
							id: "affx-pct-general-border-radius",
							label: __("Border Radius", "affiliatex"),
							type: "ab-spacing",
							value: compBorderRadius,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 100,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompBorderRadius) =>
							setAttributes({ compBorderRadius: newcompBorderRadius })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compboxShadow}
						values={compboxShadow}
						id="affx-pct-general-box-shadow"
						option={{
							id: "affx-pct-general-box-shadow",
							label: __("Box Shadow", "affiliatex"),
							type: "ab-box-shadow",
							divider: "top",
							value: compboxShadow,
						}}
						hasRevertButton={true}
						onChange={(newcompBoxShadow) =>
							setAttributes({ compboxShadow: newcompBoxShadow })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compMargin}
						values={compMargin}
						id="affx-pct-general-notice-margin"
						option={{
							id: "affx-pct-general-notice-margin",
							label: __("Margin", "affiliatex"),
							type: "ab-spacing",
							value: compMargin,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 10,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompMargin) =>
							setAttributes({ compMargin: newcompMargin })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compEditorTextMargin}
						values={compEditorTextMargin}
						id="affx-pct-button-margin"
						option={{
							id: "affx-pct-button-margin",
							label: __("Editor Choice Margin", "affiliatex"),
							type: "ab-spacing",
							value: compEditorTextMargin,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 10,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompEditorTextMargin) =>
							setAttributes({ compEditorTextMargin: newcompEditorTextMargin })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compEditorTextPadding}
						values={compEditorTextPadding}
						id="affx-pct-button-padding"
						option={{
							id: "affx-pct-button-padding",
							label: __("Editor Choice Padding", "affiliatex"),
							type: "ab-spacing",
							value: compEditorTextPadding,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 10,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompEditorTextPadding) =>
							setAttributes({ compEditorTextPadding: newcompEditorTextPadding })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compEditorboxShadow}
						values={compEditorboxShadow}
						id="affx-pct-general-layout3-box-shadow"
						option={{
							id: "affx-pct-general-layout3-box-shadow",
							label: __("Box Shadow", "affiliatex"),
							type: "ab-box-shadow",
							divider: "top",
							value: compEditorboxShadow,
						}}
						hasRevertButton={true}
						onChange={(newcompEditorBoxShadow) =>
							setAttributes({ compEditorboxShadow: newcompEditorBoxShadow })
						}
					/>
				</div>
			</PanelBody>
			<PanelBody title={__("Image Settings", "affiliatex")} initialOpen={false}>
				<div className="affiliate-blocks-option">
					<ToggleControl
						label={__('Show Image', 'affiliatex')}
						checked={compShowImage}
						onChange={newcompShowImage => setAttributes({ compShowImage: newcompShowImage })}
						className="affx-pct-image-showimage"
					/>
				</div>
				{compShowImage && (
					<Fragment>
						<div className="affiliate-blocks-option">
							<SelectControl
								label={__('Image Style', 'affilaitex')}
								value={compImageStyle}
								onChange={(newcompImageStyle) => setAttributes({ compImageStyle: newcompImageStyle })}
								options={[
									{ value: "normal", label: __("Normal", 'affilaitex') },
									{ value: "circle", label: __("Circle", 'affilaitex') },
									{ value: "square", label: __("Square", 'affilaitex') },
								]}
								className="affx-pct-image-imagestyle"
							/>
						</div>
						<div className="affiliate-blocks-option">
							<GenericOptionType
								value={compImgWidth}
								values={compImgWidth}
								id="image-fix-width"
								option={{
									id: "image-fix-width",
									label: __("Image Size", "affiliatex"),
									type: "ab-slider",
									value: compImgWidth,
									units: [
										{
											unit: "px",
											min: 0,
											max: 600,
										}
									],
								}}
								hasRevertButton={false}
								onChange={(newValue) =>
									setAttributes({ compImgWidth: newValue })
								}
							/>
						</div>
						<div className="affiliate-blocks-option">
							<GenericOptionType
								value={compImgMargin}
								values={compImgMargin}
								id="affx-pct-image-margin"
								option={{
									id: "affx-pct-image-margin",
									label: __("Margin", "affiliatex"),
									type: "ab-spacing",
									value: compImgMargin,
									responsive: true,
									units: [
										{
											unit: "",
											min: 0,
											max: 10,
											decimals: 1,
										},

										{
											unit: "px",
											min: 0,
											max: 50,
										},

										{
											unit: "em",
											min: 0,
											max: 50,
										},

										{
											unit: "pt",
											min: 0,
											max: 50,
										},

										{
											unit: "%",
											min: 0,
											max: 100,
										},
									],
								}}
								hasRevertButton={true}
								onChange={(newcompImgMargin) =>
									setAttributes({ compImgMargin: newcompImgMargin })
								}
							/>
						</div>
						<div className="affiliate-blocks-option">
							<GenericOptionType
								value={compImgPadding}
								values={compImgPadding}
								id="affx-pct-image-padding"
								option={{
									id: "affx-pct-image-padding",
									label: __("Padding", "affiliatex"),
									type: "ab-spacing",
									value: compImgPadding,
									responsive: true,
									units: [
										{
											unit: "",
											min: 0,
											max: 10,
											decimals: 1,
										},

										{
											unit: "px",
											min: 0,
											max: 50,
										},

										{
											unit: "em",
											min: 0,
											max: 50,
										},

										{
											unit: "pt",
											min: 0,
											max: 50,
										},

										{
											unit: "%",
											min: 0,
											max: 100,
										},
									],
								}}
								hasRevertButton={true}
								onChange={(newcompImgPadding) =>
									setAttributes({ compImgPadding: newcompImgPadding })
								}
							/>
						</div>
					</Fragment>
				)}
			</PanelBody>
			<PanelBody title={__("Button Settings", "affiliatex")} initialOpen={false}>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compButtonOneMargin}
						values={compButtonOneMargin}
						id="affx-pct-button-margin"
						option={{
							id: "affx-pct-button-margin",
							label: __("Margin", "affiliatex"),
							type: "ab-spacing",
							value: compButtonOneMargin,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 10,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompButtonOneMargin) =>
							setAttributes({ compButtonOneMargin: newcompButtonOneMargin })
						}
					/>
				</div>
				<div className="affiliate-blocks-option">
					<GenericOptionType
						value={compButtonOnePadding}
						values={compButtonOnePadding}
						id="affx-pct-button-padding"
						option={{
							id: "affx-pct-button-padding",
							label: __("Padding", "affiliatex"),
							type: "ab-spacing",
							value: compButtonOnePadding,
							responsive: true,
							units: [
								{
									unit: "",
									min: 0,
									max: 10,
									decimals: 1,
								},

								{
									unit: "px",
									min: 0,
									max: 50,
								},

								{
									unit: "em",
									min: 0,
									max: 50,
								},

								{
									unit: "pt",
									min: 0,
									max: 50,
								},

								{
									unit: "%",
									min: 0,
									max: 100,
								},
							],
						}}
						hasRevertButton={true}
						onChange={(newcompButtonOnePadding) =>
							setAttributes({ compButtonOnePadding: newcompButtonOnePadding })
						}
					/>
				</div>
				<label>{__("Button One Color", "affiliatex")}</label>
				<ColorPicker
					value={{
						buttonOneColor: { color: compbuttonOneColor },
						buttonOneBgColor: { color: compbuttonOneBgColor }
					}}
					onChange={(colorValue) =>
						setAttributes({ compbuttonOneColor: colorValue.buttonOneColor.color, compbuttonOneBgColor: colorValue.buttonOneBgColor.color })
					}
					option={{
						pickers: [
							{
								id: "buttonOneColor",
								title: __("Button One Color"),
							},
							{
								id: "buttonOneBgColor",
								title: __("Button One Background Color"),
							},
						],
					}}
				/>

				<ColorPicker
					value={{
						buttonOneHoverColor: { color: compbuttonOneHoverColor },
						buttonOneBgHoverColor: { color: compbuttonOneBgHoverColor }
					}}
					onChange={(colorValue) =>
						setAttributes({ compbuttonOneHoverColor: colorValue.buttonOneHoverColor.color, compbuttonOneBgHoverColor: colorValue.buttonOneBgHoverColor.color })
					}
					option={{
						pickers: [
							{
								id: "buttonOneHoverColor",
								title: __("Button One Hover Color"),
							},
							{
								id: "buttonOneBgHoverColor",
								title: __("Button One  Background Color"),
							},
						],
					}}
				/>
						
				{
					layoutStyle == 'layout-type2' && (
						<>	
							<div className="affiliate-blocks-option">
								<GenericOptionType
									value={compButtonTwoMargin}
									values={compButtonTwoMargin}
									id="affx-pct-button-margin"
									option={{
										id: "affx-pct-button-margin",
										label: __("Margin", "affiliatex"),
										type: "ab-spacing",
										value: compButtonTwoMargin,
										responsive: true,
										units: [
											{
												unit: "",
												min: 0,
												max: 10,
												decimals: 1,
											},

											{
												unit: "px",
												min: 0,
												max: 50,
											},

											{
												unit: "em",
												min: 0,
												max: 50,
											},

											{
												unit: "pt",
												min: 0,
												max: 50,
											},

											{
												unit: "%",
												min: 0,
												max: 100,
											},
										],
									}}
									hasRevertButton={true}
									onChange={(newcompButtonTwoMargin) =>
										setAttributes({ compButtonTwoMargin: newcompButtonTwoMargin })
									}
								/>
							</div>
							<div className="affiliate-blocks-option">
								<GenericOptionType
									value={compButtonTwoPadding}
									values={compButtonTwoPadding}
									id="affx-pct-button-padding"
									option={{
										id: "affx-pct-button-padding",
										label: __("Padding", "affiliatex"),
										type: "ab-spacing",
										value: compButtonTwoPadding,
										responsive: true,
										units: [
											{
												unit: "",
												min: 0,
												max: 10,
												decimals: 1,
											},

											{
												unit: "px",
												min: 0,
												max: 50,
											},

											{
												unit: "em",
												min: 0,
												max: 50,
											},

											{
												unit: "pt",
												min: 0,
												max: 50,
											},

											{
												unit: "%",
												min: 0,
												max: 100,
											},
										],
									}}
									hasRevertButton={true}
									onChange={(newcompButtonTwoPadding) =>
										setAttributes({ compButtonTwoPadding: newcompButtonTwoPadding })
									}
								/>
							</div>
							<label>{__("Button Two Color", "affiliatex")}</label>
							<ColorPicker
								value={{
									buttonTwoColor: { color: compbuttonTwoColor },
									buttonTwoBgColor: { color: compbuttonTwoBgColor }
								}}
								onChange={(colorValue) =>
									setAttributes({ compbuttonTwoColor: colorValue.buttonTwoColor.color, compbuttonTwoBgColor: colorValue.buttonTwoBgColor.color })
								}
								option={{
									pickers: [
										{
											id: "buttonTwoColor",
											title: __("Button Two Color"),
										},
										{
											id: "buttonTwoBgColor",
											title: __("Button Two Background Color"),
										},
									],
								}}
							/>
							<ColorPicker
								value={{
									buttonTwoHoverColor: { color: compbuttonTwoHoverColor },
									buttonTwoBgHoverColor: { color: compbuttonTwoBgHoverColor }
								}}
								onChange={(colorValue) =>
									setAttributes({ compbuttonTwoHoverColor: colorValue.buttonTwoHoverColor.color, compbuttonTwoBgHoverColor: colorValue.buttonTwoBgHoverColor.color })
								}
								option={{
									pickers: [
										{
											id: "buttonTwoHoverColor",
											title: __("Button Two Hover Color"),
										},
										{
											id: "buttonTwoBgHoverColor",
											title: __("Button Two Background Color"),
										},
									],
								}}
							/>
						</>
					)
				}
			</PanelBody>
			<PanelBody title={__("Button One Icon Settings", "affiliatex")} initialOpen={false}>
				<ToggleControl
					label={__('Enable Icon in button', 'affiliatex')}
					checked={!!edButtonOneIcon}
					onChange={() => setAttributes({ edButtonOneIcon: !edButtonOneIcon })}
				/>
				{
					edButtonOneIcon == true && (
						<div className="affx-btn-icon-wrapper">
							<div className="affiliate-blocks-option affiliate-icon">
							<label>{__("Select Title Icon", "affiliatex")}</label>
								<IconSelector
									value={buttonOneIcon.name}
									enableSearch
									icons={[
										{ name: 'check', value: 'fas fa-check' },
										{ name: 'check-square', value: 'fas fa-check-square' },
										{ name: 'check-square-outline', value: 'far fa-check-square' },
										{ name: 'check-double', value: 'fas fa-check-double' },
										{ name: 'check-circle', value: 'fas fa-check-circle' },
										{ name: 'check-circle-outline', value: 'far fa-check-circle' },
										{ name: 'square', value: 'fas fa-square' },
										{ name: 'square-outline', value: 'far fa-square' },
										{ name: 'circle', value: 'fas fa-circle' },
										{ name: 'circle-outline', value: 'far fa-circle' },
										{ name: 'arrow-right', value: 'fas fa-arrow-right' },
										{ name: 'arrow-left', value: 'fas fa-arrow-left' },
										{ name: 'arrow-circle-right', value: 'fas fa-arrow-circle-right' },
										{ name: 'arrow-circle-left', value: 'fas fa-arrow-circle-left' },
										{ name: 'arrow-alt-circle-right', value: 'far fa-arrow-alt-circle-right' },
										{ name: 'arrow-alt-circle-left', value: 'far fa-arrow-alt-circle-left' },
										{ name: 'long-arrow-alt-right', value: 'fas fa-long-arrow-alt-right' },
										{ name: 'long-arrow-alt-left', value: 'fas fa-long-arrow-alt-left' },
										{ name: 'chevron-right', value: 'fas fa-chevron-right' },
										{ name: 'chevron-left', value: 'fas fa-chevron-left' },
										{ name: 'angle-right', value: 'fas fa-angle-right' },
										{ name: 'angle-left', value: 'fas fa-angle-left' },
										{ name: 'star', value: 'fas fa-star' },
										{ name: 'star-outline', value: 'far fa-star' },
										{ name: 'windows-close-fill', value: 'fas fa-window-close' },
										{ name: 'ban', value: 'fas fa-ban' },
										{ name: 'window-close-simple', value: 'far fa-window-close' },
										{ name: 'times', value: 'fas fa-times' },
										{ name: 'times-circle', value: 'fas fa-times-circle' },
										{ name: 'times-circle-simple', value: 'far fa-times-circle' },
										{ name: 'dot-circle-fill', value: 'fas fa-dot-circle' },
										{ name: 'dot-circle-simple', value: 'far fa-dot-circle' },
										{ name: 'thumb-up-fill', value: 'fas fa-thumbs-up' },
										{ name: 'thumb-up-simple', value: 'far fa-thumbs-up' },
										{ name: 'thumb-down-fill', value: 'fas fa-thumbs-down' },
										{ name: 'thumb-down-simple', value: 'far fa-thumbs-down' },
										{ name: 'info-simple', value: 'fa fa-info' },
										{ name: 'info-circle', value: 'fa fa-info-circle' },
										{ name: 'question-simple', value: 'fa fa-question' },
										{ name: 'question-circle', value: 'fa fa-question-circle' },
										{ name: 'trash-simple', value: 'fa fa-trash' },
										{ name: 'exclamation-triangle', value: 'fa fa-exclamation-triangle' },
										{ name: 'exclamation-simple', value: 'fa fa-exclamation' },
										{ name: 'exclamation-circle', value: 'fa fa-exclamation-circle' },
									]}
									onChange={(val) => {
										setAttributes({ buttonOneIcon: val })
									}}
								/>

							</div>
							<div className="affiliate-blocks-option">
								<GenericOptionType
									value={buttonOneiconPosition}
									values={buttonOneiconPosition}
									id="icon-position"
									option={{
										id: "icon-position",
										label: __("Icon Position", "affiliatex"),
										type: "ab-radio",
										choices: { axBtnleft: __("Left", "affiliatex"), axBtnright: __("Right", "a") },
									}}
									hasRevertButtonTwo={true}
									onChange={(newValue) =>
										setAttributes({ buttonOneiconPosition: newValue })
									}
								/>
							</div>
							<div className="affiliate-blocks-option affiliate-icon-size">
								<GenericOptionType
									value={buttonOneIconSize}
									values={buttonOneIconSize}
									id="button-icon-size"
									option={{
										id: "button-icon-size",
										label: __("Icon Size", "affiliatex"),
										type: "ab-slider",
										value: buttonOneIconSize,
										units: [
											{
												unit: "px",
												min: 0,
												max: 200,
											}
										],
									}}
									hasRevertButton={false}
									onChange={(newValue) =>
										setAttributes({ buttonOneIconSize: newValue })
									}
								/>
							</div>
						</div>
					)
				}
			</PanelBody>
			{ layoutStyle == 'layout-type2' && (
				<PanelBody title={__("Button Two Icon Settings", "affiliatex")} initialOpen={false}>
					<ToggleControl
						label={__('Enable Icon in button', 'affiliatex')}
						checked={!!edButtonTwoIcon}
						onChange={() => setAttributes({ edButtonTwoIcon: !edButtonTwoIcon })}
					/>
					{
						edButtonTwoIcon == true && (
							<div className="affx-btn-icon-wrapper">
								<div className="affiliate-blocks-option affiliate-icon">
								<label>{__("Select Title Icon", "affiliatex")}</label>
								<IconSelector
									value={buttonTwoIcon.name}
									enableSearch
									icons={[
										{ name: 'check', value: 'fas fa-check' },
										{ name: 'check-square', value: 'fas fa-check-square' },
										{ name: 'check-square-outline', value: 'far fa-check-square' },
										{ name: 'check-double', value: 'fas fa-check-double' },
										{ name: 'check-circle', value: 'fas fa-check-circle' },
										{ name: 'check-circle-outline', value: 'far fa-check-circle' },
										{ name: 'square', value: 'fas fa-square' },
										{ name: 'square-outline', value: 'far fa-square' },
										{ name: 'circle', value: 'fas fa-circle' },
										{ name: 'circle-outline', value: 'far fa-circle' },
										{ name: 'arrow-right', value: 'fas fa-arrow-right' },
										{ name: 'arrow-left', value: 'fas fa-arrow-left' },
										{ name: 'arrow-circle-right', value: 'fas fa-arrow-circle-right' },
										{ name: 'arrow-circle-left', value: 'fas fa-arrow-circle-left' },
										{ name: 'arrow-alt-circle-right', value: 'far fa-arrow-alt-circle-right' },
										{ name: 'arrow-alt-circle-left', value: 'far fa-arrow-alt-circle-left' },
										{ name: 'long-arrow-alt-right', value: 'fas fa-long-arrow-alt-right' },
										{ name: 'long-arrow-alt-left', value: 'fas fa-long-arrow-alt-left' },
										{ name: 'chevron-right', value: 'fas fa-chevron-right' },
										{ name: 'chevron-left', value: 'fas fa-chevron-left' },
										{ name: 'angle-right', value: 'fas fa-angle-right' },
										{ name: 'angle-left', value: 'fas fa-angle-left' },
										{ name: 'star', value: 'fas fa-star' },
										{ name: 'star-outline', value: 'far fa-star' },
										{ name: 'windows-close-fill', value: 'fas fa-window-close' },
										{ name: 'ban', value: 'fas fa-ban' },
										{ name: 'window-close-simple', value: 'far fa-window-close' },
										{ name: 'times', value: 'fas fa-times' },
										{ name: 'times-circle', value: 'fas fa-times-circle' },
										{ name: 'times-circle-simple', value: 'far fa-times-circle' },
										{ name: 'dot-circle-fill', value: 'fas fa-dot-circle' },
										{ name: 'dot-circle-simple', value: 'far fa-dot-circle' },
										{ name: 'thumb-up-fill', value: 'fas fa-thumbs-up' },
										{ name: 'thumb-up-simple', value: 'far fa-thumbs-up' },
										{ name: 'thumb-down-fill', value: 'fas fa-thumbs-down' },
										{ name: 'thumb-down-simple', value: 'far fa-thumbs-down' },
										{ name: 'info-simple', value: 'fa fa-info' },
										{ name: 'info-circle', value: 'fa fa-info-circle' },
										{ name: 'question-simple', value: 'fa fa-question' },
										{ name: 'question-circle', value: 'fa fa-question-circle' },
										{ name: 'trash-simple', value: 'fa fa-trash' },
										{ name: 'exclamation-triangle', value: 'fa fa-exclamation-triangle' },
										{ name: 'exclamation-simple', value: 'fa fa-exclamation' },
										{ name: 'exclamation-circle', value: 'fa fa-exclamation-circle' },
									]}
									onChange={(val) => {
										setAttributes({ buttonTwoIcon: val })
									}}
								/>
								</div>
								<div className="affiliate-blocks-option">
									<GenericOptionType
										value={buttonTwoiconPosition}
										values={buttonTwoiconPosition}
										id="icon-position"
										option={{
											id: "icon-position",
											label: __("Icon Position", "affiliatex"),
											type: "ab-radio",
											choices: { axBtnleft: __("Left", "affiliatex"), axBtnright: __("Right", "a") },
										}}
										hasRevertButtonTwo={true}
										onChange={(newValue) =>
											setAttributes({ buttonTwoiconPosition: newValue })
										}
									/>
								</div>
								<div className="affiliate-blocks-option affiliate-icon-size">
									<GenericOptionType
										value={buttonTwoIconSize}
										values={buttonTwoIconSize}
										id="button-icon-size"
										option={{
											id: "button-icon-size",
											label: __("Icon Size", "affiliatex"),
											type: "ab-slider",
											value: buttonTwoIconSize,
											units: [
												{
													unit: "px",
													min: 0,
													max: 200,
												}
											],
										}}
										hasRevertButton={false}
										onChange={(newValue) =>
											setAttributes({ buttonTwoIconSize: newValue })
										}
									/>
								</div>
							
							</div>
						)
					}
				</PanelBody>
			)}
			<PanelBody title={__("Colors", "affiliatex")} initialOpen={false}>
				<div className="affiliate-blocks-option">
					{
						layoutStyle === 'layout-type3' && (
							<>
								<label>{__("Subtitle Color", "affiliatex")}</label>
								<ColorPicker
									value={{
										titleColor: { color: compSubtitleColor },
										titleBgColor: { color: compSubtitleBgColor },
										titleHoverColor: { color: compSubtitleHoverColor }
									}}
									onChange={(colorValue) =>
										setAttributes({ compSubtitleColor: colorValue.titleColor.color, compSubtitleBgColor: colorValue.titleBgColor.color, compSubtitleHoverColor: colorValue.titleHoverColor.color })
									}
									option={{
										pickers: [
											{
												id: "titleColor",
												title: __("SubTitle Color"),
											},
											{
												id: "titleHoverColor",
												title: __("SubTitle Hover Color"),
											},
											{
												id: "titleBgColor",
												title: __("SubTitle BG Color"),
											}
										],
									}}
								/>
							</>
						)
					}
					<label>{__("Title Color", "affiliatex")}</label>
					<ColorPicker
						value={{
							titleColor: { color: comptitleColor },
							titleHoverColor: { color: comptitleHoverColor }
						}}
						onChange={(colorValue) =>
							setAttributes({ comptitleColor: colorValue.titleColor.color, comptitleHoverColor: colorValue.titleHoverColor.color })
						}
						option={{
							pickers: [
								{
									id: "titleColor",
									title: __("Title Color"),
								},
								{
									id: "titleHoverColor",
									title: __("Title Hover Color"),
								},
							],
						}}
					/>

					<label>{__("Table Heading Color", "affiliatex")}</label>
					<ColorPicker
						value={{
							tableBgColor: { color: compTableBgColor }
						}}
						onChange={(colorValue) =>
							setAttributes({ compTableBgColor: colorValue.tableBgColor.color })
						}
						option={{
							pickers: [
								{
									id: "tableBgColor",
									title: __("Table Heading Color"),
								},
							],
						}}
					/>
					{
						layoutStyle !== 'layout-type3' && (
							<>
								<label>{__("Ribbon Color", "affiliatex")}</label>
								<ColorPicker
									value={{
										featuredColor: { color: compfeaturedColor },
										featuredBgColor: { color: compfeaturedBgColor }
									}}
									onChange={(colorValue) =>
										setAttributes({ compfeaturedColor: colorValue.featuredColor.color, compfeaturedBgColor: colorValue.featuredBgColor.color })
									}
									option={{
										pickers: [
											{
												id: "featuredColor",
												title: __("Featured Text Color"),
											},
											{
												id: "featuredBgColor",
												title: __("Featured Text Background Color"),
											},
										],
									}}
								/>
							</>
						)
					}
					{
						layoutStyle !== 'layout-type1' && (
							<>
								<label>{__("Rating Color", "affiliatex")}</label>
								<ColorPicker
									value={{
										ratingColor: { color: compratingColor },
										ratingHoverColor: { color: compratingHoverColor }
									}}
									onChange={(colorValue) =>
										setAttributes({ compratingColor: colorValue.ratingColor.color, compratingHoverColor: colorValue.ratingHoverColor.color })
									}
									option={{
										pickers: [
											{
												id: "ratingColor",
												title: __("Rating Color"),
											},
											{
												id: "ratingHoverColor",
												title: __("Rating Hover Color"),
											},
										],
									}}
								/>
							</>
						)
					}
					<label>{__("Features Color", "affiliatex")}</label>
					<ColorPicker
						value={{
							featuresColor: { color: compfeaturesColor },
							featuresHoverColor: { color: compfeaturesHoverColor }
						}}
						onChange={(colorValue) =>
							setAttributes({ compfeaturesColor: colorValue.featuresColor.color, compfeaturesHoverColor: colorValue.featuresHoverColor.color })
						}
						option={{
							pickers: [
								{
									id: "featuresColor",
									title: __("Features Color"),
								},
								{
									id: "featuresHoverColor",
									title: __("Features Hover Color"),
								},
							],
						}}
					/>
					{
						layoutStyle !== 'layout-type2' && (
							<>
								<label>{__("Price Color", "affiliatex")}</label>
								<ColorPicker
									value={{
										priceColor: { color: comppriceColor },
										priceHoverColor: { color: comppriceHoverColor },
									}}
									onChange={(colorValue) =>
										setAttributes({ comppriceColor: colorValue.priceColor.color, comppriceHoverColor: colorValue.priceHoverColor.color })
									}
									option={{
										pickers: [
											{
												id: "priceColor",
												title: __("Price Color"),
											},
											{
												id: "priceHoverColor",
												title: __("Price Hover Color"),
											},
										],
									}}
								/>
								<label>{__("Price Slash Color", "affiliatex")}</label>
								<ColorPicker
									value={{
										priceSlashColor: { color: comppriceSlashColor },
										priceSlashHoverColor: { color: comppriceSlashHoverColor },
									}}
									onChange={(colorValue) =>
										setAttributes({ comppriceSlashColor: colorValue.priceSlashColor.color, comppriceSlashHoverColor: colorValue.priceSlashHoverColor.color })
									}
									option={{
										pickers: [
											{
												id: "priceSlashColor",
												title: __("Price Slash Color"),
											},
											{
												id: "priceSlashHoverColor",
												title: __("Price Slash Hover Color"),
											},
										],
									}}
								/>
							</>
						)
					}
					
					
				</div>
			</PanelBody>
			<PanelBody title={__("Rating Settings", "affiliatex")} initialOpen={false}>
				<div className="affiliate-blocks-option">
					<ToggleControl
						label={__('Enable User Rating', 'affiliatex')}
						checked={!!edPctUserRatings}
						onChange={() => setAttributes({ edPctUserRatings: !edPctUserRatings })}
					/>
				</div>
				{edPctUserRatings && (
					<>
						<div className="affiliate-blocks-option">
							<RangeControl
								label={__("Star Rating size", "affiliatex")}
								value={RatingStarSize}
								min={10}
								max={100}
								step={1}
								onChange={(newValue) =>
									setAttributes({ RatingStarSize: newValue })
								}
							/>
						</div>
						<div className="affiliate-blocks-option affiliatex-verdict-rating-color">
							<div className="affiliate-blocks-option">
								<TextControl
									label={__("User Ratings Label", "affiliatex")}
									className="affx-input-field"
									value={RatingLabel}
									onChange={(RatingLabel) => setAttributes({ RatingLabel })}
								/>
							</div>
						</div>
						<div className="affiliate-blocks-option affiliate-color-option">
							<label>{__("Star Rating Color", "affiliatex")}</label>
							<ColorPicker
								value={{
									ratingColor: { color: RatingColor },
									ratingInactiveColor: { color: RatingInactiveColor }
								}}
								onChange={(colorValue) =>
									setAttributes({ RatingColor: colorValue.ratingColor.color, RatingInactiveColor: colorValue.ratingInactiveColor.color })
								}
								option={{
									pickers: [
										{
											id: "ratingColor",
											title: __("Rating Color", "affiliatex"),
										},
										{
											id: "ratingInactiveColor",
											title: __("Inactive Rating Color", "affiliatex"),
										}
									],
								}}
							/>
						</div>
					</>
				)}
			</PanelBody>
			{ layoutStyle !== 'layout-type4' && (
				<PanelBody title={__("Features List Settings", "affiliatex")} className={"affx-panel-label"} initialOpen={false}>
					<div className="affiliate-blocks-option">
						<GenericOptionType
							value={contentType}
							values={contentType}
							id="content-type"
							option={{
								id: "content-type",
								label: __("Content Type", "affiliatex"),
								type: "ab-radio",
								choices: { list: __("List", "affiliatex"), paragraph: __("Paragraph", "affiliatex") },
							}}
							hasRevertButton={false}
							onChange={(newValue) =>
								setAttributes({ contentType: newValue })
							}
						/>
					</div>
					{
						contentType === "list" && (
							<div className="affiliate-blocks-option">
								<GenericOptionType
									value={listType}
									values={listType}
									id="list-type"
									option={{
										id: "list-type",
										label: __("List Type", "affiliatex"),
										type: "ab-radio",
										choices: { unordered: __("Unordered", "affiliatex"), ordered: __("Ordered", "affiliatex") },
									}}
									hasRevertButton={false}
									onChange={(newValue) =>
										setAttributes({ listType: newValue })
									}
								/>
							</div>
						)
					}
					{
						contentType === "list" && listType === "unordered" && (
							<div className="affiliate-blocks-option">
								<GenericOptionType
									value={unorderedType}
									values={unorderedType}
									id="unordered-type"
									option={{
										id: "unordered-type",
										label: __("Unordered Type", "affiliatex"),
										type: "ab-radio",
										choices: { icon: __("Show Icon", "affiliatex"), bullet: __("Show Bullet", "affiliatex") },
									}}
									hasRevertButton={false}
									onChange={(newValue) =>
										setAttributes({ unorderedType: newValue })
									}
								/>
							</div>
						)
					}
					{
						contentType === "list" && listType === "unordered" && unorderedType === "icon" && (
							<div className={`affiliate-blocks-option affiliate-icon-option ${featureListIcon.value}`}>
								<label>{__("Select Pros List Icon", "affiliatex")}</label>
								<IconSelector
									value={featureListIcon.name}
									enableSearch
									icons={[
										{ name: 'check', value: 'fas fa-check' },
										{ name: 'check-square', value: 'fas fa-check-square' },
										{ name: 'check-square-outline', value: 'far fa-check-square' },
										{ name: 'check-double', value: 'fas fa-check-double' },
										{ name: 'check-circle', value: 'fas fa-check-circle' },
										{ name: 'check-circle-outline', value: 'far fa-check-circle' },
										{ name: 'square', value: 'fas fa-square' },
										{ name: 'square-outline', value: 'far fa-square' },
										{ name: 'circle', value: 'fas fa-circle' },
										{ name: 'circle-outline', value: 'far fa-circle' },
										{ name: 'arrow-right', value: 'fas fa-arrow-right' },
										{ name: 'arrow-left', value: 'fas fa-arrow-left' },
										{ name: 'arrow-circle-right', value: 'fas fa-arrow-circle-right' },
										{ name: 'arrow-circle-left', value: 'fas fa-arrow-circle-left' },
										{ name: 'arrow-alt-circle-right', value: 'far fa-arrow-alt-circle-right' },
										{ name: 'arrow-alt-circle-left', value: 'far fa-arrow-alt-circle-left' },
										{ name: 'long-arrow-alt-right', value: 'fas fa-long-arrow-alt-right' },
										{ name: 'long-arrow-alt-left', value: 'fas fa-long-arrow-alt-left' },
										{ name: 'chevron-right', value: 'fas fa-chevron-right' },
										{ name: 'chevron-left', value: 'fas fa-chevron-left' },
										{ name: 'angle-right', value: 'fas fa-angle-right' },
										{ name: 'angle-left', value: 'fas fa-angle-left' },
										{ name: 'star', value: 'fas fa-star' },
										{ name: 'star-outline', value: 'far fa-star' },
										{ name: 'windows-close-fill', value: 'fas fa-window-close' },
										{ name: 'ban', value: 'fas fa-ban' },
										{ name: 'window-close-simple', value: 'far fa-window-close' },
										{ name: 'times', value: 'fas fa-times' },
										{ name: 'times-circle', value: 'fas fa-times-circle' },
										{ name: 'times-circle-simple', value: 'far fa-times-circle' },
										{ name: 'dot-circle-fill', value: 'fas fa-dot-circle' },
										{ name: 'dot-circle-simple', value: 'far fa-dot-circle' },
										{ name: 'thumb-up-fill', value: 'fas fa-thumbs-up' },
										{ name: 'thumb-up-simple', value: 'far fa-thumbs-up' },
										{ name: 'thumb-down-fill', value: 'fas fa-thumbs-down' },
										{ name: 'thumb-down-simple', value: 'far fa-thumbs-down' },
										{ name: 'info-simple', value: 'fa fa-info' },
										{ name: 'info-circle', value: 'fa fa-info-circle' },
										{ name: 'question-simple', value: 'fa fa-question' },
										{ name: 'question-circle', value: 'fa fa-question-circle' },
										{ name: 'trash-simple', value: 'fa fa-trash' },
										{ name: 'exclamation-triangle', value: 'fa fa-exclamation-triangle' },
										{ name: 'exclamation-simple', value: 'fa fa-exclamation' },
										{ name: 'exclamation-circle', value: 'fa fa-exclamation-circle' },
									]}
									onChange={(val) => {
										setAttributes({ featureListIcon: val })
									}}
								/>
							</div>

						)
					}
				</PanelBody>
			)}
			<PanelBody title={__("Typography", "affiliatex")} initialOpen={false}>
				{
					layoutStyle === 'layout-type3' && (
						<div className="affiliate-blocks-option">
							<label>{__("SubTitle Typography", "affiliatex")}</label>
							<Typography onChange={(newTypographyObject) => { setAttributes({ subtitleTypography: newTypographyObject }) }} value={subtitleTypography} option={{ value: subtitleTypography }} device="desktop" />
						</div>
					)
				}
				<div className="affiliate-blocks-option">
					<label>{__("Title Typography", "affiliatex")}</label>
					<Typography onChange={(newTypographyObject) => { setAttributes({ titleTypography: newTypographyObject }) }} value={titleTypography} option={{ value: titleTypography }} device="desktop" />
				</div>
				<div className="affiliate-blocks-option">
					<label>{__("Featured Text Typography", "affiliatex")}</label>
					<Typography onChange={(newTypographyObject) => { setAttributes({ featuredTextTypography: newTypographyObject }) }} value={featuredTextTypography} option={{ value: featuredTextTypography }} device="desktop" />
				</div>
				<div className="affiliate-blocks-option">
					<label>{__("Feature List Typography", "affiliatex")}</label>
					<Typography onChange={(newTypographyObject) => { setAttributes({ featuresListTypography: newTypographyObject }) }} value={featuresListTypography} option={{ value: featuresListTypography }} device="desktop" />
				</div>
				{
					layoutStyle !== 'layout-type2' && (
					<div className="affiliate-blocks-option">
						<label>{__("Price Content Typography", "affiliatex")}</label>
						<Typography onChange={(newTypographyObject) => { setAttributes({ priceTypography: newTypographyObject }) }} value={priceTypography} option={{ value: priceTypography }} device="desktop" />
					</div>
					)
				}		
				<div className="affiliate-blocks-option">
					<label>{__("Button One Typography", "affiliatex")}</label>
					<Typography onChange={(newTypographyObject) => { setAttributes({ buttonOneTypography: newTypographyObject }) }} value={buttonOneTypography} option={{ value: buttonOneTypography }} device="desktop" />
				</div>		
				<div className="affiliate-blocks-option">
					<label>{__("Button Two Typography", "affiliatex")}</label>
					<Typography onChange={(newTypographyObject) => { setAttributes({ buttonTwoTypography: newTypographyObject }) }} value={buttonTwoTypography} option={{ value: buttonTwoTypography }} device="desktop" />
				</div>		
			</PanelBody>
		</InspectorControls>
	)
};
