import { ThemeProvider, Box } from "@mui/system"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { darkTheme } from "./config/theme"
import { Route, Routes } from "react-router-dom"
import { ListCategory } from "./features/categories/ListCategory"
import { CreateCategory } from "./features/categories/CreateCategory"
import { EditCategory } from "./features/categories/EditCategory"

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
            <Route path="/" element={<ListCategory />} />
            <Route path="/categories" element={<ListCategory />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/categories/edit/:id" element={<EditCategory />} />

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}
