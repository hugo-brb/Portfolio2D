import { useTranslation } from "react-i18next";
import LangueChange from "./LangueChange";

export default function Header() {
    const { t } = useTranslation();

    return (
        <>
            <nav className=" fixed left-1/2 -translate-x-1/2 hover:ring-2 ring-[var(--gris)] my-4 bg-[var(--background-light)] rounded-4xl w-fit px-4 py-2 flex justify-center items-center gap-7 transition-all duration-300 z-50">
                <a
                    href="#about"
                    className="hover:text-[var(--violet)] hover:font-bold hover:scale-105 cursor-pointer transition-all duration-100">
                    {t("About")}
                </a>
                <a
                    href="#projects"
                    className="hover:text-[var(--violet)] hover:font-bold hover:scale-105 cursor-pointer transition-all duration-100">
                    {t("Projects")}
                </a>
                <a
                    href="#contact"
                    className="hover:text-[var(--violet)] hover:font-bold hover:scale-105 cursor-pointer transition-all duration-100">
                    {t("Contact")}
                </a>
            </nav>
            <LangueChange />
        </>
    );
}
