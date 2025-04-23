import Link from "next/link";
interface Props {
    children: React.ReactNode;
}

const Example = (props: Props) => {
    const { children } = props;
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Example Page</h1>
            {children}
        </div>
    );
};

export default Example;
