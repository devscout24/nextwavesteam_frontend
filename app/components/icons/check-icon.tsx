export default function CheckIcon({}: {}) {
  return (
    <svg
      width={173}
      height={175}
      viewBox="0 0 173 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="172.8"
        height="172.8"
        rx={48}
        fill="#F5C542"
        fillOpacity="0.1"
      />
      <rect
        x="40.4004"
        y="40.4004"
        width={92}
        height={92}
        rx={46}
        fill="#F5C542"
      />
      <rect
        x="40.4004"
        y="40.4004"
        width={92}
        height={92}
        rx={46}
        stroke="white"
        strokeWidth={4}
      />
      <g filter="url(#filter0_dd_282_5297)">
        <rect
          x="38.4004"
          y="38.4004"
          width={96}
          height={96}
          rx={48}
          fill="white"
          fillOpacity="0.01"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M83.6004 95.6004L97.7004 81.5004L94.9004 78.7004L83.6004 90.0004L77.9004 84.3004L75.1004 87.1004L83.6004 95.6004ZM86.4004 106.4C83.6337 106.4 81.0337 105.875 78.6004 104.825C76.1671 103.775 74.0504 102.35 72.2504 100.55C70.4504 98.7504 69.0254 96.6337 67.9754 94.2004C66.9254 91.7671 66.4004 89.1671 66.4004 86.4004C66.4004 83.6337 66.9254 81.0337 67.9754 78.6004C69.0254 76.1671 70.4504 74.0504 72.2504 72.2504C74.0504 70.4504 76.1671 69.0254 78.6004 67.9754C81.0337 66.9254 83.6337 66.4004 86.4004 66.4004C89.1671 66.4004 91.7671 66.9254 94.2004 67.9754C96.6337 69.0254 98.7504 70.4504 100.55 72.2504C102.35 74.0504 103.775 76.1671 104.825 78.6004C105.875 81.0337 106.4 83.6337 106.4 86.4004C106.4 89.1671 105.875 91.7671 104.825 94.2004C103.775 96.6337 102.35 98.7504 100.55 100.55C98.7504 102.35 96.6337 103.775 94.2004 104.825C91.7671 105.875 89.1671 106.4 86.4004 106.4Z"
        fill="#1E1E24"
      />
      <defs>
        <filter
          id="filter0_dd_282_5297"
          x="18.4004"
          y="38.4004"
          width={136}
          height={136}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={6}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_282_5297"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.439216 0 0 0 0 0.364706 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_282_5297"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={5}
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_282_5297"
          />
          <feOffset dy={20} />
          <feGaussianBlur stdDeviation="12.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.439216 0 0 0 0 0.364706 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_282_5297"
            result="effect2_dropShadow_282_5297"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_282_5297"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
