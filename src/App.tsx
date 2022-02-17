import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page-one" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
                <Route path="/page-three" element={<PageThree />} />
                <Route path="/page-cta" element={<PageCTA />} />
            </Routes>
        </Layout>
    );
}

export default App;