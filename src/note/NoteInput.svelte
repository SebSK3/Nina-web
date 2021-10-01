<script lang="ts">
    import NoteSynchronization from "./NoteSynchronization.svelte";
    import { CurrentNote } from "../globals/CurrentNote.js";
    import { Notes } from "../globals/Notes.js";


    // Finds note in loaded notes and updates it
    $Notes[
        $Notes.findIndex(function (findNote) {
            return findNote.id === $CurrentNote.id;
        })
    ].content = $CurrentNote.content;
</script>

<div class="textarea-wrapper">
    <textarea bind:value={$CurrentNote.content} />

    <NoteSynchronization />
</div>

<style>
    .textarea-wrapper {
        width: 100%;
        height: 95%;
        display: flex;
        justify-content: end;
    }
    textarea {
        color: var(--gb-light0);
        background: var(--gb-dark0_soft);
        margin: 0;
        border: 0;
        overflow-y: scroll;
        outline: none;
        resize: none;
        width: 100%;
    }
    @media screen and (max-width: 1000px) {
        .textarea-wrapper {
            height: 90%;
        }
    }
</style>
