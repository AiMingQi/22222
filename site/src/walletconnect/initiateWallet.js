import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

// Create WalletConnector
const walletConnector = new NodeWalletConnect(
  {
    bridge: "https://bridge.walletconnect.org", // Required
  },
  {
    clientMeta: {
      description: "WalletConnect NodeJS Client",
      url: "https://nodejs.org/en/",
      icons: ["https://nodejs.org/static/images/logo.svg"],
      name: "WalletConnect",
    },
  }
);

// Check if connection is already established
if (!walletConnector.connected) {
  // create new session
  walletConnector.createSession().then(() => {
    // get uri for QR Code modal
    const uri = walletConnector.uri;
    // display QR Code modal
    WalletConnectQRCodeModal.open(
      uri,
      () => {
        console.log("QR Code Modal closed");
      },
      true // isNode = true
    );
  });
}

// Subscribe to connection events
walletConnector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Close QR Code Modal
  WalletConnectQRCodeModal.close(
    true // isNode = true
  );

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

walletConnector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

walletConnector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete walletConnector
});