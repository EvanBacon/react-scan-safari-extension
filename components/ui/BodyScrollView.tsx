"use client";

import { forwardRef } from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { useBottomTabOverflow } from "./TabBarBackground";
import * as AC from "@bacons/apple-colors";

export const BodyScrollView = forwardRef<any, ScrollViewProps>((props, ref) => {
  const paddingBottom = useBottomTabOverflow();
  return (
    <ScrollView
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      contentInset={{ bottom: paddingBottom }}
      scrollIndicatorInsets={{ bottom: paddingBottom }}
      {...props}
      style={[{ backgroundColor: AC.systemGroupedBackground }, props.style]}
      ref={ref}
    />
  );
});
