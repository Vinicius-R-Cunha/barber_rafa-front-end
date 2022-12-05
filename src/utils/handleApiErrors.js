import renderToast from "./renderToast";

export default function handleApiErrors(response) {
  if (response.status === "loginCancelled") return;

  if (response.status === 409) {
    return renderToast("error", response.data);
  }

  if (response.status === 422) {
    return renderToast("error", response.data.error);
  }

  if (response.data) {
    return renderToast("error", response.data);
  }

  return renderToast(
    "error",
    "Erro no servidor, tente novamente em alguns momentos"
  );
}
