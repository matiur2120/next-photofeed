import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
const PhotoDetails = async ({ id, lang }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photo = await response.json();
  const dictionary = await getDictionary(lang);
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10">
      <div className="col-span-12 lg:col-span-8">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto rounded-xl object-cover"
          src={`/images/${photo?.url}`}
          width={700}
          height={700}
          alt={photo?.title}
        />
      </div>
      <div className="col-span-12 lg:col-span-4 border border-gray-300 rounded-xl p-4">
        <h1 className="font-semibold text-2xl">{photo?.title}</h1>
        <p className="py-2">
          {photo?.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-lg mr-2">
              #{tag}
            </span>
          ))}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>{dictionary?.views}</p>
            <p className="font-semibold">{photo?.views}</p>
          </div>
          <div className="flex justify-between">
            <p>{dictionary?.share}</p>
            <p className="font-semibold">{photo?.share}</p>
          </div>
          <div className="flex justify-between">
            <p>{dictionary?.uploadedOn}</p>
            <p className="font-semibold"> {photo?.uploaded}</p>
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-2 items-center">
              <Image
                src={photo?.author?.avatar}
                width={50}
                height={50}
                alt={photo?.author?.name}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{photo?.author?.name}</h4>
                <p className="text-sm">
                  {photo?.author?.followers} <span>{dictionary.followers}</span>
                </p>
              </div>
            </div>
            <Link href="#" className="flex gap-1">
              <Image
                src={"/follow.svg"}
                width={24}
                height={24}
                alt="flow_icon"
              />
              <span>{dictionary?.follow}</span>
            </Link>
          </div>
          <div>
            <p>{photo?.author?.bio}</p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-1 items-center">
                <Image
                  src={"/heart.svg"}
                  width={24}
                  height={24}
                  alt="heart_icon" />
                  <span>
                  {photo?.likes}
                  </span>
               </div>
               <div className="flex gap-1 items-center">
                <Image
                  src={"/save.svg"}
                  width={24}
                  height={24}
                  alt="save_icon" />
               </div>
               <div className="flex gap-1 items-center">
                <Image
                  src={"/share.svg"}
                  width={24}
                  height={24}
                  alt="share_icon" />
                  <span>
                  {photo?.share}
                  </span>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
