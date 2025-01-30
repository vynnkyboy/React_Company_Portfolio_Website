import { stikomLinks, tautanLinks, layananLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">STIKOM Tunas Bangsa</h3>
          <ul className="space-y-2">
            {stikomLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Tautan</h3>
          <ul className="space-y-2">
            {tautanLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Layanan Digital</h3>
          <ul className="space-y-2">
            {layananLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Lokasi Kami</h3>
          <div className="w-full h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5006116947243!2d99.05735387379671!3d2.958500097017698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031845fb34ba09b%3A0xb99f0504dac361fd!2sSTIKOM%20Tunas%20Bangsa!5e0!3m2!1sid!2sid!4v1738247554841!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: "2px solid #4a5568", borderRadius: "8px" }} // Tambahkan border dan rounded corners
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;