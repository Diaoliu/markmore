import React, { useState } from "react";
import { Resizable } from "re-resizable";
import CodeMirror from "react-codemirror";
import "codemirror/mode/markdown/markdown";

import { percent } from "../utils/units";

const resizable = {
  top: false,
  right: true,
  bottom: false,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false
};

export default function Editor({ code, setCode }) {
  const [size, setSize] = useState({
    width: percent(50),
    isFullWidth: false
  });
  const toogleFullWidth = () =>
    setSize({
      width: percent(size.isFullWidth ? 50 : 100),
      isFullWidth: !size.isFullWidth
    });
  const onResizeStop = (e, direction, ref) => {
    const fullWidth = parseInt(ref.style.width, 10) > 80;
    setSize({
      width: fullWidth ? percent(100) : ref.style.width,
      isFullWidth: fullWidth
    });
  };

  return (
    <Resizable
      className="bg-gray p-4"
      size={{
        width: size.width,
        height: percent(100)
      }}
      style={{ overflow: "hidden auto" }}
      onResizeStop={onResizeStop}
      enable={resizable}
      minWidth={200}
      maxWidth={percent(100)}
    >
      <div className="columns">
        <div className="column">
          <small className="text-gray">MARKDOWN</small>
        </div>
        <div
          className="column col-auto c-hand"
          role="button"
          onClick={toogleFullWidth}
        >
          <i className="material-icons">
            {size.isFullWidth && "fullscreen_exit"}
            {!size.isFullWidth && "fullscreen"}
          </i>
        </div>
      </div>
      <CodeMirror
        value={code}
        onChange={setCode}
        options={{
          lineNumbers: false,
          lineWrapping: true,
          mode: "markdown",
          readOnly: false
        }}
      />
    </Resizable>
  );
}
