
import { Icon, Box } from '@chakra-ui/react'

const DataBaseIcon = ({widthIcon, heightIcon ,fill ,solid ,...style}) => (
  <Box 
    display="flex"
    alignItems="center"
    justifyItems="center"
    position="relative"
    {...style}
  >
    <Icon
      viewBox={solid ? "0 0 24 24" : "0 0 20 22"}
      width={widthIcon}
      height={heightIcon}
      fill={fill}
    >
      {solid ? 
        <path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"/>
        :
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41724 2.85101C5.77217 2.3517 7.70867 2.01582 9.89268 2.01582C12.0767 2.01582 14.0132 2.3517 15.3681 2.85101C16.0498 3.10222 16.5328 3.37604 16.8264 3.62742C16.9704 3.75068 17.0481 3.8509 17.0869 3.91883C17.122 3.98033 17.1216 4.00782 17.1216 4.01028L17.1216 4.01041L17.1216 4.01051L17.1216 4.01182C17.1214 4.01777 17.1189 4.0427 17.0896 4.09347C17.0528 4.15703 16.9777 4.25312 16.8353 4.3722C16.5444 4.61552 16.0633 4.87987 15.3805 5.12145C14.0238 5.60142 12.0836 5.9172 9.89268 5.9172C7.70173 5.9172 5.76157 5.60142 4.4049 5.12145C3.72205 4.87987 3.24099 4.61552 2.95009 4.3722C2.80772 4.25312 2.73255 4.15703 2.69579 4.09347C2.66641 4.04268 2.66393 4.01775 2.66377 4.01181V4.01041L2.66376 4.01028C2.66373 4.00782 2.66339 3.98033 2.69852 3.91883C2.73732 3.8509 2.81496 3.75068 2.95893 3.62742C3.25253 3.37604 3.73555 3.10222 4.41724 2.85101ZM17.1216 6.56641C16.79 6.73551 16.4301 6.88628 16.0522 7.02C14.428 7.59459 12.2503 7.93106 9.89268 7.93106C7.5351 7.93106 5.35734 7.59459 3.73322 7.02C3.35525 6.88628 2.99535 6.73551 2.66377 6.56641V8.61197V8.61337C2.66393 8.61931 2.66641 8.64425 2.69579 8.69504C2.73255 8.7586 2.80772 8.85468 2.95009 8.97376C3.24099 9.21709 3.72205 9.48143 4.4049 9.72301C5.76157 10.203 7.70173 10.5188 9.89268 10.5188C12.0836 10.5188 14.0238 10.203 15.3805 9.72301C16.0633 9.48143 16.5444 9.21709 16.8353 8.97376C16.9777 8.85468 17.0528 8.7586 17.0896 8.69504C17.1189 8.64426 17.1214 8.61933 17.1216 8.61338L17.1216 8.61207L17.1216 8.61197V6.56641ZM17.1216 11.168C16.79 11.3371 16.4301 11.4878 16.0522 11.6216C14.428 12.1961 12.2503 12.5326 9.89268 12.5326C7.5351 12.5326 5.35734 12.1961 3.73322 11.6216C3.35525 11.4878 2.99535 11.3371 2.66377 11.168V13.3955V13.3969C2.66393 13.4028 2.66642 13.4277 2.69579 13.4785C2.73255 13.5421 2.80772 13.6382 2.95009 13.7572C3.24099 14.0006 3.72205 14.2649 4.4049 14.5065C5.76157 14.9865 7.70173 15.3023 9.89268 15.3023C12.0836 15.3023 14.0238 14.9865 15.3805 14.5065C16.0633 14.2649 16.5444 14.0006 16.8353 13.7572C16.9777 13.6382 17.0528 13.5421 17.0896 13.4785C17.1189 13.4278 17.1214 13.4028 17.1216 13.3969L17.1216 13.3956L17.1216 13.3955V11.168ZM19.1355 13.3955V8.71529V8.61197V4.01041C19.1355 3.19699 18.6688 2.55369 18.1362 2.09766C17.5963 1.63539 16.8732 1.2594 16.0645 0.961377C14.4386 0.362227 12.2572 0.00195312 9.89268 0.00195312C7.52816 0.00195312 5.34674 0.362227 3.72088 0.961377C2.91217 1.2594 2.18908 1.63539 1.64916 2.09766C1.11654 2.55369 0.649902 3.19699 0.649902 4.01041V8.61197V8.66066V13.3955V18.0782H2.66377V15.9515C2.99535 16.1206 3.35525 16.2713 3.73322 16.405C5.35734 16.9796 7.5351 17.3161 9.89268 17.3161C12.2503 17.3161 14.428 16.9796 16.0522 16.405C16.4301 16.2713 16.79 16.1206 17.1216 15.9515V18.0808L17.1216 18.0809C17.1217 18.0828 17.1223 18.1073 17.0896 18.1639C17.0528 18.2275 16.9777 18.3235 16.8353 18.4426C16.5444 18.6859 16.0633 18.9503 15.3805 19.1919C14.0238 19.6718 12.0836 19.9876 9.89268 19.9876C7.70173 19.9876 5.76157 19.6718 4.4049 19.1919C3.72205 18.9503 3.24099 18.6859 2.95009 18.4426C2.80772 18.3235 2.73255 18.2275 2.69579 18.1639C2.66306 18.1073 2.66371 18.0828 2.66376 18.0809L2.66377 18.0808H0.649902C0.649902 18.8984 1.12086 19.5381 1.65801 19.9873C2.20062 20.4412 2.92567 20.8047 3.73322 21.0904C5.35734 21.665 7.5351 22.0015 9.89268 22.0015C12.2503 22.0015 14.428 21.665 16.0522 21.0904C16.8597 20.8047 17.5848 20.4412 18.1274 19.9873C18.6645 19.5381 19.1355 18.8984 19.1355 18.0808V13.4501V13.3955Z"/>
      }
    </Icon>
  </Box>
)



export default DataBaseIcon