<script lang="ts">
import type { Snippet } from 'svelte';
import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';
import { fade } from 'svelte/transition';

/**
 * BaseButton provides the core logic and shared styles for all SvelteButton variants.
 * It handles loading states, icons, and base accessibility.
 */
interface Props extends HTMLButtonAttributes {
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Main content snippet */
  children?: Snippet;
  /** Optional left icon snippet */
  iconLeft?: Snippet;
  /** Optional right icon snippet */
  iconRight?: Snippet;
  /** Additional CSS classes */
  class?: ClassValue;
  /** Base style override for variants */
  variantClass?: string;
}

const {
  size = 'md',
  loading = false,
  children,
  iconLeft,
  iconRight,
  class: className,
  variantClass = '',
  disabled,
  ...rest
}: Props = $props();

const baseStyles =
  'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 select-none';

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
  md: 'px-5 py-2.5 text-base rounded-lg gap-2',
  lg: 'px-8 py-3.5 text-lg rounded-xl gap-3',
};
</script>

<button
	{...rest}
	disabled={disabled || loading}
	class={[baseStyles, sizes[size], variantClass, className]}
>
	{#if loading}
		<span transition:fade={{ duration: 150 }} class="flex items-center">
			<svg
				class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</span>
	{/if}

	{#if iconLeft && !loading}
		<span class="inline-flex items-center">
			{@render iconLeft()}
		</span>
	{/if}

	{#if children}
		<span class="leading-none">
			{@render children()}
		</span>
	{/if}

	{#if iconRight && !loading}
		<span class="inline-flex items-center">
			{@render iconRight()}
		</span>
	{/if}
</button>
