import { ChevronRight } from "lucide-react";
import GalleryItemCard from "../GalleryItem/GalleryItemCard";
import { useMemo } from "react";
import Link from "next/link";

interface GalleryItemProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link: string;
  bgColor: string;
}
// FIXME: Move to data
const items: GalleryItemProps[] = [
  {
    title: "Deepgram",
    description: "companyWebsite",
    imageSrc: "https://deepgram.com/images/deepgram.jpg",
    alt: "Example Image",
    link: "/examples/item1",
    bgColor: "#11101f",
  },
  {
    title: "Deepgram",
    description: "companyWebsite",
    imageSrc: "https://deepgram.com/images/deepgram.jpg",
    alt: "Example Image",
    link: "/examples/item1",
    bgColor: "#11101f",
  },
  {
    title: "Deepgram",
    description: "companyWebsite",
    imageSrc: "https://deepgram.com/images/deepgram.jpg",
    alt: "Example Image",
    link: "/examples/item1",
    bgColor: "#11101f",
  },
  {
    title: "Deepgram",
    description: "companyWebsite",
    imageSrc: "https://deepgram.com/images/deepgram.jpg",
    alt: "Example Image",
    link: "/examples/item1",
    bgColor: "#11101f",
  },
  {
    title: "Deepgram",
    description: "companyWebsite",
    imageSrc: "https://deepgram.com/images/deepgram.jpg",
    alt: "Example Image",
    link: "/examples/item1",
    bgColor: "#11101f",
  },
];

const GalleryGrid = () => {
  const GalleryGridItems = useMemo(() => {
    return items.map((item, index) => (
      <GalleryItemCard
        key={index}
        title={item.title}
        description={item.description}
        imageSrc={item.imageSrc}
        alt={item.alt}
        link={item.link}
        bgColor={item.bgColor}
      />
    ));
  }, [items]);

  return (
    <div className="w-full">
      <div
        className="max-w-[1005px] w-[calc(100%-40px)] m-12 px-5 pb-12 flex flex-col ml-auto mr-auto"
        style={{
          boxSizing: "initial", // FIXME: random bug with padding/margin/tailwind
        }}
      >
        <div className="grid justify-center py-4 gap-[1.875rem] grid-cols-[repeat(1,_19.6875rem)  min-[62.8125rem]:grid-cols-[repeat(2,_19.6875rem)] l:grid-cols-[repeat(3,_19.6875rem)]">
          <div className="col-span-full">
            <Link
              href="/examples"
              className="text-[28px] font-bold flex items-center gap-[6px] tracking-[-0.05rem] hover:text-(--theme-color-appTint)"
            >
              Gallery
              <div className="w-3 h-3 flex items-center justify-center">
                <ChevronRight
                  size={32}
                  className="shrink-0 text-(--theme-color-labelQuaternary) group-hover:text-(--theme-color-appTint)"
                />
              </div>
            </Link>
            <p>See what Discovery has done for other clients and companies.</p>
          </div>
          {GalleryGridItems}
        </div>
      </div>
    </div>
  );
};

export { GalleryGrid };
