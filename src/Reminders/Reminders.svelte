<script lang="ts">
    import SingleReminder from "./SingleReminder.svelte";
</script>

<div class="main">
    <SingleReminder/>
    <SingleReminder/>
</div>

<style>
    .main {
        background: var(--gb-dark2);
        width: 100%;
        height: 100%;
        text-align: center;
        overflow-y: scroll;
    }
</style>