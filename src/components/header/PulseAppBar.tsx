import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Grid, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import KickStarterLogo from "../../assets/images/ksWhite.png";
import JustLauched from "../../assets/images/justLaunched.png";

import GooglePodcasts from "../../assets/images/googlepodcasts.svg";
import ApplePodcasts from "../../assets/images/applepodcasts.svg";
import PodcastAddict from "../../assets/images/podcastaddict.png";
import Spotify from "../../assets/images/spotify.png";
import "./PulseAppBar.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import headphones from "../../assets/lottie/headphones.json";
import { useLocation, useNavigate } from "react-router-dom";

//const pages = ["World", "Episodes", "Meet Us", "About"];
const pages = ["Coming Soon "];
const platform = [
  "Spotify",
  "Apple Podcasts",
  "Google Podcasts",
  "Podcast Addict",
];

const PulseAppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (page: string) => {
    // TODO - Add this back in
    // const pageName = page.toLowerCase();
    // navigate(pageName, { replace: true });
    // handleCloseNavMenu();
  };

  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <AppBar
      position="absolute"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isMobileScreen && (
            <Box
              sx={{
                width: "75px",
                display: location.pathname !== "/" ? "flex" : "none",
              }}
            >
              {location.pathname !== "/" && (
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/", { replace: true });
                  }}
                  src={Logo}
                ></img>
              )}
            </Box>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isMobileScreen && (
            <>
              <Box
                sx={{
                  width: "20%",
                  float: "left",
                }}
              >
                {location.pathname !== "/" && (
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/", { replace: true });
                    }}
                    src={Logo}
                  ></img>
                )}
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
            </>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="glitch2"
                key={page}
                onClick={() => handleMenuClick(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Share Tech Mono",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/** TODO - ADD BACK IN */}
            {/* <Tooltip title="Listen Now">
              {isMobileScreen ? (
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  onClick={handleOpenUserMenu}
                >
                  Listen Now
                </Button>
              ) : (
                <Button
                  variant="text"
                  size="large"
                  onClick={handleOpenUserMenu}
                >
                  <Player
                    autoplay
                    loop
                    src={headphones}
                    style={{ height: "50px" }}
                  ></Player>
                </Button>
              )}
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {platform.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Spotify" && (
                    <img src={Spotify} height={"48px"}></img>
                  )}
                  {setting === "Apple Podcasts" && (
                    <img src={ApplePodcasts} height={"48px"}></img>
                  )}
                  {setting === "Google Podcasts" && (
                    <img src={GooglePodcasts} height={"48px"}></img>
                  )}
                  {setting === "Podcast Addict" && (
                    <img src={PodcastAddict} height={"48px"}></img>
                  )}
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default PulseAppBar;
