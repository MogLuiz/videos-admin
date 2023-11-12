import { ThemeProvider, Box } from "@mui/system"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { darkTheme } from "./config/theme"
import { Route, Routes } from "react-router-dom"

const Home = () => {
  return <div>Home</div>
}

const About = () => {
  return <div>About</div>
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header
          toggle={() => {
            console.log("")
          }}
        />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}
