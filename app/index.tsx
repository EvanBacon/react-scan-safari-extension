import { BodyScrollView } from "@/components/ui/BodyScrollView";
import * as Form from "@/components/ui/Form";
import { IconSymbol } from "@/components/ui/IconSymbol";
import * as AC from "@bacons/apple-colors";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import * as Application from "expo-application";
export default function Page() {
  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16,
        gap: 24,
      }}
    >
      <Form.Section>
        <View style={{ alignItems: "center", gap: 8, padding: 16 }}>
          <Image
            source={{ uri: "https://github.com/expo.png" }}
            style={{
              aspectRatio: 1,
              height: 64,
              borderRadius: 8,
            }}
          />
          <Form.Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            React Scan for Safari
          </Form.Text>
          <Text style={{ textAlign: "center", fontSize: 14, color: AC.label }}>
            React Scan automatically detects performance issues in your React
            app
          </Text>
        </View>
      </Form.Section>

      <Form.Section>
        {/* Table style: | A   B |*/}
        <Link href="/ext-guide">Setup Instructions</Link>
      </Form.Section>

      <Form.Section title="Info">
        <Form.Link target="_blank" href="https://x.com/baconbrix">
          Evan Bacon
        </Form.Link>
        <Form.Link target="_blank" href="https://react-scan.com/">
          React Scan
        </Form.Link>
        <Form.Link
          target="_blank"
          href="https://github.com/EvanBacon/react-scan-safari-extension"
        >
          Source code
        </Form.Link>
      </Form.Section>

      <Form.Section title="About">
        <Form.Text hint={Application.nativeApplicationVersion}>
          Version
        </Form.Text>
        <Text hint={Application.nativeBuildVersion}>Build</Text>
      </Form.Section>
    </BodyScrollView>
  );
}
