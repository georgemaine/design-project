import GalleryPageContent from "@/components/Gallery/GalleryItem/GalleryPageContent";

interface GalleryProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryPage({ params }: GalleryProps) {
  const { id } = await params;
  return <GalleryPageContent id={id} />;
}
