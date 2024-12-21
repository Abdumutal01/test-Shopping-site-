import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState(null); // Tanlangan brend
    const [selectedPhone, setSelectedPhone] = useState(null); // Tanlangan telefon

    const brands = {
        Apple: ["iPhone 12", "iPhone 12 Max", "iPhone 13", "iPhone 13 Max", "iPhone 13 Pro Max", "iPhone 14"],
        INOI: ["INOI 5X", "INOI 6X", "INOI 7X"],
        Nokia: ["Nokia 3310", "Nokia X10", "Nokia G50"],
        Oppo: ["Oppo A53", "Oppo Reno 6", "Oppo Find X3"],
        Xiaomi: ["Xiaomi Mi 11", "Xiaomi Redmi Note 10", "Xiaomi Poco X3"],
        Realme: ["Realme 8", "Realme GT", "Realme Narzo 30"],
        Samsung: ["Samsung Galaxy S21", "Samsung Galaxy A32", "Samsung Galaxy Note 20"],
        Sony: ["Sony Xperia 1", "Sony Xperia 5", "Sony Xperia 10"],
        Vivo: ["Vivo X60", "Vivo V21", "Vivo Y20"],
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand === selectedBrand ? null : brand); // Tanlangan brendni almashtirish
        setSelectedPhone(null); // Telefon tanlovini qayta tiklash
    };

    const handlePhoneClick = (phone) => {
        setSelectedPhone(phone); // Telefonni tanlash
        setSelectedBrand(null); // Brend dropdownni yopish
        setIsOpen(false)
    };


    return (
        <div className="dropdown">
            <div
                className="selected-item"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedPhone ? ` ${selectedPhone}` : "📱 Telefonni tanlang  ⇓"}
            </div>
            {
                isOpen && (
                    Object.keys(brands).map((brand) => (
                        <div key={brand} className="dropdown-section">
                            <div className="dropdown-header" onClick={() => handleBrandClick(brand)}>
                                {brand}
                                <span className={`arrow ${selectedBrand === brand ? "open" : ""}`}>⌃</span>
                            </div>
                            {selectedBrand === brand && (
                                <ul className="dropdown-list">
                                    {brands[brand].map((phone, index) => (
                                        <li
                                            key={index}
                                            className={`dropdown-item ${selectedPhone === phone ? "selected" : ""}`}
                                            onClick={() => handlePhoneClick(phone)}
                                        >
                                            {phone}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Dropdown;
