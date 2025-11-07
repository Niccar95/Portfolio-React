import { motion } from "motion/react";

interface ILanguageModalProps {
  currentLang: string;
  onSelectLanguage: (lang: string) => void;
}

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
];

const LanguageModal = ({
  currentLang,
  onSelectLanguage,
}: ILanguageModalProps) => {
  return (
    <motion.div
      className="languageDropdown"
      onMouseDown={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: -10, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -10, x: "-50%" }}
      transition={{ duration: 0.2 }}
    >
      {languages.map((lang) => (
        <div
          key={lang.code}
          className={`languageOption ${
            currentLang === lang.code ? "active" : ""
          }`}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelectLanguage(lang.code);
          }}
        >
          <p className="languageFlag">{lang.flag}</p>
          <p className="languageName">{lang.name}</p>
          {currentLang === lang.code && <i className="bi bi-check2"></i>}
        </div>
      ))}
    </motion.div>
  );
};

export default LanguageModal;
