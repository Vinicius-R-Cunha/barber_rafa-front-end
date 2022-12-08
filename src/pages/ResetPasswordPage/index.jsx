import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import * as api from "../../services/api";

export default function ResetPasswordPage() {
  const { hash } = useParams();

  const [showPage, setShowPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function hashValidation() {
      const response = await api.validateHash(hash);
      if (response.status !== 200) return navigate("/");

      setShowPage(true);
      return;
    }

    hashValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  return <>{showPage && <ResetPasswordForm hash={hash} />}</>;
}
