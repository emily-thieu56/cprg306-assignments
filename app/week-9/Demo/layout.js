import { AuthContextProvider } from "./Demo/_utils/auth-context";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}