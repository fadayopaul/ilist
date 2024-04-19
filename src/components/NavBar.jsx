import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="fixed w-full bg-white">
      <nav className="flex items-center gap-2 px-5 py-3">
        <img src={logo} className="h-[3rem]" />
        <p className="font-hand text-[30px] font-extrabold"> iList</p>
      </nav>
    </div>
  );
}

export default NavBar;
