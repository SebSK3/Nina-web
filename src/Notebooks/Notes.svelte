<script lang="ts">
    import { Notes } from "../globals/Notes";
    import { onDestroy } from "svelte";
    import { CurrentNote } from "../globals/CurrentNote.js";


    let lastId;
    const loadNote = (note) => {
        // if (lastId === note.id) {
        //     return;
        // }
        // if (lastId !== undefined) {
        //     $Notes[
        //         $Notes.findIndex(function (findNote) {
        //             return findNote.id === lastId;
        //         })
        //     ].content = $CurrentNote.content;
        // }
        CurrentNote.set(note);
        // lastId = note.id;
        // console.log($Notes);
    };
</script>

{#each $Notes as note}
    <div
        on:click={() => {
            loadNote(note);
        }}
    >
        {note.title}
    </div>
{/each}

<style>
    div {
        color: white;
        margin-top: 5px;
        min-height: 30px;
        border-top: 2px solid var(--gb-light4);
        padding-left: 2em;
        background: var(--gb-dark2);
    }
    div:hover {
        color: red;
    }
</style>
