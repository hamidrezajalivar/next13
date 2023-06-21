"use client";

import {
  useParams,
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";

const BtnComponent = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathsName = usePathname();
  const search = searchParams.get("page");
  const clickHandler = () => {
    console.log("pathsName", pathsName);
  };
  return (
    <>
      <button type="button" onClick={clickHandler}>
        client btn{" "}
      </button>
    </>
  );
};
export default BtnComponent;
