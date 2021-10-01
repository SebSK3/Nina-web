<script>
    import Notes from "./Notes.svelte";
    
    let notebooks = [
        { id: 0, name: "QUICK", position: 0, opened: false },
        { id: 1, name: "idk", position: 1, opened: true },
        { id: 2, name: "Nina", position: 2, opened: false },
        { id: 3, name: "private", position: 3, opened: false },
    ];
    let hovering = false;
    const toggleNotesVisibility = (notePosition) => {
        notebooks[notePosition].opened = !notebooks[notePosition].opened;
    }
    const drop = (event, target) => {
        event.dataTransfer.dropEffect = "move";
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newNotebooks = notebooks;
        newNotebooks[start].position = target;
        newNotebooks[target].position = start;
        [newNotebooks[start], newNotebooks[target]] = [
            newNotebooks[target],
            newNotebooks[start],
        ];
        notebooks = newNotebooks;
        hovering = null;
    };

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.dropEffect = "move";
        const start = i;
        event.dataTransfer.setData("text/plain", start);
    };
</script>

<ul class="list">
    {#each notebooks as notebook, index (notebook.name)}
        <li
            class="list-item"
            draggable={true}
            on:dragstart={(event) => dragstart(event, index)}
            on:drop|preventDefault={(event) => drop(event, index)}
            ondragover="return false"
        >
            <!-- false positive-->
            <div class="inside-li" on:click={() => toggleNotesVisibility(notebook.position)}>
                {notebook.name}
            </div>

            {#if notebook.opened}
                <Notes />
            {/if}
        </li>
    {/each}
</ul>

<style>
    .list {
        color: var(--gb-light3);
        overflow-y: auto;
    }
    .list-item {
        cursor: pointer;
    }
    .inside-li {
        width: 100%;
        height: 100%;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;
        height: 95%;
        
    }
    li {
        color: var(--gb-bright_orange);
        border: 1px solid black;
        min-height: 40px;
        font-size: 16px;
        display: flex;
        flex-flow: column;
        background: var(--gb-dark0);
    }
</style>
