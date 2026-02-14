<script lang="ts">
import DangerButton from './components/button/DangerButton.svelte';
import GhostButton from './components/button/GhostButton.svelte';
import OutlineButton from './components/button/OutlineButton.svelte';
import PrimaryButton from './components/button/PrimaryButton.svelte';
import SecondaryButton from './components/button/SecondaryButton.svelte';
</script>

<main class="p-10 space-y-4">
    <div class="flex flex-col gap-4 items-start">
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <OutlineButton>Outline Button</OutlineButton>
        <GhostButton>Ghost Button</GhostButton>
        <DangerButton>Danger Button</DangerButton>
    </div>
</main>
