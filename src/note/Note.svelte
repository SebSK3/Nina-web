<script lang="ts">
    import NoteHeader from "./NoteHeader.svelte";
    import NoteInput from "./NoteInput.svelte";
</script>

<div class="main">
    <NoteHeader />
    <NoteInput/>
</div>

<style>
    .main {
        background: var(--gb-dark0_soft);
        color: var(--gb-light0);
        width: 100%;
        text-align: center;
        height: auto;
        border: 1px solid black;
    }
</style>
