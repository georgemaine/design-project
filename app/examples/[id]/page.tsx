import Link from "next/link";

interface ExamplePageProps {
    params: { id: string };
}
const Example = (props: ExamplePageProps) => {
    const { params } = props;
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Example Page with ID: {params.id}</h1>
        </div>
    );
};

export default Example;
