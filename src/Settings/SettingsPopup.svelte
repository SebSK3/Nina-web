<script>
    import General from "./components/General.svelte";
    import Keys from "./components/Keys.svelte";
    import Preferences from "./components/Preferences.svelte";
    let chosenSettings = "General";
    function changeSettings(setting) {
        chosenSettings = setting;
    }
</script>

<div class="main-popup">
    <div class="settings-menu">
        <div class="settings-position" on:click={() => {changeSettings("General")}}>General</div>
        <div class="settings-position" on:click={() => {changeSettings("Keys")}}>Keys</div>
        <div class="settings-position" on:click={() => {changeSettings("Preferences")}}>Preferences</div>
        <div class="settings-position" on:click={() => {changeSettings("General")}}>Placeholder</div>
    </div>
    <div class="settings-content">
        {#if chosenSettings == "General"}
            <General label="label" textinput="textinput" />
        {:else if chosenSettings == "Keys"}
            <Keys/>
        {:else if chosenSettings == "Preferences"}
            <Preferences/>
        {/if}
    </div>
</div>

<style>
    .main-popup {
        width: 800px;
        height: 800px;
        max-height: max-content;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border: 1px solid black;
        display: flex;
        flex-flow: row;
    }
    .settings-menu {
        position: relative;
        width: 20%;
        text-align: center;
        background: var(--gb-dark1);
    }
    .settings-position {
        cursor: pointer;
        margin-bottom: 1px;
        color: var(--gb-light0_hard);
        height: 25px;
        background: var(--gb-dark0);
    }
    .settings-position:hover {
        background: var(--gb-dark3);
    }
    .settings-content {
        width: 80%;
        color: var(--gb-light0_hard);
        height: 100%;
        background: var(--gb-dark2);
    }
    :global([textinput=textinput]) {
        color: var(--gb-light0_hard);
		background: var(--gb-dark2);
        width: 100%;
        height: 24px;
	}
    :global([label=label]) {
        color: var(--gb-light1);
		background: var(--gb-dark2);
	}
    @media screen and (max-width: 1000px) {
        .main-popup {
            width: 100%;
        }
    }
</style>
