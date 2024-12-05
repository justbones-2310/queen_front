import '.././styles/layout.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="social">

        <p> Made by Bones </p>

        <a
          href="https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ"
          target="blank"
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a href="https://www.instagram.com/officialqueenmusic/" target="blank">
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://twitter.com/QueenWillRock?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="blank"
        >
          <i className="bi bi-twitter"></i>
        </a>

      </div>
    </footer>
  );
}

export default Footer;
