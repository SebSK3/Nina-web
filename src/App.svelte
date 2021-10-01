<script>
	import Reminders from "./Reminders/Reminders.svelte";
	import Note from "./note/Note.svelte";
	import Notebooks from "./Notebooks/Notebooks.svelte";
	import Settings from "./Settings/Settings.svelte";
</script>

<div class="wrapper">
	<div class="left-menu">
		<Notebooks />
		<Settings />
	</div>
	<div class="center">
		<Note />
	</div>
	<div class="right-menu">
		<Reminders />
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: row;
		justify-content: space-around;
	}
	.left-menu {
		width: 10%;
		height: 100%;
		display: flex;
		flex-flow: column;
		
        background: var(--gb-dark1);
	}
	.center {
		height: 100%;
		width: 70%;
		
		display: flex;
	}
	.right-menu {
		height: 100%;
		width: 20%;
        text-align: center;
		
        overflow-y: hidden;
	}
</style>
