import Image from 'next/image';
import Link from 'next/link';
import colorLogo from '../public/images/color_logo.png';

const Footer = () => {
  const iconSize = 18;
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footerLogoWrapper">
          <div className="logo">
            <Image src={colorLogo} alt="BobaJoy polarbear logo" />
          </div>
          <div className="footerSocialIcons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="iconLink"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9167 0C5.8125 0 0 5.79958 0 12.9425C0 19.4008 4.7275 24.7612 10.9017 25.73V16.6883H7.62083V12.9425H10.9017V10.0879C10.9017 6.84583 12.8263 5.06333 15.7842 5.06333C17.1921 5.06333 18.6646 5.30875 18.6646 5.30875V8.49917H17.0371C15.4354 8.49917 14.9317 9.49375 14.9317 10.5142V12.9425H18.5225L17.9412 16.6883H14.9317V25.73C17.9754 25.2493 20.747 23.6963 22.7462 21.3513C24.7453 19.0064 25.8402 16.024 25.8333 12.9425C25.8333 5.79958 20.0208 0 12.9167 0Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bobajoy.no/"
              target="_blank"
              rel="noreferrer"
              className="iconLink"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.42496 2.4165H19.575C23.4416 2.4165 26.5833 5.55817 26.5833 9.42484V19.5748C26.5833 21.4336 25.8449 23.2162 24.5306 24.5305C23.2163 25.8448 21.4337 26.5832 19.575 26.5832H9.42496C5.55829 26.5832 2.41663 23.4415 2.41663 19.5748V9.42484C2.41663 7.56611 3.155 5.78351 4.46932 4.4692C5.78364 3.15488 7.56623 2.4165 9.42496 2.4165ZM9.18329 4.83317C8.0296 4.83317 6.92316 5.29147 6.10738 6.10726C5.2916 6.92304 4.83329 8.02948 4.83329 9.18317V19.8165C4.83329 22.2211 6.77871 24.1665 9.18329 24.1665H19.8166C20.9703 24.1665 22.0768 23.7082 22.8925 22.8924C23.7083 22.0766 24.1666 20.9702 24.1666 19.8165V9.18317C24.1666 6.77859 22.2212 4.83317 19.8166 4.83317H9.18329ZM20.8437 6.64567C21.2443 6.64567 21.6285 6.8048 21.9117 7.08806C22.195 7.37132 22.3541 7.7555 22.3541 8.15609C22.3541 8.55667 22.195 8.94086 21.9117 9.22411C21.6285 9.50737 21.2443 9.6665 20.8437 9.6665C20.4431 9.6665 20.0589 9.50737 19.7757 9.22411C19.4924 8.94086 19.3333 8.55667 19.3333 8.15609C19.3333 7.7555 19.4924 7.37132 19.7757 7.08806C20.0589 6.8048 20.4431 6.64567 20.8437 6.64567ZM14.5 8.45817C16.1023 8.45817 17.639 9.0947 18.7721 10.2277C19.9051 11.3608 20.5416 12.8975 20.5416 14.4998C20.5416 16.1022 19.9051 17.6389 18.7721 18.7719C17.639 19.905 16.1023 20.5415 14.5 20.5415C12.8976 20.5415 11.3609 19.905 10.2279 18.7719C9.09482 17.6389 8.45829 16.1022 8.45829 14.4998C8.45829 12.8975 9.09482 11.3608 10.2279 10.2277C11.3609 9.0947 12.8976 8.45817 14.5 8.45817ZM14.5 10.8748C13.5386 10.8748 12.6165 11.2568 11.9367 11.9366C11.2569 12.6164 10.875 13.5384 10.875 14.4998C10.875 15.4612 11.2569 16.3833 11.9367 17.0631C12.6165 17.7429 13.5386 18.1248 14.5 18.1248C15.4614 18.1248 16.3834 17.7429 17.0632 17.0631C17.743 16.3833 18.125 15.4612 18.125 14.4998C18.125 13.5384 17.743 12.6164 17.0632 11.9366C16.3834 11.2568 15.4614 10.8748 14.5 10.8748Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footerMenuWrapper footerQuickLinks">
          <h4>Quick Links</h4>
          <Link href="/about">
            <a>Om oss</a>
          </Link>
          <Link href="/menu">
            <a>Meny</a>
          </Link>
          <Link href="/order">
            <a>Bestill</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </div>
        <div className="footerMenuWrapper footerOpeningHours">
          <h4>Opening hours</h4>
          <p className="footer_link">
            Man - Fre &nbsp;&nbsp;&nbsp;&nbsp; 11:00 - 22:00
          </p>
          <p className="footer_link">
            Lør - Søn &nbsp;&nbsp;&nbsp;&nbsp; 13:00 - 22:00
          </p>
        </div>

        <div className="footerMenuWrapper footerContact">
          <h4>Contacts</h4>
          <a href="mailto:bobajoytrondheim@gmail.com?subject=Website%20Contact">
            <Image
              src="/images/mail.svg"
              width={iconSize}
              height={iconSize}
              alt="mailIcon"
            />
            <p>bobajoytrondheim@gmail.com</p>
          </a>
          <a href="tel:+4745380678">
            <Image
              src="/images/phone.svg"
              width={iconSize}
              height={iconSize}
              alt="phoneIcon"
            />
            <p>+47 45380678</p>
          </a>
          <a
            href="https://goo.gl/maps/vE2HtGAJHgSKxaoV8"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/address.svg"
              width={iconSize}
              height={iconSize}
              alt="addressIcon"
            />
            <address>
              Bobajoy kiosk
              <br />
              Olav Tryggvason gt. 1
              <br />
              7011 Trondheim
            </address>
          </a>
        </div>
      </div>
      <div className="footerCreditsWrapper">
        <p>
          © 2021 Alle rettigheter forbeholdt av Boba Joy Bubble Tea & More |
          Nettside designet av Joiedesign
        </p>
      </div>
    </footer>
  );
};
export default Footer;
