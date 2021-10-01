<script>
    export let textinput, label;
</script>
<div class="main-general">
    <label {label} for="placeholder">Placeholder</label>
    <input {textinput} class="standard-textinput" type="text" name="placeholder" > 
</div>
<style>
    .main-general {
        display: flex;
        flex-flow: column;
    }
</style>