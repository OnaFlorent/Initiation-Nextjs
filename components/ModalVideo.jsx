import React from "react";
import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image
              src="/assets/home/play.svg"
              width={36}
              height={36}
              alt="youtube_img"
            />
          </div>
          <span className="text-lg font-primary">Regarder la vidéo</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Vidéo YouTube</DialogTitle>
        </VisuallyHidden>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://www.youtube.com/watch?v=Er5a7snyQKM"
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
