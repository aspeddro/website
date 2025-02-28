import { Icon, Box } from "@chakra-ui/react";

export const EmailRecoveryImage = ({
  widthImage = "161px",
  heightImage = "90px",
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
      alt="emailRecovery"
      viewBox="0 0 161 90"
      width={widthImage}
      height={heightImage}
    >
      <svg
        width="161"
        height="90"
        viewBox="0 0 161 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.402 32.4327C112.402 31.4849 111.14 30.9243 110.292 31.5238C105.419 34.8894 98.9779 39.1828 76.7835 53.5142C76.1114 53.9499 75.3587 54.4676 74.538 55.032C69.9663 58.1759 63.2869 62.7694 56.7011 62.7199C50.1465 62.7529 43.5758 58.2458 38.9312 55.0599C38.1026 54.4915 37.3354 53.9652 36.6404 53.5142C14.4461 39.1828 7.98415 34.9083 3.11016 31.5432C2.24016 30.9438 1 31.4849 1 32.4521V71.9846C1 77.1097 5.6783 81.2681 11.4441 81.2681H93.5558C93.4674 80.5244 93.4219 79.7676 93.4219 79.0001C93.4219 68.5132 101.918 60.0107 112.402 60V32.4327ZM70.506 49.967C66.5932 52.6548 60.8847 56.5761 56.7011 56.5121C52.5174 56.5761 46.8089 52.6548 42.8961 49.967C42.0879 49.4118 41.3562 48.9092 40.7305 48.5053C13.9832 31.2522 10.1282 28.5703 4.41312 24.5945C3.95875 24.2784 3.49262 23.9541 3.00229 23.6137C1.74032 22.7236 1 21.3897 1 19.958V16.2835C1 11.1584 5.6783 7 11.4441 7H101.959C107.724 7 112.402 11.1584 112.402 16.2835V19.958C112.402 21.3897 111.662 22.7437 110.4 23.6137C110.025 23.8749 109.665 24.1266 109.312 24.3723C103.41 28.4922 99.9197 30.9288 72.6717 48.5053C72.0459 48.9092 71.3143 49.4118 70.506 49.967Z"
          fill="#C4C4C4"
        />
        <mask
          id="path-2-outside-1_12802_5037"
          maskUnits="userSpaceOnUse"
          x="101.871"
          y="68.3008"
          width="59"
          height="17"
          fill="black"
        >
          <rect fill="white" x="101.871" y="68.3008" width="59" height="17" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M116.721 78.6971L112.721 76.5008L116.721 74.3044C117.053 74.1222 117.17 73.703 116.98 73.3752L116.433 72.4263C116.243 72.0985 115.822 71.9904 115.498 72.1866L111.596 74.5522L111.694 69.9902C111.702 69.6119 111.397 69.3008 111.019 69.3008H109.923C109.545 69.3008 109.24 69.6119 109.248 69.9902L109.346 74.5522L105.444 72.1866C105.12 71.9904 104.699 72.0986 104.51 72.4263L103.962 73.3753C103.772 73.703 103.89 74.1223 104.221 74.3044L108.221 76.5008L104.221 78.6971C103.89 78.8793 103.772 79.2986 103.962 79.6263L104.51 80.5753C104.699 80.903 105.12 81.0112 105.444 80.815L109.346 78.4493L109.248 83.0113C109.24 83.3897 109.545 83.7008 109.923 83.7008H111.019C111.397 83.7008 111.702 83.3897 111.694 83.0113L111.596 78.4493L115.498 80.815C115.822 81.0112 116.243 80.903 116.433 80.5752L116.98 79.6263C117.17 79.2985 117.053 78.8793 116.721 78.6971ZM137.921 78.6971L133.921 76.5008L137.921 74.3044C138.253 74.1222 138.37 73.703 138.18 73.3752L137.633 72.4263C137.443 72.0985 137.022 71.9904 136.698 72.1866L132.796 74.5522L132.894 69.9902C132.902 69.6119 132.597 69.3008 132.219 69.3008H131.123C130.745 69.3008 130.44 69.6119 130.448 69.9902L130.546 74.5522L126.644 72.1866C126.32 71.9904 125.899 72.0986 125.71 72.4263L125.162 73.3753C124.972 73.703 125.09 74.1223 125.421 74.3044L129.421 76.5008L125.421 78.6971C125.09 78.8793 124.972 79.2986 125.162 79.6263L125.71 80.5753C125.899 80.903 126.32 81.0112 126.644 80.815L130.546 78.4493L130.448 83.0113C130.44 83.3897 130.745 83.7008 131.123 83.7008H132.219C132.597 83.7008 132.902 83.3897 132.894 83.0113L132.796 78.4493L136.698 80.815C137.022 81.0112 137.443 80.903 137.633 80.5752L138.18 79.6263C138.37 79.2985 138.253 78.8793 137.921 78.6971ZM155.121 76.5008L159.121 78.6971C159.452 78.8793 159.57 79.2985 159.38 79.6263L158.832 80.5752C158.643 80.903 158.222 81.0112 157.898 80.815L153.996 78.4493L154.094 83.0113C154.102 83.3897 153.797 83.7008 153.419 83.7008H152.323C151.945 83.7008 151.64 83.3897 151.648 83.0113L151.746 78.4493L147.844 80.815C147.52 81.0112 147.099 80.903 146.909 80.5753L146.362 79.6263C146.172 79.2986 146.289 78.8793 146.621 78.6971L150.621 76.5008L146.621 74.3044C146.29 74.1223 146.172 73.703 146.362 73.3753L146.909 72.4263C147.099 72.0986 147.52 71.9904 147.844 72.1866L151.746 74.5522L151.648 69.9902C151.64 69.6119 151.945 69.3008 152.323 69.3008H153.419C153.797 69.3008 154.102 69.6119 154.094 69.9902L153.996 74.5522L157.898 72.1866C158.222 71.9904 158.643 72.0985 158.832 72.4263L159.38 73.3752C159.57 73.703 159.452 74.1222 159.121 74.3044L155.121 76.5008Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.721 78.6971L112.721 76.5008L116.721 74.3044C117.053 74.1222 117.17 73.703 116.98 73.3752L116.433 72.4263C116.243 72.0985 115.822 71.9904 115.498 72.1866L111.596 74.5522L111.694 69.9902C111.702 69.6119 111.397 69.3008 111.019 69.3008H109.923C109.545 69.3008 109.24 69.6119 109.248 69.9902L109.346 74.5522L105.444 72.1866C105.12 71.9904 104.699 72.0986 104.51 72.4263L103.962 73.3753C103.772 73.703 103.89 74.1223 104.221 74.3044L108.221 76.5008L104.221 78.6971C103.89 78.8793 103.772 79.2986 103.962 79.6263L104.51 80.5753C104.699 80.903 105.12 81.0112 105.444 80.815L109.346 78.4493L109.248 83.0113C109.24 83.3897 109.545 83.7008 109.923 83.7008H111.019C111.397 83.7008 111.702 83.3897 111.694 83.0113L111.596 78.4493L115.498 80.815C115.822 81.0112 116.243 80.903 116.433 80.5752L116.98 79.6263C117.17 79.2985 117.053 78.8793 116.721 78.6971ZM137.921 78.6971L133.921 76.5008L137.921 74.3044C138.253 74.1222 138.37 73.703 138.18 73.3752L137.633 72.4263C137.443 72.0985 137.022 71.9904 136.698 72.1866L132.796 74.5522L132.894 69.9902C132.902 69.6119 132.597 69.3008 132.219 69.3008H131.123C130.745 69.3008 130.44 69.6119 130.448 69.9902L130.546 74.5522L126.644 72.1866C126.32 71.9904 125.899 72.0986 125.71 72.4263L125.162 73.3753C124.972 73.703 125.09 74.1223 125.421 74.3044L129.421 76.5008L125.421 78.6971C125.09 78.8793 124.972 79.2986 125.162 79.6263L125.71 80.5753C125.899 80.903 126.32 81.0112 126.644 80.815L130.546 78.4493L130.448 83.0113C130.44 83.3897 130.745 83.7008 131.123 83.7008H132.219C132.597 83.7008 132.902 83.3897 132.894 83.0113L132.796 78.4493L136.698 80.815C137.022 81.0112 137.443 80.903 137.633 80.5752L138.18 79.6263C138.37 79.2985 138.253 78.8793 137.921 78.6971ZM155.121 76.5008L159.121 78.6971C159.452 78.8793 159.57 79.2985 159.38 79.6263L158.832 80.5752C158.643 80.903 158.222 81.0112 157.898 80.815L153.996 78.4493L154.094 83.0113C154.102 83.3897 153.797 83.7008 153.419 83.7008H152.323C151.945 83.7008 151.64 83.3897 151.648 83.0113L151.746 78.4493L147.844 80.815C147.52 81.0112 147.099 80.903 146.909 80.5753L146.362 79.6263C146.172 79.2986 146.289 78.8793 146.621 78.6971L150.621 76.5008L146.621 74.3044C146.29 74.1223 146.172 73.703 146.362 73.3753L146.909 72.4263C147.099 72.0986 147.52 71.9904 147.844 72.1866L151.746 74.5522L151.648 69.9902C151.64 69.6119 151.945 69.3008 152.323 69.3008H153.419C153.797 69.3008 154.102 69.6119 154.094 69.9902L153.996 74.5522L157.898 72.1866C158.222 71.9904 158.643 72.0985 158.832 72.4263L159.38 73.3752C159.57 73.703 159.452 74.1222 159.121 74.3044L155.121 76.5008Z"
          fill="#34A15A"
        />
        <path
          d="M112.721 76.5008L112.24 75.6242L110.644 76.5008L112.24 77.3773L112.721 76.5008ZM116.721 78.6971L116.239 79.5737L116.239 79.5737L116.721 78.6971ZM116.721 74.3044L116.239 73.4279L116.239 73.4279L116.721 74.3044ZM116.98 73.3752L116.114 73.8752L116.114 73.8753L116.98 73.3752ZM116.433 72.4263L117.299 71.9263L117.299 71.9263L116.433 72.4263ZM115.498 72.1866L114.98 71.3314L114.98 71.3315L115.498 72.1866ZM111.596 74.5522L110.596 74.5308L110.557 76.3514L112.115 75.4073L111.596 74.5522ZM111.694 69.9902L112.694 70.0117V70.0116L111.694 69.9902ZM109.248 69.9902L110.248 69.9688L110.248 69.9688L109.248 69.9902ZM109.346 74.5522L108.828 75.4073L110.385 76.3514L110.346 74.5308L109.346 74.5522ZM105.444 72.1866L104.926 73.0417L104.926 73.0417L105.444 72.1866ZM104.51 72.4263L103.644 71.9263L103.644 71.9263L104.51 72.4263ZM103.962 73.3753L104.828 73.8753L104.828 73.8753L103.962 73.3753ZM104.221 74.3044L104.703 73.4279L104.703 73.4279L104.221 74.3044ZM108.221 76.5008L108.702 77.3773L110.299 76.5008L108.702 75.6242L108.221 76.5008ZM104.221 78.6971L104.703 79.5737L104.703 79.5737L104.221 78.6971ZM103.962 79.6263L104.828 79.1263L104.828 79.1262L103.962 79.6263ZM104.51 80.5753L103.644 81.0753L103.644 81.0753L104.51 80.5753ZM105.444 80.815L104.926 79.9599L104.926 79.9599L105.444 80.815ZM109.346 78.4493L110.346 78.4708L110.385 76.6501L108.828 77.5942L109.346 78.4493ZM109.248 83.0113L108.249 82.9899L108.249 82.9899L109.248 83.0113ZM111.694 83.0113L112.694 82.9899V82.9899L111.694 83.0113ZM111.596 78.4493L112.115 77.5942L110.557 76.6501L110.596 78.4708L111.596 78.4493ZM115.498 80.815L116.017 79.9598L116.016 79.9598L115.498 80.815ZM116.433 80.5752L117.299 81.0753L117.299 81.0752L116.433 80.5752ZM116.98 79.6263L116.114 79.1263L116.114 79.1263L116.98 79.6263ZM133.921 76.5008L133.44 75.6242L131.843 76.5008L133.44 77.3773L133.921 76.5008ZM137.921 78.6971L137.439 79.5737L137.439 79.5737L137.921 78.6971ZM137.921 74.3044L137.439 73.4279L137.439 73.4279L137.921 74.3044ZM138.18 73.3752L137.314 73.8752L137.314 73.8753L138.18 73.3752ZM137.633 72.4263L138.499 71.9263L138.499 71.9263L137.633 72.4263ZM136.698 72.1866L136.18 71.3314L136.18 71.3315L136.698 72.1866ZM132.796 74.5522L131.796 74.5308L131.757 76.3514L133.314 75.4073L132.796 74.5522ZM132.894 69.9902L133.894 70.0117V70.0116L132.894 69.9902ZM130.448 69.9902L131.448 69.9688L131.448 69.9688L130.448 69.9902ZM130.546 74.5522L130.028 75.4073L131.585 76.3514L131.546 74.5308L130.546 74.5522ZM126.644 72.1866L126.126 73.0417L126.126 73.0417L126.644 72.1866ZM125.71 72.4263L124.843 71.9263L124.843 71.9263L125.71 72.4263ZM125.162 73.3753L126.028 73.8753L126.028 73.8753L125.162 73.3753ZM125.421 74.3044L125.903 73.4279L125.903 73.4279L125.421 74.3044ZM129.421 76.5008L129.902 77.3773L131.499 76.5008L129.902 75.6242L129.421 76.5008ZM125.421 78.6971L125.903 79.5737L125.903 79.5737L125.421 78.6971ZM125.162 79.6263L126.028 79.1263L126.028 79.1262L125.162 79.6263ZM125.71 80.5753L124.843 81.0753L124.843 81.0753L125.71 80.5753ZM126.644 80.815L126.126 79.9599L126.126 79.9599L126.644 80.815ZM130.546 78.4493L131.546 78.4708L131.585 76.6501L130.028 77.5942L130.546 78.4493ZM130.448 83.0113L129.449 82.9899V82.9899L130.448 83.0113ZM132.894 83.0113L133.894 82.9899V82.9899L132.894 83.0113ZM132.796 78.4493L133.314 77.5942L131.757 76.6501L131.796 78.4708L132.796 78.4493ZM136.698 80.815L137.216 79.9598L137.216 79.9598L136.698 80.815ZM137.633 80.5752L138.499 81.0753L138.499 81.0752L137.633 80.5752ZM138.18 79.6263L137.314 79.1263L137.314 79.1263L138.18 79.6263ZM159.121 78.6971L158.639 79.5737L158.639 79.5737L159.121 78.6971ZM155.121 76.5008L154.64 75.6242L153.043 76.5008L154.64 77.3773L155.121 76.5008ZM159.38 79.6263L158.514 79.1263L158.514 79.1263L159.38 79.6263ZM158.832 80.5752L159.699 81.0753L159.699 81.0752L158.832 80.5752ZM157.898 80.815L158.416 79.9598L158.416 79.9598L157.898 80.815ZM153.996 78.4493L154.514 77.5942L152.957 76.6501L152.996 78.4708L153.996 78.4493ZM154.094 83.0113L155.094 82.9899V82.9899L154.094 83.0113ZM151.648 83.0113L150.648 82.9899V82.9899L151.648 83.0113ZM151.746 78.4493L152.746 78.4708L152.785 76.6501L151.228 77.5942L151.746 78.4493ZM147.844 80.815L147.326 79.9599L147.326 79.9599L147.844 80.815ZM146.909 80.5753L146.043 81.0753L146.043 81.0753L146.909 80.5753ZM146.362 79.6263L147.228 79.1263L147.228 79.1262L146.362 79.6263ZM146.621 78.6971L147.103 79.5737L147.103 79.5737L146.621 78.6971ZM150.621 76.5008L151.102 77.3773L152.699 76.5008L151.102 75.6242L150.621 76.5008ZM146.621 74.3044L147.103 73.4279L147.103 73.4279L146.621 74.3044ZM146.362 73.3753L147.228 73.8753L147.228 73.8753L146.362 73.3753ZM146.909 72.4263L146.043 71.9263L146.043 71.9263L146.909 72.4263ZM147.844 72.1866L147.326 73.0417L147.326 73.0417L147.844 72.1866ZM151.746 74.5522L151.228 75.4073L152.785 76.3514L152.746 74.5308L151.746 74.5522ZM151.648 69.9902L152.648 69.9688V69.9688L151.648 69.9902ZM154.094 69.9902L155.093 70.0117V70.0116L154.094 69.9902ZM153.996 74.5522L152.996 74.5308L152.957 76.3514L154.514 75.4073L153.996 74.5522ZM157.898 72.1866L157.38 71.3314L157.38 71.3315L157.898 72.1866ZM158.832 72.4263L159.699 71.9263L159.699 71.9263L158.832 72.4263ZM159.38 73.3752L158.514 73.8752L158.514 73.8753L159.38 73.3752ZM159.121 74.3044L158.639 73.4279L158.639 73.4279L159.121 74.3044ZM112.24 77.3773L116.239 79.5737L117.202 77.8206L113.202 75.6242L112.24 77.3773ZM116.239 73.4279L112.24 75.6242L113.202 77.3773L117.202 75.181L116.239 73.4279ZM116.114 73.8753C116.023 73.7175 116.08 73.5156 116.239 73.4279L117.202 75.181C118.025 74.7289 118.316 73.6885 117.846 72.8752L116.114 73.8753ZM115.567 72.9263L116.114 73.8752L117.847 72.8753L117.299 71.9263L115.567 72.9263ZM116.016 73.0417C115.861 73.1362 115.658 73.0841 115.567 72.9263L117.299 71.9263C116.829 71.113 115.783 70.8446 114.98 71.3314L116.016 73.0417ZM112.115 75.4073L116.017 73.0417L114.98 71.3315L111.078 73.6971L112.115 75.4073ZM110.694 69.9688L110.596 74.5308L112.596 74.5736L112.694 70.0117L110.694 69.9688ZM111.019 70.3008C110.837 70.3008 110.69 70.151 110.694 69.9688L112.694 70.0116C112.714 69.0727 111.958 68.3008 111.019 68.3008V70.3008ZM109.923 70.3008H111.019V68.3008H109.923V70.3008ZM110.248 69.9688C110.252 70.151 110.105 70.3008 109.923 70.3008V68.3008C108.984 68.3008 108.228 69.0727 108.249 70.0117L110.248 69.9688ZM110.346 74.5308L110.248 69.9688L108.249 70.0117L108.346 74.5736L110.346 74.5308ZM104.926 73.0417L108.828 75.4073L109.864 73.6971L105.963 71.3315L104.926 73.0417ZM105.376 72.9263C105.284 73.0841 105.081 73.1362 104.926 73.0417L105.963 71.3315C105.159 70.8446 104.113 71.113 103.644 71.9263L105.376 72.9263ZM104.828 73.8753L105.376 72.9263L103.644 71.9263L103.096 72.8753L104.828 73.8753ZM104.703 73.4279C104.862 73.5156 104.919 73.7174 104.828 73.8753L103.096 72.8753C102.626 73.6886 102.917 74.729 103.74 75.181L104.703 73.4279ZM108.702 75.6242L104.703 73.4279L103.74 75.181L107.74 77.3773L108.702 75.6242ZM104.703 79.5737L108.702 77.3773L107.74 75.6242L103.74 77.8206L104.703 79.5737ZM104.828 79.1262C104.919 79.2841 104.862 79.486 104.703 79.5737L103.74 77.8206C102.917 78.2726 102.626 79.313 103.096 80.1264L104.828 79.1262ZM105.376 80.0753L104.828 79.1263L103.096 80.1263L103.644 81.0753L105.376 80.0753ZM104.926 79.9599C105.081 79.8654 105.284 79.9175 105.376 80.0753L103.644 81.0753C104.113 81.8886 105.159 82.157 105.963 81.6701L104.926 79.9599ZM108.828 77.5942L104.926 79.9599L105.963 81.6701L109.864 79.3045L108.828 77.5942ZM110.248 83.0327L110.346 78.4708L108.346 78.4279L108.249 82.9899L110.248 83.0327ZM109.923 82.7008C110.105 82.7008 110.252 82.8505 110.248 83.0327L108.249 82.9899C108.228 83.9288 108.984 84.7008 109.923 84.7008V82.7008ZM111.019 82.7008H109.923V84.7008H111.019V82.7008ZM110.694 83.0327C110.69 82.8505 110.837 82.7008 111.019 82.7008V84.7008C111.958 84.7008 112.714 83.9288 112.694 82.9899L110.694 83.0327ZM110.596 78.4708L110.694 83.0328L112.694 82.9899L112.596 78.4279L110.596 78.4708ZM116.016 79.9598L112.115 77.5942L111.078 79.3045L114.98 81.6701L116.016 79.9598ZM115.567 80.0752C115.658 79.9175 115.861 79.8654 116.017 79.9598L114.98 81.6701C115.783 82.157 116.829 81.8885 117.299 81.0753L115.567 80.0752ZM116.114 79.1263L115.567 80.0753L117.299 81.0752L117.847 80.1263L116.114 79.1263ZM116.239 79.5737C116.08 79.486 116.023 79.2841 116.114 79.1263L117.846 80.1263C118.316 79.313 118.025 78.2727 117.202 77.8206L116.239 79.5737ZM133.44 77.3773L137.439 79.5737L138.402 77.8206L134.402 75.6242L133.44 77.3773ZM137.439 73.4279L133.44 75.6242L134.402 77.3773L138.402 75.181L137.439 73.4279ZM137.314 73.8753C137.223 73.7174 137.28 73.5156 137.439 73.4279L138.402 75.181C139.225 74.7289 139.516 73.6885 139.046 72.8752L137.314 73.8753ZM136.767 72.9263L137.314 73.8752L139.046 72.8753L138.499 71.9263L136.767 72.9263ZM137.216 73.0417C137.061 73.1362 136.858 73.0841 136.767 72.9263L138.499 71.9263C138.029 71.113 136.983 70.8446 136.18 71.3314L137.216 73.0417ZM133.314 75.4073L137.216 73.0417L136.18 71.3315L132.278 73.6971L133.314 75.4073ZM131.894 69.9688L131.796 74.5308L133.796 74.5736L133.894 70.0117L131.894 69.9688ZM132.219 70.3008C132.037 70.3008 131.89 70.151 131.894 69.9688L133.894 70.0116C133.914 69.0727 133.158 68.3008 132.219 68.3008V70.3008ZM131.123 70.3008H132.219V68.3008H131.123V70.3008ZM131.448 69.9688C131.452 70.151 131.305 70.3008 131.123 70.3008V68.3008C130.184 68.3008 129.428 69.0727 129.449 70.0117L131.448 69.9688ZM131.546 74.5308L131.448 69.9688L129.449 70.0117L129.546 74.5736L131.546 74.5308ZM126.126 73.0417L130.028 75.4073L131.064 73.6971L127.162 71.3315L126.126 73.0417ZM126.576 72.9263C126.484 73.0841 126.281 73.1362 126.126 73.0417L127.162 71.3315C126.359 70.8446 125.313 71.113 124.843 71.9263L126.576 72.9263ZM126.028 73.8753L126.576 72.9263L124.843 71.9263L124.296 72.8753L126.028 73.8753ZM125.903 73.4279C126.062 73.5156 126.119 73.7174 126.028 73.8753L124.296 72.8753C123.826 73.6886 124.117 74.729 124.94 75.181L125.903 73.4279ZM129.902 75.6242L125.903 73.4279L124.94 75.181L128.94 77.3773L129.902 75.6242ZM125.903 79.5737L129.902 77.3773L128.94 75.6242L124.94 77.8206L125.903 79.5737ZM126.028 79.1262C126.119 79.2841 126.062 79.486 125.903 79.5737L124.94 77.8206C124.117 78.2726 123.826 79.313 124.296 80.1264L126.028 79.1262ZM126.576 80.0753L126.028 79.1263L124.296 80.1263L124.843 81.0753L126.576 80.0753ZM126.126 79.9599C126.281 79.8654 126.484 79.9175 126.576 80.0753L124.843 81.0753C125.313 81.8886 126.359 82.157 127.162 81.6701L126.126 79.9599ZM130.028 77.5942L126.126 79.9599L127.162 81.6701L131.064 79.3045L130.028 77.5942ZM131.448 83.0327L131.546 78.4708L129.546 78.4279L129.449 82.9899L131.448 83.0327ZM131.123 82.7008C131.305 82.7008 131.452 82.8505 131.448 83.0327L129.449 82.9899C129.428 83.9288 130.184 84.7008 131.123 84.7008V82.7008ZM132.219 82.7008H131.123V84.7008H132.219V82.7008ZM131.894 83.0327C131.89 82.8505 132.037 82.7008 132.219 82.7008V84.7008C133.158 84.7008 133.914 83.9289 133.894 82.9899L131.894 83.0327ZM131.796 78.4708L131.894 83.0328L133.894 82.9899L133.796 78.4279L131.796 78.4708ZM137.216 79.9598L133.314 77.5942L132.278 79.3045L136.18 81.6701L137.216 79.9598ZM136.767 80.0752C136.858 79.9175 137.061 79.8654 137.216 79.9598L136.18 81.6701C136.983 82.157 138.029 81.8885 138.499 81.0753L136.767 80.0752ZM137.314 79.1263L136.767 80.0753L138.499 81.0752L139.046 80.1263L137.314 79.1263ZM137.439 79.5737C137.28 79.486 137.223 79.2841 137.314 79.1263L139.046 80.1263C139.516 79.313 139.225 78.2726 138.402 77.8206L137.439 79.5737ZM159.602 77.8206L155.602 75.6242L154.64 77.3773L158.639 79.5737L159.602 77.8206ZM160.246 80.1263C160.716 79.313 160.425 78.2726 159.602 77.8206L158.639 79.5737C158.48 79.486 158.423 79.2841 158.514 79.1263L160.246 80.1263ZM159.699 81.0752L160.246 80.1263L158.514 79.1263L157.966 80.0753L159.699 81.0752ZM157.38 81.6701C158.183 82.157 159.229 81.8885 159.699 81.0753L157.966 80.0752C158.058 79.9175 158.261 79.8654 158.416 79.9598L157.38 81.6701ZM153.478 79.3045L157.38 81.6701L158.416 79.9598L154.514 77.5942L153.478 79.3045ZM155.094 82.9899L154.996 78.4279L152.996 78.4708L153.094 83.0328L155.094 82.9899ZM153.419 84.7008C154.358 84.7008 155.114 83.9288 155.094 82.9899L153.094 83.0327C153.09 82.8505 153.237 82.7008 153.419 82.7008V84.7008ZM152.323 84.7008H153.419V82.7008H152.323V84.7008ZM150.648 82.9899C150.628 83.9288 151.384 84.7008 152.323 84.7008V82.7008C152.505 82.7008 152.652 82.8505 152.648 83.0327L150.648 82.9899ZM150.746 78.4279L150.648 82.9899L152.648 83.0327L152.746 78.4708L150.746 78.4279ZM148.362 81.6701L152.264 79.3045L151.228 77.5942L147.326 79.9599L148.362 81.6701ZM146.043 81.0753C146.513 81.8886 147.559 82.157 148.362 81.6701L147.326 79.9599C147.481 79.8654 147.684 79.9175 147.775 80.0753L146.043 81.0753ZM145.496 80.1263L146.043 81.0753L147.775 80.0753L147.228 79.1263L145.496 80.1263ZM146.14 77.8206C145.317 78.2726 145.026 79.313 145.496 80.1264L147.228 79.1262C147.319 79.2841 147.262 79.486 147.103 79.5737L146.14 77.8206ZM150.14 75.6242L146.14 77.8206L147.103 79.5737L151.102 77.3773L150.14 75.6242ZM146.14 75.181L150.14 77.3773L151.102 75.6242L147.103 73.4279L146.14 75.181ZM145.496 72.8753C145.026 73.6886 145.317 74.729 146.14 75.181L147.103 73.4279C147.262 73.5156 147.319 73.7175 147.228 73.8753L145.496 72.8753ZM146.043 71.9263L145.496 72.8753L147.228 73.8753L147.775 72.9263L146.043 71.9263ZM148.362 71.3315C147.559 70.8446 146.513 71.113 146.043 71.9263L147.775 72.9263C147.684 73.0841 147.481 73.1362 147.326 73.0417L148.362 71.3315ZM152.264 73.6971L148.362 71.3315L147.326 73.0417L151.228 75.4073L152.264 73.6971ZM150.648 70.0117L150.746 74.5736L152.746 74.5308L152.648 69.9688L150.648 70.0117ZM152.323 68.3008C151.384 68.3008 150.628 69.0727 150.648 70.0117L152.648 69.9688C152.652 70.151 152.505 70.3008 152.323 70.3008V68.3008ZM153.419 68.3008H152.323V70.3008H153.419V68.3008ZM155.093 70.0116C155.114 69.0727 154.358 68.3008 153.419 68.3008V70.3008C153.237 70.3008 153.09 70.151 153.094 69.9688L155.093 70.0116ZM154.996 74.5736L155.093 70.0117L153.094 69.9688L152.996 74.5308L154.996 74.5736ZM157.38 71.3315L153.478 73.6971L154.514 75.4073L158.416 73.0417L157.38 71.3315ZM159.699 71.9263C159.229 71.113 158.183 70.8446 157.38 71.3314L158.416 73.0417C158.261 73.1362 158.058 73.0841 157.966 72.9263L159.699 71.9263ZM160.246 72.8753L159.699 71.9263L157.966 72.9263L158.514 73.8752L160.246 72.8753ZM159.602 75.181C160.425 74.7289 160.716 73.6885 160.246 72.8752L158.514 73.8753C158.423 73.7174 158.48 73.5156 158.639 73.4279L159.602 75.181ZM155.602 77.3773L159.602 75.181L158.639 73.4279L154.64 75.6242L155.602 77.3773Z"
          fill="#34A15A"
        />
      </svg>
    </Icon>
  </Box>
);

export const EmailConfirmImage = ({
  widthImage = "126px",
  heightImage = "90px",
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
      alt="emailConfirm"
      viewBox="0 0 126 90"
      width={widthImage}
      height={heightImage}
    >
      <svg
        width="126"
        height="90"
        viewBox="0 0 126 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M112.172 87.3442C119.447 87.3442 125.344 81.4469 125.344 74.1722C125.344 66.8974 119.447 61 112.172 61C104.897 61 99 66.8974 99 74.1722C99 81.4469 104.897 87.3442 112.172 87.3442L110.923 80.3617C110.657 80.6268 110.218 80.6298 109.949 80.3617L105.443 75.8525C105.17 75.5844 105.173 75.141 105.443 74.8715L106.418 73.8874C106.695 73.6267 107.134 73.6193 107.403 73.8874L110.434 76.9264L116.934 70.4286C117.207 70.1561 117.652 70.1591 117.915 70.4242L118.898 71.4053C119.163 71.6704 119.151 72.1109 118.898 72.3761L110.923 80.3617"
          fill="#34A15A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M111.98 27.4327C111.98 26.4849 110.718 25.9243 109.87 26.5238C104.997 29.8894 98.556 34.1828 76.3616 48.5142C75.6895 48.9499 74.9368 49.4676 74.1161 50.032C69.5445 53.1759 62.865 57.7694 56.2792 57.7199C49.7246 57.7529 43.1539 53.2458 38.5093 50.0599C37.6808 49.4915 36.9135 48.9652 36.2186 48.5142C14.0242 34.1828 7.56227 29.9083 2.68828 26.5432C1.81828 25.9438 0.578125 26.4849 0.578125 27.4521V66.9846C0.578125 72.1097 5.25642 76.2681 11.0222 76.2681H93.134C93.0455 75.5244 93 74.7676 93 74.0001C93 63.5132 101.496 55.0107 111.98 55V27.4327ZM70.0841 44.967C66.1713 47.6548 60.4629 51.5761 56.2792 51.5121C52.0955 51.5761 46.3871 47.6548 42.4743 44.967C41.666 44.4118 40.9344 43.9092 40.3086 43.5053C13.5613 26.2522 9.7063 23.5703 3.99124 19.5945C3.53687 19.2784 3.07074 18.9541 2.58042 18.6137C1.31845 17.7236 0.578125 16.3897 0.578125 14.958V11.2835C0.578125 6.15842 5.25642 2 11.0222 2H101.537C107.302 2 111.98 6.15842 111.98 11.2835V14.958C111.98 16.3897 111.24 17.7437 109.978 18.6137C109.603 18.8749 109.243 19.1266 108.891 19.3723C102.988 23.4922 99.4978 25.9288 72.2498 43.5053C71.624 43.9092 70.8924 44.4118 70.0841 44.967Z"
          fill="#C4C4C4"
        />
      </svg>
    </Icon>
  </Box>
);
