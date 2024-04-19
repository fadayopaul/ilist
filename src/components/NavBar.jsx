import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <nav className="flex items-center gap-3 p-5">
      <img src={logo} className="h-[4rem]" />
      <p className="font-hand text-[40px]"> iList</p>
    </nav>
  );
}

export default NavBar;
