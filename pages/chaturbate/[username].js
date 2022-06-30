import React, { useEffect } from "react";

import { useRouter } from "next/router";

export default function redirect() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { username } = router.query;
      window.location.assign(
        `https://chaturbate.com/in/?tour=APi5&campaign=LBTb1&track=ChaturSignUpLP-ToRoom&room=${username}`
      );
    }
  }, [router.isReady]);
  return <></>;
}
