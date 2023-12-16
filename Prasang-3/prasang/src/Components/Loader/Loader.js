import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600.000000 100.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="ttb" y2="1">

              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#ffcd00">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
            fill="url(#ttb)"
            stroke="none"
          >
            <path
              d="M2005 890 c-14 -23 -90 -51 -163 -60 -84 -11 -113 -27 -150 -81 -19
-27 -23 -43 -19 -82 7 -73 43 -105 136 -120 58 -9 76 -16 88 -34 14 -21 14
-25 -2 -43 -15 -16 -31 -20 -91 -20 -64 0 -75 3 -88 22 -9 12 -16 17 -16 10 0
-7 -20 -54 -44 -106 l-44 -94 50 31 c44 27 62 32 146 37 110 7 153 24 182 73
38 62 15 154 -47 190 -17 10 -55 20 -85 24 -65 7 -88 18 -88 42 0 47 100 71
138 34 16 -17 19 -13 68 85 28 56 48 102 43 102 -4 0 -11 -5 -14 -10z"
            />
            <path
              d="M1253 851 c61 -74 61 -70 3 -247 -50 -149 -86 -234 -119 -278 -13
-18 -21 -10 -116 108 -57 70 -101 129 -99 130 1 1 17 8 35 15 103 41 110 175
11 227 -25 13 -65 19 -160 22 -71 2 -128 1 -128 -4 0 -4 8 -16 18 -27 14 -16
18 -44 20 -179 4 -180 -1 -221 -29 -249 -19 -19 -18 -19 73 -19 l91 0 -19 21
c-13 14 -20 40 -22 88 -7 114 -3 114 73 -2 39 -59 78 -110 88 -113 11 -3 44
-17 74 -30 49 -22 53 -26 41 -41 -12 -15 -11 -15 10 -4 17 9 27 9 45 0 20 -11
21 -11 9 4 -12 14 -9 18 23 31 20 9 54 21 76 27 38 12 39 13 33 50 -4 21 -4
50 0 64 6 24 9 25 80 25 58 0 75 -3 80 -16 10 -26 7 -79 -6 -92 -9 -9 11 -12
91 -12 l103 0 -29 29 c-20 19 -54 93 -111 240 -65 164 -87 211 -101 211 -16 0
-89 23 -146 46 -17 7 -15 2 8 -25z m-339 -127 c9 -3 16 -16 16 -29 0 -27 -17
-35 -76 -35 -44 0 -44 0 -44 35 0 35 0 35 44 35 24 0 51 -3 60 -6z m470 -98
c9 -27 16 -51 16 -53 0 -2 -18 -3 -40 -3 -22 0 -40 3 -40 6 0 23 34 114 40
107 4 -4 15 -30 24 -57z"
            />
            <path
              d="M2133 851 c61 -74 61 -70 3 -247 -60 -180 -91 -248 -142 -304 l-36
-40 63 29 c35 16 83 34 106 41 42 13 43 13 37 51 -4 21 -4 50 0 64 6 24 9 25
80 25 58 0 75 -3 80 -16 10 -26 7 -79 -6 -92 -9 -9 11 -12 91 -12 l103 0 -29
29 c-20 19 -54 93 -111 240 -65 164 -87 211 -101 211 -16 0 -89 23 -146 46
-17 7 -15 2 8 -25z m131 -225 c9 -27 16 -51 16 -53 0 -2 -18 -3 -40 -3 -22 0
-40 3 -40 6 0 23 34 114 40 107 4 -4 15 -30 24 -57z"
            />
            <path
              d="M2544 846 c20 -18 39 -44 45 -57 5 -14 12 -100 16 -192 7 -157 7
-168 -14 -206 l-21 -41 75 0 76 0 -21 28 c-19 25 -20 40 -18 147 l3 120 90
-147 c83 -136 93 -149 128 -158 20 -6 58 -20 83 -31 l46 -19 -22 32 c-59 90
-72 146 -72 321 0 100 4 133 16 152 9 13 16 27 16 30 0 3 -32 5 -72 5 l-71 0
19 -21 c16 -18 19 -40 22 -143 l3 -121 -93 139 c-100 150 -90 142 -221 181
l-47 14 34 -33z"
            />
            <path
              d="M3323 851 c-9 -14 -28 -19 -80 -23 -38 -3 -85 -13 -105 -22 -152 -72
-142 -386 15 -445 16 -6 53 -11 83 -11 51 0 57 -3 105 -49 27 -27 48 -42 45
-35 -3 8 -13 51 -22 96 -19 92 -14 190 11 241 8 16 14 31 13 31 -11 4 -147
-73 -139 -78 6 -4 11 -29 11 -57 l0 -49 -40 0 c-64 0 -100 49 -100 136 0 55
20 106 51 128 45 31 159 18 222 -27 l28 -19 -14 33 c-8 19 -27 63 -42 99 -15
36 -28 66 -29 67 -1 1 -7 -6 -13 -16z"
            />
            <path
              d="M300 823 c0 -5 7 -17 15 -27 12 -16 15 -62 15 -240 0 -213 -1 -223
-25 -274 -13 -29 -37 -69 -52 -89 -15 -20 -21 -33 -13 -28 8 5 75 48 148 97
l134 87 -35 15 c-47 19 -57 41 -57 124 l0 69 64 5 c104 9 156 54 156 137 0 60
-48 111 -116 122 -63 10 -234 11 -234 2z m241 -109 c23 -27 -1 -49 -60 -52
l-51 -3 0 35 0 36 49 0 c32 0 53 -5 62 -16z"
            />
          </g>
        </svg> */}

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="372.000000pt"
          height="100.000000pt"
          viewBox="0 0 372.000000 100.000000"
          preserveAspectRatio="xMidYMid meet"
        >
            <defs>
            <linearGradient id="ttb" y2="1">

              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#ffcd00">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
            fill="url(#ttb)"
            stroke="none"
          >
            <path
              d="M2005 890 c-14 -23 -90 -51 -163 -60 -84 -11 -113 -27 -150 -81 -19
