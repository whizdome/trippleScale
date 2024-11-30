import { devopsResourcesLinks, toolsLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:px-8 lg:px-20">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Learning Resources</h3>
          <ul className="space-y-2">
            {devopsResourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">DevOps Tools</h3>
          <ul className="space-y-2">
            {toolsLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-neutral-400 text-sm">
        <p>&copy; {new Date().getFullYear()} DevOps Learning Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;