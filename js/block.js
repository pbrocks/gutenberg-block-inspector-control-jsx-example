
import { __ } from '@wordpress/i18n';

import {
	registerBlockType,
	InspectorControls,
} from '@wordpress/blocks';

import {
	ToggleControl
} from '@wordpress/components';

import {
	withState
} from '@wordpress/compose';

 
// const MyToggleControl = withState( {
//     hasFixedBackground: false,
// } )( ( { hasFixedBackground, setState } ) => (
//     <ToggleControl
//         label="Fixed Background"
//         help={ hasFixedBackground ? 'Has fixed background.' : 'No fixed background.' }
//         checked={ hasFixedBackground }
//         onChange={ () => setState( ( state ) => ( { hasFixedBackground: ! state.hasFixedBackground } ) ) }
//     />
// ) );
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
				Block with styles that can be toggled with an inspector control. Built with JSX.
			</div>
		);
	},
	save( { attributes, className } ) {
		const { applyStyles } = attributes;

		return (
			<div className={ className + ' ' + applyStyles }>
				Block with styles that can be toggled with an inspector control. Built with JSX.
			</div>
		);
	},
} );
