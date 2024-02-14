import { Button } from "antd";
import { Link } from "react-router-dom";
import "./css/Header.less";
interface HeaderProps {
  curPage: string;
  onPageChange: () => void;
}
const Header: React.FC<HeaderProps> = ({ curPage, onPageChange }) => {
  const workingPageUrl = "/work";
  const chillingPageUrl = "/";
  const workingPageText = "Work together";
  const chillingPageText = "Vibe together";

  return (
    <header className="header">
      <div className="divHeader">
        <h1>MAMABEAT</h1>
        <Link
          onClick={onPageChange}
          to={curPage === "/" ? workingPageUrl : chillingPageUrl}
        >
          <Button onClick={onPageChange} type="link" className="btn">
            <p>{curPage === "/" ? workingPageText : chillingPageText}</p>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
