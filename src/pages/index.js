import Image from "next/image";
import Marquee from "react-fast-marquee";

export default () => (
  <main
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Marquee style={{ "font-size": 48, maxWidth: 800 }} speed="100">
      Rodrigo é complicado Next.js
    </Marquee>

    <Image src="/rodrigo-romuleira.png" width="400" height="300" />
  </main>
);
