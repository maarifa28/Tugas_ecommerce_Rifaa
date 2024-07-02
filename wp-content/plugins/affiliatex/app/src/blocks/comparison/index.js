import attributes from './attributes';
import { __ } from "@wordpress/i18n";
import Edit from "./Edit.js";
import Save from "./Save.js";


import { registerBlockType } from '@wordpress/blocks';

/**
 * Register: AffiliateX Buttons Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("affiliatex/comparison", {
	title: __("Affiliate Product Comparison Table", "affiliatex"),
	description: __("Add a customizable product comaprisable table.", "affiliatex"),
	icon: "comparison",
	category: "affiliatex",
	supports: {
		multiple: true,
	},
	keywords: [
		__("Product Comparison", "affliatex"),
		__("Affiliate x Product Comparison", "affiliatex"),
		__("Affiliate x", "affiliatex"),
		__("Comparison", "affiliatex"),
		__("Product", "affiliatex")
	],
	attributes,
	example: {
		attributes: {
		},
	},

	/**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
	edit: ({ attributes, setAttributes, className, isSelected, clientId }) => {
		return (
			<Edit {...{ attributes, setAttributes, className, isSelected, clientId }} />
		);
	},

	save({ attributes, className }) {
		return (
			<Save {...{ attributes, className }} />
		);
	},
}); // END Register GBSS Boxes Block
