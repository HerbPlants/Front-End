import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
const CardExplore = ({ data, children }) => {
  return (
    <Card className="bg-green-shades-95 border-green-shades-90 group rounded-xl p-4 shadow-sm flex flex-col transition hover:shadow-md space-y-2">
      <CardHeader className="rounded-lg overflow-hidden p-0">
        <Image
          width={480}
          height={480}
          src={data.image || "/images/assets/image_placeholder.png"}
          alt={data.name || "Image"}
          className="aspect-[12/7] w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>

      <CardContent className="p-0 flex flex-col gap-2 pt-4">
        <div>
          <div className="text-sm text-dark-grey-shades-20">{data.type}</div>
          <div className="font-semibold text-lg text-dark-grey-shades-15">
            <span className="leading-tight">{data.name}</span>
          </div>
        </div>
        <p className="text-xs text-dark-grey-shades-30 mb-2 line-clamp-3">
          {data.khasiat}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-end p-0 pr-2">
        {children}        
      </CardFooter>
    </Card>
  );
};

export default CardExplore;
