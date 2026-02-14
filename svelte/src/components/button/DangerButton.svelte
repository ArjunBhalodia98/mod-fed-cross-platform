<script lang="ts">
    import type { ComponentProps } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    /**
     * DangerButton variant - used for destructive actions like delete or reset.
     * Inherits all props from BaseButton.
     */
    const {
        children,
        iconLeft,
        iconRight,
        ...rest
    }: ComponentProps<typeof BaseButton> = $props();

    const variantClass =
        "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 shadow-md hover:shadow-lg border border-transparent";
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
