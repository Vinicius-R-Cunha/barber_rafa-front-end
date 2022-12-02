import { toast } from "react-toastify";

export default function renderToast(type, message) {
  const toastStyles = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === "success") return toast.success(message, toastStyles);
  if (type === "error") return toast.error(message, toastStyles);
}
