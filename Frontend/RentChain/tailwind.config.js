/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#007BFF",
				secondary: "#6C757D",
				success: "#28A745",
				error: "#DC3545",
			},
		},
	},
	plugins: [],
};
