"use client";
import NavigationBar from "@/components/NavigationBar";
import { GeneratorPreview } from "@/components/Generator/GeneratorPreview";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { GeneratorWorkflow } from "@/components/Generator/GeneratorWorkflow";

interface GalleryPageContentProps {
  id: string;
}

const GalleryPageContent = (props: GalleryPageContentProps) => {
  const dispatch = useAppDispatch();

  const { isGenerating } = useAppSelector((state) => {
    return {
      isGenerating: state.generate.isGenerating,
    };
  }, shallowEqual);

  useEffect(() => {
    !isGenerating &&
      dispatch({
        type: "Generate.Start",
        isGenerating: true,
      });
  }, [isGenerating, dispatch]);
  return (
    <div className="w-full h-full absolute left-0 top-0 flex flex-col">
      <NavigationBar preview={false} />
      <main className="absolute h-full w-full left-0 top-0 overflow-hidden">
        <div className="w-full h-full flex flex-row flex-1">
          <div className="min-w-[305px] flex justify-center">
            {isGenerating && <GeneratorWorkflow id={props.id} />}
          </div>
          <GeneratorPreview backgroundColor="#f0eee6" />
        </div>
      </main>
    </div>
  );
};

export default GalleryPageContent;
