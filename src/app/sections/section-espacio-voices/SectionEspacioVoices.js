import { openSans600, playfair600, playfair700 } from '@/utils/fonts/fonts'
import Image from 'next/image'
import React from 'react'

const EspacioVoices = () => {
  return (
    <section id="EspacioVoices" className="flex flex-col mx-auto pt-12 pb-6 lg:pt-24 lg:pb-16">
      <h2 className={`text-center text-3xl sm:text-5xl mb-8 ${playfair700.className} sm:${playfair600.className}`}>Espacio Voices</h2>
      <div className={`w-full text-center flex flex-col justify-center text-base ${openSans600.className}`}>
        <p className="lg:hidden px-12">
          Un lugar único y especial para
          aprender a tocar instrumentos y cantar.
        </p>
        <p className="hidden lg:flex px-16 mx-auto">
          Un lugar único y especial para aprender a tocar instrumentos y cantar.
        </p>
        <p className="lg:hidden px-20">
          Clases que acompañan tus ganas de hacer música.
        </p>
        <p className="hidden lg:flex px-20 mx-auto">
          Clases que acompañan tus ganas de hacer música.
        </p>
      </div>
      <div className={`flex flex-col mx-auto pt-12 text-base ${openSans600.className}`}>
        <div className="flex flex-col gap-1 items-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 30 29" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M3.37487 14.8784C2.31854 16.4571 1.75492 18.3118 1.755 20.2089V21.9094C1.755 22.1412 1.66255 22.3634 1.49799 22.5273C1.33342 22.6912 1.11023 22.7833 0.877501 22.7833C0.644773 22.7833 0.421577 22.6912 0.257014 22.5273C0.0924507 22.3634 0 22.1412 0 21.9094V20.2106C0.000534092 17.9674 0.667989 15.7745 1.91822 13.9084L2.10776 13.6253C2.17171 13.5298 2.25393 13.4478 2.3497 13.384C2.44548 13.3201 2.55295 13.2757 2.66596 13.2532C2.77898 13.2307 2.89534 13.2307 3.00839 13.253C3.12144 13.2753 3.22898 13.3195 3.32485 13.3832C3.42073 13.4469 3.50307 13.5288 3.56717 13.6242C3.63127 13.7195 3.67588 13.8266 3.69845 13.9391C3.72102 14.0516 3.72111 14.1675 3.69872 14.2801C3.67632 14.3927 3.63187 14.4998 3.56792 14.5952L3.37838 14.8784H3.37487Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M8.32399 12.0611C6.41104 12.0611 4.6262 13.0118 3.56618 14.5952L2.10602 13.627C2.7883 12.6079 3.71264 11.7722 4.79701 11.1942C5.88139 10.6161 7.09228 10.3136 8.32223 10.3134H8.70834C8.94106 10.3134 9.16426 10.4054 9.32882 10.5693C9.49339 10.7332 9.58584 10.9554 9.58584 11.1872C9.58584 11.419 9.49339 11.6412 9.32882 11.8051C9.16426 11.969 8.94106 12.0611 8.70834 12.0611H8.32399ZM13.7259 14.8574C14.5507 16.0913 14.9912 17.5384 14.9912 19.0204H16.7462C16.7466 17.1941 16.2037 15.4085 15.186 13.8892L15.0105 13.627C14.9484 13.5278 14.8668 13.4421 14.7708 13.3749C14.6747 13.3076 14.5661 13.2603 14.4514 13.2356C14.3366 13.2109 14.2181 13.2095 14.1027 13.2312C13.9874 13.253 13.8776 13.2976 13.7799 13.3624C13.6821 13.4272 13.5985 13.5109 13.5338 13.6085C13.4691 13.7061 13.4248 13.8156 13.4034 13.9305C13.382 14.0455 13.384 14.1635 13.4092 14.2777C13.4345 14.3919 13.4825 14.4999 13.5504 14.5952L13.7259 14.8574Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M8.7943 12.0611C10.7055 12.0611 12.4903 13.0118 13.5504 14.5952L15.0105 13.627C14.3282 12.6079 13.4039 11.7722 12.3195 11.1942C11.2351 10.6161 10.0243 10.3136 8.7943 10.3134H8.4082C8.29297 10.3134 8.17886 10.336 8.0724 10.3799C7.96593 10.4238 7.8692 10.4882 7.78771 10.5693C7.70623 10.6504 7.64159 10.7468 7.5975 10.8528C7.5534 10.9588 7.5307 11.0725 7.5307 11.1872C7.5307 11.302 7.5534 11.4156 7.5975 11.5216C7.64159 11.6276 7.70623 11.724 7.78771 11.8051C7.8692 11.8863 7.96593 11.9506 8.0724 11.9945C8.17886 12.0385 8.29297 12.0611 8.4082 12.0611H8.7943Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M8.4468 10.1124C8.96536 10.1124 9.47884 10.0107 9.95792 9.81305C10.437 9.61543 10.8723 9.32578 11.239 8.96063C11.6057 8.59548 11.8965 8.16198 12.095 7.68489C12.2934 7.20779 12.3956 6.69645 12.3956 6.18005C12.3956 5.66364 12.2934 5.1523 12.095 4.6752C11.8965 4.19811 11.6057 3.76461 11.239 3.39946C10.8723 3.03431 10.437 2.74466 9.95792 2.54704C9.47884 2.34942 8.96536 2.24771 8.4468 2.24771C7.39952 2.24771 6.39514 2.662 5.65461 3.39946C4.91407 4.13692 4.49804 5.13712 4.49804 6.18005C4.49804 7.22297 4.91407 8.22317 5.65461 8.96063C6.39514 9.69808 7.39952 10.1124 8.4468 10.1124ZM8.4468 11.8601C9.95953 11.8601 11.4103 11.2617 12.48 10.1964C13.5496 9.13123 14.1506 7.68649 14.1506 6.18005C14.1506 4.6736 13.5496 3.22886 12.48 2.16365C11.4103 1.09843 9.95953 0.5 8.4468 0.5C6.93407 0.5 5.4833 1.09843 4.41363 2.16365C3.34397 3.22886 2.74304 4.6736 2.74304 6.18005C2.74304 7.68649 3.34397 9.13123 4.41363 10.1964C5.4833 11.2617 6.93407 11.8601 8.4468 11.8601ZM15.9196 20.4868C14.8629 22.066 14.2993 23.9213 14.2997 25.819V27.6261C14.2997 27.8579 14.2073 28.0802 14.0427 28.2441C13.8782 28.4079 13.655 28.5 13.4222 28.5C13.1895 28.5 12.9663 28.4079 12.8017 28.2441C12.6372 28.0802 12.5447 27.8579 12.5447 27.6261V25.819C12.5446 23.5767 13.2108 21.3845 14.4594 19.5185L14.6929 19.169C14.8222 18.9762 15.0233 18.8424 15.2517 18.7972C15.4801 18.752 15.7172 18.799 15.9108 18.9278C16.1045 19.0567 16.2387 19.2569 16.2842 19.4843C16.3296 19.7118 16.2824 19.9479 16.153 20.1407L15.9196 20.4868Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M21.0302 17.5401C20.0648 17.54 19.1143 17.7773 18.2632 18.231C17.412 18.6847 16.6866 19.3407 16.1513 20.1407L14.6929 19.1707C15.3883 18.1316 16.3306 17.2796 17.4362 16.6903C18.5417 16.1009 19.7762 15.7925 21.0302 15.7924H21.4233C21.656 15.7924 21.8792 15.8845 22.0438 16.0484C22.2084 16.2122 22.3008 16.4345 22.3008 16.6663C22.3008 16.898 22.2084 17.1203 22.0438 17.2842C21.8792 17.4481 21.656 17.5401 21.4233 17.5401H21.0302ZM26.6234 20.4868C27.6807 22.0658 28.2449 23.9211 28.245 25.819V27.6261C28.245 27.8579 28.3374 28.0802 28.502 28.244C28.6666 28.4079 28.8898 28.5 29.1225 28.5C29.3552 28.5 29.5784 28.4079 29.743 28.244C29.9075 28.0802 30 27.8579 30 27.6261V25.819C29.9996 23.5765 29.3328 21.3843 28.0835 19.5185L27.8501 19.169C27.7207 18.9762 27.5197 18.8424 27.2913 18.7972C27.0629 18.752 26.8258 18.7989 26.6321 18.9278C26.4385 19.0567 26.3042 19.2568 26.2588 19.4843C26.2134 19.7118 26.2606 19.9479 26.39 20.1407L26.6234 20.4868Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M21.5128 17.5401C22.4782 17.54 23.4287 17.7773 24.2798 18.231C25.131 18.6847 25.8564 19.3407 26.3917 20.1407L27.8519 19.1707C27.1562 18.1314 26.2136 17.2792 25.1078 16.6899C24.0019 16.1005 22.767 15.7922 21.5128 15.7924H21.1179C20.8852 15.7924 20.662 15.8845 20.4974 16.0484C20.3329 16.2122 20.2404 16.4345 20.2404 16.6663C20.2404 16.898 20.3329 17.1203 20.4974 17.2842C20.662 17.4481 20.8852 17.5401 21.1179 17.5401H21.5128Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M21.1706 15.7924C21.6892 15.7924 22.2027 15.6907 22.6817 15.4931C23.1608 15.2955 23.5961 15.0058 23.9628 14.6407C24.3295 14.2755 24.6203 13.842 24.8188 13.3649C25.0172 12.8878 25.1194 12.3765 25.1194 11.8601C25.1194 11.3437 25.0172 10.8324 24.8188 10.3553C24.6203 9.87816 24.3295 9.44467 23.9628 9.07952C23.5961 8.71436 23.1608 8.42471 22.6817 8.22709C22.2027 8.02947 21.6892 7.92776 21.1706 7.92776C20.1233 7.92776 19.119 8.34206 18.3784 9.07952C17.6379 9.81697 17.2219 10.8172 17.2219 11.8601C17.2219 12.903 17.6379 13.9032 18.3784 14.6407C19.119 15.3781 20.1233 15.7924 21.1706 15.7924ZM21.1706 17.5401C22.6833 17.5401 24.1341 16.9417 25.2038 15.8765C26.2734 14.8113 26.8744 13.3665 26.8744 11.8601C26.8744 10.3537 26.2734 8.90892 25.2038 7.8437C24.1341 6.77849 22.6833 6.18005 21.1706 6.18005C19.6579 6.18005 18.2071 6.77849 17.1374 7.8437C16.0678 8.90892 15.4669 10.3537 15.4669 11.8601C15.4669 13.3665 16.0678 14.8113 17.1374 15.8765C18.2071 16.9417 19.6579 17.5401 21.1706 17.5401Z"
              fill="white" />
          </svg>
          <p className="text-center px-10">
            Te acompañamos en todo momento
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center mx-auto mb-6">
          <Image
            src='/assets/static/icons/heart.svg'
            width={38}
            height={38}
          />
          <p className="text-center px-20">
            Cuidamos tu voz con técnica
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center mx-auto mb-6">
          <Image
            src='/assets/static/icons/instruments.svg'
            width={38}
            height={38}
          />
          <p className="text-center px-20">
            Enseñamos con calidad profesional
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center mx-auto">
          <Image
            src='/assets/static/icons/hands.svg'
            width={38}
            height={38}
          />
          <p className="text-center px-20 pb-6 lg:pb-0">
            Tenemos 35 años de experiencia
          </p>
        </div>
      </div>
    </section>
  )
}

export default EspacioVoices