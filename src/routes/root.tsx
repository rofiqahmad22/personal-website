export function RootRoute() {
  return (
    <>
      <div id="sidebar">
        <h1>Rofiq Ahmad Mubarok</h1>
        <nav className="border-b-2">
          <ul className="flex gap-5">
            <li>
              <a href={"/home"}>Home</a>
            </li>
            <li>
              <a href={"/about"}>About</a>
            </li>
            <li>
              <a href={"/contact"}>Contact</a>
            </li>
            <li>
              <a href={"/project"}>Project</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
