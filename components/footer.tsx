import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            JavaScript, React, Redux e outras drogas...
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 space-x-2">
            <a href="https://github.com/lucianodiisouza" target="_blank">
              <img
                style={{ width: 32, height: 32 }}
                src="assets/icons/github.png"
                alt="GitHub"
              />
            </a>
            <a href="https://linkedin.com/in/lucianodiisouza" target="_blank">
              <img
                style={{ width: 32, height: 32 }}
                src="assets/icons/linkedin.png"
                alt="Linkedin"
              />
            </a>
            <a href="https://instagram.com/lucianodiisouza" target="_blank">
              <img
                style={{ width: 32, height: 32 }}
                src="assets/icons/instagram.png"
                alt="Instagram"
              />
            </a>
            <a href="https://github.com/lucianodiisouza" target="_blank">
              <img
                style={{ width: 32, height: 32 }}
                src="assets/icons/youtube.png"
                alt="Youtube"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
