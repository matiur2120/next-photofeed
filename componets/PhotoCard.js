'use client';
import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  return (
    <Link href={`/photos/${photo?.id}`} className="group">
      <Image
        src={`/images/${photo?.url}`}
        width={700}
        height={700}
        alt={photo?.title}
      />
      <div className="title-container">
        <h2 className="title">{photo?.title}</h2>
      </div>
    </Link>
  );
};

export default PhotoCard;
