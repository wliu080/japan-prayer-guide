import { SiteMapFooter } from "../components/siteMapFooter";
import { ToggleHeader } from "../components/toggleHeader";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beneath the Surface</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToggleHeader />
        <Container id="landingbody" style={{'paddingTop': '50px'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ante vehicula, maximus erat vel,
            mollis ex. In erat elit, maximus at enim nec, tincidunt vulputate est. Quisque rhoncus egestas egestas.
            Vivamus ut iaculis ante, id volutpat lacus. Proin sit amet rutrum arcu. Cras elementum ligula nec volutpat
            varius. Maecenas viverra lectus quis velit finibus tempor. Donec et ligula enim. Sed eget scelerisque enim.
            Duis quis metus ac nisi accumsan eleifend id quis massa.{" "}
          </p>
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ante vehicula, maximus erat vel,
            mollis ex. In erat elit, maximus at enim nec, tincidunt vulputate est. Quisque rhoncus egestas egestas.
            Vivamus ut iaculis ante, id volutpat lacus. Proin sit amet rutrum arcu. Cras elementum ligula nec volutpat
            varius. Maecenas viverra lectus quis velit finibus tempor. Donec et ligula enim. Sed eget scelerisque enim.
            Duis quis metus ac nisi accumsan eleifend id quis massa.{" "}
          </p>
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ante vehicula, maximus erat vel,
            mollis ex. In erat elit, maximus at enim nec, tincidunt vulputate est. Quisque rhoncus egestas egestas.
            Vivamus ut iaculis ante, id volutpat lacus. Proin sit amet rutrum arcu. Cras elementum ligula nec volutpat
            varius. Maecenas viverra lectus quis velit finibus tempor. Donec et ligula enim. Sed eget scelerisque enim.
            Duis quis metus ac nisi accumsan eleifend id quis massa.{" "}
          </p>
        </Container>
        <SiteMapFooter />
      </main>
    </>
  );
}
