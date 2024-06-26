import Logo from "@/assets/logoGray.png";

const Footer = () => {
  return (
    <footer className="bg-[#ae8cbc] py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 text-[#444444]">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 text-[#444444] basis-1/4 md:mt-0">
          <h4 className="font-bold text-[#CF3E96]">Links</h4>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16  text-[#444444] basis-1/4 md:mt-0">
          <h4 className="font-bold text-[#CF3E96]">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
      <small className="flex justify-center mt-16">
        This project is
        <a
          href="https://github.com/leylamaria/gym-typescript"
          target="_blank"
          rel="noreferrer"
          className="underline ml-1"
        >
          open-sourced on GitHub
        </a>
      </small>
    </footer>
  );
};

export default Footer;
