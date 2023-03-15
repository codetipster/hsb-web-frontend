import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const AccountantInfo = ({ onMessage }) => {
  const [token, setToken] = useState("");
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  //   handle input change event
  const handleInputChange = (value) => {
    // onMessage(value);
    setValue(value);
  };
  //   handle selection
  const handleChange = (value) => {
    console.log(value, "values");
    onMessage(value);
    setSelectedValue(value);
  };
  useEffect(() => {
    let info;
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend-app-rpnm.onrender.com/api/accountant/accountants/", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "accountant info");
          info = response.data.map((item) => {
            return { value: item.id, label: item.firstName };
          });
          setItems(info);
          console.log(items, "items");
        });
      return info;
    };
    getToken();
  }, []);
  return (
    <div className="w-full">
      <Select
        options={items}
        value={selectedValue}
        placeholder="Add Accountant"
        onChange={handleChange}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default AccountantInfo;
