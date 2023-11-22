import { useEffect, useState } from "react";

export async function getStaticProps(context: any) {
  // console.log("context", context);
  return {
    props: {
      p: 111,
    },
  };
}

export default function Home(props: any) {
  console.log(123, props);
  const [count, setCount] = useState(props.p);
  useEffect(() => {
    setCount(1);
  }, []);
  return (
    <div>
      <p>this is home page</p>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count: {count}
      </div>
    </div>
  );
}
