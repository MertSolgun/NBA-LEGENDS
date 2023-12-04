import Logo from "./nba.jpg";
const Header = ({ event }) => {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="" />
      </div>
      <h1>NBA LEGENDS</h1>
      <input type="search" placeholder="Search player.." onChange={event} />
    </div>
  );
};

export default Header;
