import Image from "next/image";

export default function ImageComponent({ path, alt, contain }) {
  return (
    <Image
      priority
      src={path}
      alt={alt}
      className={`${contain ? "object-contain" : "object-cover"}text-white`}
      layout="fill"
    />
  );
}
