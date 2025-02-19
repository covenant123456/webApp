import React from "react";
import "./Home.css";
import Onboard3 from "../../assets/onboard3.png";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider, createStorage, cookieStorage } from "wagmi";
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
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../AuthContext/loginContext";

const queryClient = new QueryClient();

const projectId = process.env.REACT_APP_PROJECT_ID;
// if (!projectId) {
//   throw new Error("ProjectId is not defined");
// }

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks = [mainnet, sepolia, arbitrum, base, scroll, polygon];

const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
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
    socials: ["Google", "X", "githubb", "discord", "farcaster"],
    emailShowWallets: true,
  },
  themmeMode: "light",
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

function Login() {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  const [connected, itIsConnected] = React.useState(true);

  React.useEffect(() => {
    itIsConnected(isConnected);
    const { setIsLoggedIn } = React.useContext(LoginContext);

    if (connected) {
      navigate("/User/dashboard");
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [connected]);

  return (
    <div className="onboard">
      <section>
        <img src={Onboard3} alt="onboard img" />
      </section>
      <section>
        <h1>Choose your login method</h1>
        <p>
          By connecting your wallet, you agree to our
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </section>
      <section>
        <button className="login-btn">
          <appkit-button />
        </button>
      </section>
    </div>
  );
}

export default Login;
