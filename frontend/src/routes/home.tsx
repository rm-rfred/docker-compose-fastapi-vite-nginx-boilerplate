import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box>
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Stack alignItems="center" justifyContent="center">
              <Box
                component="img"
                sx={{
                  width: 250,
                }}
                alt="Docker"
                src="docker.png"
              />
              <Box
                component="img"
                sx={{
                  width: 250,
                }}
                alt="FastAPI"
                src="fastapi.png"
              />

              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    width: 40,
                    mr: 1,
                  }}
                  alt="ReactIcon"
                  src="react.svg"
                />
                <Typography
                  variant="h3"
                  align="center"
                  color="rgb(97, 218, 251)"
                >
                  React
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    width: 40,
                    mr: 1,
                  }}
                  alt="ViteIcon"
                  src="vite.svg"
                />
                <Typography
                  variant="h3"
                  align="center"
                  color="rgb(97, 218, 251)"
                >
                  Vite
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
