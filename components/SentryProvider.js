import React from "react";
import * as Sentry from "@sentry/react-native";

let key =
  "https://6ecfe1fb023246e6ab22618460ff363a@o4504957799170048.ingest.sentry.io/4504957801398273";

Sentry.init({
  dsn: key,
  enableInExpoDevelopment: true, // Optional: enable Sentry in Expo development mode
});

const SentryProvider = ({ children }) => {
  return <>{children}</>;
};

export default SentryProvider;
