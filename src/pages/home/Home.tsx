import { Background } from "../../shared/ui/components/layout";
import Header from "../../widgets/header/ui/header";
import { Navbar } from "../../widgets/navbar/ui/navbar";

function Home() {
  return <>
    <Background>
      <Header />
      <Navbar />
    </Background>
  </>
}

export default Home;
