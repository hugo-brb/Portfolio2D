import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className=" w-[95vw] md:w-1/2 min-h-16 h-fit my-4 mx-auto py-2 px-7 rounded-4xl bg-[var(--background-light)] flex flex-col gap-2 justify-center items-center">
            <div className=" self-start flex flex-col lg:flex-row justify-between w-full items-center gap-2">
                <div className=" flex items-center gap-4">
                    <img
                        className=" size-16 rounded-full"
                        src="/img/Me.webp"
                        alt="Hugo Barbieri"
                    />
                    <div className=" flex flex-col items-start">
                        <h2 className=" text-base font-bold">Hugo BARBIERI</h2>
                        <div>
                            <a
                                className=" text-sm"
                                href="mailto:hugo.barbieri@mobiteach.fr">
                                hugo.barbieri@mobiteach.fr
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" group cursor-pointer flex flex-col-reverse lg:flex-row items-center lg:items-end gap-2">
                    <p className=" group-hover:text-[var(--violet)] transition-all duration-300 text-sm">
                        {t("PDF")}
                    </p>
                    <a
                        href={`/docs/CV-Hugo_BARBIERI-${i18n.language}.pdf`}
                        target="_blank"
                        download>
                        <FaDownload className="text-[var(--text)] text-2xl cursor-pointer group-hover:text-[var(--violet)] transition-all duration-300" />
                    </a>
                </div>
            </div>

            <p className="text-[var(--text)] text-sm text-center">
                © - {new Date().getFullYear()} Hugo Barbieri. All rights
                reserved.
            </p>
        </footer>
    );
}
