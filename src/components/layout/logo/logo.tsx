import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      id="logo"
      data-name="logo"
      className={cn("logo", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116.16 125.73"
    >
      <path d="M92.45,28.85l-3.22,14.86c8.23,5.31,13.79,15.31,13.79,26.74,0,17-12.26,30.84-27.36,30.84l-31.25-.18,2.24-10.64,29.43.06c9.86,0,17.86-8.88,17.86-19.83s-8-19.84-17.86-19.84h-35.62c-2.63-.14-4.64-2.37-4.52-5v-.39c-.12-2.62,1.9-4.85,4.52-5h39.58L89.04,0h-48.47C18.16,0,0,20.47,0,45.72c0,18.5,9.76,34.43,23.78,41.63l3.22-14.86c-8.24-5.31-13.79-15.31-13.79-26.74,0-17,12.24-30.83,27.36-30.83l31.24.17-2.25,10.64h-29.46c-9.87,0-17.86,8.88-17.86,19.84s7.99,19.83,17.86,19.83h35.62c2.62.15,4.63,2.38,4.51,5v.39c.12,2.62-1.89,4.85-4.51,5h-39.6l-9,40.48h48.49c22.39,0,40.55-20.47,40.55-45.73.05-18.6-9.69-34.49-23.71-41.69Z" />
    </svg>
  );
}
