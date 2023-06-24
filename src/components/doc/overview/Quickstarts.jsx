import { Button } from '@/components/common/Button'
import Link from 'next/link'

export function Quickstarts() {
  return (
    <>
      <div className="grid grid-cols-1 pt-10 mt-4 not-prose gap-x-6 gap-y-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {/* Pricing model */}
        <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                d="M32.2 7H15.4a4.2 4.2 0 0 0-4.2 4.2v33.6a4.2 4.2 0 0 0 4.2 4.2h25.2a4.2 4.2 0 0 0 4.2-4.2V19.6L32.2 7Z"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                fillRule="evenodd"
                d="M17.5 38.5c0-1.16.94-2.1 2.1-2.1h16.8a2.1 2.1 0 1 1 0 4.2H19.6a2.1 2.1 0 0 1-2.1-2.1Zm0-8.4c0-1.16.94-2.1 2.1-2.1h16.8a2.1 2.1 0 1 1 0 4.2H19.6a2.1 2.1 0 0 1-2.1-2.1Zm0-8.4c0-1.16.94-2.1 2.1-2.1h4.2a2.1 2.1 0 1 1 0 4.2h-4.2a2.1 2.1 0 0 1-2.1-2.1Z"
                clipRule="evenodd"
              />
              <path className="fill-l-slate-10 dark:fill-d-slate-10" />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Create pricing model
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Use our model builder to create your pricing plan, with the right
              features & entitlements.
            </p>
            <p className="mt-4">
              <Button
                href="/docs/quickstarts/create-pricing-model"
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Initiate subscription */}
        <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="56"
                height="56"
                rx="4"
                className="fill-l-slate-3 dark:fill-d-slate-3"
              />
              <path
                d="M45.0433 35.5927V20.4433C45.0426 19.7791 44.8673 19.1268 44.5349 18.5518C44.2025 17.9768 43.7248 17.4993 43.1496 17.1672L29.8938 9.59252C29.3181 9.26011 28.665 9.08511 28.0001 9.08511C27.3353 9.08511 26.6822 9.26011 26.1065 9.59252L12.8507 17.1672C12.2755 17.4993 11.7978 17.9768 11.4654 18.5518C11.133 19.1268 10.9577 19.7791 10.957 20.4433V35.5927C10.9577 36.2569 11.133 36.9092 11.4654 37.4842C11.7978 38.0592 12.2755 38.5367 12.8507 38.8688L26.1065 46.4435C26.6822 46.7759 27.3353 46.9509 28.0001 46.9509C28.665 46.9509 29.3181 46.7759 29.8938 46.4435L43.1496 38.8688C43.7248 38.5367 44.2025 38.0592 44.5349 37.4842C44.8673 36.9092 45.0426 36.2569 45.0433 35.5927Z"
                className="fill-l-slate-8 dark:fill-d-slate-8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.1636 7.95021C26.0262 7.45311 27.0044 7.19144 28 7.19144C28.9957 7.19144 29.9739 7.45314 30.8366 7.95027C30.8379 7.95103 30.8392 7.95179 30.8405 7.95255L44.0963 15.5273C44.9591 16.0254 45.6757 16.7416 46.1742 17.6041C46.6728 18.4667 46.9358 19.4451 46.9368 20.4414V35.5947C46.9358 36.5909 46.6728 37.5694 46.1742 38.4319C45.6757 39.2944 44.9591 40.0107 44.0963 40.5088L44.089 40.513L30.8405 48.0835C30.8394 48.0842 30.8383 48.0848 30.8371 48.0855C29.9743 48.5828 28.9959 48.8446 28 48.8446C27.0041 48.8446 26.0258 48.5828 25.163 48.0855C25.1618 48.0848 25.1607 48.0842 25.1595 48.0835L11.9111 40.513L11.9038 40.5088C11.041 40.0107 10.3244 39.2944 9.8258 38.4319C9.32724 37.5694 9.06425 36.5909 9.06323 35.5947V20.4414C9.06425 19.4451 9.32724 18.4667 9.8258 17.6041C10.3244 16.7416 11.041 16.0254 11.9038 15.5273L11.9111 15.5231L25.1636 7.95021ZM28 10.9788C27.6676 10.9788 27.3411 11.0663 27.0532 11.2325L27.0459 11.2367L13.7974 18.8072C13.7964 18.8078 13.7954 18.8084 13.7944 18.8089C13.5082 18.9749 13.2704 19.213 13.1048 19.4995C12.9387 19.7868 12.8511 20.1126 12.8506 20.4444V35.5916C12.8511 35.9234 12.9387 36.2493 13.1048 36.5365C13.2704 36.823 13.5082 37.0611 13.7944 37.2271C13.7954 37.2277 13.7964 37.2283 13.7974 37.2288L27.0532 44.8035C27.3411 44.9698 27.6676 45.0573 28 45.0573C28.3324 45.0573 28.659 44.9698 28.9469 44.8035L28.9542 44.7994L42.2026 37.2288C42.2036 37.2283 42.2046 37.2277 42.2056 37.2271C42.4919 37.0611 42.7297 36.823 42.8953 36.5365C43.0615 36.249 43.1491 35.9229 43.1495 35.5908V20.4452C43.1491 20.1132 43.0615 19.787 42.8953 19.4995C42.7297 19.213 42.4919 18.9749 42.2056 18.809C42.2046 18.8084 42.2036 18.8078 42.2026 18.8072L28.9469 11.2325C28.659 11.0663 28.3324 10.9788 28 10.9788Z"
                className="fill-l-slate-10 dark:fill-d-slate-10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.82903 17.5257C10.3527 16.6204 11.5111 16.311 12.4164 16.8347L28 25.8493L43.5836 16.8347C44.4889 16.311 45.6474 16.6204 46.171 17.5257C46.6947 18.431 46.3854 19.5894 45.4801 20.1131L28.9482 29.6762C28.3616 30.0155 27.6384 30.0155 27.0518 29.6762L10.52 20.1131C9.61471 19.5894 9.30535 18.431 9.82903 17.5257Z"
                className="fill-l-slate-10 dark:fill-d-slate-10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.0001 26.1244C29.046 26.1244 29.8938 26.9722 29.8938 28.018V47.1063C29.8938 48.1522 29.046 49 28.0001 49C26.9543 49 26.1064 48.1522 26.1064 47.1063V28.018C26.1064 26.9722 26.9543 26.1244 28.0001 26.1244Z"
                className="fill-l-slate-10 dark:fill-d-slate-10"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Initiate subscription
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Enable users to select a plan and create a stripe checkout flow to
              make payment.
            </p>
            <p className="mt-4">
              <Button
                href="/docs/quickstarts/initiate-subscription"
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Register customer */}
        {/* <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                d="M34.706 43.569v-3.693c0-1.959-.685-3.837-1.904-5.223-1.219-1.385-2.872-2.163-4.596-2.163H16.834c-1.724 0-3.377.778-4.596 2.163-1.219 1.386-1.904 3.264-1.904 5.223v3.693"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                fillRule="evenodd"
                d="M34.84 25.602c0-.904.734-1.637 1.638-1.637h11.58a1.638 1.638 0 0 1 0 3.275h-11.58a1.638 1.638 0 0 1-1.638-1.638Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                fillRule="evenodd"
                d="M42.268 18.174c.905 0 1.638.734 1.638 1.638v11.58a1.638 1.638 0 1 1-3.275 0v-11.58c0-.904.733-1.638 1.637-1.638Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M22.616 27.866a6.55 6.55 0 1 0 0-13.101 6.55 6.55 0 0 0 0 13.101Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Register customer
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              As soon as a customer signs up for your product, register them
              with Tier, we will sync it with Stripe.
            </p>
            <p className="mt-4">
              <Button href="/docs/quickstarts/register-customer" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div> */}
        {/* Check feature access */}
        <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                d="M34.706 43.569v-3.693c0-1.959-.685-3.837-1.904-5.223-1.219-1.385-2.872-2.163-4.596-2.163H16.834c-1.724 0-3.377.778-4.596 2.163-1.219 1.386-1.904 3.264-1.904 5.223v3.693"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                fillRule="evenodd"
                d="M37.016 20.35c.64-.64 1.677-.64 2.316 0l8.188 8.188a1.638 1.638 0 1 1-2.316 2.317l-8.188-8.189a1.638 1.638 0 0 1 0-2.316Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                fillRule="evenodd"
                d="M47.52 20.35c.64.64.64 1.676 0 2.316l-8.188 8.189a1.638 1.638 0 1 1-2.316-2.317l8.189-8.188a1.637 1.637 0 0 1 2.316 0Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M22.616 27.866a6.55 6.55 0 1 0 0-13.101 6.55 6.55 0 0 0 0 13.101Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Check feature access
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Hide or display features to your customer based on their current
              subscription plan.
            </p>
            <p className="mt-4">
              <Button
                href="/docs/quickstarts/check-feature-access"
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Render pricing table */}
        <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                d="M28 13h11.667A3.333 3.333 0 0 1 43 16.333v23.334A3.333 3.333 0 0 1 39.667 43H28V13Zm0 0H16.333A3.333 3.333 0 0 0 13 16.333v23.334A3.333 3.333 0 0 0 16.333 43H28V13Zm0 0v30-30Z"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                fillRule="evenodd"
                d="M12.537 12.537A5.247 5.247 0 0 1 16.247 11h23.506A5.247 5.247 0 0 1 45 16.247v23.506A5.247 5.247 0 0 1 39.753 45H16.247A5.247 5.247 0 0 1 11 39.753V16.247c0-1.392.553-2.726 1.537-3.71Zm17.352 28.685h9.864a1.47 1.47 0 0 0 1.47-1.469V16.247a1.47 1.47 0 0 0-1.47-1.47H29.89v26.445ZM26.11 14.778v26.444h-9.864a1.47 1.47 0 0 1-1.47-1.469V16.247a1.47 1.47 0 0 1 1.47-1.47h9.864Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Render pricing table
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Create a pricing page for your marketing page and also to upsell
              other plans.
            </p>
            <p className="mt-4">
              <Button
                href="/docs/quickstarts/render-pricing-table"
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        </div>

        {/* Report feature usage */}
        <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <circle
                cx="28"
                cy="28"
                r="18.667"
                className="fill-l-slate-8 dark:fill-d-slate-8"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M49 28A21.001 21.001 0 0 0 28 7v21h21Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Report feature usage
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Wire up your app to report a feature usage by an feature entitled
              customer.
            </p>
            <p className="mt-4">
              <Button
                href="/docs/quickstarts/report-feature-usage"
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Create customer portal */}
        {/* <div className="flex flex-row items-start gap-6">
          <div className="h-14 w-14">
            <svg
              className="h-14 w-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 56 56"
            >
              <rect
                width="56"
                height="56"
                className="fill-l-slate-3 dark:fill-d-slate-3"
                rx="4"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                d="M43.2 30H12.8C10.701 30 9 31.679 9 33.75v7.5C9 43.321 10.701 45 12.8 45h30.4c2.099 0 3.8-1.679 3.8-3.75v-7.5c0-2.071-1.701-3.75-3.8-3.75Z"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M43.2 11H12.8C10.701 11 9 12.679 9 14.75v7.5C9 24.321 10.701 26 12.8 26h30.4c2.099 0 3.8-1.679 3.8-3.75v-7.5c0-2.071-1.701-3.75-3.8-3.75Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Create customer portal
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Allow your customer to see all saved billing details, feature
              usage and to change plans.
            </p>
            <p className="mt-4">
              <Button href="/quickstarts/create-customer-portal" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col mt-16">
        <p className="uppercase text-caption">Tutorials</p>
        <div className="flex items-center gap-4 not-prose">
          <div className="pr-3">
            <div className="flex gap-3">
              <Link
                href="/docs/fullstack-framework-tutorials/flat-rate"
                className="flex items-center gap-2 py-2 pl-2 pr-4 rounded hover:bg-l-slate-3 dark:hover:bg-d-slate-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/nextjs.svg" className="w-6 h-6" alt="NextJS" />
                <p className="text-base">NextJS</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
