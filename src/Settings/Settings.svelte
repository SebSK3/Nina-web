<script lang="ts">
    import MdSettings from "svelte-icons/md/MdSettings.svelte";
    import SettingsPopup from "./SettingsPopup.svelte";
</script>

<div class="settings-bar">
    <div class="settings-icon"><MdSettings /></div>
</div>
    <SettingsPopup/>
<style>
    .settings-icon {
        height: 30px;
        margin:0;
        padding: 0;
        cursor: pointer;
    }
    .settings-bar {
        overflow: hidden;
        height: 5%;
        display: flex;
        flex-flow: row;
        align-items: end;
        justify-items: center;
        color: var(--gb-light4);
        min-height: 30px;
    }
</style>
