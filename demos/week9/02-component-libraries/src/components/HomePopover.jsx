//you can style this component with a CSS module and/or Tailwind

import * as Popover from "@radix-ui/react-popover";

export default function HomePopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>Click me</Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <div>
            <p>Welcome to my website!</p>
          </div>
          <Popover.Close>
            <button>Close</button>
          </Popover.Close>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
