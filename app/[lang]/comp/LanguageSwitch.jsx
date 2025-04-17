import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';

const items = [
    {
        label: "En",
        key: 'en',
    },
    {
        label: "Ar",
        key: 'ar',
    },
];

const LanguageSwitch = ({ handleclick }) => {
    const languages = ['en', 'ar', 'ch', 'ru'];
    const router = useRouter();
    const pathname = usePathname();
    const { langValue, handleLanguage } = useContext(MainLanguageValueContext);
    const [selectedLanguage, setSelectedLanguage] = useState(`${langValue}`);

    useEffect(() => {
        // Update the body class whenever selectedLanguage changes
        if (selectedLanguage) {
            document.body.classList.add(selectedLanguage.toLowerCase());
            // Clean up by removing the class when the component unmounts or selectedLanguage changes
            return () => {
                document.body.classList.remove(selectedLanguage.toLowerCase());
            };
        }
    }, [selectedLanguage]);

    const handleMenuClick = (e) => {
        handleclick(false)
        const selectedItem = items.find(item => item.key === e.key);
        setSelectedLanguage(selectedItem.label);
        handleLanguage(selectedItem.key);
        const newLang = selectedItem.key;

        // Construct new path with selected language
        let pathParts = pathname.split('/');

        // Remove the existing language segment if present
        if (languages.includes(pathParts[1])) {
            pathParts.splice(1, 1);
        }

        // Add the new language segment
        if (newLang !== 'en') {
            pathParts = ['', newLang, ...pathParts.slice(1)];
        } else {
            pathParts = ['', ...pathParts.slice(1)];
        }
        // Construct the new path
        const newPath = pathParts.join('/');
        if (newPath) {
            router.push(newPath);

        }
        else {
            router.push("/");
        }

    };

    const menuItems = items.map(item => ({
        label: item.label,
        key: item.key,
        onClick: handleMenuClick,
    }));

    return (
        <Dropdown
            overlay={<Menu items={menuItems} />}
            trigger={['click']} >
            <a onClick={(e) => e.preventDefault()} className="btn btn-secondary rounded-md bg-white py-2 px-4 flex gap-1 items-center">
                <Image className="w-5" src={svgrepo} alt="global-svgrepo-com.svg" />
                <span className=" capitalize text-[.9rem] font-bold font-MluvkaBold">{selectedLanguage}</span>
            </a>
        </Dropdown>
    );
};

export default LanguageSwitch;
