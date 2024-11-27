import { getDictionary } from "@/app/i18n/get-dictionary";
import { Locale } from "@/app/i18n/settings";

interface FooterProps {
  /** 语言 */
  lang: Locale;
}

export default function Footer({ lang }: FooterProps) {
  const t = getDictionary(lang);
  return (
    <footer className="border-t flex flex-col items-center">
      <div className="w-[80%] py-4 flex justify-between">
        <div>{t.wechat}: 丕丕兔猫</div>
        <div>QQ: 1216265665</div>
        <div>
          {t.email}:{" "}
          <a href="mailto:pp2mall@outlook.com">pp2mall@outlook.com</a>
        </div>
        <div>
          {t.address}: {t.beijing}
        </div>
      </div>
      <div className="w-full py-4 text-center border-t">{t.copy_right}</div>
    </footer>
  );
}
