import React, { useState } from "react";

import Tabs from "./tabs";

export default function Navbar() {
  const tabs = ["Markdown", "Headers", "Templates", "Resources"];
  const [selected, setSelected] = useState(0);

  return (
    <div className="has-shadow z-index-1">
      <header className="navbar p-4">
        <section className="navbar-section">
          <a href="/" className="navbar-brand mr-2">
            -
          </a>
        </section>
        <section className="navbar-section">
          <figure className="avatar">
            <img
              src="https://picturepan2.github.io/spectre/img/avatar-1.png"
              alt="avatar"
            />
            <i className="avatar-presence online" />
          </figure>
        </section>
      </header>
      <Tabs items={tabs} selected={selected} onSelect={setSelected} />
    </div>
  );
}
