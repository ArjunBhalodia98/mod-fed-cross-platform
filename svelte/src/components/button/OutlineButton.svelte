<script lang="ts">
    import type { ComponentProps } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    /**
     * OutlineButton variant - used for secondary actions that need to be clearly defined.
     * Inherits all props from BaseButton.
     */
    const {
        children,
        iconLeft,
        iconRight,
        ...rest
    }: ComponentProps<typeof BaseButton> = $props();

    const variantClass =
        "border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500";
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
