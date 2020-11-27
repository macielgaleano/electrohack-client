import { useEffect } from "react";
import axios from "axios";

export function useRestoreDatabase() {
  useEffect(() => {
    axios
      .get("https://electrohack-server.vercel.app/data")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
