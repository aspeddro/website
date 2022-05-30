import { Icon, Box } from '@chakra-ui/react'

const RedirectIcon = ({
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
      viewBox='0 0 16 16'
      width={widthIcon}
      height={heightIcon}
      fill={fill}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28658 7.5911C8.57343 7.88991 9.04821 7.89961 9.34702 7.61276L13.6142 3.51646L13.6128 4.62615C13.6123 5.04036 13.9476 5.37658 14.3618 5.37711C14.776 5.37764 15.1123 5.04228 15.1128 4.62807L15.1164 1.77726C15.1167 1.54501 15.0114 1.33728 14.8459 1.1995C14.7075 1.05746 14.5135 0.970193 14.2996 0.97271L11.444 1.00631C11.0298 1.01118 10.698 1.35089 10.7029 1.76508C10.7077 2.17926 11.0474 2.51108 11.4616 2.5062L12.5135 2.49383L8.30825 6.53066C8.00943 6.81751 7.99973 7.29228 8.28658 7.5911ZM2.43359 3.57275C2.43359 3.43924 2.54182 3.33101 2.67533 3.33101H8.24917C8.66338 3.33101 8.99917 2.99523 8.99917 2.58101C8.99917 2.1668 8.66338 1.83101 8.24917 1.83101H2.67533C1.71339 1.83101 0.933594 2.61082 0.933594 3.57275V13.2256C0.933594 14.1876 1.7134 14.9674 2.67533 14.9674H12.5927C13.5546 14.9674 14.3344 14.1876 14.3344 13.2256V7.63488C14.3344 7.22067 13.9986 6.88488 13.5844 6.88488C13.1702 6.88488 12.8344 7.22067 12.8344 7.63488V13.2256C12.8344 13.3591 12.7262 13.4674 12.5927 13.4674H2.67533C2.54182 13.4674 2.43359 13.3591 2.43359 13.2256V3.57275Z" fill="#C4C4C4"/>
    </Icon>
  </Box>
)

export default RedirectIcon