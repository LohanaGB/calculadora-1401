import { HomeContent } from "../public/styles/Global.styles";
import { Calculator } from "./globalComponents/calculator";

export const Home: React.FC = () => {
  return (
    <HomeContent>
      <Calculator />
    </HomeContent>
  );
}
export default Home
