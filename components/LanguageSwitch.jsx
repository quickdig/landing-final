'use client';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (lng) => {
        const segments = pathname.split('/');
        segments[1] = lng; // replace locale in the URL
        router.push(segments.join('/'));
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => switchTo('en')}>English</button>
            <button onClick={() => switchTo('ar')}>العربية</button>
        </div>
    );
};

export default LanguageSwitcher;
