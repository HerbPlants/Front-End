import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const LikeButton = ({ isLiked, onClick, disabled }) => {
  return (
    <Button
      variant="outline"
      title="Suka"
      size="sm"
      className="flex gap-2 items-center justify-center px-4 rounded-sm"
      onClick={onClick}
      disabled={disabled}
    >
      
      <Heart
        className={isLiked ? "text-red-500 fill-red-500" : "text-dark-grey-shades-30"}
      />
      <p>Like</p>
    </Button>
  );
};

export default LikeButton;
