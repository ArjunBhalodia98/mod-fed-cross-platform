<script lang="ts">
    import type { ComponentProps } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    /**
     * PrimaryButton variant - used for the main action on a page.
     * Inherits all props from BaseButton.
     */
    const {
        children,
        iconLeft,
        iconRight,
        ...rest
    }: ComponentProps<typeof BaseButton> = $props();

    const variantClass =
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-md hover:shadow-lg border border-transparent";
</script>

<BaseButton {...rest} {variantClass}>
    {#if children}
        {@render children()}
    {/if}
    {#snippet iconLeft()}
        {@render iconLeft?.()}
    {/snippet}
    {#snippet iconRight()}
        {@render iconRight?.()}
    {/snippet}
</BaseButton>
