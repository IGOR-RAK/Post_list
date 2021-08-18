import { useState } from "react";

export default function Count() {
  const [value, setValue] = useState("Value");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
