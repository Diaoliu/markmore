import React from "react";
import map from "lodash/map";
import classNames from "classnames";

export default function Tabs({ selected, items, onSelect }) {
  return (
    <ul className="tab bg-default mx-4 my-0">
      {map(items, (item, key) => (
        <li
          className={classNames("tab-item", { active: selected === key })}
          key={`tab-items-${key}`}
        >
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              onSelect(key);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
