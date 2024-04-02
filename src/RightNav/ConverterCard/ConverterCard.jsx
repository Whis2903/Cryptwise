import React from "react";
// import { useState } from "react";

import "./ConverterCard.css";
import divider from "./divider.svg";

const { useState } = React;
const options1 = [
  {
    label: "ETH",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg",
  },
  {
    label: "SEP",
    image:
      "https://www.criptotendencias.com/wp-content/uploads/2022/07/ethereum-sepolia-exito.png",
  },
  {
    label: "MAT",
    image:
      "https://s2.coinmarketcap.com/static/img/coins/200x200/3890.png",
  },
];

const options2 = [
    {
      label: "INR",
      image:
        "https://i.pinimg.com/564x/b4/ea/3e/b4ea3e33b0f81f35aef1bc2914ff58b4.jpg",
    },
    {
      label: "USD",
      image:
        "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      label: "SSD ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
    },
  ];

const ConverterCard = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const selectOption1 = (option1) => {
    setSelectedOption1(option1);
    setIsDropdownOpen1(false);
  };

  const selectOption2 = (option2) => {
    setSelectedOption2(option2);
    setIsDropdownOpen2(false);
  };

  const convertAmount = () => {
    // Assuming the exchange rate is hardcoded
    const exchangeRate = 0.0000032;
    const convertedAmount = parseFloat(inputValue1) * (1/exchangeRate);
    setInputValue2(convertedAmount.toFixed(2)); // Limiting to 2 decimal places
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };


  return (
    <div className="cc-main">
      <div className="first">
        <div className="tag">Amount</div>
        <div className="selector-value">
          <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown1}>
              {selectedOption1 && (
                <img
                  src={selectedOption1.image}
                  alt={selectedOption1.label}
                  className="dropdown-option-image"
                />
              )}
              <span className="dropdown-option-label">
                {selectedOption1 ? selectedOption1.label : "Select"}
              </span>
              <span className="dropdown-caret"></span>
            </div>
            <ul className={`dropdown-menu ${isDropdownOpen1 ? "open" : ""}`}>
              {options1.map((option1, index) => (
                <li key={index} onClick={() => selectOption1(option1)}>
                  <img
                    src={option1.image}
                    alt={option1.label}
                    className="dropdown-option-image"
                  />
                  <span className="dropdown-option-label">{option1.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <input type="number" className="number-input" value={inputValue1} onChange={handleInputChange1}></input>
        </div>
      </div>
      <img className="divider" src={divider} onClick={convertAmount} />

      <div className="first">
        <div className="tag">Converted Amount</div>
        <div className="selector-value">
          <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown2}>
              {selectedOption2 && (
                <img
                  src={selectedOption2.image}
                  alt={selectedOption2.label}
                  className="dropdown-option-image"
                />
              )}
              <span className="dropdown-option-label">
                {selectedOption2 ? selectedOption2.label : "Select"}
              </span>
              <span className="dropdown-caret"></span>
            </div>
            <ul className={`dropdown-menu ${isDropdownOpen2 ? "open" : ""}`}>
              {options2.map((option2, index) => (
                <li key={index} onClick={() => selectOption2(option2)}>
                  <img
                    src={option2.image}
                    alt={option2.label}
                    className="dropdown-option-image"
                  />
                  <span className="dropdown-option-label">{option2.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <input type="number" className="number-input" value={inputValue2} onChange={handleInputChange2}></input>
        </div>
      </div>

      <div className="converter">
                <div className="head-er">Indicative Exchange Rate</div>
                <div className="conv-rate">1INR = 0.0000032ETH</div>
      </div>

    </div>
  );
};

export default ConverterCard;
