<script>
    import DatePicker from "../DatePicker/DatePicker.svelte"
    import FaArrowAltCircleLeft from "svelte-icons/fa/FaArrowAltCircleLeft.svelte";
    import MdDelete from "svelte-icons/md/MdDelete.svelte";
    import MdDateRange from "svelte-icons/md/MdDateRange.svelte";
    const title = "Title";
    let selected = new Date();
    let stringDate;
    const content = "content test";
    let clicked = false;
    const toggleClicked = () => {
        clicked = !clicked;
    };
    let timepicker = false;
    const showTimePicker = () => {
        timepicker = !timepicker;
    };
</script>

<div class="main">
    <div class="wrapper">
        <div class="click-wrapper" on:click={toggleClicked}>
            <div class="header">
                <div class="title">{title}</div>
                <div class="date-time">{selected.toLocaleDateString("pl-PL") + " " + selected.getHours() + ":" + selected.getMinutes()}</div>
            </div>
            <div class="content">
                {content}
            </div>
        </div>
        {#if clicked}
            <div class="options wrapper">
                <div class="jump-to option">
                    <div class="icon"><FaArrowAltCircleLeft /></div>
                    <div class="text-under">Jump to</div>
                </div>
                <DatePicker>
                    <div class="change-date" on:click={showTimePicker}>
                        <div class="icon"><MdDateRange /></div>
                        <div class="text-under">Change date</div>
                    </div>
                </DatePicker>
                <div class="delete option">
                    <div class="icon"><MdDelete /></div>
                    <div class="text-under">Delete</div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .wrapper {
        background: var(--gb-dark3);
    }
    .click-wrapper:hover {
        cursor: pointer;
        background: #fffaa222;
    }
    .click-wrapper {
        background: var(--gb-dark4);
        padding: 15px;
    }
    .option:hover {
        cursor: pointer;
        background: #fffaa222;
    }
    .change-date:hover {
        cursor: pointer;
        background: #fffaa222;
    }
    .change-date {
        padding: 5px;
    }
    .option {
        padding: 5px;
        width: 25%;
    }
    .text-under {
        font-size: 14px;
    }
    .icon {
        height: 35px;
    }
    .main {
        max-height: 250px;
        padding: 5px;
        color: var(--gb-light2);
    }
    .options {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        max-height: 250px;
    }
    .header {
        display: flex;
        padding: 5px;
        justify-content: space-between;
    }
    .content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .datepicker {
        width: 100px;
    }
</style>
