import logo from "../assets/logo.svg";
import styles from "../styles";

function NavBar() {
  return (
    <div className="fixed w-full bg-white">
      <nav className={`${styles.nav}`}>
        <img src={logo} className="h-[3rem]" />
        <p className="font-hand text-[30px] font-extrabold">iList</p>
      </nav>
    </div>
  );
}

export default NavBar;
