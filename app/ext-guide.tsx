import { BodyScrollView } from "@/components/ui/BodyScrollView";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Page() {
  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16,
        gap: 24,
      }}
    >
      <Form.Section>
        <Text numberOfLines={2}>
          1. Open the Settings app and go to Apps → Safari → Extensions → React
          Scan.
        </Text>

        <Text numberOfLines={3}>
          2. Toggle on{" "}
          <Text style={{ fontWeight: "bold" }}>Allow Extensions</Text> and{" "}
          <Text style={{ fontWeight: "bold" }}>Allow in Private Browsing</Text>.
        </Text>
        <Text numberOfLines={3}>
          3. Under <Text style={{ fontWeight: "bold" }}>Permissions</Text>, set
          All Websites to <Text style={{ fontWeight: "bold" }}>Allow</Text>.
        </Text>
        <Text numberOfLines={3}>
          4. Open Safari and visit{" "}
          <Link href="https://evanbacon.dev">any webpage</Link> (some websites
          do not allow scripting).
        </Text>
        <Form.Text
          numberOfLines={3}
          systemImage={{
            name: "puzzlepiece.extension.fill",
            color: AC.systemBlue,
            size: 24,
          }}
          style={{
            flex: 1,
          }}
        >
          5. Tap the puzzle piece icon in the address bar.
        </Form.Text>
        <Text numberOfLines={3}>
          6. Select <Text style={{ fontWeight: "bold" }}>React Scan.</Text>
        </Text>
        <Text numberOfLines={3}>
          7. If prompted, tap{" "}
          <Text style={{ fontWeight: "bold" }}>Always Allow.</Text>
        </Text>
        <Text numberOfLines={3}>
          8. Confirm by tapping{" "}
          <Text style={{ fontWeight: "bold" }}>
            Always Allow on Every Website.
          </Text>
        </Text>
        <Text numberOfLines={3}>
          9. Security notice: This project is entirely{" "}
          <Link href="https://github.com/EvanBacon/react-scan-safari-extension">
            open source
          </Link>
        </Text>
      </Form.Section>

      <Form.Section
        title="Notice"
        footer="This extension is entirely open source, you can examine it on GitHub."
      >
        <Form.Link
          target="_blank"
          href="https://github.com/EvanBacon/react-scan-safari-extension"
        >
          View source code
        </Form.Link>
      </Form.Section>
    </BodyScrollView>
  );
}
