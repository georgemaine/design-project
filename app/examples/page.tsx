import Link from "next/link";
interface Props {
    children: React.ReactNode;
}

const Examples = (props: Props) => {
    const { children } = props;
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Examples Page</h1>
            {children}
        </div>
    );
};

export default Examples;
