<script lang="ts">
    /**
     * SvelteBaseButton component - a simple button component
     */
    const { children, ...rest }: { children?: any } = $props();
</script>

<button
    class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
    {...rest}
    onclick={() => console.log("Button clicked!")}
>
    <div class="text-black">
        {#if children}
            {@render children()}
        {:else}
            Click me
        {/if}
    </div>
</button>

<style>
    button {
        transition: background-color 0.2s ease;
    }
</style>
