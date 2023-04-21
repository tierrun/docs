import { Button } from '@/components/common/Button'

export function ExploreTier() {
  return (
    <div className="mt-6 mb-16 xl:max-w-none">
      <div className="grid grid-cols-1 pt-10 mt-4 not-prose gap-x-6 gap-y-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {/* Model Builder */}
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
                d="M28 28 9.333 37.333 28 46.667l18.667-9.334L28 28Z"
              />
              <path
                className="fill-l-slate-9 dark:fill-d-slate-9"
                d="M28 18.667 9.333 28 28 37.333 46.667 28 28 18.667Z"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M28 9.333 9.333 18.667 28 28l18.667-9.333L28 9.333Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Model Builder
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Create a pricing model with our library of examples or create your
              own from scratch.
            </p>
            <p className="mt-4">
              <Button href="/docs/features/model-builder" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div> */}
        {/* Subscription & billing */}
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
                d="M27.293 39.667V16.333h1.506v23.334h-1.506Zm4.712-16.097c-.098-.863-.502-1.531-1.212-2.005-.71-.48-1.605-.72-2.683-.72-.771 0-1.439.122-2.002.365-.564.237-1.002.565-1.314.984-.306.413-.46.884-.46 1.413 0 .443.105.826.313 1.148.214.322.493.593.836.811.349.213.723.392 1.12.538.399.14.781.255 1.149.347l1.837.473c.6.146 1.216.344 1.847.593a7.43 7.43 0 0 1 1.754.984c.54.407.974.912 1.305 1.513.337.602.505 1.322.505 2.16 0 1.058-.276 1.997-.827 2.817-.545.82-1.338 1.467-2.379 1.941-1.035.474-2.287.711-3.757.711-1.409 0-2.628-.222-3.656-.665-1.03-.444-1.835-1.073-2.416-1.887-.582-.82-.904-1.792-.965-2.916h2.848c.055.674.275 1.236.661 1.686a3.58 3.58 0 0 0 1.498.993c.612.213 1.283.32 2.011.32.803 0 1.516-.125 2.14-.374.632-.256 1.128-.608 1.489-1.058.361-.456.542-.987.542-1.595 0-.553-.16-1.005-.478-1.358-.312-.352-.738-.644-1.277-.875a12.548 12.548 0 0 0-1.81-.61l-2.222-.602c-1.507-.407-2.701-1.006-3.583-1.796-.876-.79-1.314-1.835-1.314-3.135 0-1.076.294-2.015.882-2.817.588-.802 1.384-1.425 2.389-1.868 1.004-.45 2.137-.675 3.398-.675 1.274 0 2.398.222 3.372.666.98.443 1.752 1.054 2.315 1.832.563.771.857 1.659.882 2.661h-2.738Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Subscription & billing
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              A range of resources to implement pricing page, subscriptions &
              billing.
            </p>
            <p className="mt-4">
              <Button href="/docs/features/subscription-billing" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Grandparenting */}
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
                fillRule="evenodd"
                d="M40.09 21A1.91 1.91 0 0 1 42 22.91 19.091 19.091 0 0 1 22.91 42a1.91 1.91 0 1 1 0-3.818 15.273 15.273 0 0 0 15.272-15.273A1.91 1.91 0 0 1 40.09 21Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-8 dark:fill-d-slate-8"
                fillRule="evenodd"
                d="M39.667 12.833a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-7 3.5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                fillRule="evenodd"
                d="M16.333 36.167a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-7 3.5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
                clipRule="evenodd"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                fillRule="evenodd"
                d="M16.333 9.333c1.289 0 2.334.821 2.334 1.834v22c0 1.012-1.045 1.833-2.334 1.833C15.045 35 14 34.18 14 33.167v-22c0-1.013 1.045-1.834 2.333-1.834Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Grandparenting
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Utilities that automatically handle and manage customers on your
              older pricing plan.
            </p>
            <p className="mt-4">
              <Button href="/docs/features/grandparenting" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Entitlements & access */}
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
                className="stroke-l-slate-8 dark:stroke-d-slate-8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.5"
                d="M18.667 25.667v-6.22c-.003-1.927.864-3.786 2.43-5.217 1.568-1.43 3.724-2.33 6.05-2.524 2.326-.194 4.657.332 6.539 1.476 1.882 1.143 3.182 2.822 3.647 4.711"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                fillRule="evenodd"
                d="M16.567 28.898c-.902 0-1.634.723-1.634 1.615V41.82c0 .892.732 1.615 1.634 1.615h22.866c.903 0 1.634-.723 1.634-1.615V30.513c0-.892-.731-1.616-1.634-1.616H16.567Zm-4.9 1.615c0-2.677 2.194-4.846 4.9-4.846h22.866c2.707 0 4.9 2.17 4.9 4.846V41.82c0 2.676-2.193 4.846-4.9 4.846H16.567c-2.706 0-4.9-2.17-4.9-4.846V30.513Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Entitlements & access
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Simple functions to check usage, restrict access to features and
              prompt upgrades.
            </p>
            <p className="mt-4">
              <Button href="/docs/features/entitlements-access" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div>
        {/* Metering */}
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
                d="M43.583 15.454h-.055A21.873 21.873 0 0 0 28.028 9a21.872 21.872 0 0 0-15.501 6.454h-.11v.056A22.163 22.163 0 0 0 6 31.153c0 .49.193.96.536 1.306.345.346.81.541 1.297.541h5.5a1.84 1.84 0 0 0 1.834-1.847 1.84 1.84 0 0 0-1.834-1.847H9.758a18.547 18.547 0 0 1 4.052-9.835l1.898 1.902a1.824 1.824 0 0 0 2.488-.096 1.857 1.857 0 0 0 .096-2.507l-1.888-1.912a18.263 18.263 0 0 1 9.763-4.082v3.602c0 1.02.82 1.847 1.833 1.847a1.84 1.84 0 0 0 1.833-1.847v-3.601a18.262 18.262 0 0 1 9.763 4.08l-1.888 1.913a1.856 1.856 0 0 0-.104 2.709 1.828 1.828 0 0 0 2.689-.105l1.898-1.902a18.546 18.546 0 0 1 4.051 9.834h-3.575a1.84 1.84 0 0 0-1.834 1.847A1.84 1.84 0 0 0 42.667 33h5.5c.486 0 .953-.194 1.297-.541.343-.347.536-.816.536-1.306a22.16 22.16 0 0 0-6.416-15.615v-.084h-.001Z"
              />
              <path
                className="fill-l-slate-10 dark:fill-d-slate-10"
                d="M28 22c-.967 0-1.75.826-1.75 1.845v7.635c-2.218.603-4.016 2.314-4.813 4.577-.797 2.265-.492 4.796.817 6.779C23.562 44.818 25.709 46 28 46c2.291 0 4.438-1.182 5.746-3.164 1.309-1.983 1.614-4.514.817-6.779-.797-2.263-2.595-3.974-4.813-4.577v-7.635c0-.49-.185-.959-.513-1.305A1.704 1.704 0 0 0 28 22Zm3.5 16.599c0 .978-.369 1.917-1.025 2.608A3.414 3.414 0 0 1 28 42.287a3.412 3.412 0 0 1-2.475-1.08A3.792 3.792 0 0 1 24.5 38.6c0-.979.369-1.916 1.025-2.609A3.413 3.413 0 0 1 28 34.91c.928 0 1.818.389 2.475 1.08A3.793 3.793 0 0 1 31.5 38.6Z"
              />
            </svg>
          </div>
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Metering
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Add capability to report usage of features in your application and
              prompt actions.
            </p>
            <p className="mt-4">
              <Button href="/docs/features/metering" variant="text">
                Read more
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