-27 -23 -43 -19 -82 7 -73 43 -105 136 -120 58 -9 76 -16 88 -34 14 -21 14
-25 -2 -43 -15 -16 -31 -20 -91 -20 -64 0 -75 3 -88 22 -9 12 -16 17 -16 10 0
-7 -20 -54 -44 -106 l-44 -94 50 31 c44 27 62 32 146 37 110 7 153 24 182 73
38 62 15 154 -47 190 -17 10 -55 20 -85 24 -65 7 -88 18 -88 42 0 47 100 71
138 34 16 -17 19 -13 68 85 28 56 48 102 43 102 -4 0 -11 -5 -14 -10z"
            />
            <path
              d="M1253 851 c61 -74 61 -70 3 -247 -50 -149 -86 -234 -119 -278 -13
-18 -21 -10 -116 108 -57 70 -101 129 -99 130 1 1 17 8 35 15 103 41 110 175
11 227 -25 13 -65 19 -160 22 -71 2 -128 1 -128 -4 0 -4 8 -16 18 -27 14 -16
18 -44 20 -179 4 -180 -1 -221 -29 -249 -19 -19 -18 -19 73 -19 l91 0 -19 21
c-13 14 -20 40 -22 88 -7 114 -3 114 73 -2 39 -59 78 -110 88 -113 11 -3 44
-17 74 -30 49 -22 53 -26 41 -41 -12 -15 -11 -15 10 -4 17 9 27 9 45 0 20 -11
21 -11 9 4 -12 14 -9 18 23 31 20 9 54 21 76 27 38 12 39 13 33 50 -4 21 -4
50 0 64 6 24 9 25 80 25 58 0 75 -3 80 -16 10 -26 7 -79 -6 -92 -9 -9 11 -12
91 -12 l103 0 -29 29 c-20 19 -54 93 -111 240 -65 164 -87 211 -101 211 -16 0
-89 23 -146 46 -17 7 -15 2 8 -25z m-339 -127 c9 -3 16 -16 16 -29 0 -27 -17
-35 -76 -35 -44 0 -44 0 -44 35 0 35 0 35 44 35 24 0 51 -3 60 -6z m470 -98
c9 -27 16 -51 16 -53 0 -2 -18 -3 -40 -3 -22 0 -40 3 -40 6 0 23 34 114 40
107 4 -4 15 -30 24 -57z"
            />
            <path
              d="M2133 851 c61 -74 61 -70 3 -247 -60 -180 -91 -248 -142 -304 l-36
-40 63 29 c35 16 83 34 106 41 42 13 43 13 37 51 -4 21 -4 50 0 64 6 24 9 25
80 25 58 0 75 -3 80 -16 10 -26 7 -79 -6 -92 -9 -9 11 -12 91 -12 l103 0 -29
29 c-20 19 -54 93 -111 240 -65 164 -87 211 -101 211 -16 0 -89 23 -146 46
-17 7 -15 2 8 -25z m131 -225 c9 -27 16 -51 16 -53 0 -2 -18 -3 -40 -3 -22 0
-40 3 -40 6 0 23 34 114 40 107 4 -4 15 -30 24 -57z"
            />
            <path
              d="M2544 846 c20 -18 39 -44 45 -57 5 -14 12 -100 16 -192 7 -157 7
-168 -14 -206 l-21 -41 75 0 76 0 -21 28 c-19 25 -20 40 -18 147 l3 120 90
-147 c83 -136 93 -149 128 -158 20 -6 58 -20 83 -31 l46 -19 -22 32 c-59 90
-72 146 -72 321 0 100 4 133 16 152 9 13 16 27 16 30 0 3 -32 5 -72 5 l-71 0
19 -21 c16 -18 19 -40 22 -143 l3 -121 -93 139 c-100 150 -90 142 -221 181
l-47 14 34 -33z"
            />
            <path
              d="M3323 851 c-9 -14 -28 -19 -80 -23 -38 -3 -85 -13 -105 -22 -152 -72
-142 -386 15 -445 16 -6 53 -11 83 -11 51 0 57 -3 105 -49 27 -27 48 -42 45
-35 -3 8 -13 51 -22 96 -19 92 -14 190 11 241 8 16 14 31 13 31 -11 4 -147
-73 -139 -78 6 -4 11 -29 11 -57 l0 -49 -40 0 c-64 0 -100 49 -100 136 0 55
20 106 51 128 45 31 159 18 222 -27 l28 -19 -14 33 c-8 19 -27 63 -42 99 -15
36 -28 66 -29 67 -1 1 -7 -6 -13 -16z"
            />
            <path
              d="M300 823 c0 -5 7 -17 15 -27 12 -16 15 -62 15 -240 0 -213 -1 -223
-25 -274 -13 -29 -37 -69 -52 -89 -15 -20 -21 -33 -13 -28 8 5 75 48 148 97
l134 87 -35 15 c-47 19 -57 41 -57 124 l0 69 64 5 c104 9 156 54 156 137 0 60
-48 111 -116 122 -63 10 -234 11 -234 2z m241 -109 c23 -27 -1 -49 -60 -52
l-51 -3 0 35 0 36 49 0 c32 0 53 -5 62 -16z"
            />
          </g>
        </svg>

        {/* <div className="loading-text">Loading...</div> */}
      </div>
    </div>
  );
};

export default Loader;
