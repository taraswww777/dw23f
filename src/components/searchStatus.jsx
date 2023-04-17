import React from "react";

const SearchStatus = ({ usersNumber }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if ([2, 3, 4].indexOf(lastOne) >= 0 && number < 5 && number < 15) {
      return "человека тусанут";
    }
    return number === 1 ? "человек тусанет" : "человек тусанут";
  };

  return (
    <h2>
      <span
        className={"badge " + (usersNumber > 0 ? "bg-primary" : "bg-danger")}
      >
        {usersNumber > 0
          ? `${usersNumber + " " + renderPhrase(usersNumber)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
