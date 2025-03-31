import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface ImagesCarouselProps {
	images: string[];
}

export function ImagesCarousel({ images }: ImagesCarouselProps) {
	return (
		<Carousel
			opts={{ loop: true }}
			className="w-full px-4 md:px-0 md:w-11/12 xl:w-full"
		>
			<CarouselContent>
				{images.map((image) => (
					<CarouselItem
						key={image}
						className="relative h-96 md:h-[540px] w-full"
					>
						<Image src={image} alt="Imagem" fill className="object-contain" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />
		</Carousel>
	);
}
