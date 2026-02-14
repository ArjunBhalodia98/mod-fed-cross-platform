<script lang="ts">
    import type { ComponentProps } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    /**
     * SecondaryButton variant - used for alternative actions or as a neutral option.
     * Inherits all props from BaseButton.
     */
    const {
        children,
        iconLeft,
        iconRight,
        ...rest
    }: ComponentProps<typeof BaseButton> = $props();

    const variantClass =
        "bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-200 border border-slate-200 shadow-sm";
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
