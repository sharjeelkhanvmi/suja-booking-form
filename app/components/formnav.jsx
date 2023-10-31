import Link from "next/Link";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";


export default function Formnav() {

    return (
        <div class="bg-theme-red-color py-3 text-white text-center w-full sticky top-0">
            <Link href='https://sujadrivingschool.co.uk/'>
                <p className="absolute p-7 left-0 text-white cursor-pointer z-20" style={{ opacity: 1 }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={21}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                    </svg>
                </p>
            </Link>
            <Image src={Logo} className="mx-auto w-100% h-100%" />
        </div>
    )
}