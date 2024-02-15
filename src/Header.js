import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">掲示板</Link>
      <Link to="/thread/new">スレッドをたてる</Link>
    </header>
  );
}

export default Header;