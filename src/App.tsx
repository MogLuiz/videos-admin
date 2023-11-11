import { ThemeProvider, Box } from "@mui/system"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { darkTheme } from "./config/theme"

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
          <h1>hello world</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}
