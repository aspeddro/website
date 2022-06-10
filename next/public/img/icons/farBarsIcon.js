import { Icon, Box } from '@chakra-ui/react'

const FarBarsIcon = ({
  widthIcon,
  heightIcon,
  fill,
  ...style
}) => (
  <Box 
    display="flex"
    alignItems="center"
    justifyItems="center"
    position="relative"
    {...style}
  >
    <Icon
      viewBox="0 0 22 22"
      width={widthIcon}
      height={heightIcon}
      fill={fill}
    >
      <g clip-path="url(#clip0_6914_122)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 3.17157 0.671573 2.5 1.5 2.5H20.5C21.3284 2.5 22 3.17157 22 4C22 4.82843 21.3284 5.5 20.5 5.5H1.5C0.671573 5.5 0 4.82843 0 4ZM0 18C0 17.1716 0.671573 16.5 1.5 16.5H20.5C21.3284 16.5 22 17.1716 22 18C22 18.8284 21.3284 19.5 20.5 19.5H1.5C0.671573 19.5 0 18.8284 0 18ZM1.5 9.5C0.671573 9.5 0 10.1716 0 11C0 11.8284 0.671573 12.5 1.5 12.5H20.5C21.3284 12.5 22 11.8284 22 11C22 10.1716 21.3284 9.5 20.5 9.5H1.5Z" fill={fill}/>
      </g>
      <defs>
      <clipPath id="clip0_6914_122">
      <rect width="22" height="22" fill="white"/>
      </clipPath>
      </defs>
    </Icon>
  </Box>
)

export default FarBarsIcon