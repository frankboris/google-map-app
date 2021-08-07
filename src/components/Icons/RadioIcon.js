import React from 'react'

const RadioIcon = React.memo(({color, size}) => (
    <svg color={color} height={size + "pt"} width={size + "pt"} viewBox="0 0 341.333 341.333" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z
			 M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z"
        />
    </svg>
));

export {RadioIcon};
