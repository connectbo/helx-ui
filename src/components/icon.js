import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const icons = {
  // account
  user: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  userCircle: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>,
  // actions
  backspace: <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/>,
  cancel: <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>,
  close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>,
  copy:<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />,
  cut: <Fragment>
          <path d="M0 0h24v24H0z" fill="none"/>
          <circle cx="6" cy="18" fill="none" r="2"/>
          <circle cx="12" cy="12" fill="none" r=".5"/>
          <circle cx="6" cy="6" fill="none" r="2"/>
          <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/>
        </Fragment>,
  delete: <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>,
  hamburger: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
  magnifyingGlass: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
  paste: <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>,
  // arrows
  chevronUp: <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>,
  chevronDown: <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>,
  chevronLeft: <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />,
  chevronRight: <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />,
  download: <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>,
  // media
  pause: <Fragment>
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>,
  play: <Fragment>
          <path d="M8 5v14l11-7z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>,
  stop: <path d="M6 6h12v12H6z"/>,
  // renci
  renciDash: <path d="m0-0.3762 20.14 24.376h3.8604v-4.1967z" />,
  // notification
  info: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  warning: <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>,
  // www
  email: <Fragment>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>,
  facebook: <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>,
  github: <path d="m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"/>,
  instagram: <Fragment>
              <path d="m12 2.1624c3.2041 0 3.5836 0.012242 4.8491 0.069974 1.17 0.053397 1.8053 0.24884 2.2282 0.41317a3.7179 3.7179 0 0 1 1.3798 0.89766 3.7179 3.7179 0 0 1 0.89766 1.3798c0.16434 0.42284 0.35982 1.0582 0.41318 2.2282 0.05773 1.2654 0.06997 1.6449 0.06997 4.8491 0 3.2042-0.01224 3.5836-0.06997 4.8491-0.0534 1.17-0.24889 1.8053-0.41318 2.2282a3.9739 3.9739 0 0 1-2.2774 2.2774c-0.42284 0.16434-1.0582 0.35982-2.2282 0.41318-1.2652 0.05773-1.6446 0.06997-4.8491 0.06997-3.2045 0-3.5838-0.01224-4.8491-0.06997-1.17-0.0534-1.8053-0.24889-2.2282-0.41318a3.7179 3.7179 0 0 1-1.3798-0.89766 3.718 3.718 0 0 1-0.89766-1.3798c-0.16434-0.42284-0.35982-1.0582-0.41317-2.2282-0.057732-1.2653-0.069974-1.6449-0.069974-4.8491 0-3.2042 0.012242-3.5836 0.069974-4.8491 0.053397-1.17 0.24884-1.8053 0.41317-2.2282a3.7179 3.7179 0 0 1 0.89775-1.3798 3.718 3.718 0 0 1 1.3798-0.89766c0.42284-0.16434 1.0582-0.35982 2.2282-0.41317 1.2654-0.057732 1.6449-0.069974 4.8491-0.069974m0-2.1621c-3.259 0-3.6678 0.013814-4.9475 0.072213-1.2773 0.058304-2.1496 0.26113-2.9128 0.55779a5.8822 5.8822 0 0 0-2.1254 1.3841 5.8822 5.8822 0 0 0-1.3845 2.1254c-0.29642 0.76333-0.49925 1.6356-0.55731 2.9129-0.058637 1.2797-0.072451 1.6885-0.072451 4.9475 0 3.259 0.013814 3.6678 0.072451 4.9475 0.058304 1.2773 0.26113 2.1496 0.55779 2.9128a5.8822 5.8822 0 0 0 1.3841 2.1254 5.8821 5.8821 0 0 0 2.1254 1.3841c0.76333 0.29666 1.6356 0.49949 2.9128 0.55779 1.2799 0.058399 1.6886 0.072213 4.9475 0.072213s3.6678-0.01381 4.9475-0.07221c1.2773-0.0583 2.1496-0.26113 2.9128-0.55779a6.136 6.136 0 0 0 3.5095-3.5095c0.29666-0.76333 0.49949-1.6356 0.55779-2.9128 0.0584-1.2799 0.07221-1.6886 0.07221-4.9475 0-3.259-0.01381-3.6678-0.07221-4.9475-0.0583-1.2773-0.26113-2.1496-0.55779-2.9128a5.8821 5.8821 0 0 0-1.3841-2.1254 5.8821 5.8821 0 0 0-2.1256-1.3844c-0.76333-0.29642-1.6356-0.49925-2.9129-0.55731-1.2797-0.058637-1.6885-0.072451-4.9475-0.072451z"/>
              <path d="m12 5.838a6.1621 6.1621 0 1 0 6.1621 6.1621 6.1621 6.1621 0 0 0-6.1621-6.1621zm0 10.162a3.9999 3.9999 0 1 1 4-3.9999 4 4 0 0 1-4 3.9999z"/>
              <circle cx="18.406" cy="5.5945" r="1.44"/>
            </Fragment>,
  link: <Fragment>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </Fragment>,
  linkedIn: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>,
  rss: <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx="6.18" cy="17.82" r="2.18" />
        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
      </Fragment>,
  slack: <g stroke-width=".19544">
          <path d="m5.0427 15.167c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212 1.1336-2.5212 2.5212-2.5212h2.5212z"/>
          <path d="m6.3131 15.167c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212v6.3127c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212z"/>
          <path d="m8.8343 5.0427c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212 2.5212 1.1336 2.5212 2.5212v2.5212z"/>
          <path d="m8.8343 6.3131c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212h-6.3127c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212z"/>
          <path d="m18.958 8.8343c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212-1.1336 2.5212-2.5212 2.5212h-2.5212z"/>
          <path d="m17.688 8.8343c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212v-6.3127c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212z"/>
          <path d="m15.167 18.958c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212-2.5212-1.1336-2.5212-2.5212v-2.5212z"/>
          <path d="m15.167 17.688c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212h6.3127c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212z"/>
      </g>,
  twitter: <path d="m7.8436 20.89c8.4389 0 13.057-6.9981 13.057-13.057 0-0.19688 0-0.39376-0.0089-0.59063 0.8949-0.64433 1.6735-1.4587 2.2909-2.3804-0.82331 0.36691-1.7093 0.60853-2.64 0.72487 0.94859-0.56379 1.6735-1.4676 2.0225-2.5415-0.88595 0.52799-1.8703 0.90385-2.9174 1.1097-0.84121-0.8949-2.0314-1.4497-3.3469-1.4497-2.5326 0-4.5908 2.0583-4.5908 4.5908 0 0.35796 0.04475 0.70697 0.11634 1.047-3.8123-0.18793-7.195-2.0225-9.4591-4.7967-0.39376 0.68012-0.61748 1.4676-0.61748 2.3088 0 1.5929 0.81436 2.9979 2.0404 3.8212-0.75172-0.026847-1.4587-0.23267-2.0762-0.57274v0.062643c0 2.2194 1.584 4.0807 3.678 4.5013-0.38481 0.10739-0.78751 0.16108-1.2081 0.16108-0.29532 0-0.58168-0.02685-0.8591-0.08054 0.58168 1.8256 2.282 3.15 4.2866 3.1858-1.575 1.235-3.5528 1.9688-5.7005 1.9688-0.36691 0-0.73382-0.0179-1.0918-0.06264 2.0225 1.2887 4.4387 2.0493 7.025 2.0493" strokeWidth=".08949"/>,
  youtube: <path d="m12.018 4.2598s-7.1225 0.0014421-8.8984 0.48047c-0.97992 0.26358-1.7518 1.0391-2.0137 2.0254-0.47579 1.7875-0.47656 5.5176-0.47656 5.5176s7.7069e-4 3.7298 0.47656 5.5176c0.2619 0.98613 1.0338 1.7617 2.0137 2.0254 1.776 0.4789 8.8984 0.48047 8.8984 0.48047s7.1206-0.001572 8.8965-0.48047c0.98005-0.26371 1.7518-1.0393 2.0137-2.0254 0.47592-1.7877 0.47656-5.5176 0.47656-5.5176s-6.42e-4 -3.7301-0.47656-5.5176c-0.2619-0.98626-1.0336-1.7618-2.0137-2.0254-1.7758-0.47903-8.8965-0.48047-8.8965-0.48047zm-2.3301 4.6367 5.9531 3.3867-5.9531 3.3867v-6.7734z"/>,
  // helx
  "app":  <path d="m2.4706 2.272c-1.3622 0-2.4706 1.1084-2.4706 2.4706v13.787c0 1.3626 1.1084 2.4706 2.4706 2.4706h19.059c1.3622 0 2.4706-1.108 2.4706-2.4706v-13.787c0-1.3622-1.1084-2.4706-2.4706-2.4706zm0 0.40358h19.059c1.1403 0 2.0675 0.92776 2.0675 2.068v13.786c0 1.1406-0.92725 2.068-2.0675 2.068h-19.059c-1.1403 0-2.068-0.92736-2.068-2.068v-13.786c0-1.1402 0.92777-2.068 2.068-2.068zm16.629 0.90121c-0.42077 0-0.76324 0.34208-0.76324 0.76324 0 0.42077 0.34247 0.76324 0.76324 0.76324 0.42077 0 0.76324-0.34246 0.76324-0.76324 0-0.42117-0.34247-0.76324-0.76324-0.76324zm2.3187 0c-0.42077 0-0.76324 0.34208-0.76324 0.76324 0 0.42077 0.34247 0.76324 0.76324 0.76324 0.42077 0 0.76376-0.34246 0.76376-0.76324 0-0.42117-0.34299-0.76324-0.76376-0.76324zm-4.6389 0.20103c-0.31004 0-0.56171 0.25179-0.56171 0.56222 0 0.31045 0.25167 0.56222 0.56171 0.56222 0.31044 0 0.56223-0.25179 0.56223-0.56222 0-0.31045-0.25178-0.56222-0.56223-0.56222zm2.3202 0.20152c0.1989 0 0.36069 0.16229 0.36069 0.36121 0 0.1985-0.16178 0.36019-0.36069 0.36019s-0.36069-0.16165-0.36069-0.36019c0-0.19892 0.16179-0.36121 0.36069-0.36121zm2.3187 0c0.1989 0 0.36069 0.16229 0.36069 0.36121 0 0.1985-0.16179 0.36019-0.36069 0.36019s-0.36069-0.16165-0.36069-0.36019c0-0.19892 0.16179-0.36121 0.36069-0.36121zm-17.761 2.0556c-1.0908 0-1.9786 0.88746-1.9786 1.9786v9.7045c0 1.0912 0.88787 1.9786 1.9786 1.9786h16.685c1.0908 0 1.9781-0.88746 1.9781-1.9786v-9.7045c0-1.0912-0.88735-1.9786-1.9781-1.9786zm0 0.40255h16.685c0.86851 0 1.5756 0.70666 1.5756 1.5756v9.7045c0 0.86891-0.70707 1.5761-1.5756 1.5761h-16.685c-0.86891 0-1.5756-0.70717-1.5756-1.5761v-9.7045c0-0.8689 0.70666-1.5756 1.5756-1.5756zm7.3725 1.4004v1.4355c-0.33742 0.086589-0.65746 0.21449-0.95341 0.38239l-0.9932-1.0345-1.3983 1.343 0.99526 1.0361c-0.19891 0.32009-0.35242 0.6693-0.45267 1.0418l-1.435-0.01701-0.022753 1.9383 1.435 0.01701c0.091805 0.37527 0.23621 0.72895 0.42787 1.0531l-1.019 1.0118 1.3658 1.3751 1.019-1.0118c0.32292 0.19366 0.67509 0.34076 1.0495 0.43458l0.0067 1.4355 1.9383-0.0087-0.0067-1.4355c0.32455-0.085 0.63303-0.2078 0.91932-0.36843l0.98803 1.0387 1.4045-1.3358-0.98958-1.0402c0.20052-0.31929 0.35505-0.66866 0.45733-1.0407l1.4345 0.02306 0.03254-1.9378-1.435-0.02381c-0.089369-0.37555-0.23292-0.7297-0.42217-1.0551l1.0232-1.0066-1.3591-1.3818-1.0242 1.0071c-0.32212-0.19529-0.67382-0.34394-1.0475-0.43975v-1.4355zm0.40255 0.40255h1.1332v1.359c0.1369 0.021921 0.27128 0.051364 0.40255 0.088895 0.26454 0.076498 0.51673 0.18248 0.75187 0.31574 0.11999 0.06811 0.23498 0.14343 0.34571 0.22477l0.2899-0.28471 0.67953-0.66867 0.79425 0.80768-0.67901 0.66815-0.2899 0.28475c0.07932 0.11195 0.15462 0.22707 0.22065 0.34828 0.12925 0.23717 0.22805 0.49204 0.29972 0.75859 0.03583 0.13168 0.06359 0.26627 0.08372 0.40358l0.40823 0.0072 0.9503 0.01587-0.01859 1.1327-0.95186-0.0155-0.40565-0.0072c-0.02457 0.1361-0.0547 0.27054-0.09457 0.401v5.29e-4c-0.08093 0.26332-0.19393 0.51202-0.33124 0.74515-0.07006 0.11879-0.14661 0.23308-0.22995 0.34261l0.28111 0.29552 0.65627 0.68986-0.8206 0.78081-0.65627-0.68934-0.27905-0.29352c-0.11355 0.07729-0.2322 0.14786-0.35501 0.21188-0.20052 0.10507-0.41248 0.19004-0.63354 0.25527-0.13086 0.03829-0.26513 0.06803-0.40203 0.09094l0.0021 0.40668 0.0041 0.95185-1.1327 0.0053-0.0047-0.95185-0.0021-0.4072c-0.1369-0.02154-0.2718-0.05027-0.40306-0.08734-0.26534-0.07529-0.51747-0.17904-0.75342-0.31109-0.1204-0.06731-0.23509-0.14324-0.34622-0.22375l-0.28827 0.28626-0.67643 0.67177-0.79838-0.80355 0.67643-0.67229 0.28783-0.28577c-0.079736-0.11154-0.15486-0.22648-0.2217-0.34727-0.13006-0.23633-0.23109-0.49078-0.30437-0.75652-0.036246-0.13168-0.064328-0.26627-0.085262-0.40358l-0.40772-0.0053-0.95134-0.01134 0.013417-1.1327 0.95237 0.01096 0.40565 0.0053c0.024151-0.1369 0.053956-0.27107 0.093014-0.40151 0.079725-0.26374 0.19101-0.51369 0.3271-0.74722 0.069256-0.11958 0.14586-0.23373 0.2284-0.34364l-0.28266-0.29352-0.65989-0.68728 0.81698-0.78494 0.65989 0.68676 0.2806 0.29246c0.11315-0.07808 0.23093-0.14963 0.35294-0.21445 0.21018-0.11112 0.43233-0.19994 0.66506-0.26717 0.13086-0.037417 0.26564-0.066293 0.40255-0.088895zm0.56688 2.8013c-1.1113 0-2.0148 0.9039-2.0148 2.0148 0 1.1113 0.90351 2.0153 2.0148 2.0153s2.0153-0.90402 2.0153-2.0153c0-1.1109-0.90403-2.0148-2.0153-2.0148zm0 0.40255c0.889 0 1.6128 0.72325 1.6128 1.6123 0 0.88944-0.72378 1.6128-1.6128 1.6128-0.88905 0-1.6123-0.72337-1.6123-1.6128 0-0.88904 0.72326-1.6123 1.6123-1.6123z" />,
  "app-restart":  <path d="m2.4706 2.272c-1.3622 0-2.4706 1.1085-2.4706 2.4706v13.787c0 1.3626 1.1085 2.4706 2.4706 2.4706h19.059c1.3622 0 2.4706-1.1081 2.4706-2.4706v-13.787c0-1.3622-1.1085-2.4706-2.4706-2.4706zm0 0.40256h19.059c1.1404 0 2.0681 0.92776 2.0681 2.0681v13.787c0 1.1408-0.92777 2.0681-2.0681 2.0681h-19.059c-1.1404 0-2.0681-0.92736-2.0681-2.0681v-13.787c0-1.1404 0.92777-2.0681 2.0681-2.0681zm16.629 0.90123c-0.42078 0-0.76327 0.34261-0.76327 0.76377 0 0.42077 0.34249 0.76274 0.76327 0.76274 0.42078 0 0.76327-0.34198 0.76327-0.76274 0-0.42116-0.34248-0.76377-0.76327-0.76377zm2.3193 0c-0.42078 0-0.76327 0.34261-0.76327 0.76377 0 0.42077 0.34248 0.76274 0.76327 0.76274 0.42078 0 0.76378-0.34198 0.76378-0.76274 0-0.42116-0.343-0.76377-0.76378-0.76377zm-4.6385 0.20153c-0.31005 0-0.56172 0.25126-0.56172 0.56172 0 0.31044 0.25168 0.56224 0.56172 0.56224 0.31045 0 0.56172-0.2518 0.56172-0.56224 0-0.31045-0.25128-0.56172-0.56172-0.56172zm2.3193 0.20153c0.19892 0 0.3607 0.16179 0.3607 0.3607 0 0.19851-0.16179 0.36018-0.3607 0.36018-0.19892 0-0.36019-0.16167-0.36019-0.36018 0-0.1989 0.16127-0.3607 0.36019-0.3607zm2.3193 0c0.19891 0 0.3607 0.16179 0.3607 0.3607 0 0.19851-0.16179 0.36018-0.3607 0.36018-0.19892 0-0.3607-0.16167-0.3607-0.36018 0-0.1989 0.16179-0.3607 0.3607-0.3607zm-17.761 2.0552c-1.0908 0-1.9787 0.88749-1.9787 1.9787v9.7048c0 1.0912 0.88789 1.9787 1.9787 1.9787h16.685c1.0908 0 1.9782-0.88749 1.9782-1.9787v-9.7048c0-1.0912-0.88738-1.9787-1.9782-1.9787zm0 0.40256h16.685c0.86854 0 1.5757 0.7072 1.5757 1.5761v9.7048c0 0.86892-0.70708 1.5756-1.5757 1.5756h-16.685c-0.86894 0-1.5757-0.70669-1.5757-1.5756v-9.7048c0-0.86893 0.70669-1.5761 1.5757-1.5761zm7.3732 1.402v1.4356c-0.33743 0.086598-0.65736 0.2145-0.95292 0.3824l-0.99374-1.0346-1.3984 1.343 0.9953 1.0356c-0.19892 0.32012-0.35231 0.66985-0.45217 1.0423l-1.4356-0.01705-0.022753 1.9384 1.435 0.01705c0.091404 0.37528 0.23662 0.72902 0.42788 1.0532l-1.0191 1.0118 1.3658 1.3751 1.0196-1.0118c0.32253 0.19368 0.67496 0.34079 1.0491 0.4346l0.0067 1.4356 1.9384-0.0093-0.0067-1.435c0.32454-0.0849 0.63344-0.2078 0.91933-0.36845l0.98806 1.0387 1.4046-1.3358-0.98961-1.0408c0.20053-0.3193 0.35546-0.6682 0.45734-1.0403l1.4345 0.02324 0.03205-1.9378-1.4345-0.02377c-0.0894-0.37568-0.23256-0.72987-0.4222-1.0553l1.0232-1.0066-1.3591-1.3818-1.0242 1.0072c-0.32253-0.19532-0.67381-0.34397-1.0475-0.4398v-1.4356zm-3.3176 0.35967-0.68059 0.26458-0.6811 0.26458 0.45062 0.36174c-0.8372 1.0988-1.3399 2.4644-1.3399 3.9491 0 1.5603 0.55094 2.9936 1.4666 4.1186l0.31265-0.2527c-0.85928-1.0562-1.3767-2.4015-1.3767-3.8659 0-1.3894 0.46989-2.6678 1.2511-3.6975l0.37465 0.30128 0.1111-0.72192zm3.7203 0.04289h1.1333v1.3591c0.1369 0.022224 0.2713 0.051488 0.40256 0.088876 0.26455 0.076501 0.51675 0.18246 0.75189 0.31574 0.11999 0.068 0.23447 0.14345 0.3452 0.2248l0.2899-0.28473 0.68007-0.6692 0.79427 0.8077-0.67955 0.6687-0.28939 0.28474c0.07933 0.11197 0.15451 0.2271 0.22014 0.3483 0.12925 0.23717 0.22868 0.49206 0.30076 0.75861 0.03541 0.13167 0.06306 0.26629 0.08319 0.4036l0.40773 0.0072 0.95085 0.01602-0.01912 1.1328-0.95137-0.01603-0.40567-0.0067c-0.02449 0.13577-0.05484 0.26981-0.09458 0.39997-0.08053 0.26334-0.19434 0.51255-0.33125 0.74568-0.07006 0.11878-0.14713 0.23308-0.23048 0.34262l0.28164 0.2956 0.6563 0.68936-0.82114 0.78134-0.65578-0.68988-0.27905-0.29301c-0.11355 0.0773-0.23209 0.14734-0.3545 0.21136-0.20093 0.10512-0.41301 0.19057-0.63407 0.2558-0.13087 0.0382-0.26503 0.06753-0.40153 0.09042l0.0015 0.40669 0.0041 0.95239-1.1328 0.0062-0.0047-0.95188-0.0015-0.40721c-0.13731-0.02169-0.27192-0.05033-0.4036-0.08734-0.26495-0.0753-0.5179-0.17902-0.75345-0.31109-0.1204-0.0672-0.23509-0.14324-0.34623-0.22376l-0.28836 0.28628-0.67697 0.67179-0.79841-0.80357 0.67697-0.67231 0.28784-0.28576c-0.079712-0.11149-0.15472-0.22693-0.22116-0.34775-0.13046-0.23636-0.23161-0.49079-0.30489-0.75654-0.03624-0.13166-0.064321-0.26577-0.085266-0.40308l-0.40773-0.0052-0.95137-0.01138 0.013417-1.1333 0.95189 0.01138 0.4067 0.0052c0.023735-0.13691 0.05356-0.27158 0.093018-0.40204 0.079329-0.26374 0.1905-0.51319 0.3266-0.74672 0.06926-0.11958 0.14535-0.23372 0.22789-0.34365l-0.28205-0.29402-0.65991-0.68677 0.81701-0.78497 0.65991 0.68677 0.2806 0.29249c0.11315-0.07811 0.23095-0.14964 0.35295-0.21446 0.2102-0.11117 0.43274-0.19993 0.66508-0.26717 0.13127-0.03738 0.26566-0.066274 0.40256-0.088876v-0.40721zm5.5713 0.59841-0.30903 0.25838c0.89672 1.067 1.4397 2.4408 1.4397 3.9403 0 1.3583-0.4484 2.6109-1.1984 3.6282l-0.3974-0.3669-0.16071 0.71261-0.16019 0.71262 0.69764-0.21704 0.69712-0.21756-0.37983-0.34985c0.81532-1.0905 1.3043-2.4388 1.3043-3.9021 0-1.5977-0.57774-3.0616-1.5332-4.1987zm-5.0049 2.2014c-1.1113 0-2.0148 0.90392-2.0148 2.0148 0 1.1113 0.90354 2.0153 2.0148 2.0153 1.1113 0 2.0153-0.90405 2.0153-2.0153 0-1.1109-0.90406-2.0148-2.0153-2.0148zm0 0.40256c0.88907 0 1.6128 0.72323 1.6128 1.6123 0 0.88946-0.72376 1.6128-1.6128 1.6128-0.88906 0-1.6123-0.72335-1.6123-1.6128 0-0.88906 0.72324-1.6123 1.6123-1.6123z" />,
  "data-find":  <path id="path562" d="m9.5258-9.99e-5c-4.15 0-7.5258 3.3761-7.5258 7.5256 0 3.5351 2.4527 6.5002 5.7434 7.304v7.3877c0 0.98293 0.79941 1.7828 1.7823 1.7828 0.98295 0 1.7823-0.79991 1.7823-1.7828v-7.3877c2.5275-0.61742 4.5578-2.5085 5.3641-4.9568h4.2598c0.59344 0 1.0764-0.48299 1.0764-1.0764v-0.29249c0-0.59343-0.483-1.0764-1.0764-1.0764h-3.8851c-3e-3 -0.23467-0.01425-0.46754-0.03824-0.69659h3.9234c0.59344 0 1.0764-0.48299 1.0764-1.0764v-0.29198c0-0.59344-0.483-1.0769-1.0764-1.0769h-4.6236c-0.11509-0.23955-0.24216-0.47168-0.38087-0.6966h5.0044c0.59344 0 1.0764-0.48299 1.0764-1.0764h5.16e-4v-0.29197c0-0.59381-0.48352-1.0764-1.0769-1.0764h-7.4364c-1.1542-0.72049-2.5124-1.1441-3.9699-1.1441zm0 0.37465c1.1542 0 2.2417 0.28138 3.2082 0.76947 0.22569 0.11396 0.44553 0.23782 0.65734 0.37465 0.70404 0.45435 1.3205 1.0297 1.8262 1.6955 0.09334 0.12296 0.18636 0.2457 0.27183 0.37466 0.14808 0.22305 0.2805 0.45705 0.40309 0.6966 0.06298 0.12371 0.12501 0.24808 0.18088 0.37517 0.23506 0.5342 0.40099 1.1028 0.4992 1.6955 0.02062 0.12446 0.04349 0.24795 0.05736 0.37466 0.02549 0.22905 0.03886 0.46154 0.04186 0.69659 3.75e-4 0.033 0.0052 0.0652 0.0052 0.0982 0 0.0933-0.0102 0.18387-0.01395 0.27647-0.02249 0.58593-0.11277 1.154-0.26873 1.696-0.03636 0.12671-0.07781 0.25056-0.12092 0.37465-0.78201 2.2403-2.6449 3.9716-4.9647 4.5703-0.12446 0.0322-0.2481 0.0676-0.37518 0.093-0.45549 0.0911-0.92597 0.14056-1.4077 0.14056-0.48173 0-0.95221-0.0495-1.4077-0.14056-0.12708-0.0255-0.25021-0.0608-0.37466-0.093-3.082-0.79511-5.3682-3.5908-5.3682-6.9174 0-3.943 3.2076-7.151 7.1507-7.151zm4.5146 1.1441h6.8918c0.38688 0 0.70179 0.31452 0.70179 0.70177v0.29197c0 0.38687-0.3149 0.70176-0.70179 0.70176h-5.2473c-0.45549-0.64854-1.0116-1.219-1.6443-1.6955zm-4.5146 0.29249c-3.1513 0-5.715 2.5632-5.715 5.7144 0 2.5285 1.6522 4.6753 3.9327 5.4265 0.12258 0.0405 0.24833 0.0736 0.37466 0.10594 0.45099 0.11471 0.9211 0.18242 1.4077 0.18242 0.48623 0 0.95634-0.0677 1.4077-0.18242 0.12633-0.0322 0.25222-0.0654 0.37518-0.10594 1.5254-0.50271 2.7661-1.6306 3.4221-3.0799 0.05548-0.12259 0.10507-0.24758 0.15193-0.37466 0.19718-0.5327 0.31531-1.1016 0.34417-1.695 0.0045-0.0922 0.01395-0.18364 0.01395-0.27698 0-0.033-0.0044-0.0652-0.0052-0.0982-0.0041-0.23617-0.0246-0.46829-0.05684-0.69659-0.01762-0.12596-0.03357-0.2517-0.05943-0.37466-0.12633-0.60692-0.35392-1.1759-0.65683-1.6955-0.0746-0.12783-0.15101-0.25409-0.23462-0.37517-0.17094-0.2478-0.36307-0.47902-0.57-0.69609-0.12484-0.1312-0.25592-0.25634-0.39275-0.37517-0.48585-0.42211-1.0421-0.7626-1.6505-1.0025-0.11921-0.0469-0.23879-0.0934-0.36175-0.13281-0.54546-0.17319-1.125-0.26768-1.727-0.26768zm0 0.37465c0.59944 0 1.1744 0.10387 1.7131 0.28681v0.0398c0 0.59343 0.483 1.0764 1.0764 1.0764h0.80566c0.23318 0.21293 0.44708 0.4458 0.63977 0.6966h-1.4454c-0.59344 0-1.0764 0.4835-1.0764 1.0769v0.29198c0 0.59343 0.483 1.0764 1.0764 1.0764h2.4847c0.03449 0.22792 0.05649 0.46004 0.06098 0.69659h-2.5457c-0.59344 0-1.0764 0.48351-1.0764 1.0769v0.29146c0 0.59381 0.483 1.0764 1.0764 1.0764h1.9999c-0.61143 1.2427-1.6892 2.2124-3.0066 2.681-0.12296 0.0439-0.2481 0.0834-0.37518 0.11834-0.44949 0.12296-0.91997 0.1943-1.4077 0.1943-0.4881 0-0.95858-0.0713-1.4077-0.1943-0.12708-0.0349-0.2517-0.0745-0.37466-0.11834-2.0693-0.73626-3.558-2.709-3.558-5.0276 0-2.9443 2.3961-5.3397 5.3403-5.3397zm2.0982 0.43098c0.37076 0.15895 0.71721 0.36233 1.0392 0.59738h-0.34779c-0.35127 0-0.64046-0.25999-0.69145-0.59738zm0.69145 2.0438h1.7089c0.32765 0.51283 0.57129 1.0837 0.7085 1.6955h-2.4175c-0.38688 0-0.70179-0.31489-0.70179-0.70176v-0.29198c0-0.38687 0.3149-0.70176 0.70179-0.70176zm4.1663 0h4.4505c0.38688 0 0.70179 0.31488 0.70179 0.70176v0.29198c0 0.38688-0.3149 0.70176-0.70179 0.70176h-3.9807c-0.09297-0.59005-0.24782-1.1591-0.46975-1.6955zm0.55605 3.1414h3.8944c0.38688 0 0.70179 0.31489 0.70179 0.70176v0.29198c0 0.38687-0.3149 0.70228-0.70179 0.70228h-4.1513c0.1477-0.54357 0.23546-1.1112 0.25684-1.696zm-4.7223 5.1e-4h2.5364c-0.03074 0.59605-0.15636 1.166-0.36743 1.695h-2.169c-0.38688 0-0.70179-0.31451-0.70179-0.70176v-0.29146c0-0.38688 0.3149-0.70177 0.70179-0.70177zm-4.1973 7.1122c0.45661 0.087 0.92634 0.13694 1.4077 0.13694 0.48135 0 0.95109-0.05 1.4077-0.13694v7.3024c0 0.77637-0.63132 1.4077-1.4077 1.4077-0.77639 0-1.4077-0.63129-1.4077-1.4077z" />,
  "data-save": <Fragment>
                <path d="m1.6355 4.3298c-0.90381 0-1.6388 0.73561-1.6355 1.6748l2.4102 12.082c0.010221 0.05402 0.024639 0.10748 0.042891 0.15968 0.38838 1.098 1.065 1.7539 1.8107 1.7539h0.11782c-0.056464 0-0.1119-0.0032-0.16691-0.0088 0.055035 0.0056 0.11094 0.0083 0.16743 0.0083h10.486c0.09582 0 0.1899-0.0079 0.28112-0.02377-0.09122 0.01591-0.1853 0.02429-0.28112 0.02429h0.11834c0.62018 0 1.1903-0.45889 1.5885-1.2433h4.917c0.66217 0 1.2015-0.53879 1.2015-1.201s-0.5393-1.2015-1.2015-1.2015h-3.978l0.29093-0.75135h3.6872c0.66217 0 1.2015-0.53879 1.2015-1.201 0-0.66251-0.5393-1.2015-1.2015-1.2015h-2.7559l0.29146-0.75135h2.4644c0.66217 0 1.2015-0.53879 1.2015-1.201 0-0.66251-0.5393-1.2015-1.2015-1.2015h-1.5332l0.25683-0.6625c0.11243-0.43767 0.01619-0.88293-0.2718-1.2542-0.30919-0.39862-0.79851-0.64648-1.2774-0.64648h-4.4638l-0.33435-1.5771c-0.34348-0.94286-1.2092-1.5766-2.1539-1.5766h-10.078zm0 0.36536h10.078c0.65889 0 1.4748 0.41285 1.804 1.3115l0.31316 1.4769h-5.7703c-0.98557 0-1.3322 0.74614-1.6257 1.5715l-3.625 9.1016-0.05426 0.13642-0.00723 0.03772 0.00672-0.03772 0.054776-0.13642c-0.00402-0.01059-0.00927-0.02145-0.012919-0.03204-0.012411-0.03577-0.021791-0.0718-0.029456-0.10904l-2.4061-12.047c0-0.7023 0.5715-1.2733 1.2738-1.2733zm6.4254 3.1538h10.605c0.36867 0 0.74744 0.19314 0.98908 0.50487 0.21719 0.27998 0.29043 0.61311 0.21342 0.91828l-0.29972 0.77461h-5.471c-0.66217 0-1.2015 0.53879-1.2015 1.201 0 0.66216 0.5393 1.2015 1.2015 1.2015h4.5402l-0.29146 0.75136h-4.2488c-0.66217 0-1.2015 0.53879-1.2015 1.201 0 0.66253 0.5393 1.2015 1.2015 1.2015h3.3186l0.14108-0.36483h-3.4597c-0.4614 0-0.83663-0.37523-0.83663-0.83663 0-0.46103 0.37523-0.8356 0.83663-0.8356h7.3939c0.4614 0 0.83613 0.37472 0.83613 0.83613 0 0.46103-0.37473 0.83612-0.83613 0.83612h-3.5449l-0.0708 0.18242 0.07028-0.18242h-0.38809l-0.14159 0.36483-0.29093 0.75135h-3.0277c-0.66217 0-1.2015 0.53929-1.2015 1.2015s0.5393 1.201 1.2015 1.201h1.975c-0.16792 0.50776-0.64185 0.87798-1.2051 0.87798h-10.486c-0.69101 0-1.255-0.55273-1.2733-1.2397l3.6684-9.2111c0.31501-0.88555 0.59973-1.3348 1.2841-1.3348zm6.0367 2.5626h7.3939c0.4614 0 0.83613 0.37523 0.83613 0.83663 0 0.46103-0.37473 0.83613-0.83613 0.83613h-7.3938c-0.4614 0-0.83663-0.3756-0.83663-0.83663 0-0.46103 0.37523-0.83612 0.83663-0.83612zm0 6.3081h7.3937c0.4614 0 0.83613 0.3751 0.83613 0.83613 0 0.46103-0.37473 0.83613-0.83613 0.83613h-5.1449c-0.05549 0.1252-0.12014 0.24656-0.18913 0.36483 0.06899-0.11827 0.1335-0.23963 0.18862-0.36483h-2.2484c-0.4614 0-0.83663-0.3751-0.83663-0.83613 0-0.46103 0.37523-0.83613 0.83663-0.83613zm-10.874 2.7998c0.058398 0.05837 0.12201 0.11059 0.18862 0.15968-0.066478-0.04904-0.13031-0.10138-0.18862-0.15968z" />
                <path d="m15.796 6.5987s2.1212-2.3855 5.0641-0.93813c2.9429 1.4473 3.7259 5.3995 2.1789 8.1946" fill="none" strokeMmiterlimit="10" />
                <path  d="m15.845 6.4746 0.48658 0.44899-0.63187 0.19712-0.6326 0.19675 0.14565-0.64574 0.14565-0.6461z" />
              </Fragment>,
  "data-secure":  <path id="path282" d="m8.4159 13.366c-0.0891-0.096-0.1723-0.19681-0.25018-0.30294-0.0818 0.10516-0.16063 0.21225-0.23412 0.32368 0.0827 0.10564 0.16987 0.20694 0.26332 0.30294 0.0691-0.11143 0.14262-0.219 0.22098-0.32368m7.3894 0.32363c0.0935-0.096 0.18058-0.19729 0.26332-0.30245-0.0735-0.11192-0.15234-0.219-0.23412-0.32416-0.0779 0.10612-0.16111 0.20694-0.25018 0.30293 0.0784 0.10468 0.15186 0.21225 0.22098 0.32368m-8.6586-4.0647v0.47466c0.12363-0.10033 0.25408-0.19247 0.38404-0.2846v-0.46936c-0.1324 0.0878-0.25749 0.18427-0.38404 0.2793m9.3227-0.27911v0.46888c0.12996 0.0926 0.2604 0.18427 0.38404 0.2846v-0.47418c-0.12656-0.095-0.25165-0.19151-0.38404-0.2793m-8.9388-2.3993h-0.38404v0.36179h0.38404zm8.8746-1.2925c0.02 0.11915 0.036 0.23974 0.0462 0.36179h0.38355c-9e-3 -0.12205-0.0239-0.24216-0.0419-0.36179zm-8.8102 0h-0.38793c-0.018 0.11963-0.0331 0.23974-0.0419 0.36179h0.38355c0.0102-0.12205 0.0263-0.24264 0.0462-0.36179m8.8746 1.6543h0.38404v-0.36179h-0.38404zm-1.4e-4 -0.93597v0.57403h0.38404v-0.57403c0-0.1206-9e-3 -0.2383-0.0185-0.35648h-0.38355c9e-3 0.1177 0.018 0.23588 0.018 0.35648m-8.9386 0c0-0.1206 9e-3 -0.23878 0.018-0.35648h-0.38355c-9e-3 0.11818-0.0185 0.23588-0.0185 0.35648v0.57403h0.38404zm4.4693-4.4293c2.2171 0 4.057 1.6097 4.405 3.711h0.38793c-0.35142-2.312-2.3636-4.0916-4.7929-4.0916s-4.4415 1.7795-4.7929 4.0916h0.38793c0.34801-2.1012 2.1879-3.711 4.405-3.711m-4.4693 7.4027v-2.0376h-0.38404v2.3169c0.12656-0.095 0.25165-0.19151 0.38404-0.2793m9.3226 0.27911v-2.3169h-0.38404v2.0376c0.1324 0.0878 0.25749 0.18427 0.38404 0.2793m-3.1942 2.2666c0.14213-0.0704 0.28085-0.14664 0.41227-0.23396-0.14262-0.067-0.28913-0.12734-0.43855-0.18041-0.16841 0.0936-0.34656 0.17221-0.53152 0.23589 0.19129 0.0482 0.37771 0.10661 0.5578 0.17848m-2.7607-0.17829c-0.18447-0.0642-0.36262-0.1423-0.53103-0.23637-0.14991 0.0536-0.29594 0.11384-0.43855 0.1809 0.13093 0.0868 0.27014 0.16304 0.41227 0.23395 0.18009-0.0719 0.36651-0.13024 0.55731-0.17848m4.3374 1.2488h0.50913c-0.10368-0.12542-0.21125-0.24746-0.32709-0.36179h-0.5763c0.13824 0.11385 0.27112 0.23251 0.39426 0.36179m0.3484 0.40395c0.0891-0.096 0.1723-0.19681 0.25018-0.30294-0.0277-0.0352-0.0603-0.0666-0.0891-0.10081h-0.50961c0.12314 0.12831 0.24142 0.26145 0.3485 0.40375m-1.9251-1.4745c0.43417 0.17269 0.82891 0.41678 1.1828 0.70862h0.57581c-0.38988-0.38446-0.84352-0.70573-1.3463-0.94258-0.13142 0.0873-0.27014 0.16353-0.41227 0.23396m-4.5008 0.70876h-0.5763c-0.11535 0.11432-0.22341 0.23637-0.32708 0.36179h0.50912c0.12363-0.12928 0.25603-0.24795 0.39426-0.36179m1.1828-0.70876c-0.14213-0.0704-0.28133-0.14664-0.41227-0.23396-0.50328 0.23685-0.95692 0.55764-1.3468 0.94258h0.5763c0.35386-0.29136 0.7486-0.53593 1.1828-0.70862m-1.5769 1.0706h-0.50913c-0.0287 0.0347-0.0613 0.0656-0.0891 0.10082 0.0774 0.10612 0.16062 0.20694 0.2497 0.30293 0.10708-0.1423 0.22584-0.27495 0.3485-0.40375m3.2358-1.3904c0.38063 0 0.7486 0.0521 1.1015 0.14134 0.18496-0.0637 0.36262-0.14182 0.53103-0.23589-0.51107-0.18185-1.0591-0.28605-1.6325-0.28605s-1.1214 0.1042-1.6325 0.28605c0.16841 0.0941 0.34607 0.17221 0.53103 0.23589 0.35288-0.0892 0.72085-0.14134 1.1015-0.14134m4.1 2.6828h0.40691c-0.0487-0.12204-0.0964-0.24457-0.15478-0.36179h-0.43855c0.0652 0.11867 0.13142 0.23685 0.18642 0.36179m-1.9992 5.6538h0.71891c0.15673-0.11143 0.30616-0.23251 0.44828-0.36179h-0.60014c-0.18009 0.13314-0.36797 0.25615-0.56705 0.36179m-4.7683-0.36178h-0.60063c0.14261 0.12928 0.29155 0.25036 0.44877 0.36179h0.71891c-0.19956-0.10565-0.38696-0.22865-0.56705-0.36179m-1.2461-5.6539h-0.43806c-0.0589 0.11722-0.1066 0.23974-0.15527 0.36179h0.40691c0.0545-0.12494 0.12071-0.24312 0.18642-0.36179m-0.55566 2.1081c0-0.62131 0.13434-1.2098 0.36943-1.7462h-0.40691c-0.21611 0.54268-0.34656 1.1283-0.34656 1.7462 0 1.4042 0.61378 2.6656 1.5853 3.546h0.60063c-1.0913-0.80847-1.8019-2.095-1.8019-3.546m8.3827-2.1081h0.43855c-0.0862-0.17366-0.17766-0.34442-0.28377-0.50554-0.0823 0.10516-0.16938 0.20646-0.26284 0.30246 0.0404 0.0651 0.0711 0.13603 0.10806 0.20308m-7.7186-0.20303c-0.0935-0.096-0.18058-0.19729-0.26332-0.30245-0.10563 0.16111-0.19713 0.33188-0.28329 0.50553h0.43807c0.0375-0.067 0.0681-0.13796 0.10854-0.20308m3.8052 6.7406c-0.75931 0-1.4738-0.18958-2.1008-0.52194h-0.71843c0.79533 0.56584 1.7673 0.90254 2.8192 0.90254s2.0238-0.3367 2.8192-0.90254h-0.71843c-0.62691 0.33236-1.3414 0.52194-2.1008 0.52194m4.4693-4.4295c0 1.451-0.71064 2.7375-1.8019 3.546h0.60063c0.97153-0.88035 1.5853-2.1418 1.5853-3.546 0-0.61793-0.13045-1.2035-0.34656-1.7462h-0.40691c0.23509 0.53641 0.36943 1.1249 0.36943 1.7462m-8.1807-7.0954c0.0117 0.1341 0.0292 0.26627 0.055 0.39555 0.1173-0.0627 0.24045-0.11529 0.36116-0.17269-0.0219-0.13169-0.0355-0.26531-0.0414-0.40182-0.12655 0.0569-0.25213 0.11577-0.37479 0.17896m7.048-0.17901c-6e-3 0.13651-0.0195 0.27062-0.0414 0.40182 0.12071 0.0574 0.24434 0.10999 0.36116 0.1727 0.0258-0.12928 0.0433-0.26145 0.055-0.39556-0.12266-0.0632-0.24824-0.12204-0.37479-0.17896m-7.8058 0.61947v0.46888c0.26089-0.18572 0.52908-0.36083 0.81285-0.51374-0.0258-0.12928-0.0433-0.26145-0.055-0.39555-0.26089 0.13458-0.51448 0.27978-0.75785 0.44041m11.951 4.9086h0.39085c-0.0273-0.12156-0.0584-0.24216-0.0915-0.36179h-0.40642c0.035 0.1206 0.0774 0.23878 0.10708 0.36179m-14.281 5.2921h-0.42589c0.0613 0.12156 0.12168 0.2436 0.18885 0.36179h0.44877c-0.0725-0.11963-0.14553-0.2383-0.21173-0.36179m13.597 0c-0.0662 0.12349-0.13921 0.24216-0.21173 0.36179h0.44877c0.0672-0.11819 0.12753-0.24023 0.18885-0.36179zm0.0735-6.9463c0.0599 0.11818 0.11098 0.24071 0.16452 0.36179h0.42297c-0.0511-0.12205-0.10513-0.24264-0.16208-0.36179zm-14.354 1.6542c0.0292-0.12301 0.0715-0.24119 0.10708-0.36179h-0.40642c-0.0336 0.11963-0.0643 0.24023-0.092 0.36179zm0.61032-1.6542h-0.42541c-0.057 0.11915-0.11097 0.23974-0.16208 0.36179h0.42297c0.0535-0.12108 0.10465-0.24361 0.16452-0.36179m11.725-2.9753v0.47418c0.83962 0.67968 1.5284 1.533 2.0185 2.5012h0.4254c-0.56315-1.176-1.4052-2.1968-2.4439-2.9753m-4.8533 13.994c-2.7963 0-5.2417-1.4925-6.587-3.711h-0.44878c1.3848 2.438 4.017 4.0916 7.0358 4.0916s5.651-1.6536 7.0358-4.0916h-0.44878c-1.3453 2.2185-3.7902 3.711-6.587 3.711m-7.4821-9.365h-0.39134c-0.12752 0.56246-0.19761 1.1461-0.19761 1.7462 0 1.2745 0.31005 2.4756 0.84692 3.546h0.42589c-0.5651-1.0603-0.88878-2.2658-0.88878-3.546 0-0.60056 0.0716-1.1852 0.20492-1.7462m14.281 5.2921h0.42589c0.53687-1.0704 0.84693-2.2715 0.84693-3.546 0-0.60008-0.0706-1.1838-0.19811-1.7462h-0.39085c0.13337 0.56101 0.20492 1.1456 0.20492 1.7462 0 1.2802-0.32368 2.4857-0.88878 3.546m0.23792-6.5845c0.13288 0.30101 0.24532 0.61118 0.33877 0.93051h0.40642c-0.0886-0.31837-0.19615-0.62902-0.32222-0.93051zm-14.073 0h-0.42297c-0.12607 0.30149-0.23364 0.61214-0.32222 0.93051h0.40691c0.093-0.31933 0.2054-0.6295 0.33828-0.93051m2.1832-2.8625v-0.47466c-1.0387 0.77856-1.8808 1.7993-2.4439 2.9753h0.4254c0.49015-0.96814 1.1789-1.8215 2.0185-2.5007m8.5647-1.1942c-0.0117 0.1341-0.0292 0.26627-0.055 0.39555 0.28377 0.15292 0.55196 0.32802 0.81285 0.51374v-0.46888c-0.24288-0.16063-0.49696-0.30583-0.75785-0.44041m-6.305-0.24823c-1e-3 -0.0357-5e-3 -0.0709-5e-3 -0.10709v-0.11336c-0.10173 0.0347-0.19859 0.0786-0.29837 0.11722 0 0.082 6e-3 0.16256 0.0127 0.24264 0.0954-0.0492 0.19275-0.095 0.29107-0.13941m5.1924-0.10719c0 0.0362-4e-3 0.0714-5e-3 0.10709 0.0978 0.0444 0.19566 0.0902 0.29106 0.13941 7e-3 -0.0801 0.0122-0.16064 0.0122-0.24264-0.0993-0.0386-0.19664-0.0825-0.29788-0.11674zm0.29803 4e-3c0 0.0815-5e-3 0.16208-0.0122 0.24264-0.0954-0.0497-0.19323-0.095-0.29155-0.13941 1e-3 -0.0357 6e-3 -0.0709 6e-3 -0.10709v-0.11336c-0.81626-0.27833-1.689-0.43463-2.5992-0.43463-0.91068 0-1.7829 0.1563-2.5992 0.43463v0.11336c0 0.0362 4e-3 0.0714 5e-3 0.10709-0.0978 0.0444-0.19567 0.0902-0.29107 0.13941-7e-3 -0.0806-0.0122-0.16112-0.0127-0.24264-0.14699 0.0564-0.29642 0.10805-0.43903 0.17221 6e-3 0.13651 0.0195 0.27062 0.0414 0.40231 1.0002-0.47322 2.1149-0.74577 3.2952-0.74577 1.1803 0 2.295 0.27255 3.2952 0.74577 0.0219-0.13169 0.0355-0.2658 0.0414-0.40231-0.1431-0.0646-0.29253-0.11577-0.43952-0.17221m-5.0573-2.8999h-0.34948c-0.0672 0.11577-0.12703 0.23637-0.17766 0.36179h0.32855c0.0579-0.12542 0.12169-0.24795 0.19859-0.36179m4.5192 0.36179h0.32903c-0.0511-0.12542-0.11049-0.24601-0.17814-0.36179h-0.34948c0.0769 0.11385 0.14067 0.23637 0.19859 0.36179m-4.9579 1.0667c0-0.0468 0.0112-0.0902 0.0141-0.13603h-0.30568c-2e-3 0.0453-7e-3 0.0902-7e-3 0.13603v0.22575h0.29837zm5.1982 0v0.22575h0.29837v-0.22575c0-0.0458-5e-3 -0.0907-7e-3 -0.13603h-0.30568c3e-3 0.0458 0.0141 0.0892 0.0141 0.13603m2.1e-4 1.3543c0.10124 0.0347 0.19859 0.0786 0.29788 0.11722 0-1e-3 4.9e-4 -3e-3 4.9e-4 -4e-3v-1.2416h-0.29837zm-0.014-1.4905h0.30518c-0.0156-0.32754-0.0847-0.6406-0.20248-0.93051h-0.32903c0.13239 0.28605 0.20832 0.60008 0.22633 0.93051m-2.5851-2.4395c0.89998 0 1.6938 0.45633 2.1601 1.1471h0.34947c-0.50085-0.86105-1.4368-1.4428-2.5096-1.4428s-2.0088 0.58175-2.5096 1.4428h0.34947c0.46678-0.69077 1.2602-1.1471 2.1601-1.1471m-2.5991 2.8013h-0.29837v1.2456c0.0998-0.0391 0.19713-0.0825 0.29837-0.11722zm0.24025-1.2924h-0.32903c-0.11731 0.28991-0.1874 0.60298-0.20249 0.93051h0.30519c0.018-0.33043 0.0939-0.64446 0.22633-0.93051m-6.6061 6.5845c-1.4724 0-2.6702-1.1871-2.6702-2.6459 0-1.4592 1.1979-2.6463 2.6702-2.6463h4.1115v-0.36179h-4.1115c-1.6734 0-3.0353 1.3497-3.0353 3.0081 0 1.6584 1.3619 3.0077 3.0353 3.0077h1.5055c0.0511-0.12205 0.10562-0.24264 0.16257-0.36179zm0 6.9463c-1.4724 0-2.6702-1.1871-2.6702-2.6459 0-1.4592 1.1979-2.6463 2.6702-2.6463h1.0918c0.0277-0.12156 0.0584-0.24216 0.0915-0.36179h-1.1833c-1.6734 0-3.0353 1.3497-3.0353 3.0081 0 1.6584 1.3619 3.0077 3.0353 3.0077h1.9294c-0.0672-0.11819-0.12752-0.24023-0.18836-0.36179zm17.93-5.2921c1.4719 0 2.6698 1.1871 2.6698 2.6459 0 1.4592-1.1979 2.6463-2.6698 2.6463h-1.7411c-0.0608 0.12156-0.12119 0.24361-0.18836 0.36179h1.9294c1.6734 0 3.0348-1.3497 3.0348-3.0081 0-1.6584-1.3614-3.0077-3.0348-3.0077h-1.1833c0.0331 0.11963 0.0638 0.24023 0.0915 0.36179zm-17.93-8.6004c-1.4724 0-2.6702-1.1871-2.6702-2.6459 0-1.4592 1.1979-2.6463 2.6702-2.6463h17.93c1.4719 0 2.6698 1.1871 2.6698 2.6463 0 1.4587-1.1979 2.6459-2.6698 2.6459h-4.1718c0.018 0.11963 0.0326 0.23974 0.0419 0.36179h4.13c1.6734 0 3.0348-1.3492 3.0348-3.0077 0-1.6584-1.3614-3.0081-3.0348-3.0081h-17.93c-1.6734 0-3.0353 1.3497-3.0353 3.0081 0 1.6584 1.3619 3.0077 3.0353 3.0077h4.13c9e-3 -0.12205 0.0239-0.24216 0.0419-0.36179zm17.93 1.6542c1.4719 0 2.6698 1.1871 2.6698 2.6459 0 1.4592-1.1979 2.6463-2.6698 2.6463h-1.668c0.057 0.11867 0.11147 0.23926 0.16257 0.36179h1.5055c1.6734 0 3.0348-1.3497 3.0348-3.0081 0-1.6584-1.3614-3.0077-3.0348-3.0077h-4.1115v0.36179zm-6.3658-0.22565c0-0.0468-0.0112-0.0902-0.0141-0.13603h-5.1701c-2e-3 0.0458-0.0141 0.0892-0.0141 0.13603v0.22575h5.1984zm-0.43875-1.4285h-4.3208c-0.0769 0.11384-0.14067 0.23637-0.19859 0.36179h4.7179c-0.0579-0.12542-0.12169-0.24795-0.19859-0.36179" />,
}

export const Icon = ({ icon, size, fill, style, ...rest }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width={ `${ size }px` } height={ `${ size }px` }
      viewBox="0 0 24 24"
      fill={ fill }
      style={{ ...style, transition: 'fill 250ms' }}
      { ...rest }
    >
      { icons[icon] }
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 24,
  fill: '#333',
}
