import React from "react";

function Footer() {
    return(
        <div>
            <div>
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-con">
              <div className="footer-top-item">
                <h4>Lastest Posts</h4>
                <div className="footer-top-item-con">
                  <div className="date">
                    July <br />
                    21
                  </div>
                  <div className="info">
                    <span className="info-title">Lorem ipsum dolor sit amet.</span>
                    <span className="info-desc">Lorem ipsum dolor sit amet consectetur.</span>
                  </div>
                </div>
                <div className="footer-top-item-con">
                  <div className="date">
                    July <br />
                    21
                  </div>
                  <div className="info">
                    <span className="info-title">Lorem ipsum dolor sit amet.</span>
                    <span className="info-desc">Lorem ipsum dolor sit amet consectetur.</span>
                  </div>
                </div>
                <div className="footer-top-item-con">
                  <div className="date">
                    July <br />
                    21
                  </div>
                  <div className="info">
                    <span className="info-title">Lorem ipsum dolor sit amet.</span>
                    <span className="info-desc">Lorem ipsum dolor sit amet consectetur.</span>
                  </div>
                </div>
              </div>
              <div className="footer-top-item">
                <h4>About</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate temporibus fugit labore soluta reprehenderit rerum
                  ipsum eum facilis velit quia?
                </p>
              </div>
              <div className="footer-top-item">
                <h4>Stay connected</h4>
                <p>
                  <i className="fa-brands fa-facebook fa-spin" style={{color: '#125fe2'}} />Facebook
                </p>
                <p>
                  <i className="fa-brands fa-twitter fa-xs" style={{color: '#2151e4'}} />Twitter
                </p>
                <p><i className="fa-solid fa-rss" style={{color: '#e2761d'}} />RSS</p>
                <p>
                  <i className="fa-brands fa-google-plus-g fa-bounce" style={{color: '#ed461d'}} />Google+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>copyright 2023. All right reserved Bloom web design. by kong</p>
        </div>
      </div>
        </div>
    )
}
export default Footer;