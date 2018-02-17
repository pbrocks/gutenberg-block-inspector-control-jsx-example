const { __ } = wp.i18n;
const {
	registerBlockType,
	InspectorControls,
	InspectorControls: { ToggleControl }
} = wp.blocks;

registerBlockType( 'mdlr/inspector-control-jsx-example', {
	title: __( 'Inspector Control JSX Example' ),
	description: __( 'Block description can be added here...' ),
	icon: 'admin-settings',
	category: 'common',
	attributes: {
		applyStyles: {
			type: 'string',
			default: '',
		},
	},
	edit( { attributes, className, focus, setAttributes } ) {
		const { applyStyles } = attributes;

		function onChangeStyleSettings() {
			if ( applyStyles ) {
				setAttributes( { applyStyles: '' } );
			} else {
				setAttributes( { applyStyles: 'styled' } );
			}
		}

		return (
			<div className={ className + ' ' + applyStyles }>
				{
					!! focus && (
						<InspectorControls>
							<ToggleControl
								label={ __('Apply Styles') }
								checked={ !!applyStyles }
								onChange={ onChangeStyleSettings }
							/>

						</InspectorControls>
					)
				}
				<p>Block with styles that can be toggled with an inspector control. Built with JSX.</p>
			</div>
		);
	},
	save( { attributes, className } ) {
		const { applyStyles } = attributes;

		return (
			<div className={ className + ' ' + applyStyles }>
				<p>Block with styles that can be toggled with an inspector control. Built with JSX.</p>
			</div>
		);
	},
} );
