import { ThreeDots } from "react-loader-spinner";
import * as variables from "../styles/variables";

export function renderDotsLoading() {
  return <ThreeDots color={variables.WHITE} height={13} width={51} />;
}
