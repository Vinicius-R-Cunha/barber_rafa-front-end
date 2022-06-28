import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import * as api from "../../services/api";
import { toast } from "react-toastify";

export default function ResetPasswordPage({ setShowResetPasswordPage }) {
  const { hash } = useParams();

  const [showPage, setShowPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    renderPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  async function renderPage() {
    const response = await api.validateHash(hash);
    if (response.status !== 200) return navigate("/");

    return setShowPage(true);
  }

  return <>{showPage && <ResetPasswordForm hash={hash} />}</>;
}
