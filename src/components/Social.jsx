import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/PrimoIeyasu' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/jhongkennedy/' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/JhongKennedy/' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/jon-ken-heron-vergara-b97670337/',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
