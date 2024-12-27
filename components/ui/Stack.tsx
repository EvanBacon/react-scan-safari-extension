import { Stack as NativeStack } from "expo-router";

// These are the default stack options for iOS, they disable on other platforms.
const DEFAULT_STACK_HEADER: import("@react-navigation/native-stack").NativeStackNavigationOptions =
  process.env.EXPO_OS !== "ios"
    ? {}
    : {
        headerTransparent: true,
        headerBlurEffect: "systemChromeMaterial",
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: "transparent",
        },
        headerLargeTitle: false,
      };

export default function Stack({
  screenOptions,
  ...props
}: React.ComponentProps<typeof NativeStack>) {
  return (
    <NativeStack
      screenOptions={{
        ...DEFAULT_STACK_HEADER,
        ...screenOptions,
      }}
      {...props}
    />
  );
}

Stack.Screen = NativeStack.Screen;
