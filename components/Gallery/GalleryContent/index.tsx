import { ChevronRight } from "lucide-react";
import GalleryItemCard from "../GalleryItem/GalleryItemCard";
import { useMemo } from "react";
import Link from "next/link";

const items = [
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

const GalleryContent = () => {
  const GalleryItems = useMemo(() => {
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
    <div className="mx-auto w-[1005px] mt-28 pb-12 pl-5 pr-5">
      <header className="mb-5">
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
      </header>
      <div className="grid grid-cols-2 gap-[30px]">{GalleryItems}</div>
    </div>
  );
};

export { GalleryContent };
