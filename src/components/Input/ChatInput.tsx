import React from "react";
import { Grid, Input, ActionIcon } from "@mantine/core";
import { IconPaperclip, IconSend2 } from "@tabler/icons-react";

export default function ChatInput({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
    return (
         <Grid justify="space-between" align="center" gutter={8} px={8} pb={8} bg="gray.3">
      <Grid.Col span="auto">
        <Input
          placeholder="Type a message..."
          radius="xl"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          leftSectionPointerEvents="all"
          leftSection={
            <ActionIcon variant="subtle" radius="xl" aria-label="Settings">
              <IconPaperclip
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          }
        />
      </Grid.Col>
      <Grid.Col span="content">
        <ActionIcon variant="filled" size="lg" radius="xl">
          <IconSend2 style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
}
