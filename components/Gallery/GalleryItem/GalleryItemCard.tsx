import CursorTarget from "@/components/Animations/CursorTarget";
import { a } from "@react-spring/web";
import Link from "next/link";

interface GalleryItemCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link: string;
  bgColor: string;
}

const GalleryItemCard = (props: GalleryItemCardProps) => {
  const { bgColor, alt, imageSrc, title, description, link } = props;
  return (
    <CursorTarget enabled={true}>
      {(v) => (
        <a.div
          className="rounded-[10px] overflow-hidden shadow-card relative before:content-[''] before:absolute before:inset-0 before:rounded-[30px] before:border before:border-[rgba(128,128,128,.1)]"
          style={{
            backgroundColor: bgColor,
            color: "#fff",
            transform: v.to([0, 1], ["scale(1)", "scale(1.019)"]),
          }}
        >
          <Link href={link} className="">
            <img
              src={imageSrc}
              alt={alt}
              className="aspect-1200/630  object-fill w-[19.6875rem]"
            />
            <footer className="p-4 w-full">
              <p className="text-lg leading-5">{title}</p>
              <p className="text-sm leading-4">{description}</p>
            </footer>
          </Link>
        </a.div>
      )}
    </CursorTarget>
  );
};

export default GalleryItemCard;
