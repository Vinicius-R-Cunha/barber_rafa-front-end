import { Container, Input } from "./style";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function PasswordInput({ placeholder, reference }) {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <Container>
      <Input
        type={isShowingPassword ? "text" : "password"}
        placeholder={placeholder}
        ref={reference}
        required
      />

      {isShowingPassword ? (
        <IoEyeOff
          onClick={() => setIsShowingPassword(!isShowingPassword)}
          className="show-hide"
        />
      ) : (
        <IoEye
          onClick={() => setIsShowingPassword(!isShowingPassword)}
          className="show-hide"
        />
      )}
    </Container>
  );
}
