import React, { useState } from "react";

import Editor from "./editor";

const placeholder = "# Type here to start wrting...";

export default function Main() {
  const [code, setCode] = useState(placeholder);
  return (
    <main>
      <Editor code={code} setCode={setCode} />
    </main>
  );
}
