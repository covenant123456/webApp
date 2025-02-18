import React from "react";
import "./Home.css";
import Onboard3 from "../../assets/onboard3.png";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

// 0. Setup queryClient
const queryClient = new QueryClient();

const projectId = process.env.PROJECT_ID;
if (!projectId) {
  throw new Error("ProjectId is not defined");
}

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [mainnet, arbitrum];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
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
          <v3m-button />
        </button>
        <v3m-network-button />
      </section>
    </div>
  );
}

export default Login;
