import MenuIcon from "@mui/icons-material/Menu"
import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material"

type HeaderProps = {
  toggle: () => void
  theme?: string
  handleDrawerToggle?: () => void
}

export const Header = ({ toggle, theme, handleDrawerToggle }: HeaderProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
)
