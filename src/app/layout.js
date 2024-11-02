import Navbar from "@/component/navbar/navbar";
import "./globals.css";

export const metadata = {
    title: "BooleanBuffer",
    description: "BooleanBuffer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div>
                    <Navbar />
                </div>
                <div>{children}</div>
            </body>
        </html>
    );
}
