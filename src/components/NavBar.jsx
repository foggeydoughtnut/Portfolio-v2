import ThemeSwapper from "./ThemeSwapper";

const NavBar = () => {
  return (
    <div class="navbar bg-base-100 mb-2">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">HOME</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><a href="">Something</a></li>
          <li><a href="">Something</a></li>
          <li><a href="">Something</a></li>
          <li><a href="">Something</a></li>
          <li><div><ThemeSwapper client:load/></div></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar;