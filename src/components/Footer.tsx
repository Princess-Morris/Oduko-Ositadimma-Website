function Footer() {
  return (
    <div
      id="footer"
      className="footer">
      {/* <ul className="footer-list">

        <li>
          <a href="#">
            Home
          </a>
        </li>

        <li>
          <a href="#">
            About
          </a>
        </li>

        <li>
          <a href="#">
            Books
          </a>
        </li>

        <li>
          <a href="#">
            More
          </a>
        </li>

      </ul> */}


      <div className="footer-contact">
       
        <span>Email: </span>
        <span className="footer-email" >odukoositadimmawilliams@gmail.com</span>
      </div>

      <ul className="footer-media">
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/oduko.williams?mibextid=LQQJ4d">
            <i className="fab fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://x.com/odukoositadimma?s=11">
            <i className="fab fa-x"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ositadimma-oduko-a349481b3">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>


    </div>
  )
}

export default Footer