import ResizeTextarea from "react-textarea-autosize"
import React, { forwardRef } from "react"

const AutoResizeTextarea = forwardRef((props, ref) => (
	<ResizeTextarea
		style={{ overflow: 'hidden', resize: 'none', marginLeft: '0.81rem', marginTop: '0.58rem', marginBottom: '0.35rem', paddingLeft: '0rem', width: '100%', paddingRight: '1.65rem' }}
		ref={ref}
		minrows={1}
		{...props}
	/>
))

export default AutoResizeTextarea
