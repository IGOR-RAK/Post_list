import classes from "./Pagination.module.css";
import {
  useMemo
  //useMemo,
  // useRef,
} from "react";

export default function Pagination({ totalPages, setPage, page }) {
  const pagesArrey = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArrey.push(i + 1);
  }

  // useMemo(() => {

  // }, [totalPages,setPage]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px"
      }}
    >
      {pagesArrey.map((el) => {
        if (el === page) {
          return (
            <span
              disabled
              style={{ fontSize: "18px", paddingRight: "10px", color: "teal" }}
              key={el}
              onClick={() => {
                setPage(el);
              }}
            >
              {el}
            </span>
          );
        }

        return (
          <span
            style={{
              fontSize: "18px",
              paddingRight: "10px",
              cursor: "pointer"
            }}
            key={el}
            onClick={() => {
              setPage(el);
            }}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
}
