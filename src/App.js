import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <Layout>
      <MainNavigation />
      <Landing />
    </Layout>
  );
}

export default App;
