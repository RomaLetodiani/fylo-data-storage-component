import './Style.scss';
import logo from './images/logo.svg';
import icon1 from './images/icon-document.svg';
import icon2 from './images/icon-folder.svg';
import icon3 from './images/icon-upload.svg';
import Icon from './Components/Icon';
import ChatBox from './Components/ChatBox';
import ProgressBar from './Components/ProgressBar';

const icons = [icon1, icon2, icon3];

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt="logo" />
          <div className="icons">
            {icons.map((icon, index) => (
              <Icon key={index + 1} icon={icon} />
            ))}
          </div>
        </div>
        <div className="right">
          <ChatBox />
          <p>
            You've used <span>815 GB</span> of your storage
          </p>
          <ProgressBar />
          <div className="stats">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
