import { createContext, useContext, useState } from "react";

const VerifyContext = createContext({});

const VerifyProvider = ({ children }) => {
  const [verifyId, setVerifyId] = useState("");
  const [isUserVerified, setIsUserVerified] = useState(
    JSON.parse(localStorage.getItem("isUserOTPVerified")) ?? false
  );

  const handleUserVerifiedStatus = () => {
    localStorage.setItem("isUserOTPVerified", true);
    setIsUserVerified(true);
  };

  return (
    <VerifyContext.Provider
      value={{
        verifyId,
        setVerifyId,
        isUserVerified,
        setIsUserVerified,
        handleUserVerifiedStatus,
      }}
    >
      {children}
    </VerifyContext.Provider>
  );
};

const useVerify = () => useContext(VerifyContext);

export { VerifyProvider, useVerify };
