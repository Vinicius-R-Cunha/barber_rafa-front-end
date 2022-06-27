import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import * as api from "../../services/api";
import { toast } from "react-toastify";

export default function ResetPasswordPage({ setShowResetPasswordPage }) {
  const { hash } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    renderPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  async function renderPage() {
    const response = await api.validateHash(hash);
    if (response.status !== 200) {
      toast.error("Erro ao carregar serviços, por favor recarregue a página", {
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return navigate("/");
    }
  }

  return (
    <>
      <ResetPasswordForm hash={hash} />
    </>
  );
}
