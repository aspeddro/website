import { Icon, Box } from '@chakra-ui/react'

const BDLogoImage = ({widthImage = "130px", heightImage="60px", ...style}) => (
  <Box 
    display="flex"
    alignItems="center"
    justifyItems="center"
    position="relative"
    {...style}
  >
    <Icon
      alt="bd logo"
      viewBox="0 0 227 105"
      width={widthImage}
      height={heightImage}
    >
      <rect y="0.244141" width="108.664" height="104.254" rx="6.29934" fill="#2B8C4D"/>
      <path d="M50.4875 86.7257C47.1614 86.7257 43.8051 86.6047 40.4186 86.3628C37.0321 86.1814 34.0689 85.7581 31.529 85.0929V24.0447C32.8594 23.8028 34.2805 23.5912 35.7924 23.4097C37.3042 23.1679 38.8463 22.9864 40.4186 22.8655C41.9909 22.7445 43.533 22.6538 45.0448 22.5933C46.6172 22.5329 48.0988 22.5026 49.4897 22.5026C53.2995 22.5026 56.8372 22.805 60.1028 23.4097C63.3684 23.954 66.1804 24.8913 68.5389 26.2218C70.9578 27.5522 72.8325 29.3059 74.1629 31.483C75.4933 33.66 76.1585 36.3511 76.1585 39.5562C76.1585 42.5194 75.4329 45.0593 73.9815 47.1759C72.5906 49.2925 70.6252 50.9857 68.0853 52.2557C71.8952 53.5256 74.7072 55.4003 76.5214 57.8797C78.3356 60.3592 79.2427 63.5038 79.2427 67.3136C79.2427 73.7843 76.8842 78.6524 72.1673 81.918C67.4503 85.1231 60.2237 86.7257 50.4875 86.7257ZM42.7771 57.6983V76.8382C44.047 76.9592 45.4077 77.0499 46.859 77.1104C48.3104 77.1708 49.6408 77.2011 50.8503 77.2011C53.2088 77.2011 55.3858 77.0499 57.3815 76.7475C59.4376 76.4452 61.1913 75.9311 62.6427 75.2054C64.1545 74.4193 65.3338 73.3912 66.1804 72.1213C67.0875 70.8513 67.541 69.2186 67.541 67.2229C67.541 63.655 66.2409 61.1756 63.6405 59.7847C61.0401 58.3938 57.4419 57.6983 52.8459 57.6983H42.7771ZM42.7771 48.718H50.8503C55.2044 48.718 58.6212 48.1132 61.1006 46.9038C63.58 45.6338 64.8197 43.3963 64.8197 40.1912C64.8197 37.1675 63.5195 35.0207 60.9192 33.7507C58.3793 32.4808 55.0532 31.8458 50.941 31.8458C49.1873 31.8458 47.615 31.8761 46.2241 31.9365C44.8937 31.997 43.7447 32.0877 42.7771 32.2087V48.718Z" fill="#FAFAFA"/>
      <rect x="117.797" y="0.244141" width="108.664" height="104.254" rx="6.29934" fill="#7EC876"/>
      <path d="M157.958 76.5661C158.624 76.6266 159.501 76.6871 160.589 76.7475C161.678 76.7475 163.159 76.7475 165.034 76.7475C172.714 76.7475 178.429 74.8124 182.178 70.9421C185.988 67.0113 187.893 61.5384 187.893 54.5235C187.893 47.3876 186.049 41.9147 182.36 38.1049C178.671 34.295 172.956 32.3901 165.215 32.3901C161.829 32.3901 159.41 32.4808 157.958 32.6622V76.5661ZM199.867 54.5235C199.867 59.9661 199.02 64.7133 197.327 68.765C195.634 72.7563 193.215 76.1126 190.07 78.8339C186.986 81.4947 183.236 83.4903 178.822 84.8208C174.468 86.0907 169.63 86.7257 164.308 86.7257C161.768 86.7257 158.896 86.6047 155.691 86.3628C152.486 86.1814 149.432 85.7581 146.529 85.0929V24.0447C149.432 23.3795 152.516 22.9562 155.781 22.7748C159.047 22.5933 161.95 22.5026 164.49 22.5026C169.751 22.5026 174.559 23.1376 178.913 24.4076C183.267 25.617 186.986 27.5522 190.07 30.213C193.215 32.8134 195.634 36.1395 197.327 40.1912C199.02 44.1825 199.867 48.9599 199.867 54.5235Z" fill="white"/>
    </Icon>
  </Box>
)

export default BDLogoImage