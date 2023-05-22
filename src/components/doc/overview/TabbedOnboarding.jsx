import { Tab } from '@headlessui/react'

export function TabbedOnboarding() {
  return (
    <div className="mt-16 not-prose">
      <Tab.Group>
        <Tab.List className="flex rounded overflow-hidden">
          <Tab className="dark:bg-d-slate-3 w-full py-1">Subscribe</Tab>
          <Tab className="dark:bg-d-slate-3 w-full py-1">Report Usage</Tab>
          <Tab className="dark:bg-d-slate-3 w-full py-1">Checking Access</Tab>
          <Tab className="dark:bg-d-slate-3 w-full py-1">Get Checkout URL</Tab>
          <Tab className="dark:bg-d-slate-3 w-full py-1">Get current plan</Tab>
        </Tab.List>
        <Tab.Panels className="p-2">
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
          <Tab.Panel>Content 5</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
