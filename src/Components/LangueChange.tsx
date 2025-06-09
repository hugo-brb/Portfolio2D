import i18n from "i18next";

export default function LangueChange() {
    return (
        <div className=" fixed right-4 my-4 flex justify-center items-center gap-0 mt-4">
            <button
                className={` font-bold text-[var(--text)] hover:text-[var(--violet)] ${
                    i18n.language === "fr"
                        ? "text-[var(--violet)]"
                        : " cursor-pointer"
                }`}
                onClick={() => i18n.changeLanguage("fr")}>
                Fr
            </button>
            <span className=" mx-1">|</span>
            <button
                className={` font-bold text-[var(--text)] hover:text-[var(--violet)] ${
                    i18n.language === "en"
                        ? "text-[var(--violet)]"
                        : "cursor-pointer"
                }`}
                onClick={() => i18n.changeLanguage("en")}>
                En
            </button>
        </div>
    );
}
