import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import Onboard3 from "../../assets/onboard3.png";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider, createStorage, cookieStorage, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  sepolia,
  arbitrum,
  base,
  scroll,
  polygon,
} from "@reown/appkit/networks";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../AuthContext/loginContext";

const queryClient = new QueryClient();
const projectId = import.meta.env.VITE_PROJECT_ID;
console.log("Project ID:", projectId);

if (!projectId) {
  throw new Error("ProjectId is not defined");
}

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks = [mainnet, sepolia, arbitrum, base, scroll, polygon];

const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    email: true,
    socials: ["Google", "X", "github", "discord", "farcaster"],
    emailShowWallets: true,
  },
  themeMode: "light",
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

function Signup() {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  const { setIsLoggedIn, user, rider } = useContext(LoginContext);
  const [connected, setConnected] = useState(isConnected);

  useEffect(() => {
    setConnected(isConnected);
    if (isConnected && user) {
      setIsLoggedIn(true);
      navigate("/User/dashboard");
    } else if (isConnected && rider) {
      navigate("/Rider/dashboard");
    } else {
      navigate("/login");
    }
  }, [isConnected, navigate, setIsLoggedIn]);

  return (
    <div className="onboard">
      <section>
        <img src={Onboard3} alt="onboard img" />
      </section>
      <section>
        <h1>Choose your login method</h1>
        <p>
          By connecting your wallet, you agree to our
          <span> Terms of Service </span> and <span> Privacy Policy </span>
        </p>
      </section>
      <section>
        <appkit-button />
        {/* <appkit-button className="login-btn" /> */}
      </section>
    </div>
  );
}

export default Signup;
