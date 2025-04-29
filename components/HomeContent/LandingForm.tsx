import { ChevronRight } from "lucide-react";
import { InputShimmerAnimationMemo } from "../Animations/Landing";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { a, SpringValue } from "@react-spring/web";
import { getGalleryItemPath, isValidUrl } from "@/lib/utils";
import { useAppDispatch } from "@/lib/store";

interface LandingFormProps {
  spring: SpringValue;
}

export function LandingForm(props: LandingFormProps) {
  const { spring } = props;
  const dispatch = useAppDispatch();

  function generatePage(formData: FormData) {
    const website = formData.get("query");
    if (!website) return;
    const validUrl = isValidUrl(website as string);

    if (validUrl) {
      // window.location.href = query as string; // handle trim logic
      window.location.href = getGalleryItemPath(website as string);
    } else {
      window.location.href = getGalleryItemPath(website as string);
    }
  }
  return (
    <a.div
      className="flex items-center w-full p-[1px]"
      style={{
        transform: spring.to([0, 1], ["scale(1)", "scale(1.019)"]),
      }}
    >
      <div className="relative z-10 w-full">
        <form className="flex items-center" action={generatePage}>
          <Input
            type="text"
            name="query"
            placeholder="Enter company website"
            className="bg-white h-16 w-[full border-px border-(--theme-color-fillQuaternary) !text-lg pl-5 pr-5 shadow-[0_11px_34px_rgba(0,0,0,0.07)] focus:ring-2 focus:ring-[--theme-color-appTint] rounded-[14px]"
          />
          <div className="absolute right-2">
            <Button
              size="icon"
              className="bg-(--theme-color-appTint) rounded-[8px] flex w-min pr-3 pl-4 h-12 text-lg hover: cursor-pointer"
              type="submit"
            >
              Generate
              <ChevronRight />
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-[14px] blur-md flex-none inset-[-10px] opacity-10 overflow-hidden absolute">
        <InputShimmerAnimationMemo />
      </div>

      <div className="absolute overflow-hidden inset-0 rounded-[14px]">
        <InputShimmerAnimationMemo />
      </div>
    </a.div>
  );
}
