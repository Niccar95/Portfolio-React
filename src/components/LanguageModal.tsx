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
    <div
      className="languageDropdown"
      onMouseDown={(e) => e.stopPropagation()}
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
    </div>
  );
};

export default LanguageModal;
