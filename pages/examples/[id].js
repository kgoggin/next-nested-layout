import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

const Loading = () => <p>Loading...</p>;

const ExamplesPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [Component, setComponent] = React.useState(() => null);

  React.useEffect(() => {
    const LoadedComponent = dynamic(() => import(`../../examples/${id}.mdx`), {
      loading: Loading
    });
    setComponent(() => <LoadedComponent />);
  }, [id]);
  const links = [];
  for (let i = 0; i < 100; i++) {
    links.push(
      <React.Fragment key={i}>
        <Link href="/examples/[id]" as="/examples/page-1" key={`${i}-1`}>
          <a className="block mb-4">Examples Page 1</a>
        </Link>
        <Link href="/examples/[id]" as="/examples/page-2" key={`${i}-2`}>
          <a className="block mb-4">Examples Page 2</a>
        </Link>
      </React.Fragment>
    );
  }

  return (
    <div className="flex-grow flex overflow-hidden">
      <div className="px-8 py-8 bg-gray-200 w-64 overflow-y-auto">
        <div className="font-bold mb-4">Examples</div>
        <div>{links}</div>
      </div>
      <div>{Component}</div>
    </div>
  );
};

export default ExamplesPage;
