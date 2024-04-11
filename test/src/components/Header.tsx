import SearchPanel from "./SearchPanel";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__photo">
            <img
              src="https://lamailloux.com/wp/wp-content/uploads/livre_ancien.jpg"
              alt="header-photo"
            />
          </div>
          <div className="header__title text-white text-center fs-1 fw-bold mb-4">
            Search for books
          </div>
          <SearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Header;
