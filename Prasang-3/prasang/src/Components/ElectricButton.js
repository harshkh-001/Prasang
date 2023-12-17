import React from "react";
import PropTypes from "prop-types"
const ElectricButton = ({ ButtonName}) => {
  return (
    <div className=".electric-button">
    <div className="buttonHolder ">
      <button className="electric"  id="electric">
        <span className="part hide" id="part1"></span>
        <span className="part hide" id="part2"></span>
        <span className="part hide" id="part3"></span>
        <span className="part hide" id="part4"></span>
        <svg
          id="y1"
          className="yellow hide"
          width="415"
          height="181"
          viewBox="0 0 415 181"
          fill="none"
        >
          <path
            d="M27.2509 30.3446C34.4233 30.3446 37.3438 25.435 43.3741 22.8959C47.3062 21.2403 52.2153 27.6639 54.83 25.6303C56.9648 23.9698 58.295 21.7324 60.8173 20.5859C63.459 19.3851 66.1655 19.7541 68.8317 18.0401C71.5298 16.3056 72.3864 15.9187 75.6204 15.9187C78.8593 15.9187 79.6923 12.6752 82.4091 12.5243C85.3838 12.359 92.3568 11.0685 92.5921 15.0701C92.7642 17.9956 101.291 10.585 102.304 10.8743C106.778 12.1527 106.809 15.9187 112.11 15.9187C113.757 15.9187 116.514 15.711 117.39 14.2215C118.771 11.8735 121.049 10.7436 122.764 12.9486C123.841 14.333 126.016 19.2187 127.856 19.2187C130.8 19.2187 138.052 17.8915 140.066 15.5415C141.24 14.1714 142.391 11.7347 143.979 10.8271C147.072 9.05946 155.518 7.6863 158.782 9.31852C163.215 11.535 162.473 16.9003 168.305 14.8815C170.735 14.0403 172.344 13.4197 174.245 11.8643C176.398 10.1025 180.448 10.2496 182.967 9.12995C187.409 7.15573 194.614 5.56151 198.241 10.0257C199.539 11.6227 201.342 17.9748 203.333 18.4173C207.202 19.277 210.65 16.8454 213.28 14.4101C215.31 12.531 217.801 11.2096 219.88 9.12995C222.093 6.91741 223.404 4.88701 226.669 4.88701C233.632 4.88701 239.504 8.01076 244.018 12.5243C249.239 17.7455 257.919 19.1044 264.667 21.1988C267.318 22.0216 267.605 20.9462 270.136 19.973C273.084 18.8389 276.253 15.6813 278.433 13.3729C281.053 10.5986 282.971 10.8271 286.919 10.8271C289.114 10.8271 291.325 10.7488 293.519 10.8271C295.248 10.8889 296.621 12.43 298.28 12.43C298.946 12.43 300.935 8.2198 301.533 7.62135C303.486 5.66847 306.398 3.73346 309.029 2.81269C315.686 0.482727 323.507 1.61888 326.142 8.46994C327.751 12.653 329.489 17.0584 334.44 16.7672C335.775 16.6887 336.094 12.8361 337.174 11.8643C338.455 10.7111 342.417 11.8095 343.303 12.9486C344.524 14.5193 344.426 18.1374 345.896 19.313C348.421 21.3335 351.198 17.7283 353.109 15.9187C356.378 12.8208 362.423 14.8331 364.989 18.0401C365.87 19.1419 368.347 20.4283 369.656 21.0102C371.46 21.8119 370.534 23.791 371.306 25.2531C372.498 27.512 375.893 29.5686 378.095 30.7218C382.872 33.2244 386.659 32.8904 392.144 32.8904C393.463 32.8904 397.165 32.1732 397.235 33.9276C397.351 36.8282 397.599 40.1991 397.188 43.0735C396.801 45.7854 394.689 47.6716 394.689 50.7107C394.689 53.5394 394.689 56.368 394.689 59.1966C394.689 65.7982 404.284 67.983 408.455 71.7369C411.926 74.8608 413.358 77.6202 413.358 82.5799C413.358 89.0091 412.072 94.179 409.115 99.9288C407.279 103.499 404.859 110.16 401.148 111.809C398.231 113.106 400.399 119.131 400.582 121.144C400.962 125.325 400.629 129.672 400.629 133.872C400.629 138.772 396.335 143.468 392.144 145.564C388.874 147.199 383.667 145.169 380.075 146.413C374.032 148.504 368.264 157.965 365.46 163.573C363.056 168.382 360.941 170.513 355.183 169.466C352.96 169.062 351.457 167.496 349.29 167.014C347.045 166.516 344.363 167.088 342.077 166.967C340.027 166.859 338.269 165.27 336.137 165.27C332.535 165.27 329.396 167.9 325.954 168.664C318.538 170.312 311.971 170.362 304.362 170.362C299.213 170.362 293.637 169.875 289.276 166.967C287.217 165.595 285.094 163.106 282.676 165.27C278.216 169.261 270.451 174.605 264.431 174.605C259.712 174.605 255.33 174.531 250.807 173.709C247.112 173.037 245.209 170.362 241.472 170.362C234.558 170.362 227.643 170.362 220.729 170.362C214.455 170.362 210.739 175.453 204.606 175.453C199.332 175.453 197.686 170.481 191.83 172.53C188.87 173.566 181.58 174.756 179.997 177.527C178.388 180.342 172.259 178.524 170.002 177.622C167.101 176.461 164.495 172.907 161.328 172.907C156.842 172.907 153.255 173.373 149.023 175.029C141.002 178.167 134.238 179.667 127.856 173.285C126.61 172.039 125.884 171.229 124.367 170.362C121.822 168.908 119.685 168.673 117.201 167.627C108.202 163.838 98.5054 170.41 90.895 174.416C87.2017 176.36 78.4157 178.52 75.1961 174.557C73.7277 172.75 72.6403 169.181 70.0574 168.712C67.5016 168.247 64.1344 166.967 61.6187 166.967C59.4853 166.967 58.4768 165.473 57.3286 163.997C54.7378 160.666 50.8537 158.697 46.957 157.444C42.2454 155.93 35.11 154.238 30.221 154.238C24.4007 154.238 25.6318 142.534 24.0451 138.964C23.2967 137.28 22.5901 134.547 21.1222 133.212C18.9533 131.241 13.8629 129.64 11.1277 128.121C8.99684 126.937 8.51404 124.566 6.8848 122.841C5.3733 121.24 1.79327 119.798 1.79327 117.325C1.79327 114.611 3.14113 113.41 4.71619 111.385C6.5075 109.082 6.33194 105.071 5.84764 102.286C4.90863 96.8867 3.49045 91.1803 3.49045 85.88C3.49045 78.9316 14.5221 80.1751 14.5221 75.7441C14.5221 71.0549 12.8249 67.1013 12.8249 62.591C12.8249 58.2022 15.2941 55.4647 17.5393 51.9365C18.6967 50.1176 23.008 46.1694 23.008 44.3463C23.008 42.2249 23.008 40.1034 23.008 37.9819"
            stroke="#FFF2C4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          id="y2"
          className="yellow yellow-glow hide"
          width="461"
          height="227"
          viewBox="0 0 461 227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_9_65)">
            <path
              d="M50.2509 53.3446C57.4233 53.3446 60.3438 48.435 66.3741 45.8959C70.3062 44.2403 75.2153 50.6639 77.83 48.6303C79.9648 46.9698 81.295 44.7324 83.8173 43.5859C86.459 42.3851 89.1655 42.7541 91.8317 41.0401C94.5298 39.3056 95.3864 38.9187 98.6204 38.9187C101.859 38.9187 102.692 35.6752 105.409 35.5243C108.384 35.359 115.357 34.0685 115.592 38.0701C115.764 40.9956 124.291 33.585 125.304 33.8743C129.778 35.1527 129.809 38.9187 135.11 38.9187C136.757 38.9187 139.514 38.711 140.39 37.2215C141.771 34.8735 144.049 33.7436 145.764 35.9486C146.841 37.333 149.016 42.2187 150.856 42.2187C153.8 42.2187 161.052 40.8915 163.066 38.5415C164.24 37.1714 165.391 34.7347 166.979 33.8271C170.072 32.0595 178.518 30.6863 181.782 32.3185C186.215 34.535 185.473 39.9003 191.305 37.8815C193.735 37.0403 195.344 36.4197 197.245 34.8643C199.398 33.1025 203.448 33.2496 205.967 32.1299C210.409 30.1557 217.614 28.5615 221.241 33.0257C222.539 34.6227 224.342 40.9748 226.333 41.4173C230.202 42.277 233.65 39.8454 236.28 37.4101C238.31 35.531 240.801 34.2096 242.88 32.1299C245.093 29.9174 246.404 27.887 249.669 27.887C256.632 27.887 262.504 31.0108 267.018 35.5243C272.239 40.7455 280.919 42.1044 287.667 44.1988C290.318 45.0216 290.605 43.9462 293.136 42.973C296.084 41.8389 299.253 38.6813 301.433 36.3729C304.053 33.5986 305.971 33.8271 309.919 33.8271C312.114 33.8271 314.325 33.7488 316.519 33.8271C318.248 33.8889 319.621 35.43 321.28 35.43C321.946 35.43 323.935 31.2198 324.533 30.6213C326.486 28.6685 329.398 26.7335 332.029 25.8127C338.686 23.4827 346.507 24.6189 349.142 31.4699C350.751 35.653 352.489 40.0584 357.44 39.7672C358.775 39.6887 359.094 35.8361 360.174 34.8643C361.455 33.7111 365.417 34.8095 366.303 35.9486C367.524 37.5193 367.426 41.1374 368.896 42.313C371.421 44.3335 374.198 40.7283 376.109 38.9187C379.378 35.8208 385.423 37.8331 387.989 41.0401C388.87 42.1419 391.347 43.4283 392.656 44.0102C394.46 44.8119 393.534 46.791 394.306 48.2531C395.498 50.512 398.893 52.5686 401.095 53.7218C405.872 56.2244 409.659 55.8904 415.144 55.8904C416.463 55.8904 420.165 55.1732 420.235 56.9276C420.351 59.8282 420.599 63.1991 420.188 66.0735C419.801 68.7854 417.689 70.6716 417.689 73.7107C417.689 76.5394 417.689 79.368 417.689 82.1966C417.689 88.7982 427.284 90.983 431.455 94.7369C434.926 97.8608 436.358 100.62 436.358 105.58C436.358 112.009 435.072 117.179 432.115 122.929C430.279 126.499 427.859 133.16 424.148 134.809C421.231 136.106 423.399 142.131 423.582 144.144C423.962 148.325 423.629 152.672 423.629 156.872C423.629 161.772 419.335 166.468 415.144 168.564C411.874 170.199 406.667 168.169 403.075 169.413C397.032 171.504 391.264 180.965 388.46 186.573C386.056 191.382 383.941 193.513 378.183 192.466C375.96 192.062 374.457 190.496 372.29 190.014C370.045 189.516 367.363 190.088 365.077 189.967C363.027 189.859 361.269 188.27 359.137 188.27C355.535 188.27 352.396 190.9 348.954 191.664C341.538 193.312 334.971 193.362 327.362 193.362C322.213 193.362 316.637 192.875 312.276 189.967C310.217 188.595 308.094 186.106 305.676 188.27C301.216 192.261 293.451 197.605 287.431 197.605C282.712 197.605 278.33 197.531 273.807 196.709C270.112 196.037 268.209 193.362 264.472 193.362C257.558 193.362 250.643 193.362 243.729 193.362C237.455 193.362 233.739 198.453 227.606 198.453C222.332 198.453 220.686 193.481 214.83 195.53C211.87 196.566 204.58 197.756 202.997 200.527C201.388 203.342 195.259 201.524 193.002 200.622C190.101 199.461 187.495 195.907 184.328 195.907C179.842 195.907 176.255 196.373 172.023 198.029C164.002 201.167 157.238 202.667 150.856 196.285C149.61 195.039 148.884 194.229 147.367 193.362C144.822 191.908 142.685 191.673 140.201 190.627C131.202 186.838 121.505 193.41 113.895 197.416C110.202 199.36 101.416 201.52 98.1961 197.557C96.7277 195.75 95.6403 192.181 93.0574 191.712C90.5016 191.247 87.1344 189.967 84.6187 189.967C82.4853 189.967 81.4768 188.473 80.3286 186.997C77.7378 183.666 73.8537 181.697 69.957 180.444C65.2454 178.93 58.11 177.238 53.221 177.238C47.4007 177.238 48.6318 165.534 47.0451 161.964C46.2967 160.28 45.5901 157.547 44.1222 156.212C41.9533 154.241 36.8629 152.64 34.1277 151.121C31.9968 149.937 31.514 147.566 29.8848 145.841C28.3733 144.24 24.7933 142.798 24.7933 140.325C24.7933 137.611 26.1411 136.41 27.7162 134.385C29.5075 132.082 29.3319 128.071 28.8476 125.286C27.9086 119.887 26.4904 114.18 26.4904 108.88C26.4904 101.932 37.5221 103.175 37.5221 98.7441C37.5221 94.0549 35.8249 90.1013 35.8249 85.591C35.8249 81.2022 38.2941 78.4647 40.5393 74.9365C41.6967 73.1176 46.008 69.1694 46.008 67.3463C46.008 65.2249 46.008 63.1034 46.008 60.9819"
              stroke="#FFAB5E"
              strokeWidth="11"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_9_65"
              x="0.293274"
              y="0.211567"
              width="460.565"
              height="226.325"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="9.5"
                result="effect1_foregroundBlur_9_65"
              />
            </filter>
          </defs>
        </svg>
        <svg
          id="b1"
          className="blue hide"
          width="423"
          height="192"
          viewBox="0 0 423 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.191 29.4644C47.5407 29.4644 52.5664 28.7877 58.1627 31.5859C63.1919 34.1004 68.4215 35.4424 73.4373 37.9503C80.8324 41.6478 86.6058 37.4437 93.7563 34.2259C98.7015 32.0006 100.245 26.9772 104.835 24.5615C111.443 21.0834 119.491 19.2814 126.851 19.2814C131.887 19.2814 138.738 21.9232 143.682 23.3357C147.967 24.5602 154.235 26.5541 156.599 30.6901C159.147 35.149 170.836 24.5622 171.873 23.5243C177.296 18.1014 176.957 14.2557 184.649 13.2941C187.738 12.908 189.277 11.5434 190.542 15.4156C192.102 20.1875 191.014 25.2276 191.391 30.1244C191.738 34.636 211.589 24.1968 213.407 21.3557C216.55 16.4444 215.555 1.01201 223.637 1.46102C226.917 1.64322 231.354 5.37644 233.396 7.87257C235.197 10.0741 234.169 12.1524 234.716 14.6141C235.031 16.0304 237.276 17.1098 238.252 17.9613C242.444 21.6211 246.517 25.7797 249.755 30.313C252.033 33.5028 254.129 36.9861 255.884 40.4961C256.21 41.1485 256.434 43.2688 256.921 43.7018C258.545 45.1459 273.158 34.6338 274.93 32.0573C278.42 26.9808 277.323 24.3729 283.887 24.3729C288.331 24.3729 287.805 16.9608 294.447 18.6213C300.128 20.0416 304.956 24.6156 308.496 29.0401C309.515 30.3141 311.543 30.7474 312.739 32.0102C313.541 32.8571 314.179 34.7737 315.285 35.216C317.248 36.0011 321.575 31.3392 322.734 30.313C330.366 23.5501 336.088 15.7628 345.08 11.2669C349.826 8.89361 358.669 9.19092 363.654 10.324C371.178 12.034 373.217 21.0347 374.497 27.5787C375.319 31.7786 374.262 36.2563 374.733 40.4961C375.016 43.0392 376.82 48.9819 379.777 48.9819C386.346 48.9819 392.915 48.9819 399.484 48.9819C409.708 48.9819 413.721 54.2758 413.721 64.2565C413.721 66.601 411.698 68.1383 410.751 70.2438C408.859 74.4479 407.867 78.5287 406.508 82.8783C405.168 87.1673 406.619 91.6197 406.932 95.8428C407.267 100.368 410.042 103.165 414.145 104.989C416.536 106.051 418.85 110.376 419.85 112.626C421.999 117.462 420.51 125.169 420.51 130.446C420.51 135.99 418.045 141.888 413.202 144.495C406.129 148.304 400.484 152.716 395.052 158.45C391.117 162.603 384.647 162.427 379.777 164.861C375.15 167.175 369.841 170.872 364.314 169.293C360.896 168.316 357.617 167.004 353.896 167.831C351.959 168.262 349.439 171.073 347.531 172.027C344.516 173.535 342.008 175.269 339.234 177.119C333.442 180.98 327.545 183.749 320.848 185.982C317.013 187.26 314.209 182.035 311.042 180.702C308.64 179.69 305.154 179.393 302.556 178.816C298.832 177.988 295.348 176.177 291.572 175.421C286.446 174.396 282.007 173.626 276.721 173.724C269.186 173.864 262.635 176.462 255.931 179.617C251.549 181.679 247.344 185.033 242.731 186.453C235.157 188.783 224.117 193.804 216.849 188.15C213.378 185.451 209.594 181.362 204.968 181.362C197.897 181.362 190.825 181.362 183.754 181.362C179.713 181.362 174.615 180.517 170.601 181.409C165.553 182.53 163.568 190.356 157.447 190.696C153.561 190.912 148.187 191.586 144.719 189.659C142.742 188.561 141.175 186.843 138.779 186.5C134.368 185.87 133.163 183.89 129.444 180.984C120.911 174.318 116.066 179.177 107.192 183.059C101.388 185.598 94.6073 188.15 88.2405 188.15C85.6775 188.15 83.3444 187.526 81.0746 186.265C79.5667 185.427 79.762 181.987 79.1889 180.513C78.5032 178.75 79.5346 175.72 79.3303 173.677C79.0522 170.896 78.3965 167.533 77.6331 164.861C76.8776 162.217 65.2817 163.279 63.2543 163.73C61.4932 164.121 57.2701 164.701 56.4656 166.511C54.5631 170.792 50.2806 175.872 46.6597 178.769C40.1695 183.961 34.4453 184.092 28.415 178.816C25.9015 176.616 22.012 175.622 21.0135 172.027C19.3615 166.08 20.572 159.91 22.7106 154.207C24.4023 149.696 27.1372 145.958 29.6879 141.949C31.1226 139.695 31.336 136.722 32.2808 134.265C33.4928 131.114 31.2729 117.983 28.085 117.718C19.2469 116.981 9.38446 113.826 2.58026 108.383C0.709888 106.887 1.22411 100.637 1.30738 98.3886C1.57641 91.1248 12.8742 89.9332 16.912 85.8955C18.0579 84.7496 18.7972 83.2559 19.9763 82.0768C22.5299 79.5233 25.7402 78.3006 28.2736 75.9482C32.2753 72.2323 32.7051 70.3622 32.7051 65.1051"
            stroke="#EDBAFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="blue hide"
          id="b2"
          width="470"
          height="240"
          viewBox="0 0 470 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_9_66)">
            <path
              d="M65.191 53.4644C71.5407 53.4644 76.5664 52.7877 82.1627 55.5859C87.1919 58.1004 92.4215 59.4424 97.4373 61.9503C104.832 65.6478 110.606 61.4437 117.756 58.2259C122.701 56.0006 124.245 50.9772 128.835 48.5615C135.443 45.0834 143.491 43.2814 150.851 43.2814C155.887 43.2814 162.738 45.9232 167.682 47.3357C171.967 48.5602 178.235 50.5541 180.599 54.6901C183.147 59.149 194.836 48.5622 195.873 47.5243C201.296 42.1014 200.957 38.2557 208.649 37.2941C211.738 36.908 213.277 35.5434 214.542 39.4156C216.102 44.1875 215.014 49.2276 215.391 54.1244C215.738 58.636 235.589 48.1968 237.407 45.3557C240.55 40.4444 239.555 25.012 247.637 25.461C250.917 25.6432 255.354 29.3764 257.396 31.8726C259.197 34.0741 258.169 36.1524 258.716 38.6141C259.031 40.0304 261.276 41.1098 262.252 41.9613C266.444 45.6211 270.517 49.7797 273.755 54.313C276.033 57.5028 278.129 60.9861 279.884 64.4961C280.21 65.1485 280.434 67.2688 280.921 67.7018C282.545 69.1459 297.158 58.6338 298.93 56.0573C302.42 50.9808 301.323 48.3729 307.887 48.3729C312.331 48.3729 311.805 40.9608 318.447 42.6213C324.128 44.0416 328.956 48.6156 332.496 53.0401C333.515 54.3141 335.543 54.7474 336.739 56.0102C337.541 56.8571 338.179 58.7737 339.285 59.216C341.248 60.0011 345.575 55.3392 346.734 54.313C354.366 47.5501 360.088 39.7628 369.08 35.2669C373.826 32.8936 382.669 33.1909 387.654 34.324C395.178 36.034 397.217 45.0347 398.497 51.5787C399.319 55.7786 398.262 60.2563 398.733 64.4961C399.016 67.0392 400.82 72.9819 403.777 72.9819C410.346 72.9819 416.915 72.9819 423.484 72.9819C433.708 72.9819 437.721 78.2758 437.721 88.2565C437.721 90.601 435.698 92.1383 434.751 94.2438C432.859 98.4479 431.867 102.529 430.508 106.878C429.168 111.167 430.619 115.62 430.932 119.843C431.267 124.368 434.042 127.165 438.145 128.989C440.536 130.051 442.85 134.376 443.85 136.626C445.999 141.462 444.51 149.169 444.51 154.446C444.51 159.99 442.045 165.888 437.202 168.495C430.129 172.304 424.484 176.716 419.052 182.45C415.117 186.603 408.647 186.427 403.777 188.861C399.15 191.175 393.841 194.872 388.314 193.293C384.896 192.316 381.617 191.004 377.896 191.831C375.959 192.262 373.439 195.073 371.531 196.027C368.516 197.535 366.008 199.269 363.234 201.119C357.442 204.98 351.545 207.749 344.848 209.982C341.013 211.26 338.209 206.035 335.042 204.702C332.64 203.69 329.154 203.393 326.556 202.816C322.832 201.988 319.348 200.177 315.572 199.421C310.446 198.396 306.007 197.626 300.721 197.724C293.186 197.864 286.635 200.462 279.931 203.617C275.549 205.679 271.344 209.033 266.731 210.453C259.157 212.783 248.117 217.804 240.849 212.15C237.378 209.451 233.594 205.362 228.968 205.362C221.897 205.362 214.825 205.362 207.754 205.362C203.713 205.362 198.615 204.517 194.601 205.409C189.553 206.53 187.568 214.356 181.447 214.696C177.561 214.912 172.187 215.586 168.719 213.659C166.742 212.561 165.175 210.843 162.779 210.5C158.368 209.87 157.163 207.89 153.444 204.984C144.911 198.318 140.066 203.177 131.192 207.059C125.388 209.598 118.607 212.15 112.24 212.15C109.677 212.15 107.344 211.526 105.075 210.265C103.567 209.427 103.762 205.987 103.189 204.513C102.503 202.75 103.535 199.72 103.33 197.677C103.052 194.896 102.397 191.533 101.633 188.861C100.878 186.217 89.2817 187.279 87.2543 187.73C85.4932 188.121 81.2701 188.701 80.4656 190.511C78.5631 194.792 74.2806 199.872 70.6597 202.769C64.1695 207.961 58.4453 208.092 52.415 202.816C49.9015 200.616 46.012 199.622 45.0135 196.027C43.3615 190.08 44.572 183.91 46.7106 178.207C48.4023 173.696 51.1372 169.958 53.6879 165.949C55.1226 163.695 55.336 160.722 56.2808 158.265C57.4928 155.114 55.2729 141.983 52.085 141.718C43.2469 140.981 33.3845 137.826 26.5803 132.383C24.7099 130.887 25.2241 124.637 25.3074 122.389C25.5764 115.125 36.8742 113.933 40.912 109.895C42.0579 108.75 42.7972 107.256 43.9763 106.077C46.5299 103.523 49.7402 102.301 52.2736 99.9482C56.2753 96.2323 56.7051 94.3622 56.7051 89.1051"
              stroke="#ffff99" 
              // 9CC4FF
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_9_66"
              x="0.68103"
              y="0.951202"
              width="468.832"
              height="238.535"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_9_66"
              />
            </filter>
          </defs>
        </svg>
        {ButtonName}
      </button >

      <button className="electric hide" id="electric2">
      {ButtonName}
      </button>
    </div>
    </div>
  );
};

export default ElectricButton;
