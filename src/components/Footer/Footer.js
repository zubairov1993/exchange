import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-botom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">
                  <a href="#">2019 &copy; React. Lite Level.</a>
                </h1>
                <p>All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="#">Карта Сайта</a></li>
                    <li><a href="#">Google Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="#" tooltip='Контакты'>Контакты</a></li>
                    <li><a href="#">Гарантия</a></li>
                    <li><a href="#">О сервисе</a></li>
                    <li><a href="#">Условия возврата</a></li>
                    <li><a href="#">Соглашение о использовании сервиса</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link">

              </ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul>

                </ul>
                <img 
                  src="#" 
                  alt=""
                  data-toggle='tooltip'
                  data-placement='top'
                  data-original-title='www.webmoney.ru'
                  />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
