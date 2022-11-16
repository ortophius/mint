import { allCategories } from "../../entities/categories/model";
import { useAppSelector } from "../../shared/config/store";
import { useAsyncModel } from "../../shared/lib/useAysyncModel";
import { Background } from "../../shared/ui/components/layout";
import Header from "../../widgets/header/ui/header";
import { Navbar } from "../../widgets/navbar/ui/navbar";

function Home() {
  return (
    <Background>
      <Header />
      <Navbar />
    </Background>
  );
}

export default Home;
