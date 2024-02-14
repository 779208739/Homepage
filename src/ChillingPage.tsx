import avatar from "./assets/Roxy.png";
import Socials from "./Icons";
import "./css/ChillingPage.less";
import Specs from "./Specs";
function ChillingPage() {
  return (
    <div className="divMain">
      <div className="divArticles">
        <div className="divSpecs">
          <div className="title">SPECS</div>
          {Specs.map((item, index) => (
            <div key={index}>
              <div className="titleItem">{item.name}</div>
              <div className="contentItem">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="divSens">
          <div className="title">SENS</div>
          <div>
            <div className="titleItem">Controller</div>
            <div className="contentItem">Leanar 43 or 41 @Apex Legends</div>
          </div>
          <div>
            <div className="titleItem">MNK</div>
            <div className="contentItem">DPI 1200 * 1.0 @Apex Legends</div>
          </div>
        </div>
      </div>
      <div className="divProfile">
        <img src={avatar} alt="Roxy" className="imgAvatar" />
        <p className="textProfile">- Aim on aim -</p>
        <div className="divSocials">
          <ul>
            {Socials.map((item, index) => (
              <li key={index}>
                <div className="socialCard">
                  <img src={item.icon} alt={item.title} />
                  <a href={item.url}>@{item.name}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChillingPage;
