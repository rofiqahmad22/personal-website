export default function RootRoute() {
  return (
    <>
      <div id="sidebar">
        <h1>Rofiq Ahmad Mubarok</h1>
        <nav className="border-b-2">
          <ul className="flex gap-5">
            <li>
              <a href={"/contacts/1"}>Home</a>
            </li>
            <li>
              <a href={"/contacts/2"}>About</a>
            </li>
            <li>
              <a href={"/contacts/2"}>Contact</a>
            </li>
            <li>
              <a href={"/contacts/2"}>Project</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
