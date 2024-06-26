import { Collapsible } from "../src"

export default {
  title: "Components / Collapsible",
}

export const Basic = () => (
  <Collapsible.Root>
    <Collapsible.Trigger>Toggle Collapse</Collapsible.Trigger>
    <Collapsible.Content bg="red" padding="30px" mt="4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Collapsible.Content>
  </Collapsible.Root>
)

export const WithUnmount = () => (
  <Collapsible.Root unmountOnExit>
    <Collapsible.Trigger>Toggle Collapse</Collapsible.Trigger>
    <Collapsible.Content bg="red" padding="30px" mt="4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Collapsible.Content>
  </Collapsible.Root>
)
