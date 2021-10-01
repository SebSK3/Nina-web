<script lang="ts">

    let title = "Tytuł pogu"
    let lastTitle = '';
    $: {
        if (title.length > 55) {
            title = lastTitle;
        } else {
            lastTitle = title;
        }
    }
</script>
<div class="top-note">
    <div class="note-left-side">
        <input class="note-title" contenteditable="true" bind:value={title}>
        <hr />
        <div class="note-last-modified">
            Last modified: 12:30 12.12.2012
        </div>
    </div>
    <div class="note-right-side">
        <div class="note-created">12:30 12.12.2012</div>
    </div>
</div>

<style>
    [contenteditable] {
        outline: 0;
    }
    .top-note {
        display: flex;
        flex-flow: row;
        width: 100%;
        height: 5%;
        align-items: center;
    }
    .note-left-side {
        display: flex;
        flex-flow: column;
        width: 50%;
    }
    .note-right-side {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: end;
        width: 50%;
    }
    .note-title {
        font-size: 18px;
    }
    input {
        border: 0;
        background: #00000000;
        color: var(--gb-light0);
        margin: 0;
        padding: 0;
        text-align: center;
        width: 100%;
    }
    .note-created {
        padding: 15px;
    }
    .note-last-modified {
        font-size: 14px;
    }
    hr {
        width: 75%;
        margin-top: 0;
        margin-bottom: 0;
    }
    @media screen and (max-width: 1000px) {
        .top-note {
            height: 10%;
        }
    }
</style>
