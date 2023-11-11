import { createTheme } from "@mui/material"
import { ThemeProvider, Box } from "@mui/system"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"

const theme = createTheme({})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ height: "100vh" }}>
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
