import Link from "next/link";

interface ExampleProps {
    params: Promise<{ id: string }>;
}

export default async function ExamplePage({ params }: ExampleProps) {
    const { id } = await params;
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Example Page with ID: {id}</h1>
        </div>
    );
}
