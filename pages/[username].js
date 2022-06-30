import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function redirect() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { username } = router.query;
      window.location.assign(
        `https://go.xlviiirdr.com/api/goToTheRoom?campaignId=SignUpLP&creativeId=Twitter&sourceId=${username}&userId=c9ff0d8ffe36017d924ff85f598780492bf702e92aab953cde7b289e7bbc1076&targetDomain=camwhorestv.live&action=signUpModalDirectLinkInteractive&sound=on`
      );
    }
  }, [router.isReady]);
  return <></>;
}
