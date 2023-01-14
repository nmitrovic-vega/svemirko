import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#4370f6",
			contrastText: "#fff",
		},
		secondary: {
			main: "#d9316b",
			contrastText: "#000",
		},
	},
	typography: {
		allVariants: {
			fontFamily: "'Francois One', sans-serif",
			textTransform: "none",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					borderRadius: "50px",
					background: "red",
					color: "white",
					fontSize: "14rem",
				},
			},
		},
	},
});
