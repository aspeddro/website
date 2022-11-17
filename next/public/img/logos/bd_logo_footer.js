import { Icon, Box } from '@chakra-ui/react'

const BDLogoFooterImage = ({widthImage = "167px", heightImage="154px", ...style}) => (
  <Box 
    display="flex"
    alignItems="center"
    justifyItems="center"
    position="relative"
    {...style}
  >
    <Icon
      alt="bd logo"
      viewBox="0 0 167 154"
      width={widthImage}
      height={heightImage}
    >
      <g filter="url(#filter0_d_5679_83)">
      <rect x="1.00073" width="130.992" height="46.3232" rx="2.79898" fill="#2B8C4D"/>
      </g>
      <path d="M23.6857 38.6017C22.2078 38.6017 20.7165 38.548 19.2118 38.4405C17.707 38.3599 16.3904 38.1718 15.2618 37.8762V10.7507C15.853 10.6433 16.4844 10.5492 17.1562 10.4686C17.828 10.3611 18.5131 10.2805 19.2118 10.2268C19.9104 10.173 20.5956 10.1327 21.2673 10.1059C21.966 10.079 22.6243 10.0656 23.2423 10.0656C24.9351 10.0656 26.507 10.1999 27.958 10.4686C29.409 10.7104 30.6585 11.1269 31.7064 11.7181C32.7812 12.3092 33.6142 13.0885 34.2054 14.0558C34.7965 15.0231 35.0921 16.2188 35.0921 17.643C35.0921 18.9596 34.7696 20.0881 34.1248 21.0286C33.5067 21.9691 32.6335 22.7214 31.5049 23.2857C33.1977 23.85 34.4472 24.683 35.2533 25.7846C36.0594 26.8863 36.4625 28.2836 36.4625 29.9764C36.4625 32.8515 35.4145 35.0146 33.3186 36.4656C31.2228 37.8897 28.0118 38.6017 23.6857 38.6017ZM20.2597 25.704V34.2085C20.824 34.2622 21.4286 34.3025 22.0735 34.3294C22.7183 34.3562 23.3095 34.3697 23.8469 34.3697C24.8948 34.3697 25.8622 34.3025 26.7489 34.1682C27.6625 34.0338 28.4417 33.8054 29.0866 33.483C29.7583 33.1336 30.2823 32.6769 30.6585 32.1126C31.0615 31.5483 31.2631 30.8228 31.2631 29.9361C31.2631 28.3507 30.6854 27.2491 29.5299 26.6311C28.3745 26.013 26.7757 25.704 24.7336 25.704H20.2597ZM20.2597 21.7138H23.8469C25.7815 21.7138 27.2997 21.4451 28.4014 20.9077C29.5031 20.3434 30.0539 19.3492 30.0539 17.9251C30.0539 16.5816 29.4762 15.6277 28.3208 15.0634C27.1922 14.4991 25.7144 14.217 23.8872 14.217C23.108 14.217 22.4093 14.2304 21.7913 14.2573C21.2002 14.2842 20.6896 14.3245 20.2597 14.3782V21.7138ZM54.9717 34.8533C56.4765 34.8533 57.6185 34.7727 58.3977 34.6115V29.2106C58.129 29.13 57.7394 29.0494 57.2288 28.9688C56.7183 28.8882 56.154 28.8478 55.536 28.8478C54.9986 28.8478 54.4478 28.8882 53.8835 28.9688C53.3461 29.0494 52.849 29.1972 52.3922 29.4121C51.9623 29.6271 51.613 29.9361 51.3443 30.3391C51.0756 30.7153 50.9412 31.199 50.9412 31.7901C50.9412 32.9456 51.304 33.7517 52.0295 34.2085C52.755 34.6384 53.7357 34.8533 54.9717 34.8533ZM54.5687 16.6756C56.1809 16.6756 57.5379 16.8772 58.6395 17.2802C59.7412 17.6833 60.6145 18.2475 61.2594 18.973C61.9311 19.6985 62.4014 20.5852 62.6701 21.6332C62.9656 22.6543 63.1134 23.7828 63.1134 25.0188V37.7956C62.3611 37.9569 61.2191 38.1449 59.6875 38.3599C58.1827 38.6017 56.4765 38.7227 54.5687 38.7227C53.3058 38.7227 52.1504 38.6017 51.1024 38.3599C50.0545 38.1181 49.1543 37.7285 48.402 37.1911C47.6765 36.6536 47.0988 35.955 46.6688 35.0952C46.2658 34.2353 46.0643 33.174 46.0643 31.9111C46.0643 30.7019 46.2927 29.6808 46.7495 28.8478C47.2331 28.0149 47.878 27.3431 48.6841 26.8326C49.4902 26.2952 50.4172 25.919 51.4652 25.704C52.54 25.4622 53.6551 25.3413 54.8105 25.3413C55.3479 25.3413 55.9122 25.3816 56.5033 25.4622C57.0945 25.5159 57.7259 25.6234 58.3977 25.7846V24.9785C58.3977 24.4143 58.3305 23.8769 58.1962 23.3663C58.0618 22.8558 57.82 22.4124 57.4707 22.0362C57.1482 21.6332 56.7049 21.3242 56.1406 21.1092C55.6032 20.8943 54.918 20.7868 54.085 20.7868C52.9565 20.7868 51.922 20.8674 50.9815 21.0286C50.0411 21.1898 49.2753 21.3779 48.6841 21.5929L48.0795 17.643C48.6975 17.428 49.5977 17.213 50.78 16.9981C51.9623 16.7831 53.2252 16.6756 54.5687 16.6756ZM80.4117 34.7727C81.7014 34.7727 82.6419 34.6249 83.233 34.3294C83.8242 34.0069 84.1198 33.4695 84.1198 32.7172C84.1198 32.0185 83.7973 31.4408 83.1524 30.984C82.5344 30.5272 81.4999 30.0301 80.0489 29.4927C79.1622 29.1703 78.3427 28.8344 77.5903 28.4851C76.8648 28.1089 76.2333 27.679 75.6959 27.1953C75.1585 26.7117 74.7286 26.134 74.4062 25.4622C74.1106 24.7636 73.9628 23.9172 73.9628 22.923C73.9628 20.9883 74.6749 19.4701 76.099 18.3685C77.5231 17.2399 79.4578 16.6756 81.903 16.6756C83.139 16.6756 84.3213 16.7965 85.4498 17.0384C86.5784 17.2533 87.4248 17.4683 87.9891 17.6833L87.1024 21.6332C86.5649 21.3914 85.8798 21.1764 85.0468 20.9883C84.2138 20.7733 83.2465 20.6659 82.1448 20.6659C81.1506 20.6659 80.3445 20.8405 79.7265 21.1898C79.1085 21.5123 78.7995 22.0228 78.7995 22.7214C78.7995 23.0707 78.8532 23.3798 78.9607 23.6485C79.095 23.9172 79.31 24.1724 79.6056 24.4143C79.9011 24.6292 80.2907 24.8576 80.7744 25.0994C81.2581 25.3144 81.8492 25.5428 82.5478 25.7846C83.7033 26.2146 84.684 26.6445 85.4901 27.0744C86.2962 27.4775 86.9546 27.9477 87.4651 28.4851C88.0025 28.9956 88.3921 29.5868 88.634 30.2585C88.8758 30.9303 88.9967 31.7364 88.9967 32.6769C88.9967 34.6921 88.2443 36.2237 86.7396 37.2717C85.2617 38.2927 83.139 38.8033 80.3714 38.8033C78.5173 38.8033 77.026 38.642 75.8975 38.3196C74.7689 38.024 73.9762 37.7822 73.5195 37.5941L74.3659 33.5233C75.0914 33.8188 75.9512 34.101 76.9454 34.3697C77.9665 34.6384 79.1219 34.7727 80.4117 34.7727ZM98.4294 27.8402C98.4294 25.9862 98.6981 24.3605 99.2355 22.9633C99.7998 21.566 100.539 20.4106 101.452 19.497C102.366 18.5565 103.414 17.8579 104.596 17.4011C105.778 16.9175 106.988 16.6756 108.224 16.6756C111.126 16.6756 113.383 17.5758 114.995 19.3761C116.634 21.1764 117.454 23.8634 117.454 27.4372C117.454 27.7059 117.44 28.0149 117.413 28.3642C117.413 28.6866 117.4 28.9822 117.373 29.2509H103.468C103.602 30.9437 104.193 32.2604 105.241 33.2008C106.316 34.1144 107.861 34.5712 109.876 34.5712C111.058 34.5712 112.133 34.4637 113.101 34.2488C114.095 34.0338 114.874 33.8054 115.438 33.5636L116.083 37.5538C115.814 37.6882 115.438 37.8359 114.955 37.9972C114.498 38.1315 113.96 38.2524 113.342 38.3599C112.751 38.4943 112.106 38.6017 111.408 38.6824C110.709 38.763 109.997 38.8033 109.272 38.8033C107.418 38.8033 105.805 38.5346 104.435 37.9972C103.065 37.4329 101.936 36.6671 101.049 35.6998C100.163 34.7056 99.5042 33.5501 99.0743 32.2335C98.6444 30.89 98.4294 29.4256 98.4294 27.8402ZM112.577 25.6637C112.577 24.992 112.483 24.3605 112.294 23.7694C112.106 23.1514 111.824 22.6274 111.448 22.1975C111.099 21.7407 110.655 21.3914 110.118 21.1495C109.607 20.8808 108.989 20.7465 108.264 20.7465C107.512 20.7465 106.853 20.8943 106.289 21.1898C105.725 21.4585 105.241 21.8213 104.838 22.2781C104.462 22.7349 104.166 23.2588 103.951 23.85C103.736 24.4411 103.588 25.0457 103.508 25.6637H112.577Z" fill="#FAFAFA"/>
      <g filter="url(#filter1_d_5679_83)">
      <rect x="1" y="105.801" width="165" height="46.3232" rx="2.79898" fill="#2B8C4D"/>
      </g>
      <path d="M20.3403 139.889C20.6359 139.916 21.0255 139.943 21.5092 139.97C21.9928 139.97 22.6512 139.97 23.4841 139.97C26.8967 139.97 29.4359 139.11 31.1018 137.39C32.7947 135.644 33.6411 133.212 33.6411 130.095C33.6411 126.924 32.8215 124.493 31.1825 122.8C29.5434 121.107 27.0041 120.261 23.5647 120.261C22.06 120.261 20.9852 120.301 20.3403 120.382V139.889ZM38.9614 130.095C38.9614 132.513 38.5852 134.623 37.8328 136.423C37.0805 138.196 36.0057 139.688 34.6084 140.897C33.238 142.079 31.5721 142.966 29.6106 143.557C27.6759 144.121 25.5263 144.403 23.1617 144.403C22.0331 144.403 20.7568 144.35 19.3327 144.242C17.9086 144.162 16.5516 143.974 15.2618 143.678V116.553C16.5516 116.257 17.922 116.069 19.373 115.988C20.824 115.908 22.1138 115.867 23.2423 115.867C25.58 115.867 27.7162 116.149 29.6509 116.714C31.5855 117.251 33.238 118.111 34.6084 119.293C36.0057 120.449 37.0805 121.927 37.8328 123.727C38.5852 125.5 38.9614 127.623 38.9614 130.095ZM57.2547 140.655C58.7594 140.655 59.9014 140.574 60.6806 140.413V135.012C60.4119 134.932 60.0223 134.851 59.5118 134.771C59.0012 134.69 58.437 134.65 57.8189 134.65C57.2815 134.65 56.7307 134.69 56.1664 134.771C55.629 134.851 55.1319 134.999 54.6751 135.214C54.2452 135.429 53.8959 135.738 53.6272 136.141C53.3585 136.517 53.2241 137.001 53.2241 137.592C53.2241 138.747 53.5869 139.553 54.3124 140.01C55.0379 140.44 56.0186 140.655 57.2547 140.655ZM56.8516 122.477C58.4638 122.477 59.8208 122.679 60.9225 123.082C62.0241 123.485 62.8974 124.049 63.5423 124.775C64.2141 125.5 64.6843 126.387 64.953 127.435C65.2486 128.456 65.3963 129.585 65.3963 130.821V143.597C64.644 143.759 63.502 143.947 61.9704 144.162C60.4657 144.403 58.7594 144.524 56.8516 144.524C55.5887 144.524 54.4333 144.403 53.3854 144.162C52.3374 143.92 51.4373 143.53 50.6849 142.993C49.9594 142.455 49.3817 141.757 48.9518 140.897C48.5487 140.037 48.3472 138.976 48.3472 137.713C48.3472 136.504 48.5756 135.483 49.0324 134.65C49.516 133.817 50.1609 133.145 50.967 132.634C51.7731 132.097 52.7002 131.721 53.7481 131.506C54.8229 131.264 55.938 131.143 57.0934 131.143C57.6308 131.143 58.1951 131.183 58.7863 131.264C59.3774 131.318 60.0089 131.425 60.6806 131.586V130.78C60.6806 130.216 60.6134 129.679 60.4791 129.168C60.3447 128.658 60.1029 128.214 59.7536 127.838C59.4312 127.435 58.9878 127.126 58.4235 126.911C57.8861 126.696 57.2009 126.589 56.3679 126.589C55.2394 126.589 54.2049 126.669 53.2644 126.83C52.324 126.992 51.5582 127.18 50.967 127.395L50.3625 123.445C50.9805 123.23 51.8806 123.015 53.0629 122.8C54.2452 122.585 55.5081 122.477 56.8516 122.477ZM81.2436 133.481C81.2436 135.63 81.7541 137.323 82.7752 138.559C83.7963 139.768 85.207 140.373 87.0073 140.373C87.7865 140.373 88.4448 140.346 88.9822 140.292C89.5465 140.212 90.0033 140.131 90.3526 140.051V127.959C89.9227 127.663 89.345 127.395 88.6195 127.153C87.9208 126.884 87.1685 126.75 86.3624 126.75C84.5889 126.75 83.2857 127.354 82.4528 128.563C81.6466 129.773 81.2436 131.412 81.2436 133.481ZM95.2296 143.436C94.2622 143.732 93.0396 144 91.5618 144.242C90.1108 144.484 88.5792 144.605 86.967 144.605C85.301 144.605 83.8097 144.35 82.4931 143.839C81.1764 143.329 80.0479 142.603 79.1074 141.663C78.1938 140.695 77.4818 139.54 76.9712 138.196C76.4876 136.826 76.2457 135.294 76.2457 133.602C76.2457 131.936 76.4473 130.431 76.8503 129.087C77.2802 127.717 77.8982 126.548 78.7044 125.581C79.5105 124.614 80.4912 123.875 81.6466 123.364C82.8021 122.827 84.1321 122.558 85.6369 122.558C86.6579 122.558 87.5581 122.679 88.3373 122.921C89.1166 123.163 89.7883 123.431 90.3526 123.727V113.61L95.2296 112.804V143.436ZM126.535 133.521C126.535 135.187 126.293 136.705 125.809 138.076C125.326 139.446 124.64 140.615 123.754 141.582C122.867 142.549 121.792 143.302 120.529 143.839C119.293 144.377 117.923 144.645 116.418 144.645C114.913 144.645 113.543 144.377 112.307 143.839C111.071 143.302 110.01 142.549 109.123 141.582C108.236 140.615 107.538 139.446 107.027 138.076C106.543 136.705 106.302 135.187 106.302 133.521C106.302 131.855 106.543 130.35 107.027 129.007C107.538 127.636 108.236 126.468 109.123 125.5C110.037 124.533 111.111 123.794 112.347 123.283C113.583 122.746 114.94 122.477 116.418 122.477C117.896 122.477 119.253 122.746 120.489 123.283C121.752 123.794 122.827 124.533 123.713 125.5C124.6 126.468 125.285 127.636 125.769 129.007C126.28 130.35 126.535 131.855 126.535 133.521ZM121.537 133.521C121.537 131.425 121.08 129.773 120.167 128.563C119.28 127.327 118.03 126.709 116.418 126.709C114.806 126.709 113.543 127.327 112.629 128.563C111.743 129.773 111.299 131.425 111.299 133.521C111.299 135.644 111.743 137.323 112.629 138.559C113.543 139.795 114.806 140.413 116.418 140.413C118.03 140.413 119.28 139.795 120.167 138.559C121.08 137.323 121.537 135.644 121.537 133.521ZM142.885 140.574C144.175 140.574 145.115 140.427 145.706 140.131C146.297 139.809 146.593 139.271 146.593 138.519C146.593 137.82 146.271 137.243 145.626 136.786C145.008 136.329 143.973 135.832 142.522 135.294C141.635 134.972 140.816 134.636 140.064 134.287C139.338 133.911 138.707 133.481 138.169 132.997C137.632 132.513 137.202 131.936 136.879 131.264C136.584 130.565 136.436 129.719 136.436 128.725C136.436 126.79 137.148 125.272 138.572 124.17C139.996 123.042 141.931 122.477 144.376 122.477C145.612 122.477 146.795 122.598 147.923 122.84C149.052 123.055 149.898 123.27 150.462 123.485L149.576 127.435C149.038 127.193 148.353 126.978 147.52 126.79C146.687 126.575 145.72 126.468 144.618 126.468C143.624 126.468 142.818 126.642 142.2 126.992C141.582 127.314 141.273 127.825 141.273 128.523C141.273 128.873 141.326 129.182 141.434 129.45C141.568 129.719 141.783 129.974 142.079 130.216C142.374 130.431 142.764 130.659 143.248 130.901C143.731 131.116 144.323 131.345 145.021 131.586C146.177 132.016 147.157 132.446 147.963 132.876C148.77 133.279 149.428 133.749 149.938 134.287C150.476 134.797 150.865 135.389 151.107 136.06C151.349 136.732 151.47 137.538 151.47 138.479C151.47 140.494 150.718 142.025 149.213 143.073C147.735 144.094 145.612 144.605 142.845 144.605C140.991 144.605 139.499 144.444 138.371 144.121C137.242 143.826 136.45 143.584 135.993 143.396L136.839 139.325C137.565 139.621 138.424 139.903 139.419 140.171C140.44 140.44 141.595 140.574 142.885 140.574Z" fill="#FAFAFA"/>
      <g filter="url(#filter2_d_5679_83)">
      <rect x="1" y="52.9014" width="104.262" height="46.3232" rx="2.79898" fill="#7EC876"/>
      </g>
      <path d="M20.5287 80.5804C20.5287 82.73 21.0392 84.4228 22.0603 85.6588C23.0814 86.868 24.4921 87.4726 26.2924 87.4726C27.0716 87.4726 27.7299 87.4457 28.2673 87.392C28.8316 87.3114 29.2884 87.2307 29.6377 87.1501V75.0585C29.2078 74.763 28.6301 74.4942 27.9046 74.2524C27.206 73.9837 26.4536 73.8494 25.6475 73.8494C23.8741 73.8494 22.5708 74.4539 21.7379 75.6631C20.9318 76.8723 20.5287 78.5113 20.5287 80.5804ZM34.5147 90.5358C33.5473 90.8314 32.3247 91.1001 30.8469 91.3419C29.3959 91.5837 27.8643 91.7046 26.2521 91.7046C24.5861 91.7046 23.0948 91.4494 21.7782 90.9388C20.4615 90.4283 19.333 89.7028 18.3925 88.7623C17.4789 87.795 16.7669 86.6396 16.2563 85.2961C15.7727 83.9257 15.5308 82.3941 15.5308 80.7013C15.5308 79.0353 15.7324 77.5306 16.1354 76.1871C16.5654 74.8167 17.1834 73.6478 17.9895 72.6805C18.7956 71.7132 19.7763 70.9742 20.9318 70.4637C22.0872 69.9263 23.4173 69.6576 24.922 69.6576C25.9431 69.6576 26.8432 69.7785 27.6225 70.0204C28.4017 70.2622 29.0734 70.5309 29.6377 70.8265V60.7098L34.5147 59.9037V90.5358ZM65.82 80.6207C65.82 82.2866 65.5781 83.8048 65.0945 85.1752C64.6108 86.5455 63.9256 87.7144 63.0389 88.6817C62.1522 89.6491 61.0774 90.4014 59.8145 90.9388C58.5784 91.4762 57.208 91.7449 55.7033 91.7449C54.1986 91.7449 52.8282 91.4762 51.5922 90.9388C50.3561 90.4014 49.2948 89.6491 48.408 88.6817C47.5213 87.7144 46.8227 86.5455 46.3122 85.1752C45.8285 83.8048 45.5867 82.2866 45.5867 80.6207C45.5867 78.9547 45.8285 77.45 46.3122 76.1065C46.8227 74.7361 47.5213 73.5672 48.408 72.5999C49.3216 71.6326 50.3964 70.8936 51.6325 70.3831C52.8685 69.8457 54.2255 69.577 55.7033 69.577C57.1812 69.577 58.5381 69.8457 59.7742 70.3831C61.0371 70.8936 62.1119 71.6326 62.9986 72.5999C63.8853 73.5672 64.5705 74.7361 65.0542 76.1065C65.5647 77.45 65.82 78.9547 65.82 80.6207ZM60.8221 80.6207C60.8221 78.5248 60.3653 76.8723 59.4517 75.6631C58.565 74.4271 57.3155 73.8091 55.7033 73.8091C54.0911 73.8091 52.8282 74.4271 51.9146 75.6631C51.0279 76.8723 50.5845 78.5248 50.5845 80.6207C50.5845 82.7434 51.0279 84.4228 51.9146 85.6588C52.8282 86.8949 54.0911 87.5129 55.7033 87.5129C57.3155 87.5129 58.565 86.8949 59.4517 85.6588C60.3653 84.4228 60.8221 82.7434 60.8221 80.6207ZM82.1701 87.6741C83.4598 87.6741 84.4003 87.5263 84.9914 87.2307C85.5826 86.9083 85.8782 86.3709 85.8782 85.6185C85.8782 84.9199 85.5557 84.3422 84.9108 83.8854C84.2928 83.4286 83.2583 82.9315 81.8073 82.3941C80.9206 82.0717 80.1011 81.7358 79.3487 81.3865C78.6232 81.0103 77.9918 80.5804 77.4543 80.0967C76.9169 79.613 76.487 79.0353 76.1646 78.3636C75.869 77.6649 75.7212 76.8185 75.7212 75.8243C75.7212 73.8897 76.4333 72.3715 77.8574 71.2698C79.2815 70.1413 81.2162 69.577 83.6614 69.577C84.8974 69.577 86.0797 69.6979 87.2082 69.9397C88.3368 70.1547 89.1832 70.3697 89.7475 70.5846L88.8608 74.5346C88.3234 74.2927 87.6382 74.0778 86.8052 73.8897C85.9722 73.6747 85.0049 73.5672 83.9032 73.5672C82.909 73.5672 82.1029 73.7419 81.4849 74.0912C80.8669 74.4136 80.5579 74.9242 80.5579 75.6228C80.5579 75.9721 80.6116 76.2811 80.7191 76.5498C80.8534 76.8185 81.0684 77.0738 81.364 77.3156C81.6595 77.5306 82.0492 77.759 82.5328 78.0008C83.0165 78.2158 83.6076 78.4442 84.3063 78.686C85.4617 79.1159 86.4424 79.5459 87.2485 79.9758C88.0547 80.3788 88.713 80.8491 89.2235 81.3865C89.7609 81.897 90.1505 82.4881 90.3924 83.1599C90.6342 83.8317 90.7551 84.6378 90.7551 85.5782C90.7551 87.5935 90.0027 89.1251 88.498 90.173C87.0201 91.1941 84.8974 91.7046 82.1298 91.7046C80.2757 91.7046 78.7844 91.5434 77.6559 91.221C76.5273 90.9254 75.7347 90.6836 75.2779 90.4955L76.1243 86.4246C76.8498 86.7202 77.7096 87.0023 78.7038 87.271C79.7249 87.5397 80.8803 87.6741 82.1701 87.6741Z" fill="white"/>
      <defs>
      <filter id="filter0_d_5679_83" x="0.440936" y="0" width="132.112" height="47.883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="0.279898"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5679_83"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5679_83" result="shape"/>
      </filter>
      <filter id="filter1_d_5679_83" x="0.440203" y="105.801" width="166.12" height="47.883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="0.279898"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5679_83"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5679_83" result="shape"/>
      </filter>
      <filter id="filter2_d_5679_83" x="0.440203" y="52.9014" width="105.382" height="47.883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="0.279898"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5679_83"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5679_83" result="shape"/>
      </filter>
      </defs>
    </Icon>
  </Box>
)

export default BDLogoFooterImage