import { MySelect } from "../UI/select/MySelect";
import { MyInput } from "../UI/inputs/MyInput";

export default function PostFilter({ filter, setFilter }) {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search..."}
      />

      <MySelect
        value={filter.sort}
        onChange={(x) => setFilter({ ...filter, sort: x })}
        defaultValue={"Sort by "}
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Content" }
        ]}
      />
    </>
  );
}
