import { ImageResponse } from '@vercel/og'

import { siteConfig } from '@/data/site'

export const config = {
  runtime: 'edge',
}

const interRegular = fetch(
  new URL('../../../../public/fonts/inter/Inter-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL('../../../../public/fonts/inter/Inter-Bold.otf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(request) {
  try {
    // Make sure the font exists in the specified path:
    const [interRegularFont, interBoldFont] = await Promise.all([
      interRegular,
      interBold,
    ])

    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : siteConfig.blogSiteName

    // ?description=<description>
    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : siteConfig.blogSiteDescription

    return new ImageResponse(
      (
        <div tw="relative flex flex-col w-full h-full bg-[#151719]">
          <div tw="absolute flex top-0 left-0">
            <svg
              width="1200"
              height="630"
              viewBox="0 0 1200 630"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_508_2306)">
                <g opacity="0.6" filter="url(#filter0_f_508_2306)">
                  <ellipse
                    cx="1219"
                    cy="20"
                    rx="148"
                    ry="44"
                    transform="rotate(-90 1219 20)"
                    fill="#FFB224"
                  />
                </g>
                <g opacity="0.6" filter="url(#filter1_f_508_2306)">
                  <ellipse
                    cx="742.5"
                    cy="76"
                    rx="476.5"
                    ry="45"
                    fill="#0092FF"
                  />
                </g>
                <g opacity="0.2" filter="url(#filter2_f_508_2306)">
                  <circle cx="77" cy="680" r="281" fill="#0954A5" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_508_2306"
                  x="875"
                  y="-428"
                  width="688"
                  height="896"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <filter
                  id="filter1_f_508_2306"
                  x="-34"
                  y="-269"
                  width="1553"
                  height="690"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <filter
                  id="filter2_f_508_2306"
                  x="-504"
                  y="99"
                  width="1162"
                  height="1162"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <clipPath id="clip0_508_2306">
                  <rect width="1200" height="630" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div tw="relative flex flex-col w-full p-16">
            <div tw="flex h-10">
              <svg
                width="199"
                height="40"
                viewBox="0 0 199 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.99462C0 2.68388 2.68388 0 5.99462 0H34.0054C37.3161 0 40 2.68388 40 5.99462V34.0054C40 37.3161 37.3161 40 34.0054 40H5.99462C2.68388 40 0 37.3161 0 34.0054V5.99462Z"
                  fill="#212526"
                />
                <path
                  d="M4.95898 12.8776C4.95898 11.9349 4.95898 11.4636 5.25183 11.1708C5.54468 10.8779 6.016 10.8779 6.95866 10.8779H33.0744C34.0171 10.8779 34.4884 10.8779 34.7812 11.1708C35.0741 11.4636 35.0741 11.9349 35.0741 12.8776V14.4773C35.0741 15.42 35.0741 15.8913 34.7812 16.1842C34.4884 16.477 34.0171 16.477 33.0744 16.477H6.95866C6.016 16.477 5.54468 16.477 5.25183 16.1842C4.95898 15.8913 4.95898 15.42 4.95898 14.4773V12.8776Z"
                  fill="url(#paint0_linear_508_2325)"
                />
                <path
                  d="M10.678 20.4767C10.678 19.5341 10.678 19.0627 10.9708 18.7699C11.2637 18.4771 11.735 18.4771 12.6777 18.4771H27.3553C28.2979 18.4771 28.7693 18.4771 29.0621 18.7699C29.3549 19.0627 29.3549 19.5341 29.3549 20.4767V22.0765C29.3549 23.0191 29.3549 23.4905 29.0621 23.7833C28.7693 24.0761 28.2979 24.0761 27.3553 24.0761H12.6777C11.735 24.0761 11.2637 24.0761 10.9708 23.7833C10.678 23.4905 10.678 23.0191 10.678 22.0765V20.4767Z"
                  fill="url(#paint1_linear_508_2325)"
                />
                <path
                  d="M15.9971 28.0754C15.9971 27.1327 15.9971 26.6614 16.2899 26.3685C16.5828 26.0757 17.0541 26.0757 17.9967 26.0757H22.0361C22.9787 26.0757 23.4501 26.0757 23.7429 26.3685C24.0358 26.6614 24.0358 27.1327 24.0358 28.0754V29.6751C24.0358 30.6178 24.0358 31.0891 23.7429 31.3819C23.4501 31.6748 22.9787 31.6748 22.0361 31.6748H17.9967C17.0541 31.6748 16.5828 31.6748 16.2899 31.3819C15.9971 31.0891 15.9971 30.6178 15.9971 29.6751V28.0754Z"
                  fill="url(#paint2_linear_508_2325)"
                />
                <path
                  d="M60.0906 32.7849C58.2122 32.7849 56.7071 32.3273 55.5752 31.4122C54.4433 30.497 53.8774 28.8715 53.8774 26.5355V18.7328H50.8069V14.8676H53.8774L54.4192 10.0631H58.5012V14.8676H63.3418V18.7328H58.5012V26.5716C58.5012 27.4386 58.6818 28.0406 59.0431 28.3778C59.4284 28.6908 60.0786 28.8474 60.9937 28.8474H63.2334V32.7849H60.0906Z"
                  fill="white"
                />
                <path
                  d="M69.0817 12.086C68.2389 12.086 67.5405 11.8332 66.9866 11.3274C66.4568 10.8217 66.1919 10.1835 66.1919 9.4129C66.1919 8.64226 66.4568 8.01612 66.9866 7.53447C67.5405 7.02874 68.2389 6.77588 69.0817 6.77588C69.9246 6.77588 70.611 7.02874 71.1408 7.53447C71.6947 8.01612 71.9716 8.64226 71.9716 9.4129C71.9716 10.1835 71.6947 10.8217 71.1408 11.3274C70.611 11.8332 69.9246 12.086 69.0817 12.086ZM66.7698 32.7849V14.8676H71.3936V32.7849H66.7698Z"
                  fill="white"
                />
                <path
                  d="M84.2031 33.2183C82.3969 33.2183 80.7955 32.833 79.3987 32.0624C78.0019 31.2917 76.9062 30.208 76.1114 28.8113C75.3167 27.4145 74.9194 25.801 74.9194 23.9707C74.9194 22.1164 75.3047 20.4667 76.0753 19.0218C76.87 17.5768 77.9537 16.457 79.3264 15.6623C80.7232 14.8435 82.3608 14.4341 84.2392 14.4341C85.9973 14.4341 87.5506 14.8194 88.8992 15.59C90.2478 16.3607 91.2954 17.4203 92.0419 18.7689C92.8126 20.0934 93.1979 21.5745 93.1979 23.2121C93.1979 23.477 93.1858 23.754 93.1618 24.0429C93.1618 24.3319 93.1497 24.633 93.1256 24.946H79.5071C79.6034 26.3428 80.085 27.4386 80.952 28.2333C81.843 29.028 82.9147 29.4254 84.167 29.4254C85.1062 29.4254 85.8889 29.2207 86.515 28.8113C87.1653 28.3778 87.6469 27.8239 87.96 27.1496H92.656C92.3189 28.2814 91.7529 29.317 90.9582 30.2562C90.1876 31.1713 89.2243 31.8938 88.0683 32.4236C86.9365 32.9534 85.6481 33.2183 84.2031 33.2183ZM84.2392 18.1909C83.1074 18.1909 82.108 18.516 81.241 19.1663C80.374 19.7924 79.8201 20.7557 79.5793 22.0562H88.5018C88.4296 20.8761 87.9961 19.9369 87.2014 19.2385C86.4067 18.5401 85.4193 18.1909 84.2392 18.1909Z"
                  fill="white"
                />
                <path
                  d="M96.3643 32.7849V14.8676H100.482L100.916 18.2271C101.566 17.0711 102.445 16.156 103.553 15.4817C104.685 14.7833 106.009 14.4341 107.527 14.4341V19.3108H106.226C105.215 19.3108 104.312 19.4673 103.517 19.7804C102.722 20.0934 102.096 20.6353 101.638 21.4059C101.205 22.1766 100.988 23.2482 100.988 24.6209V32.7849H96.3643Z"
                  fill="white"
                />
                <path
                  d="M127.27 33.1081C125.585 33.1081 124.081 32.6989 122.757 31.8807C121.434 31.0624 120.387 29.9432 119.616 28.5233C118.846 27.1033 118.461 25.4908 118.461 23.6857C118.461 21.8807 118.846 20.2802 119.616 18.8843C120.387 17.4643 121.434 16.3572 122.757 15.563C124.081 14.7447 125.585 14.3356 127.27 14.3356C128.618 14.3356 129.797 14.5883 130.808 15.0937C131.819 15.5991 132.637 16.3091 133.263 17.2236V6.68213H137.884V32.6749H133.768L133.263 30.1117C132.685 30.9059 131.915 31.6039 130.952 32.2056C130.014 32.8073 128.786 33.1081 127.27 33.1081ZM128.245 29.0648C129.737 29.0648 130.952 28.5714 131.891 27.5846C132.853 26.5738 133.335 25.2862 133.335 23.7218C133.335 22.1574 132.853 20.8819 131.891 19.8951C130.952 18.8843 129.737 18.3789 128.245 18.3789C126.776 18.3789 125.561 18.8722 124.598 19.859C123.636 20.8458 123.154 22.1213 123.154 23.6857C123.154 25.2501 123.636 26.5377 124.598 27.5485C125.561 28.5594 126.776 29.0648 128.245 29.0648Z"
                  fill="#687076"
                />
                <path
                  d="M150.459 33.1081C148.726 33.1081 147.162 32.711 145.766 31.9168C144.394 31.1225 143.299 30.0275 142.481 28.6316C141.687 27.2116 141.289 25.575 141.289 23.7218C141.289 21.8686 141.699 20.2441 142.517 18.8482C143.335 17.4282 144.43 16.3211 145.802 15.5269C147.198 14.7327 148.762 14.3356 150.495 14.3356C152.204 14.3356 153.744 14.7327 155.116 15.5269C156.512 16.3211 157.607 17.4282 158.401 18.8482C159.22 20.2441 159.629 21.8686 159.629 23.7218C159.629 25.575 159.22 27.2116 158.401 28.6316C157.607 30.0275 156.512 31.1225 155.116 31.9168C153.72 32.711 152.168 33.1081 150.459 33.1081ZM150.459 29.1009C151.662 29.1009 152.709 28.6556 153.6 27.7651C154.49 26.8506 154.936 25.5028 154.936 23.7218C154.936 21.9408 154.49 20.6051 153.6 19.7146C152.709 18.8 151.675 18.3428 150.495 18.3428C149.268 18.3428 148.209 18.8 147.318 19.7146C146.452 20.6051 146.019 21.9408 146.019 23.7218C146.019 25.5028 146.452 26.8506 147.318 27.7651C148.209 28.6556 149.256 29.1009 150.459 29.1009Z"
                  fill="#687076"
                />
                <path
                  d="M171.811 33.1081C169.982 33.1081 168.369 32.711 166.973 31.9168C165.577 31.1225 164.47 30.0154 163.652 28.5955C162.858 27.1755 162.461 25.5509 162.461 23.7218C162.461 21.8927 162.858 20.2682 163.652 18.8482C164.47 17.4282 165.577 16.3211 166.973 15.5269C168.369 14.7327 169.982 14.3356 171.811 14.3356C174.097 14.3356 176.023 14.9372 177.587 16.1406C179.151 17.3199 180.15 18.9565 180.583 21.0503H175.71C175.469 20.1839 174.988 19.51 174.266 19.0287C173.568 18.5233 172.738 18.2706 171.775 18.2706C170.499 18.2706 169.416 18.7519 168.526 19.7146C167.635 20.6773 167.19 22.013 167.19 23.7218C167.19 25.4306 167.635 26.7663 168.526 27.729C169.416 28.6917 170.499 29.1731 171.775 29.1731C172.738 29.1731 173.568 28.9324 174.266 28.4511C174.988 27.9697 175.469 27.2838 175.71 26.3933H180.583C180.15 28.415 179.151 30.0395 177.587 31.2669C176.023 32.4944 174.097 33.1081 171.811 33.1081Z"
                  fill="#687076"
                />
                <path
                  d="M191.364 33.1081C189.775 33.1081 188.379 32.8554 187.176 32.35C185.972 31.8205 185.01 31.0985 184.288 30.1839C183.566 29.2693 183.133 28.2104 182.988 27.007H187.645C187.79 27.705 188.175 28.3067 188.8 28.8121C189.45 29.2934 190.281 29.5341 191.291 29.5341C192.302 29.5341 193.036 29.3295 193.494 28.9204C193.975 28.5112 194.216 28.0419 194.216 27.5124C194.216 26.7423 193.879 26.2248 193.205 25.9601C192.531 25.6713 191.592 25.3945 190.389 25.1298C189.619 24.9613 188.837 24.7567 188.042 24.516C187.248 24.2754 186.514 23.9745 185.84 23.6135C185.19 23.2284 184.661 22.7471 184.252 22.1695C183.843 21.5678 183.638 20.8337 183.638 19.9673C183.638 18.3789 184.264 17.0431 185.515 15.9601C186.791 14.8771 188.572 14.3356 190.858 14.3356C192.976 14.3356 194.661 14.8289 195.912 15.8157C197.188 16.8025 197.946 18.1623 198.187 19.8951H193.818C193.554 18.5714 192.555 17.9096 190.822 17.9096C189.956 17.9096 189.282 18.078 188.8 18.415C188.343 18.7519 188.114 19.1731 188.114 19.6785C188.114 20.208 188.463 20.6292 189.161 20.942C189.859 21.2549 190.786 21.5437 191.941 21.8085C193.193 22.0973 194.336 22.4222 195.371 22.7832C196.43 23.1201 197.272 23.6376 197.898 24.3355C198.524 25.0094 198.836 25.9842 198.836 27.2597C198.861 28.3668 198.572 29.3656 197.97 30.2561C197.368 31.1466 196.502 31.8446 195.371 32.35C194.24 32.8554 192.904 33.1081 191.364 33.1081Z"
                  fill="#687076"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_508_2325"
                    x1="36.6538"
                    y1="10.8779"
                    x2="-0.750079"
                    y2="31.2446"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0085FF" />
                    <stop offset="1" stop-color="#00FFF0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_508_2325"
                    x1="12.7477"
                    y1="12.2481"
                    x2="29.3549"
                    y2="29.0153"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F36AFF" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_508_2325"
                    x1="24.4957"
                    y1="28.2453"
                    x2="14.5573"
                    y2="31.6748"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD852" />
                    <stop offset="1" stop-color="#FF7A00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div tw="flex flex-col pt-40" className="">
              <h1
                tw="flex text-[#FFFFFF] font-bold text-[56px] leading-[64px]"
                className=""
              >
                {title}
              </h1>
              <p tw="flex text-2xl leading-9 text-[#FFFFFF]">{description}</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interRegularFont,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Inter',
            data: interBoldFont,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
