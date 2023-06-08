import Image from "next/image";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IOAuthButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  logoUrl: string;
  height: number;
  width: number;
  alt: string;
  buttonText: string;
}

const OAuthButton = ({
  logoUrl,
  height,
  width,
  alt,
  buttonText,
  ...props
}: IOAuthButton) => {
  return (
    <button
      {...props}
      className="px-[19px] pb-[7px] pt-[8px] flex items-center justify-center bg-white rounded-[10px] hover:shadow"
    >
      <Image src={logoUrl} height={height} width={width} alt={alt} />
      <span className="ml-[10px] text-[12px] text-[#858585]">{buttonText}</span>
    </button>
  );
};

export default OAuthButton;
