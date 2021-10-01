<script lang="ts">
    import { onMount } from "svelte";

    import MdCheck from "svelte-icons/md/MdCheck.svelte";
    import MdClose from "svelte-icons/md/MdClose.svelte";
    let synchronized = false;
    let synchronizing = true;
    let dot;
    const tryToSynchronize = () => {
        synchronizing = true;
        dot.style.border = "dashed";
        dot.style.animationPlayState = "running";
        setTimeout(resolveSynchronization, 3200);
    };
    onMount(() => {
        tryToSynchronize();
    });
    const resolveSynchronization = () => {
        synchronizing = false;
        dot.style.border = "solid";
        dot.style.animationPlayState = "paused";
    };
</script>

<div class="dot" bind:this={dot} />
<span
    class="icon"
    on:click={tryToSynchronize}
    data-tooltip="Click to synchronize"
>
    {#if synchronized}
        <MdCheck />
    {:else if synchronizing && !synchronized}
        {""}
    {:else}
        <MdClose />
    {/if}
</span>

<style>
    .icon {
        height: 25px;
        width: 25px;
        z-index: 99;
        position: absolute;
        display: inline;
        align-self: end;
        margin: 28px;
    }
    .dot {
        height: 25px;
        width: 25px;
        border: 3px dashed var(--gb-light0_hard);
        animation: spin 4s linear infinite;
        animation-fill-mode: forwards;
        border-radius: 50%;
        z-index: 9;
        position: absolute;
        display: inline;
        align-self: end;
        margin: 25px;
    }
    .icon:hover {
        cursor: pointer;
    }
    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
