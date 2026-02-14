<script lang="ts">
    import type { ComponentProps } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    /**
     * GhostButton variant - subtle button used for low-priority actions.
     * Inherits all props from BaseButton.
     */
    const {
        children,
        iconLeft,
        iconRight,
        ...rest
    }: ComponentProps<typeof BaseButton> = $props();

    const variantClass =
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-400 border border-transparent";
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
