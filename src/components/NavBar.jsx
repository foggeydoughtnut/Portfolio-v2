import ThemeSwapper from "./ThemeSwapper";
import links from "~links";

const NavBar = () => {
  let myEmail = "jeffaanderson0@gmail.com";
  let myGithub = "https://github.com/foggeydoughtnut";
  return (
    <div class="navbar bg-base-100 mb-2">
      <div class="flex-1">
        <a href={links.home} class="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><a href={links.projects}>Projects</a></li>
          <li><a href={links.about}>About Me</a></li>
          <li><button onClick={() => {window.open(`mailto:${myEmail}`)}}>Contact Me</button></li>
          <li><button onClick={() => {window.open(`${myGithub}`)}}>Github</button></li>
          <li><div><ThemeSwapper client:load/></div></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar;